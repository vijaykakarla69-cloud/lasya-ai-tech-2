"use client"
import { useEffect } from "react"
import Layout from "@/src/components/layout/Layout"
import Industries from "@/src/components/industries/page"
import ContactCta from "@/src/components/common/ContactCta"
import CommonService from "@/src/services/CommonService"
import SkeletonLoading from "@/src/components/common/SkeletonLoading"

interface IndustriesClientProps {
  pageData: any;
}

export default function IndustriesClient({ pageData }: IndustriesClientProps) {
  if (!pageData) {
    return <SkeletonLoading />;
  }

  return (
    <Layout headerStyle={70} footerStyle={70}>
      <Industries data={pageData} />
      <ContactCta />
    </Layout>
  )
} 