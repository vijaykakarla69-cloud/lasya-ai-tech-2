import { Metadata } from 'next'
import { AllServices } from "@/src/services/allServices"
import { notFound } from "next/navigation"
import LandingPage3Client, { PageData } from "@/src/app/lp3/[slug]/LandingPage3Client"
import SeoService from '@/src/services/SeoService'

interface ApiResponse {
  data: Array<PageData>;
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

async function getLandingPageData(slug: string): Promise<PageData | null> {
  try {
    const response: ApiResponse = await AllServices.getLp3sData()
    const pageData = response?.data?.find((item: PageData) => item.slug === slug)
    return pageData || null
  } catch (error) {
    console.error('Error fetching landing page 3 data:', error)
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
      url: `/lp3/${slug}`,
    })
  }

  return SeoService.generateSeoMetadata({
    // Campaign variant of a page that already ranks organically.
    noindex: true,
    title: seoData.meta_title,
    description: seoData.meta_description,
    keywords: seoData.meta_keywords ? seoData.meta_keywords.split(',') : [],
    image: seoData.meta_image?.[0]?.url ? `https://cms.kriva.tech${seoData.meta_image[0].url}` : undefined,
    url: `/lp3/${slug}`,
  })
}

export default async function LandingPage3({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const pageData = await getLandingPageData(slug)
  
  if (!pageData) {
    notFound()
  }
  
  return <LandingPage3Client pageData={pageData} />
}

export async function generateStaticParams() {
  try {
    const response: ApiResponse = await AllServices.getLp3sData()
    return response?.data?.map((item: PageData) => ({
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
