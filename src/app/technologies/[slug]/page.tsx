import { Metadata } from 'next'
import SeoService from '@/src/services/SeoService'
import JsonLd from '@/src/components/common/JsonLd'
import { TECHNOLOGY_SLUG_SEO } from '@/src/supporting-data/slug-seo'
import { buildKeywords } from '@/src/supporting-data/seo-keywords'
import TechnologyDetailClient from '@/src/app/technologies/[slug]/TechnologyDetailClient'
import technologySlugPageData from '@/src/data/technologyslugpage.json'

// Define the params type as a Promise
export type TechParamsType = Promise<{ slug: string }>;

async function getTechnologyDetailData(slug: string) {
	try {
		// Use JSON data instead of API call
		const allTechnologies = technologySlugPageData?.data || [];
		const technologyData = allTechnologies.find((tech: any) => tech.slug_id === slug);
		return technologyData || null;
	} catch (error) {
		return null
	}
}

export async function generateMetadata(
	{ params }: { params: TechParamsType }
): Promise<Metadata> {
	const { slug } = await params;
	const pageData = await getTechnologyDetailData(slug)
	// Handle both array and direct object structures
	const seoRawData = Array.isArray(pageData) ? pageData[0]?.seo : pageData?.seo
	const seoData = Array.isArray(seoRawData) ? seoRawData[0] : seoRawData

	// Seven of these slugs shared the title "Custom Web Development Services"
	// in the data file, including every AI page. The override corrects them.
	const override = TECHNOLOGY_SLUG_SEO[slug]

	if (override) {
		return SeoService.generateSeoMetadata({
			title: override.title,
			description: override.description,
			keywords: buildKeywords(override.keywords, seoData?.meta_keywords),
			url: `/technologies/${slug}`,
		})
	}

	if (!seoData) {
		return SeoService.generateSeoMetadata({ url: `/technologies/${slug}` })
	}

	return SeoService.generateSeoMetadata({
		title: seoData.meta_title,
		description: seoData.meta_description,
		keywords: seoData.meta_keywords ? seoData.meta_keywords.split(', ') : [],
		url: `/technologies/${slug}`,
	})
}

export async function generateStaticParams() {
	// Use JSON data to generate static params
	const allTechnologies = technologySlugPageData?.data || [];
	const slugs = allTechnologies.map((tech: any) => ({
		slug: tech.slug_id
	}));
	return slugs;
}

export default async function TechnologyDetail({ params }: { params: TechParamsType }) {
	const { slug } = await params;
	const technologyDetailData = await getTechnologyDetailData(slug)
	const override = TECHNOLOGY_SLUG_SEO[slug]

	return (
		<>
			<JsonLd
				data={SeoService.graph(
					SeoService.service({
						name: override?.title ?? slug,
						description: override?.description ?? '',
						url: `/technologies/${slug}`,
						serviceType: 'Technology and engineering services',
					}),
					SeoService.breadcrumb([
						{ name: 'Technologies', path: '/technologies' },
						{ name: override?.title ?? slug, path: `/technologies/${slug}` },
					])
				)}
			/>
			<TechnologyDetailClient data={technologyDetailData} slug={slug} />
		</>
	)
}
