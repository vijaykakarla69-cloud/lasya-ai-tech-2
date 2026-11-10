"use client"

import { useEffect } from "react"
import Layout from "@/src/components/layout/Layout"
import CommonService from "@/src/services/CommonService"
import SkeletonLoading from "@/src/components/common/SkeletonLoading"
import Hero from "@/src/components/case-study-dashdev/Hero"
import Details from "@/src/components/case-study-dashdev/Details"
import Icon from "@/src/components/case-study-dashdev/Icon"
import Stats from "@/src/components/case-study-dashdev/Stats"
import Functionality from "@/src/components/case-study-dashdev/Functionality"
import Qualities from "@/src/components/case-study-dashdev/Qualities"
import Technologies from "@/src/components/case-study-dashdev/Technologies"
import Creation from "@/src/components/case-study-dashdev/Creation"
import Challenges from "@/src/components/case-study-dashdev/Challenges"
import ContactCta from "@/src/components/common/ContactCta"
import { useParams } from 'next/navigation';

interface CaseStudyDetailClientProps {
  pageData: any;
}

export default function CaseStudyDetailClient({ pageData }: CaseStudyDetailClientProps) {
  const params = useParams();
  const slug = params?.slug as string;
  
  useEffect(() => {
    CommonService.makeDebugApiCallByPage("case_study_detail", { pageData });
  }, [pageData, slug]);

  if (!pageData) {
    return <SkeletonLoading />;
  }

  return (
    <Layout headerStyle={70} footerStyle={70}>
      {pageData.hero && <Hero data={{ data: [pageData] }} />}
      {pageData.details && <Details data={pageData.details} />}
      {pageData.challenges && <Challenges data={pageData.challenges} />}
      {pageData.icon_section && <Icon data={pageData.icon_section} />}
      {/* {pageData.stats && <Stats data={{ stats: pageData.stats }} />} */}
      {pageData.functionality && <Functionality data={pageData.functionality} />}
      {pageData.qualities && <Qualities data={pageData.qualities} />}
      {pageData.technologies && <Technologies data={pageData.technologies} />}
      {pageData.creation && <Creation data={pageData.creation} />}
      <ContactCta />
    </Layout>
  );
} 