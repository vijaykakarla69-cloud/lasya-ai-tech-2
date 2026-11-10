"use client"
import { useEffect } from "react"
import Layout from "@/src/components/layout/Layout"
import { AllServices } from "@/src/services/allServices"
import CommonService from "@/src/services/CommonService";
import HireJsDevelopers from "@/src/components/hire-js-developers/page";
interface ServiceDetailClientProps {
  data: any;
  slug: string;
}

export default function ServiceDetailClient({ data, slug }: ServiceDetailClientProps) {
  useEffect(() => {
    CommonService.makeDebugApiCallByPage("service_page_by_slug", { slug });
  }, [slug, data])

  return (
    <Layout headerStyle={70} footerStyle={70}>
      <HireJsDevelopers data={data} />
      {/* Add your service detail page components here */}
    </Layout>
  )
} 