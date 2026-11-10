"use client"
import { useEffect } from "react"
import Layout from "@/src/components/layout/Layout"
import Blog2, { Blog2Props } from "@/src/components/landing-page-2/Blog2"
import Cta1 from "@/src/components/landing-page-2/Cta1"
import Faqs1, { Faqs1Props } from "@/src/components/landing-page-2/Faqs1"
import Features4 from "@/src/components/landing-page-2/Features4"
import Features5 from "@/src/components/landing-page-2/Features5"
import Hero2 from "@/src/components/landing-page-2/Hero2"
import HowItWork1 from "@/src/components/landing-page-2/HowItWork1"
import LogoCloud2 from "@/src/components/landing-page-2/LogoCloud2"
import Static1 from "@/src/components/landing-page-2/Static1"
import Testimonial2 from "@/src/components/landing-page-2/Testimonial2"
import CommonService from '@/src/services/CommonService'
import SkeletonLoading from "@/src/components/common/SkeletonLoading"

interface LandingPage2ClientProps {
  pageData: {
    hero?: Array<any>;
    ultraHD?: Array<any>;
    effective_team?: Array<any>;
    stats?: Array<any>;
    think_easy?: Array<any>;
    bolg?: Array<Blog2Props['data']>;
    faq?: Array<Faqs1Props['data']>;
  };
}

export default function LandingPage2Client({ pageData }: LandingPage2ClientProps) {
  useEffect(() => {
    CommonService.makeDebugApiCallByPage("landing_page_2");
  }, [])

  if (!pageData) {
    return <SkeletonLoading />
  }

  const heroData = pageData.hero?.[0]
  const ultraHDData = pageData.ultraHD?.[0]
  const effectiveTeamData = pageData.effective_team?.[0]
  const statsData = pageData.stats?.[0]
  const thinkEasyData = pageData.think_easy?.[0]
  const blogData = pageData.bolg?.[0]
  const faqData = pageData.faq?.[0]

  return (
    <Layout headerStyle={2} footerStyle={2}>
      <Hero2 data={heroData} />
      {/* <LogoCloud2 /> */}
      <Features4 data={ultraHDData} />
      <Features5 data={effectiveTeamData} />
      {/* <Testimonial2 /> */}
      <Static1 data={statsData} />
      {/* <Cta1 /> */}
      <HowItWork1 data={thinkEasyData} />
      <Faqs1 data={faqData} />
      <Blog2 data={blogData} />
    </Layout>
  )
} 