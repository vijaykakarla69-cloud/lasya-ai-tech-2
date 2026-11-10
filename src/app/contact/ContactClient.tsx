"use client"
import { useEffect } from 'react'
import PageHeroSection from "@/src/components/common/PageHeroSection"
import ContactSection from "@/src/components/common/ContactSection"
import Layout from "@/src/components/layout/Layout"
import { AllServices } from "@/src/services/allServices"
import CommonService from '@/src/services/CommonService'
import ContactHero from '@/src/components/common/ContactHero'

interface ContactClientProps {
  contactFormData: any;
  heroSectionData: any;
}

export default function ContactClient({ contactFormData, heroSectionData }: ContactClientProps) {
  useEffect(() => {
    CommonService.makeDebugApiCallByPage("contact"); 
  }, [])

  return (
    <Layout headerStyle={70} footerStyle={70}>
      <ContactHero data={heroSectionData} />
      <ContactSection data={contactFormData} />
    </Layout>
  )
}