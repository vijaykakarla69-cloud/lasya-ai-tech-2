import type { Metadata } from 'next'
import SeoService from '@/src/services/SeoService'

// /lp5 is a client-side redirect stub with no content of its own, so it is
// kept out of the index. The campaign pages underneath (/lp5/[slug]) set their
// own metadata, and a page's robots value overrides this layout's.
export const metadata: Metadata = SeoService.generateSeoMetadata({
  title: 'Landing Page',
  description: 'LasyaAitech campaign landing page.',
  url: '/lp5',
  noindex: true,
})

export default function Lp5Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
