/**
 * Emits a JSON-LD block. Renders nothing when there is no data, so callers can
 * pass a builder result straight through without guarding at every call site.
 */
export default function JsonLd({ data }: { data: object | null | undefined }) {
  if (!data) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
