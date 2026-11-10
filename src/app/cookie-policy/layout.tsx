import type { Metadata } from 'next'
import SeoService from '@/src/services/SeoService'

// cookie-policy/page.tsx is a client component, so its metadata lives here.
export async function generateMetadata(): Promise<Metadata> {
  return SeoService.fromRegistry('/cookie-policy')
}

export default function CookiePolicyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
