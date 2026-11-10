"use client"
import Link from "next/link"
import { blogData } from "@/src/supporting-data/blog-data"
import { useState } from "react"	
export default function BlogSection({ pageData }: { pageData: any }) {	
	const [activeFilter, setActiveFilter] = useState('all')	
  const getFilteredPosts = () => {		
		if (!pageData) return []
		
		if (activeFilter === 'all') {
			return pageData.data.blogs
		} else {
			const categoryMap: { [key: string]: string[] } = {
				'start-up': ['Start up', 'Startup', 'Start Up', 'start up', 'startup'],
				'tech-leadership': ['Tech leadership', 'Tech Leadership', 'Technology Leadership', 'tech leadership'],
				'software-development': ['Software Development'],
				'outsourcing': ['Outsourcing'],
				'offshore-development': ['Offshore Development'],
				'organizational-structures': ['Organizational Structures']
			}
			
			const possibleCategories = categoryMap[activeFilter] || [activeFilter]
			
			const filtered = pageData.data.blogs.filter((post: any) => {
				return possibleCategories.some((cat: any) => 
					post.category.toLowerCase() === cat.toLowerCase()
				)
			})
			
			return filtered
		}
	}

	const filteredPosts = getFilteredPosts()
	return (
		<>
		<section data-kte="kt-55714" className="kt-55714 section-blog-1 @@padding">
				<div data-kte="kt-30468" className="kt-30468 container">
					<div data-kte="kt-37179" className="kt-37179 text-center mt-6">
						<div data-kte="kt-94691" className="kt-94691 p filter-menu-active">
							{blogData.filters.map((filter: any) => (
								<button
									key={filter.id}
									onClick={() => setActiveFilter(filter.slug)}
									className={`btn btn-md btn-filter mb-2 me-2 ${activeFilter === filter.slug ? 'active' : ''}`}
								>
									{filter.name}
								</button>	
							))}
						</div>
					</div>

					<div data-kte="kt-62379" className="kt-62379 row">
						{filteredPosts.map((post: any, index: any) => (
							<div key={post.id} data-kte="kt-59354" className="kt-59354 col-lg-4 text-start">
								<div data-kte="kt-58328" className="kt-58328 card border-0 rounded-3 mt-8 position-relative d-inline-flex" data-aos="fade-zoom-in" data-aos-delay={300}>
									<Link href={`/blog/${post.slug}`}>
										<img 
											className="rounded-3" 
											src={`https://cms.kriva.tech${post.image[0]?.url}`}
											
											alt={post.title} 
										/>
									</Link>
									<div data-kte="kt-47779" className="kt-47779 card-body p-0 bg-white">
										<Link href={`/blog/${post.slug}`} data-kte="kt-87626" className="kt-87626 bg-primary-soft position-relative z-1 d-inline-flex rounded-pill px-3 py-2 mt-3">
											<span data-kte="kt-10247" className="kt-10247 tag-spacing fs-7 fw-bold text-linear-2 text-uppercase">{post.category}</span>
										</Link>
										<h6 data-kte="kt-48342" className="kt-48342 my-3">
											<Link href={`/blog/${post.slug}`}>{post.title}</Link>
										</h6>
										<p>{post.description}</p>
									</div>
									{post.cta_text?.link && (
										<Link 
											href={post.cta_text.link} 
											className="position-absolute bottom-0 start-0 end-0 top-0 z-0" 
										/>
									)}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	)
}
