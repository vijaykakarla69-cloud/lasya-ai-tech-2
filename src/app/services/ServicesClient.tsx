"use client"
import { useEffect } from "react"
import Layout from "@/src/components/layout/Layout"
import PageHeroSection from "@/src/components/common/PageHeroSection"
import EngagementModelsSection from "@/src/components/services/EngagementModelsSection"
import WhatWeDoSection from "@/src/components/services/WhatWeDoSection"
import ServiceItems from "@/src/components/services/service-items"
import ContactCta from "@/src/components/common/ContactCta"
import { AllServices } from "@/src/services/allServices"
import CommonService from "@/src/services/CommonService"
import homepageData from '@/src/data/homepage.json'

interface ServicesClientProps {
  pageData: {
    flexible_models: any;
    performance: {
      lapl_services: any;
    };
    service_components: any;
  }
}

export default function ServicesClient({ pageData }: ServicesClientProps) {
  // Get the same data structure as home page for WhatWeDoSection
  const homeData = homepageData?.data;
  const whatWeDoData = homeData?.case_study?.lapl_services;

  return (
    <Layout headerStyle={70} footerStyle={70}>
      {/* <PageHeroSection data={servicesPageHeroSectionData} /> */}
      <ServiceItems data={pageData?.service_components} />
      <WhatWeDoSection data={whatWeDoData} />
      {/* <EngagementModelsSection data={pageData?.flexible_models} /> */}
      <ContactCta />
    </Layout>
  )
} 