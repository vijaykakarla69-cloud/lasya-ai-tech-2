"use client"
import { useEffect } from "react"
import Layout from "@/src/components/layout/Layout"
import Technologies from "@/src/components/technologies/page"
import ContactCta from "@/src/components/common/ContactCta"
import CommonService from "@/src/services/CommonService"
import SkeletonLoading from "@/src/components/common/SkeletonLoading"

interface Technology {
  id: number;
  title: string;
  description: string;
  images: any[];
}

interface SeoData {
  id: number;
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  meta_image: any[];
}

interface PageData {
  id: number;
  documentId: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: Technology[];
  seo: SeoData[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface TechnologiesClientProps {
  pageData: PageData | null;
}

export default function TechnologiesClient({ pageData }: TechnologiesClientProps) {
  if (!pageData) {
    return <SkeletonLoading />;
  }

  // Create the data structure expected by the Technologies component
  const formattedData = {
    data: {
      title: pageData.title,
      subtitle: pageData.subtitle,
      description: pageData.description,
      technologies: pageData.technologies
    }
  };

  return (
    <Layout headerStyle={70} footerStyle={70}>
      <Technologies data={formattedData} />
      <ContactCta />
    </Layout>
  )
} 