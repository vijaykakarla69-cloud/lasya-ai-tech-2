import { Metadata } from 'next'
import SeoService from '@/src/services/SeoService'
import JsonLd from '@/src/components/common/JsonLd'
import { SERVICE_SLUG_SEO } from '@/src/supporting-data/slug-seo'
import { buildKeywords } from '@/src/supporting-data/seo-keywords'
import ServiceDetailClient from './ServiceDetailClient'
import serviceslugpageData from '@/src/data/serviceslugpage.json'
import servicepageData from '@/src/data/servicepage.json'

async function getServiceDetailData(slug: string) {
	try {
		// Find the service data from JSON by slug
		const serviceData = serviceslugpageData?.data?.find((item: any) => item.slug === slug);
		return serviceData || null;
	} catch (error) {
		return null;
	}
}

export async function generateMetadata(
	{ params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
	const { slug } = await params;
	const pageData = await getServiceDetailData(slug)
	// Handle both array and direct object structures
	const seoRawData = Array.isArray(pageData) ? pageData[0]?.seo : pageData?.seo
	const seoData = Array.isArray(seoRawData) ? seoRawData[0] : seoRawData

	// The stored seo block is shared between unrelated slugs, so the corrected
	// entry wins on title and description. Stored keywords are still merged in.
	const override = SERVICE_SLUG_SEO[slug]

	if (override) {
		return SeoService.generateSeoMetadata({
			title: override.title,
			description: override.description,
			keywords: buildKeywords(override.keywords, seoData?.meta_keywords),
			url: `/services/${slug}`,
		})
	}

	if (!seoData) {
		return SeoService.generateSeoMetadata({ url: `/services/${slug}` })
	}

	return SeoService.generateSeoMetadata({
		title: seoData.meta_title,
		description: seoData.meta_description,
		keywords: seoData.meta_keywords ? seoData.meta_keywords.split(', ') : [],
		url: `/services/${slug}`,
	})
}

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const serviceDetailData = await getServiceDetailData(slug)
	const override = SERVICE_SLUG_SEO[slug]
	const heroTitle = (serviceDetailData as any)?.hero?.title

	return (
		<>
			<JsonLd
				data={SeoService.graph(
					SeoService.service({
						name: override?.title ?? heroTitle ?? slug,
						description: override?.description ?? (serviceDetailData as any)?.hero?.description ?? '',
						url: `/services/${slug}`,
						serviceType: 'Software and AI development',
					}),
					SeoService.breadcrumb([
						{ name: 'Services', path: '/services' },
						{ name: override?.title ?? heroTitle ?? slug, path: `/services/${slug}` },
					])
				)}
			/>
			<ServiceDetailClient data={serviceDetailData} slug={slug} />
		</>
	)
}

export async function generateStaticParams() {
	// Get slugs from both JSON files
	const mainServices = servicepageData?.data?.performance?.lapl_services || [];
	const serviceComponents = servicepageData?.data?.service_components || [];
	const detailServices = serviceslugpageData?.data || [];
	
	// Extract all slugs from lapl_chips, nested lapl_services, lapl_service_collection, and service_components
	const mainSlugs = new Set();
	
	// Extract from lapl_services structure
	mainServices.forEach((service: any) => {
		// Extract from lapl_chips structure
		service.lapl_chips?.forEach((chip: any) => {
			// Add the chip slug itself
			mainSlugs.add(chip.slug);
			// Add slugs from nested lapl_services
			chip.lapl_services?.forEach((nestedService: any) => {
				mainSlugs.add(nestedService.slug);
			});
		});
		
		// Extract from lapl_service_collection structure
		service.lapl_service_collection?.forEach((collection: any) => {
			if (collection.slug) {
				mainSlugs.add(collection.slug);
			}
		});
	});
	
	// Extract from service_components structure
	serviceComponents.forEach((component: any) => {
		if (component.slug) {
			mainSlugs.add(component.slug);
		}
		// Extract from nested service_items structure
		component.service_items?.forEach((item: any) => {
			if (item.slug) {
				mainSlugs.add(item.slug);
			}
		});
	});
	
	const detailSlugs = new Set(detailServices.map((service: any) => service.slug));
	
	// Debug logging
	console.log("[services/slug] Main slugs found:", Array.from(mainSlugs));
	console.log("[services/slug] Detail slugs found:", Array.from(detailSlugs));
	console.log("[services/slug] Service components count:", serviceComponents.length);
	
	// Only include slugs that exist in both files
	const validSlugs = Array.from(mainSlugs).filter(slug => detailSlugs.has(slug));
	
	const slugs = validSlugs.map(slug => ({ slug }));
	console.log("[services/slug] Final static slugs:", slugs);
	return slugs;
}
