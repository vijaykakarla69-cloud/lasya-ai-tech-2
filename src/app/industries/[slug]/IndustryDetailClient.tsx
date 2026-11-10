"use client"

import { useEffect } from "react"
import Layout from "@/src/components/layout/Layout"
import CommonService from "@/src/services/CommonService"
import SkeletonLoading from "@/src/components/common/SkeletonLoading"
import ContactCta from "@/src/components/common/ContactCta"
import Hero from "@/src/components/industry-pages/Hero"
import DetailsSection from "@/src/components/industry-pages/DetailsSection"
import ServicesSection from "@/src/components/industry-pages/ServicesSection"
import CasesSection from "@/src/components/industry-pages/CasesSection"
import FaqsSection from "@/src/components/industry-pages/FaqsSection"
import CustomSection from "@/src/components/industry-pages/CustomSection"
import DifferSection from "@/src/components/industry-pages/DifferSection"
import { useParams } from 'next/navigation';

interface IndustryDetailClientProps {
  pageData: any;
}

export default function IndustryDetailClient({ pageData }: IndustryDetailClientProps) {
  const params = useParams();
  const slug = params?.slug as string;
  
  useEffect(() => {
    CommonService.makeDebugApiCallByPage("industry_detail", { pageData });
  }, [pageData, slug]);

  if (!pageData) {
    return <SkeletonLoading />;
  }

  // Debug: Log available sections
  console.log("Available sections in pageData:", Object.keys(pageData));

  return (
    <Layout headerStyle={70} footerStyle={70}>
      {/* Hero Section */}
      {pageData.hero && <Hero data={pageData} />}
      
      {/* Details Section */}
      {pageData.details && pageData.details.length > 0 && (
        <DetailsSection data={pageData.details} />
      )}
      
      {/* Services Section */}
      {pageData.services && <ServicesSection data={pageData.services} />}
      
      {/* Case Studies Section */}
      {pageData.case_studies && <CasesSection data={pageData.case_studies} />}
      
      {/* Differ Section */}
      {pageData.differ_section && <DifferSection data={pageData.differ_section} />}
      
      {/* Custom Section */}
      {pageData.lapl__custom_software && <CustomSection data={pageData.lapl__custom_software} />}
      
      {/* FAQ Section */}
      {pageData.faq && <FaqsSection data={pageData.faq} />}

      <ContactCta />
    </Layout>
  );
} 