import { Metadata } from 'next'
import SeoService from '@/src/services/SeoService'
import AiFreeQuoteClient from './AiFreeQuoteClient'
import aiFreeQuotePageData from '@/src/data/aifreequotepage.json'
import JsonLd from '@/src/components/common/JsonLd'
import { APP_CONSTANTS } from '@/src/supporting-data/constants'
import { QUOTE_FAQS, QUOTE_SERVICE_CATALOG } from '@/src/supporting-data/page-seo'

async function getQuotePageData() {
  try {
    // Use AI free quote JSON data instead of API call
    return aiFreeQuotePageData?.data || null
  } catch (error) {
    console.error('Error loading AI free quote page data:', error)
    return null
  }
}

export async function generateMetadata(): Promise<Metadata> {
  return SeoService.fromRegistry('/ai-free-quote')
}

export default async function AiFreeQuote() {
  const formData = await getQuotePageData()
  const pageUrl = `${APP_CONSTANTS.COMPANY_WEBSITE}/ai-free-quote`;

  // This form is the AI-facing entry point, but the same team quotes every
  // other vertical too. Publishing the full catalogue here means a visitor
  // who lands on the AI quote page from an "AI agent" search still surfaces
  // the mobile, web and API work the same quotation covers.
  const quotePageSchema = SeoService.graph(
    SeoService.webPage({
      url: '/ai-free-quote',
      name: 'Free AI development quote and pricing',
      description:
        'Get a free AI development quote for AI agents, chatbots, LLM and RAG apps, machine learning models and automation.',
    }),
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "AI development quote and pricing",
      serviceType:
        "AI agent development, generative AI, chatbot development, machine learning, predictive analytics and process automation",
      provider: SeoService.organizationRef(),
      areaServed: "Worldwide",
      url: pageUrl,
      description:
        "LasyaAitech provides free project estimates for AI agents, MCP servers, LLM and RAG applications, chatbots, machine learning models, predictive analytics and process automation.",
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "USD",
        lowPrice: "10000",
        highPrice: "50000",
        offerCount: "4",
        availability: "https://schema.org/InStock",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Development services you can request a quote for",
        itemListElement: QUOTE_SERVICE_CATALOG.map((entry) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: entry.name,
            description: entry.description,
            url: `${APP_CONSTANTS.COMPANY_WEBSITE}${entry.path}`,
          },
        })),
      },
    },
    SeoService.faq('/ai-free-quote', [
      {
        question: "How do I get an AI development quote?",
        answer:
          "Share what you want to build, the AI features needed, your brief or documents, and your budget range. LasyaAitech reviews the details and replies with a tailored AI project estimate.",
      },
      {
        question: "What AI solutions can LasyaAitech estimate?",
        answer:
          "AI agents and multi-agent systems, MCP servers, generative AI and LLM applications, RAG pipelines, chatbots and virtual assistants, machine learning models, predictive analytics, computer vision and AI process automation.",
      },
      ...QUOTE_FAQS.slice(2),
    ]),
    SeoService.breadcrumb([{ name: 'AI Development Quote', path: '/ai-free-quote' }])
  );

  return (
    <>
      <JsonLd data={quotePageSchema} />
      <AiFreeQuoteClient
        formData={formData?.[0]?.question_form}
        heroSectionData={formData?.[0]?.free_quote_hero}
      />
    </>
  )
}
