import Layout from "@/src/components/layout/Layout";
import PageHeroSection from "@/src/components/common/PageHeroSection";
import { useEffect } from "react";
import { useState } from "react";
import ContactCta from "@/src/components/common/ContactCta";
import { useLoading } from "@/src/services/LoadingService";
import type { Metadata } from 'next'
import TechnologiesClient from './TechnologiesClient'
import JsonLd from '@/src/components/common/JsonLd'
import SeoService from '@/src/services/SeoService'
import technologyPageData from '@/src/data/technologypage.json'

async function getTechnologiesPageData() {
	try {
		// Use JSON data instead of API call
		return technologyPageData?.data || null
	} catch (error) {
		return null
	}
}

export async function generateMetadata(): Promise<Metadata> {
	const pageData = await getTechnologiesPageData()
	const seoRawData = pageData?.seo
	const seoData = seoRawData && seoRawData.length > 0 ? seoRawData[0] : null

	return SeoService.fromRegistry('/technologies', {
		keywords: seoData?.meta_keywords,
	})
}

export default async function Technologies() {
	const pageData = await getTechnologiesPageData()
	return (
		<>
			<JsonLd data={SeoService.registryGraph('/technologies')} />
			<TechnologiesClient pageData={pageData} />
		</>
	)
}

