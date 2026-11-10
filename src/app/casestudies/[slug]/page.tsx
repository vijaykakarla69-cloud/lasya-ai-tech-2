// This is a server component
import { Metadata } from 'next'
import SeoService from '@/src/services/SeoService'
import JsonLd from '@/src/components/common/JsonLd'
import {
  CASE_STUDIES_WITH_MISMATCHED_CONTENT,
  caseStudySeo,
  humanizeSlug,
} from '@/src/supporting-data/slug-seo'
import { buildKeywords } from '@/src/supporting-data/seo-keywords'
import CaseStudyDetailClient from './CaseStudyDetailClient'
import BlogDetailClient from '@/src/app/blog/[slug]/BlogDetailClient'
import casestudydetailspageData from '@/src/data/casestudydetailspage.json'
import casestudypageData from '@/src/data/casestudypage.json'
import { BLOG_POSTS, getBlogPost } from '@/src/data/blogPosts'

/**
 * A handful of slugs under /casestudies are hand-authored articles (not
 * CMS case-study records) — e.g. the website-development-process post.
 * They're checked first so they never collide with a real case study slug,
 * and rendered through BlogDetailClient instead of the case-study layout.
 */

async function getCaseStudyData(slug: string) {
  try {
    // Find the case study data from JSON by slug
    const caseStudyData = casestudydetailspageData?.data?.find((item: any) => item.slug === slug);
    return caseStudyData || null;
  } catch (error) {
    return null;
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;

  const blogPost = getBlogPost(slug);
  if (blogPost) {
    return SeoService.generateSeoMetadata({
      title: blogPost.seo.title,
      description: blogPost.seo.description,
      keywords: blogPost.seo.keywords,
      url: `/casestudies/${slug}`,
      image: blogPost.image,
      type: 'article',
      publishedTime: blogPost.date,
      modifiedTime: blogPost.date,
    });
  }

  const pageData = await getCaseStudyData(slug);
  const seoRawData = pageData?.seo;
  const seoData = seoRawData && seoRawData.length > 0 ? seoRawData[0] : null;

  // Around eighteen of these records carried the meta of an unrelated project
  // (an MCP case study titled "Pi-1: Modular White-Label Banking Solution",
  // and so on). Deriving from the slug and the case study's own copy means the
  // title always describes the page and can never drift again.
  const derived = caseStudySeo(slug, (pageData as any)?.hero?.description);

  // This record holds another project's write-up, so the page must not be
  // indexed under a slug that promises something else. See the note on
  // CASE_STUDIES_WITH_MISMATCHED_CONTENT.
  const contentMismatched = CASE_STUDIES_WITH_MISMATCHED_CONTENT.has(slug);

  return SeoService.generateSeoMetadata({
    title: derived.title,
    description: derived.description,
    keywords: buildKeywords(derived.keywords, seoData?.meta_keywords),
    url: `/casestudies/${slug}`,
    type: 'article',
    noindex: contentMismatched,
    publishedTime: (pageData as any)?.publishedAt,
    modifiedTime: (pageData as any)?.updatedAt,
  });
}

export default async function CaseStudyDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const blogPost = getBlogPost(slug);
  if (blogPost) {
    return (
      <>
        <JsonLd
          data={SeoService.graph(
            SeoService.article({
              url: `/casestudies/${slug}`,
              headline: blogPost.title,
              description: blogPost.excerpt,
              image: blogPost.image,
              datePublished: blogPost.date,
              dateModified: blogPost.date,
            }),
            SeoService.breadcrumb([
              { name: 'Case Studies', path: '/casestudies' },
              { name: blogPost.title, path: `/casestudies/${slug}` },
            ])
          )}
        />
        <BlogDetailClient post={blogPost} />
      </>
    );
  }

  const pageData = await getCaseStudyData(slug);
  const derived = caseStudySeo(slug, (pageData as any)?.hero?.description);

  return (
    <>
      <JsonLd
        data={SeoService.graph(
          SeoService.article({
            url: `/casestudies/${slug}`,
            headline: derived.title,
            description: derived.description,
            image: (pageData as any)?.hero?.image?.url,
            datePublished: (pageData as any)?.publishedAt,
            dateModified: (pageData as any)?.updatedAt,
          }),
          SeoService.breadcrumb([
            { name: 'Case Studies', path: '/casestudies' },
            { name: humanizeSlug(slug), path: `/casestudies/${slug}` },
          ])
        )}
      />
      <CaseStudyDetailClient pageData={pageData} />
    </>
  );
}

export async function generateStaticParams() {
  // Get slugs from both JSON files
  const mainCaseStudies = casestudypageData?.data?.hero_section?.[0]?.lapl_case_study_collections || [];
  const detailCaseStudies = casestudydetailspageData?.data || [];
  
  // Create sets for efficient lookup
  const mainSlugs = new Set(mainCaseStudies.map((cs: any) => cs.slug));
  const detailSlugs = new Set(detailCaseStudies.map((cs: any) => cs.slug));
  
  // Only include slugs that exist in both files
  const validSlugs = Array.from(mainSlugs).filter(slug => detailSlugs.has(slug));
  
  const slugs = validSlugs.map(slug => ({ slug }));
  const blogSlugs = BLOG_POSTS.map((post) => ({ slug: post.slug }));
  const allSlugs = [...blogSlugs, ...slugs];
  console.log("[casestudies/slug] Static slugs:", allSlugs);
  return allSlugs;
}
