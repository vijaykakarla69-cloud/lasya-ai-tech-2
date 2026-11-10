import type { Metadata } from 'next'
import CareersPageData from "@/src/components/careers/page"
import JsonLd from '@/src/components/common/JsonLd'
import SeoService from '@/src/services/SeoService'
import careersPageData from '@/src/data/careerspage.json'

export async function generateMetadata(): Promise<Metadata> {
  return SeoService.fromRegistry('/careers')
}

export default function CareersPage() {
  // One JobPosting node per open role so the listings are eligible for
  // Google's jobs experience rather than being plain page text.
  const jobNodes = (careersPageData.data?.lapl_job_categories ?? []).flatMap(
    (category: any) =>
      (category?.lapl_job_listings ?? []).map((listing: any) =>
        SeoService.jobPosting({
          title: listing.title,
          description: `${listing.title} (${listing.level ?? 'All levels'}) at LasyaAitech. ${
            careersPageData.data?.hero_section?.description ?? ''
          }`,
          url: `/careers/${listing?.lapl_career_detail?.slug ?? ''}`,
          employmentType: listing.job_type,
          datePosted: listing.publishedAt,
        })
      )
  )

  return (
    <>
      <JsonLd data={SeoService.registryGraph('/careers', jobNodes)} />
      <CareersPageData careersData={careersPageData.data} />
    </>
  )
}
