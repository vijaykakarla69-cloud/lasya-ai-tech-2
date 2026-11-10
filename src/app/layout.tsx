import "/public/assets/css/vendors/bootstrap.min.css"
import "/public/assets/css/vendors/swiper-bundle.min.css"
import "/public/assets/css/vendors/aos.css"
import "/public/assets/css/vendors/odometer.css"
import "/public/assets/css/vendors/carouselTicker.css"
import "/public/assets/css/vendors/magnific-popup.css"
import "/public/assets/fonts/bootstrap-icons/bootstrap-icons.min.css"
import "/public/assets/fonts/boxicons/boxicons.min.css"
import "/public/assets/fonts/satoshi/satoshi.css"
import "/public/assets/css/main.css"

import "@/node_modules/react-modal-video/css/modal-video.css"

import { ToastContainer } from '@/src/components/common/ToastContainer';
import Preloader from "./loading"
import { APP_CONSTANTS, GTM_ID, LASYAAITECH_GTM_ID, GA_MEASUREMENT_ID } from "@/src/supporting-data/constants"
import SkeletonLoading from "@/src/components/common/SkeletonLoading"
import GTMPageView from '@/src/components/analytics/GTMPageView';
import GoogleTagManager from "../components/common/GoogleTagManager"
import GoogleAnalytics from "../components/common/GoogleAnalytics"
import SeoService from "../services/SeoService"
import CookieConsent from '../components/CookieConsent';
import BannerHeightSync from "@/src/components/layout/BannerHeightSync";
import { fetchBannerConfig } from "@/src/lib/bannerConfig";
import Script from "next/script";
import JsonLd from "../components/common/JsonLd";

import OpenPanelWrapper from '@/src/components/analytics/OpenPanelWrapper';

// TEMP A/B helper for testing rollout buckets.
// This will later be replaced with a real logged-in user identifier.
function isInRolloutBucket(id: string, rollout: number): boolean {
    let hash = 0;
    for (let i = 0; i < id.length; i++) {
        hash = (hash * 31 + id.charCodeAt(i)) % 100;
    }
    return hash < rollout;
}

// OpenPanel Configuration
// Note: Client ID can be public (needs NEXT_PUBLIC_ for client-side usage)
// The client secret is only used server-side in the API route handler
const OPENPANEL_CLIENT_ID = process.env.NEXT_PUBLIC_OPENPANEL_CLIENT_ID;

// Validate required environment variable
if (!OPENPANEL_CLIENT_ID) {
  console.error('❌ [OpenPanel] NEXT_PUBLIC_OPENPANEL_CLIENT_ID is required but not set in environment variables');
  console.error('   Please set NEXT_PUBLIC_OPENPANEL_CLIENT_ID in your .env.local file');
  // Don't throw error here as it would break the app, but log it clearly
}

// Root metadata. useTitleTemplate makes any route that ships without its own
// metadata inherit "<page> | LasyaAitech" instead of an unbranded title.
export const metadata = SeoService.generateSeoMetadata({ useTitleTemplate: true });

// The Organization node comes from SeoService so it carries the same
// address/telephone/areaServed local-business fields that ship with every
// SeoService.organizationRef() reference elsewhere on the site (Service,
// Article, JobPosting, FAQPage, ...) — this used to be a hand-duplicated
// object here that SeoService.organizationNode() already existed to replace.
const websiteSchema = {
    "@context": "https://schema.org",
    "@graph": [
        SeoService.organizationNode(),
        {
            "@type": "WebSite",
            "@id": `${APP_CONSTANTS.COMPANY_WEBSITE}/#website`,
            name: APP_CONSTANTS.COMPANY_NAME,
            url: APP_CONSTANTS.COMPANY_WEBSITE,
            publisher: { "@id": `${APP_CONSTANTS.COMPANY_WEBSITE}/#organization` },
            potentialAction: {
                "@type": "SearchAction",
                target: `${APP_CONSTANTS.COMPANY_WEBSITE}/search?q={search_term_string}`,
                "query-input": "required name=search_term_string",
            },
        },
    ],
};

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const bannerResponse = await fetchBannerConfig();
    const banner = bannerResponse?.banner;
    const bottomBanner = bannerResponse?.bottomBanner;

    // Debug logs for banner rollout data (server-side)
    if (banner) {
        console.log("Banner config (layout):", banner);
        console.log("Banner rollout (layout):", banner.rolloutPercentage, "segment:", banner.segmentKey);
    }
    if (bottomBanner) {
        console.log("Bottom banner config (layout):", bottomBanner);
        console.log("Bottom banner rollout (layout):", bottomBanner.rolloutPercentage, "segment:", bottomBanner.segmentKey);
    }

    // TEMP A/B gating for testing – use a fixed user id per browser profile.
    const tempUserId = "profile-1";

    const bannerRollout = banner?.rolloutPercentage ?? 100;
    const bannerInSegment = !banner?.segmentKey || banner.segmentKey === "beta";
    const bannerInRollout = isInRolloutBucket(tempUserId, bannerRollout);
    const showTopBanner = !!banner?.enabled && bannerInSegment && bannerInRollout;

    const bottomRollout = bottomBanner?.rolloutPercentage ?? 100;
    const bottomInSegment = !bottomBanner?.segmentKey || bottomBanner.segmentKey === "beta";
    const bottomInRollout = isInRolloutBucket(tempUserId, bottomRollout);
    const showBottomBanner = !!bottomBanner?.enabled && bottomInSegment && bottomInRollout;


    return (
        <html lang="en">
            <head>
                {/*
                  Icons, robots and the social image all come from the Metadata
                  API now. A hardcoded <meta name="robots" content="index,follow">
                  used to sit here and would have overridden any page that asks
                  to be noindexed, so it is deliberately gone.

                  Google Search Console verification is also metadata-API-driven
                  now (SeoService.ts, NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION) — a
                  second hardcoded <meta name="google-site-verification"> used to
                  live here too, shipping on every brand this layout serves
                  (including KrivaTech) alongside the env-driven tag. Set
                  NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=e1HJ1zStq69VqSd97a9tUvIT4bf29ma2t97PMphLnYM
                  in this brand's deployment env — that was the hardcoded value —
                  or Search Console verification will drop for lasyaaitech.com.
                */}
                <JsonLd data={websiteSchema} />
            </head>
            <GoogleTagManager isHead={true} gtm_id={GTM_ID} />
            {APP_CONSTANTS.COMPANY_NAME === "LasyaAitech" && (
                <>
                    <GoogleTagManager isHead={true} gtm_id={LASYAAITECH_GTM_ID} />
                    <GoogleAnalytics measurementId={GA_MEASUREMENT_ID} />
                </>
            )}
            <body>
                <GoogleTagManager isHead={false} gtm_id={GTM_ID} />
                {APP_CONSTANTS.COMPANY_NAME === "LasyaAitech" && (
                    <GoogleTagManager isHead={false} gtm_id={LASYAAITECH_GTM_ID} />
                )}
                {showTopBanner && (
                    <>
                        <div
                            id="subscription-banner"
                            className="notification-banner text-white w-100"
                            style={{
                                position: "fixed",
                                top: banner.type === "bottom" ? "auto" : 0,
                                bottom: banner.type === "bottom" ? 0 : "auto",
                                left: 0,
                                right: 0,
                                zIndex: banner.placement?.zIndex ?? 1001,
                                margin: 0,
                                padding: 0,
                                background: banner.style?.backgroundColor ?? "linear-gradient(90deg, #00a4a3 0%, #33b5b4 100%)",
                                color: banner.style?.textColor ?? "#ffffff",
                                fontFamily: banner.style?.fontFamily ?? "Inter, 'Helvetica Neue', Arial, sans-serif",
                                fontSize: banner.style?.fontSize ?? "16px",
                                fontWeight: banner.style?.fontWeight ?? 600,
                                letterSpacing: banner.style?.letterSpacing ?? "0.2px",
                            }}
                        >
                            <div
                                className="container-fluid px-3 px-lg-8"
                                style={{ paddingTop: "8px", paddingBottom: "8px", margin: 0 }}
                            >
                                <div
                                    className="d-flex align-items-center justify-content-center gap-3 position-relative"
                                    style={{ margin: 0 }}
                                >
                                    <div className="banner-message text-center" style={{ width: "100%" }}>
                                        <span className="small fw-medium">
                                            {banner.content?.text}
                                        </span>
                                        {banner.cta?.label && (
                                            <a
                                                href={banner.cta.link || banner.content?.link || "#"}
                                                className="ms-2 text-decoration-underline fw-bold"
                                                style={{
                                                    color: banner.cta.textColor || banner.style?.textColor || "#ffffff",
                                                    opacity: 0.9,
                                                }}
                                            >
                                                {banner.cta.label}
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {banner.type !== "bottom" && <BannerHeightSync bannerId="subscription-banner" />}
                    </>
                )}
                {showBottomBanner && (
                    <div
                        className="notification-banner text-white w-100"
                        style={{
                            position: "fixed",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            zIndex: bottomBanner.placement?.zIndex ?? 1001,
                            margin: 0,
                            padding: 0,
                            background:
                                bottomBanner.style?.backgroundColor ??
                                "linear-gradient(90deg, #00a4a3 0%, #33b5b4 100%)",
                            color: bottomBanner.style?.textColor ?? "#ffffff",
                            fontFamily:
                                bottomBanner.style?.fontFamily ??
                                "Inter, 'Helvetica Neue', Arial, sans-serif",
                            fontSize: bottomBanner.style?.fontSize ?? "16px",
                            fontWeight: bottomBanner.style?.fontWeight ?? 600,
                            letterSpacing: bottomBanner.style?.letterSpacing ?? "0.2px",
                        }}
                    >
                        <div
                            className="container-fluid px-3 px-lg-8"
                            style={{ paddingTop: "8px", paddingBottom: "8px", margin: 0 }}
                        >
                            <div
                                className="d-flex align-items-center justify-content-center gap-3 position-relative"
                                style={{ margin: 0 }}
                            >
                                <div className="banner-message text-center" style={{ width: "100%" }}>
                                    <span className="small fw-medium">
                                        {bottomBanner.content?.text}
                                    </span>
                                    {bottomBanner.cta?.label && (
                                        <a
                                            href={bottomBanner.cta.link || bottomBanner.content?.link || "#"}
                                            className="ms-2 text-decoration-underline fw-bold"
                                            style={{
                                                color:
                                                    bottomBanner.cta.textColor ||
                                                    bottomBanner.style?.textColor ||
                                                    "#ffffff",
                                                opacity: 0.9,
                                            }}
                                        >
                                            {bottomBanner.cta.label}
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <ToastContainer />
                <GTMPageView />
                <div id="loading-container" style={{ position: 'relative', minHeight: '100vh' }}>
                    <SkeletonLoading />
                    <div id="content-container" style={{ visibility: 'hidden', opacity: 0, transition: 'visibility 0s, opacity 0.3s linear' }}>
                        {children}
                    </div>
                </div>
                <CookieConsent />

                <OpenPanelWrapper 
                    clientId={OPENPANEL_CLIENT_ID}
                    apiUrl="/api/openpanel"
                    trackScreenViews={true}
                />
                <script src="https://omni.kriva.studio/chatbot-widget.js"
                data-chatbot-id="fb463bd9-2798-42ed-9728-4be6d98a0eee"
                data-api-base="https://omni.kriva.studio" defer></script>
            </body>
        </html>
    )
}
