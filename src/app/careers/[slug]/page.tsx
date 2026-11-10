import { Metadata } from 'next'
import CareerTracks from '@/src/components/careerpage/page'
import JsonLd from '@/src/components/common/JsonLd'
import SeoService from '@/src/services/SeoService'
import data from '@/src/data/careerpage-v1.json'

export type CareerParamsType = Promise<{ slug: string }>;

async function getCareerData(slug: string) {
  try {
    // Use JSON data instead of API call
    const jobRole = data.job_roles.find(role => role.role_id === slug)
    if (!jobRole) return null

    return {
      ...jobRole,
      seo: [{
        meta_title: `${jobRole.role_title} - Career Opportunities | LasyaAitech`,
        meta_description: jobRole.career_sections[0]?.description || `Join our team as a ${jobRole.role_title}. ${jobRole.experience_range} experience required.`,
        meta_keywords: `careers, jobs, hiring, ${jobRole.role_title.toLowerCase()}, LasyaAitech`
      }]
    }
  } catch (error) {
    console.error('Error loading career data:', error)
    return null
  }
}

export async function generateMetadata(
  { params }: { params: CareerParamsType }
): Promise<Metadata> {
  const { slug } = await params
  const pageData = await getCareerData(slug)
  const seoRawData = pageData?.seo
  const seoData = seoRawData && seoRawData.length > 0 ? seoRawData[0] : null

  if (!seoData) {
    return SeoService.generateSeoMetadata({ url: `/careers/${slug}` })
  }

  return SeoService.generateSeoMetadata({
    title: seoData.meta_title,
    description: seoData.meta_description,
    keywords: seoData.meta_keywords ? seoData.meta_keywords.split(', ') : [],
    url: `/careers/${slug}`,
  })
}

export default async function CareerSlugPage({ params }: { params: CareerParamsType }) {
  const { slug } = await params
  const role = data.job_roles.find((r) => r.role_id === slug)

  return (
    <>
      <JsonLd
        data={
          role
            ? SeoService.graph(
                SeoService.jobPosting({
                  title: role.role_title,
                  description:
                    role.career_sections?.[0]?.description ||
                    `${role.role_title} at LasyaAitech. ${role.experience_range} experience, ${role.work_mode}.`,
                  url: `/careers/${slug}`,
                  employmentType: 'FULL_TIME',
                }),
                SeoService.breadcrumb([
                  { name: 'Careers', path: '/careers' },
                  { name: role.role_title, path: `/careers/${slug}` },
                ])
              )
            : null
        }
      />
      <CareerTracks slug={slug} />
    </>
  )
}

export async function generateStaticParams() {
  const slugs = data.job_roles.map(role => ({
    slug: role.role_id
  }))
  return slugs
}

