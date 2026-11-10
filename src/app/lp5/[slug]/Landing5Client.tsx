"use client"
import { useEffect } from "react"
import Layout from "@/src/components/layout/Layout"
import Blog5 from "@/src/components/landing-page-5/Blog5"
import Cta7, { Cta7Props } from "@/src/components/landing-page-5/Cta7"
import Cta8, { Cta8Props } from "@/src/components/landing-page-5/Cta8"
import Cta9, { Cta9Props } from "@/src/components/landing-page-5/Cta9"
import Faqs3, { Faqs3Props } from "@/src/components/landing-page-5/Faqs3"
import Features10, { Features10Props } from "@/src/components/landing-page-5/Features10"
import Hero5 from "@/src/components/landing-page-5/Hero5"
import LogoCloud5, { LogoCloud5Props } from "@/src/components/landing-page-5/LogoCloud5"
import Project1, { Project1Props } from "@/src/components/landing-page-5/Project1"
import Services6, { Services6Props } from "@/src/components/landing-page-5/Services6"
import CommonService from '@/src/services/CommonService'
import SkeletonLoading from "@/src/components/common/SkeletonLoading"

export interface PageData {
  id: number;
  documentId: string;
  slug: string;
  theme: string;
  version: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  seo?: Array<{
    meta_title: string;
    meta_description: string;
    meta_keywords: string;
    meta_image?: Array<{
      url: string;
    }>;
  }>;
  hero?: Array<{
    badge_text: string;
    title: string;
    description: string;
    buttons: Array<{
      title: string;
      link: string;
    }>;
    images: Array<any>;
  }>;
  performance_service?: Cta7Props['data'];
  lapl_landing_page_4_collections?: Features10Props['data'];
  enduring_value?: Services6Props['data'];
  developers?: LogoCloud5Props['data'];
  blog1?: Project1Props['data'];
  recent_work?: Cta8Props['data'];
  why_choose_us?: Cta9Props['data'];
  faq?: Faqs3Props['data'];
}

interface Landing5ClientProps {
  pageData: PageData;
}

export default function Landing5Client({ pageData }: Landing5ClientProps) {
  useEffect(() => {
    CommonService.makeDebugApiCallByPage("landing_page_5");
  }, [])

  if (!pageData) {
    return <SkeletonLoading />
  }

  return (
    <Layout headerStyle={5} footerStyle={4}>
      <Hero5 data={pageData.hero} />
      <Features10 data={pageData.lapl_landing_page_4_collections} />
      <Cta7 data={pageData.performance_service} />
      <Services6 data={pageData.enduring_value} />
      <LogoCloud5 data={pageData.developers} />
      <Project1 data={pageData.blog1} />
      <Cta8 data={pageData.recent_work} />
      <Cta9 data={pageData.why_choose_us} />
      <Faqs3 data={pageData.faq} />
      <Blog5 />
    </Layout>
  )
} 