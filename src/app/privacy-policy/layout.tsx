import type { Metadata } from 'next'
import SeoService from '@/src/services/SeoService'

// privacy-policy/page.tsx is a client component, so its metadata lives here.
export async function generateMetadata(): Promise<Metadata> {
  return SeoService.fromRegistry('/privacy-policy')
}

export default function PrivacyPolicyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
