import { Metadata } from "next";
import HeroSection from "@/src/components/home/HeroSection"
import CtaSection from "@/src/components/home/CtaSection"
import Layout from "@/src/components/layout/Layout"
import ProfessionalTeamSection from "@/src/components/home/ProfessionalTeamSection"
import ContactCta from "../components/common/ContactCta"
import WhatWeDoSection from "@/src/components/services/WhatWeDoSection"
import SeoService from "@/src/services/SeoService"
import JsonLd from "@/src/components/common/JsonLd"
import homepageData from '@/src/data/homepage.json'
import ctaSectionData from '@/src/data/ctasection.json'


export async function generateMetadata(): Promise<Metadata> {
	const homeData = homepageData?.data;
	const seoRawData = homeData?.seo;
	const seoData = seoRawData && seoRawData.length > 0 ? seoRawData[0] : null;

	return SeoService.fromRegistry('/', {
		keywords: seoData?.meta_keywords,
	});
}

async function getData() {
	try {
		const homeData = homepageData?.data;

		return {
			homePageData: homeData,
			statsData: homeData?.stats,
			testimonialData: homeData?.testimonal,
			featuredProjects: homeData?.featured_projects,
			partnerData: homeData?.partner,
			brandData: homeData?.brands,
			professionalData: homeData?.proffesional,
			blogData: homeData?.home_blog,
			whatWeDoData: homeData?.case_study?.lapl_services
		};
	} catch (error) {
		console.error('Error loading data:', error);
		return {
			homePageData: null,
			statsData: null,
			testimonialData: null,
			featuredProjects: null,
			partnerData: null,
			brandData: null,
			professionalData: null,
			blogData: null,
			whatWeDoData: null
		};
	}
}

export default async function Home() {
	const data = await getData();

	// The FAQ block rendered by ContactCta appears on several pages; the home
	// page is its canonical home, so the FAQPage markup lives here only.
	const homeFaqs = (ctaSectionData?.data?.faq ?? []).map((item: any) => ({
		question: item.question,
		answer: item.answer,
	}));

	const homeSchema = SeoService.graph(
		SeoService.webPage({
			url: '/',
			name: 'AI, Web & Mobile App Development Company',
			description:
				'LasyaAitech builds AI agents, mobile apps, web platforms and APIs for startups and enterprises.',
		}),
		SeoService.service({
			name: 'Custom software and AI development',
			description:
				'AI agents, generative AI, chatbots, machine learning, mobile apps, web platforms, APIs, UI/UX design, MVP builds and dedicated engineering teams.',
			url: '/',
			serviceType: 'Software development, AI development, mobile and web application development',
		}),
		homeFaqs.length ? SeoService.faq('/', homeFaqs) : null
	);

	return (
		<Layout>
			<JsonLd data={homeSchema} />
			<HeroSection data={data.homePageData} />
			<CtaSection data={data.statsData} />
			<WhatWeDoSection data={data.whatWeDoData} />
			<ProfessionalTeamSection data={data.professionalData} />
			{/* <LatestArticlesSection data={data.blogData} /> */}
			<ContactCta />
		</Layout>
	);
}
