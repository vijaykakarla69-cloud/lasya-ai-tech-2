"use client"
import { useEffect } from "react"
import Layout from "@/src/components/layout/Layout"
import Blog3 from "@/src/components/landing-page-3/Blog3"
import Cta2 from "@/src/components/landing-page-3/Cta2"
import Cta3 from "@/src/components/landing-page-3/Cta3"
import Faqs2 from "@/src/components/landing-page-3/Faqs2"
import Features6 from "@/src/components/landing-page-3/Features6"
import Features7 from "@/src/components/landing-page-3/Features7"
import Hero3 from "@/src/components/landing-page-3/Hero3"
import LogoCloud3 from "@/src/components/landing-page-3/LogoCloud3"
import Services2 from "@/src/components/landing-page-3/Services2"
import Static2 from "@/src/components/landing-page-3/Static2"
import CommonService from '@/src/services/CommonService'
import SkeletonLoading from "@/src/components/common/SkeletonLoading"

export interface PageData {
  id: number;
  documentId: string;
  slug: string;
  theme: string;
  version: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  seo?: Array<{
    meta_title: string;
    meta_description: string;
    meta_keywords: string;
    meta_image?: Array<{
      url: string;
    }>;
  }>;
  hero?: Array<{
    id: number;
    badge_text: string;
    title: string;
    description: string;
    button: {
      id: number;
      title: string;
      link: string;
    };
    images: Array<any>;
  }>;
  great_companies?: Array<{
    id: number;
    title: string;
    images: Array<{
      id: number;
      image: Array<{
        id: number;
        url: string;
        name: string;
      }>;
    }>;
  }>;
  service_features?: Array<{
    id: number;
    badge_text: string;
    title: string;
    lapl_landing_page_2_collections: Array<{
      id: number;
      title: string;
      description: string;
      icon: Array<{
        id: number;
        url: string;
      }>;
    }>;
    buttons: Array<{
      id: number;
      title: string;
      link: string;
    }>;
  }>;
  stats?: Array<{
    id: number;
    stats: Array<{
      id: number;
      preffix: string;
      number: number;
      suffix: string | null;
      text: string;
    }>;
  }>;
  solutions?: {
    id: number;
    badge_text: string;
    title1: string;
    title2: string;
    description: string;
    points: Array<{
      point: string;
    }>;
    stats: Array<{
      id: number;
      preffix: string;
      number: number;
      suffix: string | null;
      text: string;
    }>;
    image: Array<{
      id: number;
      url: string;
      name: string;
    }>;
  };
  stand_out?: Array<{
    id: number;
    badge_text: string;
    title: string;
    prefix: string;
    number: number;
    suffix: string;
    description: string;
    faq: Array<{
      id: number;
      title: string;
      description: string;
    }>;
    right_side_cards: Array<{
      id: number;
      title: string;
      description: string;
      icon: Array<{
        id: number;
        url: string;
        name: string;
      }>;
    }>;
  }>;
  faq?: Array<{
    id: number;
    badge_text: string;
    title: string;
    subtitle: string;
    faq: Array<{
      id: number;
      title: string;
      description: string;
    }>;
  }>;
  blog2?: Array<{
    id: number;
    badge_text: string;
    title: string;
    subtitle: string;
    cards: Array<{
      id: number;
      title: string;
      description: string;
      icon: Array<{
        id: number;
        url: string;
        name: string;
      }>;
    }>;
  }>;
}

interface LandingPage3ClientProps {
  pageData: PageData;
}

export default function LandingPage3Client({ pageData }: LandingPage3ClientProps) {
  useEffect(() => {
    CommonService.makeDebugApiCallByPage("landing_page_3");
  }, [])

  if (!pageData) {
    return <SkeletonLoading />
  }

  return (
    <Layout headerStyle={3} footerStyle={2}>
      <Hero3 data={pageData.hero} />
      <LogoCloud3 data={pageData.great_companies} />
      <Services2 data={pageData.service_features} />
      <Cta2 data={pageData.solutions} />
      <Static2 data={pageData.stats} />
      <Features6 data={pageData.stand_out} />
      {/* <Features7 /> */}
      <Faqs2 data={pageData.faq} />
      <Blog3 data={pageData.blog2} />
    </Layout>
  )
} 