import { Metadata } from 'next'
import { AllServices } from "@/src/services/allServices"
import { notFound } from "next/navigation"
import LandingPage1Client, { PageData } from "./LandingPage1Client"
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
    const response: ApiResponse = await AllServices.getLp1sData()
    const pageData = response?.data?.find((item: PageData) => item.slug === slug)
    return pageData || null
  } catch (error) {
    console.error('Error fetching landing page 1 data:', error)
    return null
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const pageData = await getLandingPageData(slug)
  const seoRawData = (pageData as any)?.seo
  const seoData = seoRawData && seoRawData.length > 0 ? seoRawData[0] : null

  if (!seoData) {
    return SeoService.generateSeoMetadata({
      // Campaign variant of a page that already ranks organically.
      noindex: true,
      title: 'AI & ML Solutions | Lasya AI Tech',
      description: 'Transform your business with our innovative AI and ML solutions at Lasya AI Tech.',
      url: `/lp1/${slug}`,
    })
  }

  return SeoService.generateSeoMetadata({
    // Campaign variant of a page that already ranks organically.
    noindex: true,
    title: seoData.meta_title,
    description: seoData.meta_description,
    keywords: seoData.meta_keywords ? seoData.meta_keywords.split(',') : [],
    image: seoData.meta_image?.[0]?.url ? `https://cms.kriva.tech${seoData.meta_image[0].url}` : undefined,
    url: `/lp1/${slug}`,
  })
}

export default async function LandingPage1({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const pageData = await getLandingPageData(slug)
  if (!pageData) {
    notFound()
  }
  return <LandingPage1Client pageData={pageData} />
}

export async function generateStaticParams() {
  try {
    const response: ApiResponse = await AllServices.getLp1sData()
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
