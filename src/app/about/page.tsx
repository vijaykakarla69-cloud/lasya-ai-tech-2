import { Metadata } from 'next'
import SeoService from '@/src/services/SeoService'
import AboutClient from '@/src/app/about/AboutClient'
import JsonLd from '@/src/components/common/JsonLd'
import aboutPageData from '@/src/data/aboutpage.json'

export async function generateMetadata(): Promise<Metadata> {
  const seoRawData = aboutPageData?.data?.seo
  const seoData = seoRawData && seoRawData.length > 0 ? seoRawData[0] : null

  return SeoService.fromRegistry('/about', {
    keywords: seoData?.meta_keywords,
  })
}

export default async function About() {
  return (
    <>
      <JsonLd data={SeoService.registryGraph('/about')} />
      <AboutClient data={aboutPageData} />
    </>
  )
}
