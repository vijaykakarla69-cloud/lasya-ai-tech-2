import type { Metadata } from 'next'
import IndustriesClient from '@/src/app/industries/IndustriesClient'
import JsonLd from '@/src/components/common/JsonLd'
import SeoService from '@/src/services/SeoService'
import industryPageData from '@/src/data/industrypage.json'

async function getIndustriesPageData() {
  try {
    // Use JSON data instead of API call
    return industryPageData?.data || null
  } catch (error) {
    return null
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getIndustriesPageData()
  const seoRawData = pageData?.seo
  const seoData = seoRawData && seoRawData.length > 0 ? seoRawData[0] : null

  return SeoService.fromRegistry('/industries', {
    keywords: seoData?.meta_keywords,
  })
}

export default async function Industries() {
  const pageData = await getIndustriesPageData()
  return (
    <>
      <JsonLd data={SeoService.registryGraph('/industries')} />
      <IndustriesClient pageData={pageData} />
    </>
  )
}
