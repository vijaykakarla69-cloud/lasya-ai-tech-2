import { Metadata } from 'next'
import ServicesClient from './ServicesClient'
import JsonLd from '@/src/components/common/JsonLd'
import SeoService from '@/src/services/SeoService'
import servicepageData from '@/src/data/servicepage.json'
import serviceslugpageData from '@/src/data/serviceslugpage.json'

async function getServicesPageData() {
  try {
    const mainData = servicepageData?.data || null;
    const detailSlugs = new Set(serviceslugpageData?.data?.map((cs: any) => cs.slug) || []);
    
    // Filter services to only include those that have detail pages
    if (mainData?.performance?.lapl_services) {
      mainData.performance.lapl_services = mainData.performance.lapl_services.filter(
        (service: any) => {
          // Check if any of the lapl_chips slugs exist in detail pages
          return service.lapl_chips?.some((chip: any) => detailSlugs.has(chip.slug));
        }
      );
    }
    
    return mainData;
  } catch (error) {
    return null
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getServicesPageData()
  const seoRawData = pageData?.seo
  const seoData = seoRawData && seoRawData.length > 0 ? seoRawData[0] : null

  return SeoService.fromRegistry('/services', {
    keywords: seoData?.meta_keywords,
  })
}

export default async function Services() {
  const pageData = await getServicesPageData()

  if (!pageData) {
    return
  }

  return (
    <>
      <JsonLd
        data={SeoService.registryGraph('/services', [
          SeoService.service({
            name: 'Software and AI development services',
            description:
              'AI agents, generative AI, chatbots, mobile apps, web platforms, APIs, UI/UX design, MVP builds and dedicated engineering teams.',
            url: '/services',
            serviceType: 'Custom software and AI development',
          }),
        ])}
      />
      <ServicesClient pageData={pageData} />
    </>
  )
}
