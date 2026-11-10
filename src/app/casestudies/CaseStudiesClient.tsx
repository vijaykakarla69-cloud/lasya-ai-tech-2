"use client"
import { useEffect } from "react"
import Layout from "@/src/components/layout/Layout"
import HeroSection from "@/src/components/casestudies/HeroSection"
import CasestudySection from "@/src/components/casestudies/CasestudySection"
import ContactCta from "@/src/components/common/ContactCta"
import CommonService from "@/src/services/CommonService"
import SkeletonLoading from "@/src/components/common/SkeletonLoading"

interface CaseStudiesClientProps {
  pageData: any;
}

export default function CaseStudiesClient({ pageData }: CaseStudiesClientProps) {
  if (!pageData) {
    return <SkeletonLoading />;
  }

  return (
    <Layout headerStyle={70} footerStyle={70}>
      <HeroSection data={pageData} />
      <CasestudySection data={pageData} />
      <ContactCta compact />
    </Layout>
  )
} 