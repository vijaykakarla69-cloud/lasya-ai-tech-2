'use client';

import { useEffect, useState } from "react"
import { AllServices } from "@/src/services/allServices"
import HeroSection from "./HeroSection"
import BlogHeaderSection from "./BlogHeaderSection"
import AuthorInfoSection from "./AuthorInfoSection"
import BlogContentSection from "./BlogContentSection"
import RelatedPostsSection from "./RelatedPostsSection"
import { useLoading } from "@/src/services/LoadingService";
import SkeletonLoading from "@/src/components/common/SkeletonLoading";

interface BlogDetailsProps {
  data: any;
}

export default function BlogDetailsSection({ data }: BlogDetailsProps) {
  if (!data) {
    return null;
  }

  // Extract the blog data from the response
  const blogData = {
    hero_section: data.hero_section,
    blog_header: data.blog_header,
    author_info: data.author_info,
    blog_content: data.blog_content,
    author_footer: data.author_footer,
    related_posts: data.related_posts
  };

  return (
    <>
      <HeroSection blogData={blogData} />
      <BlogHeaderSection blogData={blogData} />
      {/* <AuthorInfoSection blogData={blogData} /> */}
      <BlogContentSection blogData={blogData} />
      <RelatedPostsSection blogData={blogData} />
    </>
  );
}