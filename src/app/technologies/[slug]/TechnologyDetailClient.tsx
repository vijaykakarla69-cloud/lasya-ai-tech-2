"use client"

import { useEffect } from "react"
import Layout from "@/src/components/layout/Layout"
import CommonService from "@/src/services/CommonService"
import SkeletonLoading from "@/src/components/common/SkeletonLoading"
import Technology from "@/src/components/technology/page"
import ContactCta from "@/src/components/common/ContactCta"
interface TechnologyDetailClientProps {
  data: any;
  slug: string;
}

export default function TechnologyDetailClient({ data, slug }: TechnologyDetailClientProps) {
  useEffect(() => {
    CommonService.makeDebugApiCallByPage("technology_detail", { data, slug });
  }, [data, slug])

  if (!data) {
    return <SkeletonLoading />;
  }

  return (
    <Layout headerStyle={70} footerStyle={70}>
      <Technology data={data} />
      <ContactCta />
    </Layout>
  );
} 