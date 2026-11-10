"use client"
import { useEffect, useState } from "react"
import PageHeroSection from "@/src/components/common/PageHeroSection"
import Layout from "@/src/components/layout/Layout"
import ContactCta from "@/src/components/common/ContactCta"
import GetAFreeQuoteForm from "@/src/components/get-a-free-quote/GetAFreeQuoteForm"

import { AllServices } from "@/src/services/allServices"
import { useLoading } from "@/src/services/LoadingService"
import SkeletonLoading from "@/src/components/common/SkeletonLoading"
import CommonService from '@/src/services/CommonService'
import HeroSection from "@/src/components/get-a-free-quote/HeroSection"

interface GetAFreeQuoteClientProps {
  formData: any;
  heroSectionData: any;
}

export default function GetAFreeQuoteClient({ formData, heroSectionData }: GetAFreeQuoteClientProps) {
  useEffect(() => {
    CommonService.makeDebugApiCallByPage("get_a_free_quote");
  }, [])

  // Debug: Log the data being passed to components
  console.log('GetAFreeQuoteClient formData:', formData);
  console.log('GetAFreeQuoteClient heroSectionData:', heroSectionData);

  if (!formData || !heroSectionData) {
    return <SkeletonLoading />
  }

  return (
    <Layout headerStyle={70} footerStyle={70}>
      <HeroSection data={heroSectionData} />
      <GetAFreeQuoteForm formData={formData} />      
      <ContactCta />
    </Layout>
  )
} 