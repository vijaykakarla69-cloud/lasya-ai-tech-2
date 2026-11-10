import { Metadata } from 'next'
import SeoService from '@/src/services/SeoService'
import GetAFreeQuoteClient from './GetAFreeQuoteClient'
import JsonLd from '@/src/components/common/JsonLd'
import { APP_CONSTANTS } from '@/src/supporting-data/constants'
import { QUOTE_FAQS, QUOTE_SERVICE_CATALOG } from '@/src/supporting-data/page-seo'
import getAFreeQuotePageData from '@/src/data/getafreequotepage.json'

async function getQuotePageData() {
  try {
    // Use JSON data instead of API call
    return getAFreeQuotePageData?.data || null
  } catch (error) {
    console.error('Error loading quote page data:', error)
    return null
  }
}

export async function generateMetadata(): Promise<Metadata> {
  return SeoService.fromRegistry('/get-a-free-quote')
}

export default async function GetAFreeQuote() {
  const formData = await getQuotePageData()

  // One quote form serves every vertical, so it is described to search engines
  // as an offer catalogue rather than a single service. Each entry is a real
  // thing a visitor can request an estimate for on this page.
  const quoteSchema = SeoService.graph(
    SeoService.webPage({
      url: '/get-a-free-quote',
      name: 'Get a free quote for software, app and AI development',
      description:
        'Request a free quote for AI agents, mobile apps, web platforms, APIs, MVPs, UI/UX or a dedicated team.',
    }),
    {
      '@type': 'Service',
      '@id': `${APP_CONSTANTS.COMPANY_WEBSITE}/get-a-free-quote#service`,
      name: 'Software, app and AI development quotation',
      serviceType:
        'AI agents, mobile app development, web application development, API development, MVP development, UI/UX design, dedicated development teams',
      provider: SeoService.organizationRef(),
      areaServed: 'Worldwide',
      url: `${APP_CONSTANTS.COMPANY_WEBSITE}/get-a-free-quote`,
      description:
        'Share your brief, budget and timeline and receive a costed development plan covering scope, team shape and delivery milestones.',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Development services you can request a quote for',
        itemListElement: QUOTE_SERVICE_CATALOG.map((entry) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: entry.name,
            description: entry.description,
            url: `${APP_CONSTANTS.COMPANY_WEBSITE}${entry.path}`,
          },
        })),
      },
    },
    SeoService.faq('/get-a-free-quote', QUOTE_FAQS),
    SeoService.breadcrumb([{ name: 'Get a Free Quote', path: '/get-a-free-quote' }])
  )

  return (
    <>
      <JsonLd data={quoteSchema} />
      <GetAFreeQuoteClient
        formData={formData?.[0]?.question_form}
        heroSectionData={formData?.[0]?.free_quote_hero}
      />
    </>
  )
}

