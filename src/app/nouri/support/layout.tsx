import type { Metadata } from 'next'
import SeoService from '@/src/services/SeoService'
import JsonLd from '@/src/components/common/JsonLd'
import { APP_ROUTE_META, getAppProduct } from '@/src/supporting-data/app-products'

// The page itself is a client component and cannot export metadata, so it
// lives here. This layout adds no DOM beyond the JSON-LD block.
const PRODUCT_SLUG = 'nouri'
const ROUTE = 'support' as const

export async function generateMetadata(): Promise<Metadata> {
  const product = getAppProduct(PRODUCT_SLUG)!
  const route = APP_ROUTE_META[ROUTE]

  return SeoService.generateSeoMetadata({
    title: `${product.name} ${route.label}`,
    description: route.describe(product.name, product.summary),
    keywords: [...product.keywords, `${product.name} ${route.label.toLowerCase()}`],
    url: `/${PRODUCT_SLUG}/${ROUTE}`,
  })
}

export default function NouriSupportLayout({ children }: { children: React.ReactNode }) {
  const product = getAppProduct(PRODUCT_SLUG)!
  const route = APP_ROUTE_META[ROUTE]
  const url = `/${PRODUCT_SLUG}/${ROUTE}`

  return (
    <>
      <JsonLd
        data={SeoService.graph(
          SeoService.softwareApplication({
            name: product.name,
            description: `${product.name} is ${product.summary}.`,
            url,
            category: product.category,
          }),
          // There is no /${PRODUCT_SLUG} index page, so the trail goes
          // straight from Home to this page rather than inventing a level.
          SeoService.breadcrumb([
            { name: `${product.name} ${route.label}`, path: url },
          ])
        )}
      />
      {children}
    </>
  )
}
