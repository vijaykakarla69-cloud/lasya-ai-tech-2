import { Metadata } from 'next'
import SeoService from '@/src/services/SeoService'
import JsonLd from '@/src/components/common/JsonLd'
import { INDUSTRY_SLUG_SEO, humanizeSlug } from '@/src/supporting-data/slug-seo'
import { buildKeywords } from '@/src/supporting-data/seo-keywords'
import IndustryDetailClient from './IndustryDetailClient'
import industrySlugPageData from '@/src/data/industryslupage.json'

async function getIndustryData(slug: string) {
  try {
    // Use industryslupage.json data instead of industrypage.json
    const allIndustries = industrySlugPageData?.data || [];
    const industryData = allIndustries.find((industry: any) => industry.slug === slug);
    return industryData || null;
  } catch (error) {
    return null;
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const pageData = await getIndustryData(slug);
  const seoRaw = (pageData as any)?.seo;
  const seoData = Array.isArray(seoRaw) ? seoRaw[0] : seoRaw;
  const override = INDUSTRY_SLUG_SEO[slug];

  if (override) {
    return SeoService.generateSeoMetadata({
      title: override.title,
      description: override.description,
      keywords: buildKeywords(override.keywords, seoData?.meta_keywords),
      url: `/industries/${slug}`,
    });
  }

  if (!pageData) {
    return SeoService.generateSeoMetadata({ url: `/industries/${slug}` });
  }

  return SeoService.generateSeoMetadata({
    title: seoData?.meta_title || pageData.hero?.title || humanizeSlug(slug),
    description: seoData?.meta_description || pageData.hero?.description || '',
    keywords: buildKeywords(seoData?.meta_keywords, [humanizeSlug(slug), 'industry software solutions']),
    url: `/industries/${slug}`,
  });
}

export default async function IndustryDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pageData = await getIndustryData(slug);
  const override = INDUSTRY_SLUG_SEO[slug];
  const name = override?.title ?? (pageData as any)?.hero?.title ?? humanizeSlug(slug);

  return (
    <>
      <JsonLd
        data={SeoService.graph(
          SeoService.service({
            name,
            description: override?.description ?? (pageData as any)?.hero?.description ?? '',
            url: `/industries/${slug}`,
            serviceType: 'Industry software and AI solutions',
          }),
          SeoService.breadcrumb([
            { name: 'Industries', path: '/industries' },
            { name, path: `/industries/${slug}` },
          ])
        )}
      />
      <IndustryDetailClient pageData={pageData} />
    </>
  );
}

export async function generateStaticParams() {
  // Use industryslupage.json data to generate static params
  const allIndustries = industrySlugPageData?.data || [];
  const slugs = allIndustries.map((industry: any) => ({
    slug: industry.slug
  }));
  return slugs;
}
