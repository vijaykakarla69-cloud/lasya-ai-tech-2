"use client"
import Layout from "@/src/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import careersDetailsPageData from '@/src/data/careersdetailpage.json'
import PageHeroSection from "./HeroSection"
import RightArrowIcon from "@/public/assets/icons/purple-rightarrow.svg"		
import EditIcon from "@/public/assets/icons/edit.svg"
import WhiteUserIcon from "@/public/assets/icons/white-user.svg"
import WhitePhoneIcon from "@/public/assets/icons/white-phone.svg"
import MailIcon from "@/public/assets/icons/email.svg"
import HomeIcon from "@/public/assets/icons/home.svg"
import BlueRightArrowIcon from "@/public/assets/icons/blue-right-arrow.svg"
import careerpageData from '@/src/data/careerpage-v1.json'
export default function CareersPageData({ careersData }: { careersData: any }) {
	const router = useRouter()
	const params = useParams()
	
	const [showJobs, setShowJobs] = useState(true)
	const [selectedCategory, setSelectedCategory] = useState("All")
	const [showNoPositions, setShowNoPositions] = useState(false)
	const [loading, setLoading] = useState(false)

	// Get job listings from careerpage data
	const jobListings = careerpageData.job_roles.map(role => ({
		id: role.role_id,
		title: role.role_title,
		type: role.work_mode.includes('Internship') ? 'Internship' : 'Full Time',
		level: role.role_level,
		category: 'Development',
		slug: role.role_id,
		categorySlug: 'development'
	}))

	const jobCategories = [
		{ name: 'All', slug: 'all', count: jobListings.length },
		{ name: 'Development', slug: 'development', count: jobListings.length }
	]



	const handleCategoryClick = (e: React.MouseEvent, category: string) => {
		e.preventDefault()
		setSelectedCategory(category)
		
		// Show no positions message if the category has no jobs
		const hasJobsInCategory = category === "All" ? 
			jobListings.length > 0 : 
			jobListings.some(job => job.category === category)
		
		setShowNoPositions(!hasJobsInCategory)

		// Use Next.js router for navigation
		if (category === "All") {
			router.push("/careers")
		} else {
			const categoryObj = jobCategories.find(cat => cat.name === category)
			const categorySlug = categoryObj?.slug || category.toLowerCase().replace(/\./g, '').replace(/\s+/g, '-')
			router.push(`/careers/${categorySlug}`)
		}
	}

	const getCategoryClassName = (category: string) => {
		const baseClasses = "position-relative z-1 d-inline-flex rounded-pill px-4 py-3"
		if (category === selectedCategory) {
			return `${baseClasses} bg-warning`
		}
		return `${baseClasses} bg-primary-soft`
	}

	const getTextClassName = (category: string) => {
		const baseClasses = "tag-spacing fs-6 fw-bold text-uppercase"
		if (category === selectedCategory) {
			return `${baseClasses} text-dark`
		}
		return `${baseClasses} text-linear-2`
	}

	const getFilteredJobs = () => {
		if (selectedCategory === "All") {
			// For "All" category, remove duplicates based on title to show each job only once
			const uniqueJobs = jobListings.reduce((acc: any[], current: any) => {
				const x = acc.find(item => item.title === current.title);
				if (!x) {
					// When "All" is selected, use "all" as categorySlug for the View button
					return acc.concat([{ ...current, categorySlug: "all" }]);
				} else {
					return acc;
				}
			}, []);
			return uniqueJobs;
		}
		// For specific categories, show all jobs in that category
		return jobListings.filter(job => job.category === selectedCategory)
	}

	const filteredJobs = getFilteredJobs()

	if (loading) {
		return (
			<div className="d-flex justify-content-center align-items-center" style={{ minHeight: "300px" }}>
				<div className="spinner-border text-primary" role="status">
					<span className="visually-hidden">Loading...</span>
				</div>
			</div>
		)
	}

	return (
		<Layout>
			{careersData && <PageHeroSection data={careersData} />}
			
			<section className="section-contact-2 position-relative section-padding bg-white" id="job-listings">
				<div className="container position-relative z-1">
					<div className="row">
						
						<div className="col-lg-12 ps-lg-0 pt-5 pt-lg-0">
							<div className="position-relative">
								{!showJobs ? (
									<div style={{ marginTop: "5rem" }}>
							
									</div>
								) : showNoPositions ? (
									<div style={{ marginTop: "5rem" }}>
									
									</div>
								) : (
									<div className="job-listings" style={{ marginTop: "5rem" }}>
										{filteredJobs.map((job, index) => (
											<Link 
												key={job.id || index}
												href={`/careers/${job.slug}`}
												className="text-decoration-none d-block"
											>
												<div className="bg-white shadow-sm rounded-4 mb-4 hover-up cursor-pointer">
													<div className="p-4">
														<div className="d-flex justify-content-between align-items-center">
															<div>
																<h5 className="text-dark mb-3 fs-4">{job.title}</h5>
																<div className="d-flex gap-2">
																	<span className="badge bg-light text-dark px-3 py-2">{job.level}</span>
																	<span className="badge bg-light text-dark px-3 py-2">{job.type}</span>
																</div>
															</div>
															<div 
																className="btn btn-warning d-inline-flex align-items-center gap-2 text-decoration-none rounded-pill" 
																style={{ padding: '10px 24px', fontSize: '16px' }}>
																<span className="text-dark">View</span>
																<BlueRightArrowIcon/>
															</div>
														</div>
													</div>
												</div>
											</Link>
										))}
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</section>

		
		</Layout>
	)
}