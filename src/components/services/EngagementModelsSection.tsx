"use client"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function EngagementModelsSection({ data }: { data: any }) {	
const [activeFilter, setActiveFilter] = useState('all')	
	
    if (!data) {
        return null; 
    }


	const { title, description, staff } = data



	const handleFilterClick = (category: string) => (e: React.MouseEvent) => {	
		e.preventDefault()	
		setActiveFilter(category)	
	}

	const filteredModels = activeFilter === 'all' 
		? staff 	
		: staff?.filter((model: any) => 
			model.category?.toLowerCase().replace(/\s+/g, '-') === activeFilter)

	if (!staff) return <div>No staff data available</div>

	return (
		<div>
			<section data-kte="kt-33584" className="kt-33584 section-feature-12 border-bottom pb-120 pt-110">
				<div data-kte="kt-44170" className="kt-44170 container">
					<div data-kte="kt-85098" className="kt-85098 text-center">
						<h5 data-kte="kt-16348" className="kt-16348 ds-5">{title}</h5>
						<p data-kte="kt-93752" className="kt-93752 fs-5 pb-4">
							{description}
						</p>
					</div>
					<div data-kte="kt-91777" className="kt-91777 row">
						{staff.map((model: any, index: number) => (	
							<div key={model.id} className={`col-lg-6 ${index % 2 === 0 ? 'order-lg-1' : 'order-lg-2'}`}>
								<div data-kte="kt-49476" className="kt-49476 feature-item mb-5 bg-neutral-100 p-7 rounded-4 hover-up">
									<div data-kte="kt-57706" className="kt-57706 icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
										<div data-kte="kt-52009" className="kt-52009 icon">
											<img 
												className="filter-invert" 
												src={`${model?.icon?.[0]?.url || '/default-icon.svg'}`} 
												alt={model.title} 
											/>
										</div>
									</div>
									<h4>{model.title}</h4>
									<p>{model.description}</p>
									
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	)
}