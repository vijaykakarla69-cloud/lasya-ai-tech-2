'use client';

import Link from "next/link"
import React, { useState, useMemo } from "react"
import { BLOG_POSTS } from "@/src/data/blogPosts"

const truncateDescription = (description: string, wordLimit: number = 30) => {
  const words = description.split(' ');
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(' ') + '...';
  }
  return description;
};

export default function PageCaseStudy50({ data }: { data: any }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Front-end Development", "Backend Development", "UI/UX", "Mobile Application", "Agent Architecture", "MCP", "LLM", "AI"];

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  // Hand-authored articles (not CMS case studies) pinned to the top of the list.
  const articleEntries = BLOG_POSTS.map((post) => ({
    id: post.slug,
    slug: post.slug,
    title: post.title,
    description: post.excerpt,
    categories: "",
    image: [{ url: post.image }],
  }));

  const caseStudies = [
    ...articleEntries,
    ...(data?.hero_section?.[0]?.lapl_case_study_collections || []),
  ];

  const filteredStudies = useMemo(() => {
    if (!caseStudies?.length) return [];
    if (selectedCategory === "All") {
      return caseStudies;
    }
    return caseStudies.filter((study: any) => {
      const studyCategory = study.categories?.trim()?.toLowerCase() || '';
      const selectedCat = selectedCategory.toLowerCase();
      return studyCategory === selectedCat;
    });
  }, [caseStudies, selectedCategory]);

  return (
    <section data-kte="kt-47652" className="kt-47652 section-blog-1 pb-0 mb-0">
      <div data-kte="kt-59991" className="kt-59991 container">
        <div data-kte="kt-70164" className="kt-70164 text-center mt-6">
          <div data-kte="kt-22403" className="kt-22403 p filter-menu-active">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`btn btn-md btn-filter mb-2 me-2 ${
                  selectedCategory === category ? 'active' : ''
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div data-kte="kt-76015" className="kt-76015 row g-4 pb-4">
          {filteredStudies.map((study: any) => {
            const imageUrl =
              study.image?.[0]?.formats?.thumbnail?.url ||
              study.image?.[0]?.url;

            return (
              <div key={study.id} data-kte="kt-26113" className="kt-26113 col-lg-4 text-start">
                <div className="card border-0 rounded-3 position-relative h-100 w-100">
                  {imageUrl && (
                    <Link
                      href={`/casestudies/${study.slug}`}
                      style={{
                        height: '250px',
                        overflow: 'hidden',
                        display: 'block',
                        borderTopLeftRadius: '12px',
                        borderTopRightRadius: '12px',
                        padding: '12px',
                        background: 'white'
                      }}
                    >
                      <img
                        className="rounded-3"
                        src={imageUrl}
                        alt={study.title || 'Case study image'}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.3s ease',
                          border: '1px solid #e5e7eb',
                          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                          borderRadius: '12px'
                        }}
                      />
                    </Link>
                  )}
                  <div data-kte="kt-88972" className="kt-88972 card-body p-0 bg-white">
                    <Link href={`/casestudies/${study.slug}`} data-kte="kt-78772" className="kt-78772 bg-primary-soft position-relative z-1 d-inline-flex rounded-pill px-3 py-2 mt-3">
                      <span data-kte="kt-88033" className="kt-88033 tag-spacing fs-7 fw-bold text-linear-2 text-uppercase">{study.categories || 'Case Study'}</span>
                    </Link>
                    <h6 data-kte="kt-63779" className="kt-63779 my-3">
                      <Link href={`/casestudies/${study.slug}`}>{study.title}</Link>
                    </h6>
                    <p>{truncateDescription(study.description)}</p>
                  </div>
                  <Link
                    href={`/casestudies/${study.slug}`}
                    className="position-absolute bottom-0 start-0 end-0 top-0 z-0"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
