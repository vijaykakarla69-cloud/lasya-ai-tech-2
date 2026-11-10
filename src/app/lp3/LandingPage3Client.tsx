"use client"
import { useEffect } from "react"
import Layout from "@/src/components/layout/Layout"
import Blog3 from "@/src/components/landing-page-3/Blog3"
import Cta2 from "@/src/components/landing-page-3/Cta2"
import Cta3 from "@/src/components/landing-page-3/Cta3"
import Faqs2 from "@/src/components/landing-page-3/Faqs2"
import Features6 from "@/src/components/landing-page-3/Features6"
import Features7 from "@/src/components/landing-page-3/Features7"
import Hero3 from "@/src/components/landing-page-3/Hero3"
import LogoCloud3 from "@/src/components/landing-page-3/LogoCloud3"
import Services2 from "@/src/components/landing-page-3/Services2"
import Static2 from "@/src/components/landing-page-3/Static2"
import CommonService from '@/src/services/CommonService'

export default function LandingPage3Client() {
  useEffect(() => {
    CommonService.makeDebugApiCallByPage("landing_page_3");
  }, [])

  return (
    <Layout headerStyle={3} footerStyle={2}>
      <Hero3 />
      <LogoCloud3 />
      <Services2 />
      <Cta2 />
      <Static2 />
      <Cta3 />
      <Features6 />
      <Features7 />
      <Faqs2 />
      <Blog3 />
    </Layout>
  )
} 