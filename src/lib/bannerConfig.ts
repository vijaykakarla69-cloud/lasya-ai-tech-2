export interface BannerPlacement {
  position?: "top" | "bottom" | "side" | "custom";
  height?: string;
  zIndex?: number;
}

export interface BannerStyle {
  backgroundColor?: string;
  textColor?: string;
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: number | string;
  letterSpacing?: string;
  padding?: string;
  align?: "left" | "center" | "right";
}

export interface BannerContent {
  text?: string;
  link?: string;
}

export interface BannerCta {
  label?: string;
  link?: string;
  textColor?: string;
  backgroundColor?: string;
  hoverBackgroundColor?: string;
}

export interface BannerConfig {
  enabled?: boolean;
  type?: "top" | "bottom" | "side" | "custom";
  placement?: BannerPlacement;
  content?: BannerContent;
  style?: BannerStyle;
  cta?: BannerCta;
  dismissible?: {
    enabled?: boolean;
    storageKey?: string;
    durationDays?: number;
  };
  // Optional rollout / segmentation info for A/B testing
  rolloutPercentage?: number;
  segmentKey?: string | null;
}

export interface BannerResponse {
  banner?: BannerConfig;
  bottomBanner?: BannerConfig;
}

export async function fetchBannerConfig(): Promise<BannerResponse | null> {
  // BANNER_API_URL can be either:
  // - the base API URL (e.g. http://localhost:9100/api/)
  // - or a full endpoint (e.g. http://localhost:9100/api/subscriptions/app-plans?includeFeatures=true)
  const rawBase = process.env.BANNER_API_URL;
  if (!rawBase) {
    console.warn("BANNER_API_URL not set, skipping banner fetch");
    return null;
  }

  let url = rawBase;
  // If it's just the base /api/, derive the app-plans endpoint
  if (!rawBase.includes("app-plans")) {
    const normalizedBase = rawBase.endsWith("/") ? rawBase.slice(0, -1) : rawBase;
    url = `${normalizedBase}/subscriptions/app-plans?includeFeatures=true`;
  }

  const clientId = process.env.BANNER_CLIENT_ID;
  const clientSecret = process.env.BANNER_CLIENT_SECRET;

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };
  if (clientId && clientSecret) {
    const auth = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");
    headers.Authorization = `Basic ${auth}`;
  }

  try {
    const res = await fetch(url, {
      headers,
      cache: "no-store",
    });

    if (!res.ok) {
      // If the endpoint isn't set up yet or returns 404, just skip the banner
      if (res.status === 404) {
        console.warn("Banner endpoint returned 404, skipping banner");
        return null;
      }
      throw new Error(`Banner fetch failed: ${res.status}`);
    }

    const contentType = res.headers.get("content-type") || "";
    const isJson = contentType.includes("application/json");
    if (!isJson) {
      const preview = await res.text();
      throw new Error(
        `Banner fetch returned non-JSON. content-type=${contentType} preview=${preview.slice(
          0,
          200
        )}`
      );
    }

    const data = await res.json();

    // Case 1: API returns { appId, plans: [...] }
    if (data && typeof data === "object" && Array.isArray((data as any).plans)) {
      const result: BannerResponse = {};
      const plans = (data as any).plans as any[];

      for (const plan of plans) {
        const features = Array.isArray(plan.features) ? plan.features : [];
        for (const item of features as any[]) {
          if (!item || typeof item !== "object") continue;

          const objectValue: string | undefined =
            typeof item.objectValue === "string"
              ? item.objectValue
              : typeof item.object_value === "string"
              ? item.object_value
              : undefined;

          const featureKey: string | undefined =
            typeof item.featureKey === "string"
              ? item.featureKey
              : typeof item.feature_key === "string"
              ? item.feature_key
              : undefined;

          const rollout: number | undefined =
            typeof item.rolloutPercentage === "number"
              ? item.rolloutPercentage
              : typeof item.rollout_percentage === "number"
              ? item.rollout_percentage
              : typeof item.ab_rollout_percentage === "number"
              ? item.ab_rollout_percentage
              : undefined;

          const segmentKey: string | null | undefined =
            typeof item.segmentKey === "string"
              ? item.segmentKey
              : typeof item.segment_key === "string"
              ? item.segment_key
              : null;

          if (!objectValue) continue;

          try {
            const parsed = JSON.parse(objectValue);

            // Our admin stores JSON as { "banner": { ... } }
            const baseConfig = (parsed.banner || parsed["down-banner"]) as BannerConfig | undefined;
            if (!baseConfig) continue;

            const config: BannerConfig = {
              ...baseConfig,
              rolloutPercentage: rollout,
              segmentKey,
            };

            if (featureKey === "banner" && !result.banner) {
              result.banner = config;
            } else if (featureKey === "down-banner" && !result.bottomBanner) {
              result.bottomBanner = { ...config, type: config.type ?? "bottom" };
            }
          } catch (parseError) {
            console.error("Failed to parse banner objectValue", parseError);
          }
        }
      }

      if (result.banner || result.bottomBanner) {
        // Debug logs for A/B testing data
        if (result.banner) {
          console.log("Banner config:", result.banner);
          console.log(
            "Banner rollout:",
            result.banner.rolloutPercentage,
            "segment:",
            result.banner.segmentKey
          );
        }
        if (result.bottomBanner) {
          console.log("Bottom banner config:", result.bottomBanner);
          console.log(
            "Bottom banner rollout:",
            result.bottomBanner.rolloutPercentage,
            "segment:",
            result.bottomBanner.segmentKey
          );
        }
        return result;
      }
    }

    // Case 2: API returns { banner: { ... }, bottomBanner?: { ... } }
    if (data && typeof data === "object" && "banner" in data) {
      return data as BannerResponse;
    }

    // Case 3: API returns just a single banner object
    if (data && typeof data === "object" && !Array.isArray(data)) {
      return { banner: data as BannerConfig };
    }

    console.warn("Banner data not found in API response");
    return null;
  } catch (error) {
    console.error("Banner load failed", error);
    return null;
  }
}

