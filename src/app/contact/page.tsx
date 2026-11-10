import { Metadata } from 'next'
import SeoService  from '@/src/services/SeoService'
import ContactClient from './ContactClient'
import JsonLd from '@/src/components/common/JsonLd'
import { APP_CONSTANTS } from '@/src/supporting-data/constants'
import contactPageData from '@/src/data/contactpage.json'


async function getContactPageData() {
  try {
    // Use JSON data instead of API call
    return contactPageData?.data || null
  } catch (error) {
    console.error('Error loading contact page data:', error)
    return null
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getContactPageData()
  const seoRawData = pageData?.seo
  const seoData = seoRawData && seoRawData.length > 0 ? seoRawData[0] : null

  return SeoService.fromRegistry('/contact', {
    keywords: seoData?.meta_keywords,
  })
}

export default async function Contact() {
  const contactFormData = await getContactPageData()

  return (
    <>
      <JsonLd
        data={SeoService.registryGraph('/contact', [
          {
            '@type': 'ContactPage',
            '@id': `${APP_CONSTANTS.COMPANY_WEBSITE}/contact#contactpage`,
            about: SeoService.organizationRef(),
          },
        ])}
      />
      <ContactClient
        contactFormData={contactFormData}
        heroSectionData={contactFormData?.contact_hero || []}
      />
    </>
  )
}
