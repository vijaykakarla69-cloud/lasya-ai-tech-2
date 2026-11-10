"use client"
import { useEffect } from "react"
import Layout from "@/src/components/layout/Layout"
import Blog4 from "@/src/components/landing-page-4/Blog4"
import Cta4 from "@/src/components/landing-page-4/Cta4"
import Cta5 from "@/src/components/landing-page-4/Cta5"
import Cta6 from "@/src/components/landing-page-4/Cta6"
import Features8 from "@/src/components/landing-page-4/Features8"
import Features9 from "@/src/components/landing-page-4/Features9"
import Hero4 from "@/src/components/landing-page-4/Hero4"
import HowItWork2 from "@/src/components/landing-page-4/HowItWork2"
import LogoCloud4 from "@/src/components/landing-page-4/LogoCloud4"
import Newsletter3 from "@/src/components/landing-page-4/Newsletter3"
import Services3 from "@/src/components/landing-page-4/Services3"
import Static3 from "@/src/components/landing-page-4/Static3"
import CommonService from '@/src/services/CommonService'
import dynamic from 'next/dynamic'
import SkeletonLoading from "@/src/components/common/SkeletonLoading"

const Services5 = dynamic(() => import('@/src/components/landing-page-4/Services5'), {
	ssr: false,
})

interface LandingPage4ClientProps {
  pageData: {
    hero?: Array<any>;
    technologies?: Array<any>;
    it_solutions?: Array<any>;
    custom_services?: Array<any>;
    stats?: Array<any>;
    core_values?: Array<any>;
    it_services?: Array<any>;
    how_it_works?: Array<any>;
    looking_to_speak?: Array<any>;
    blog?: Array<any>;
  };
}

export default function LandingPage4Client({ pageData }: LandingPage4ClientProps) {
  useEffect(() => {
    CommonService.makeDebugApiCallByPage("landing_page_4");
  }, [])

  if (!pageData) {
    return <SkeletonLoading />
  }

  const heroData = pageData.hero?.[0];

  return (
    <>
      <Layout headerStyle={4} footerStyle={3}>
        <Hero4 data={heroData} />
        <LogoCloud4 data={pageData} />
        <Services3 data={pageData} />
        <Cta4 data={pageData} />
        <Static3 data={pageData} />
        {/* <Services5 /> */}
        <Features8 data={pageData} />
        {/* <Features9 /> */}
        <Cta5 data={pageData} />
        <HowItWork2 data={pageData} />
        <Cta6 data={pageData} />
        <Blog4 data={pageData} />
        {/* <Newsletter3 /> */}
      </Layout>
    </>
  )
} 