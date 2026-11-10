"use client"
import Layout from "@/src/components/layout/Layout"
import HeroSection from "@/src/components/about/HeroSection"
import CultureSection from "@/src/components/about/CultureSection"
import RiskSection from "@/src/components/about/RiskSection"
import AwardsSection from "@/src/components/about/AwardsSection"
import TestimonialsSection from "@/src/components/about/TestimonialsSection"
import MissionSection from "@/src/components/about/MissionVisionValuesSection"
import LocalPresenceSection from "@/src/components/about/LocalPresenceSection"
import ContactCta from "@/src/components/common/ContactCta"

interface AboutClientProps {
  data: any;
}

export default function AboutClient({ data }: AboutClientProps) {
  // Extract data from the aboutpage.json structure
  const aboutData = data?.data || data;
  
  return (
    <Layout headerStyle={70} footerStyle={70}>
      <HeroSection data={aboutData?.about_hero} />
      <MissionSection data={aboutData?.lapl__mssion} />
      {/* <TestimonialsSection data={aboutData?.lapl_testimonial_section} /> */}
      <CultureSection data={{
        title: aboutData?.lapl_culture?.title,
        description: aboutData?.lapl_culture?.description,
        items: aboutData?.lapl_culture_items
      }} />
      <RiskSection data={aboutData?.lapl_risk_section} />
      {/* <AwardsSection data={aboutData?.lapl__awards__section} items={aboutData?.lapl__awards__section?.lapl__awards_items} /> */}
      <LocalPresenceSection />
      <ContactCta />
    </Layout>
  )
}