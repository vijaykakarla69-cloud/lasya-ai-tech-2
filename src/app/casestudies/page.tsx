import type { Metadata } from 'next'
import CaseStudiesClient from './CaseStudiesClient'
import JsonLd from '@/src/components/common/JsonLd'
import SeoService from '@/src/services/SeoService'
import casestudypageData from '@/src/data/casestudypage.json'
import casestudydetailspageData from '@/src/data/casestudydetailspage.json'

async function getCaseStudiesPageData() {
	try {
		const mainData = casestudypageData?.data || null;
		const detailSlugs = new Set(casestudydetailspageData?.data?.map((cs: any) => cs.slug) || []);
		
		// Filter case studies to only include those that have detail pages
		if (mainData?.hero_section?.[0]?.lapl_case_study_collections) {
			mainData.hero_section[0].lapl_case_study_collections = mainData.hero_section[0].lapl_case_study_collections.filter(
				(cs: any) => detailSlugs.has(cs.slug)
			);
		}
		
		return mainData;
	} catch (error) {
		return null
	}
}

export async function generateMetadata(): Promise<Metadata> {
	const pageData = await getCaseStudiesPageData()
	const seoRawData = pageData?.seo
	const seoData = seoRawData && seoRawData.length > 0 ? seoRawData[0] : null

	return SeoService.fromRegistry('/casestudies', {
		keywords: seoData?.meta_keywords,
	})
}

export default async function CaseStudies() {
	const pageData = await getCaseStudiesPageData()
	return (
		<>
			<JsonLd data={SeoService.registryGraph('/casestudies')} />
			<CaseStudiesClient pageData={pageData} />
		</>
	)
}
