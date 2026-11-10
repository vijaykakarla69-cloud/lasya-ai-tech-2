import { Metadata } from 'next'
import SeoService from '@/src/services/SeoService'
import { AllServices } from "@/src/services/allServices"
import LandingPage2Client from './LandingPage2Client'
import { notFound } from 'next/navigation'

// Generate static paths for all landing page variants
export async function generateStaticParams() {
  try {
    const response = await AllServices.getLp2sData()
    return response?.data?.map((item: any) => ({
      slug: item.slug,
    })) || []
  } catch (error) {
    console.error('Error generating static params:', error)
    return [
      { slug: 'page1' },
      { slug: 'page2' }
    ]
  }
}

async function getLandingPageData(slug: string) {
  try {
    const response = await AllServices.getLp2sData()
    const pageData = response?.data?.find((page: any) => page.slug === slug)
    return pageData || null
  } catch (error) {
    console.error('Error fetching landing page 2 data:', error)
    return null
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const pageData = await getLandingPageData(slug)
  const seoRawData = pageData?.seo
  const seoData = seoRawData && seoRawData.length > 0 ? seoRawData[0] : null

  if (!seoData) {
    return SeoService.generateSeoMetadata({
      // Campaign variant of a page that already ranks organically.
      noindex: true,
      title: 'AI & ML Solutions | Lasya AI Tech',
      description: 'Transform your business with our innovative AI and ML solutions at Lasya AI Tech.',
      url: `/lp2/${slug}`,
    })
  }

  return SeoService.generateSeoMetadata({
    // Campaign variant of a page that already ranks organically.
    noindex: true,
    title: seoData.meta_title,
    description: seoData.meta_description,
    keywords: seoData.meta_keywords,
    image: seoData.meta_image?.[0]?.url ? `https://cms.kriva.tech${seoData.meta_image[0].url}` : undefined,
    url: `/lp2/${slug}`,
  })
}

export default async function LandingPage2({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const pageData = await getLandingPageData(slug)
  
  if (!pageData) {
    notFound()
  }
  
  return <LandingPage2Client pageData={pageData} />
}
