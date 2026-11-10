"use client"
import { useEffect } from "react"
import Layout from "@/src/components/layout/Layout"
import Hero1 from "@/src/components/landing-page-1/Hero1"
import Blog1, { Blog1Data } from "@/src/components/landing-page-1/Blog1"
import Features1 from "@/src/components/landing-page-1/Features1"
import Features2 from "@/src/components/landing-page-1/Features2"
import Features3, { Features3Data } from "@/src/components/landing-page-1/Features3"
import LogoCloud1 from "@/src/components/landing-page-1/LogoCloud1"
import Services1, { Services1Data } from "@/src/components/landing-page-1/Services1"
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
  hero?: {
    id: number;
    badge_text: string;
    title: string;
    subtitle: string;
    buttons: Array<{
      id: number;
      title: string;
      link: string;
    }>;
  };
  features?: Array<any>;
  scalable_business?: Array<any>;
  powerful_agency?: any[];
  services?: Services1Data;
  blog?: any;
}

function mapPowerfulAgencyToFeatures3Data(pa: any): Features3Data {
  return {
    image: pa.image?.[0]?.formats?.small?.url
      ? `https://cms.kriva.tech${pa.image[0].formats.small.url}`
      : pa.image?.[0]?.url
        ? `https://cms.kriva.tech${pa.image[0].url}`
        : undefined,
    rateForUsTitle: "Rate For Us", // Static or add to Strapi
    avatars: [
      "/assets/imgs/features-3/avatar-1.png",
      "/assets/imgs/features-3/avatar-2.png",
      "/assets/imgs/features-3/avatar-3.png"
    ],
    rateText: "Loved by over 4k happy clients", // Static or from Strapi
    companyVisionTitle: pa.badge_text,
    companyVisionHeading: pa.title,
    companyVisionDescription: pa.description,
    ctaButton: pa.buttons?.[0]
      ? { text: pa.buttons[0].title, link: pa.buttons[0].link }
      : undefined,
    ctaLink: pa.buttons?.[1]
      ? { text: pa.buttons[1].title, link: pa.buttons[1].link }
      : undefined,
    stats: Array.isArray(pa.stats)
      ? pa.stats
          .filter((stat: any) => typeof stat.number === 'number' && !isNaN(stat.number))
          .map((stat: any) => ({
            value: stat.number,
            suffix: stat.suffix,
            label: stat.text
          }))
      : []
  }
}

function mapBlogToBlog1Data(blog: any): Blog1Data {
  return {
    badge_text: blog.badge_text,
    title: blog.title,
    description: blog.Description || blog.description || '',
    blog_cards: Array.isArray(blog.blog_cards)
      ? blog.blog_cards.map((card: any) => ({
          id: card.id,
          title: card.title,
          description: card.description,
          badge_text: card.badge_text,
          image: card.image?.[0]?.formats?.thumbnail?.url
            ? `https://cms.kriva.tech${card.image[0].formats.thumbnail.url}`
            : card.image?.[0]?.url
              ? `https://cms.kriva.tech${card.image[0].url}`
              : undefined,
        }))
      : []
  }
}

interface LandingPage1ClientProps {
  pageData: PageData;
}

export default function LandingPage1Client({ pageData }: LandingPage1ClientProps) {
  if (!pageData) {
    return <SkeletonLoading />
  }

  const features3Data = pageData.powerful_agency?.[0]
    ? mapPowerfulAgencyToFeatures3Data(pageData.powerful_agency[0])
    : undefined;

  const blog1Data = pageData.blog ? mapBlogToBlog1Data(pageData.blog) : undefined;

  return (
    <Layout headerStyle={1} footerStyle={1}>
      <Hero1 data={pageData.hero} />
      {/* <LogoCloud1 /> */}
      <Features1 data={pageData.features?.[0]} />
      <Features2 data={pageData.scalable_business?.[0]} />
      <Features3 data={features3Data} />
      <Services1 data={pageData.services} />
      <Blog1 data={blog1Data} />
    </Layout>
  )
} 