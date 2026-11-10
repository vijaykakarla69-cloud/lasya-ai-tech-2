"use client"
import { useEffect } from "react"
import Layout from "@/src/components/layout/Layout"
import Blog2 from "@/src/components/landing-page-2/Blog2"
import Cta1 from "@/src/components/landing-page-2/Cta1"
import Faqs1 from "@/src/components/landing-page-2/Faqs1"
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
  pageData: any;
}

export default function LandingPage2Client({ pageData }: LandingPage2ClientProps) {
  useEffect(() => {
    CommonService.makeDebugApiCallByPage("landing_page_2");
  }, [])

  if (!pageData) {
    return <SkeletonLoading />
  }

  return (
    <Layout headerStyle={2} footerStyle={2}>
      <Hero2 />
      <LogoCloud2 />
      <Features4 />
      <Features5 />
      <Testimonial2 />
      <Static1 />
      <Cta1 />
      <HowItWork1 />
      <Faqs1 />
      <Blog2 />
    </Layout>
  )
} 