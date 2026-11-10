"use client"
import Layout from "@/src/components/layout/Layout"
import Link from "next/link"
import CountUp from "react-countup"
import { Navigation, Pagination, Autoplay, Keyboard } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Marquee from "react-fast-marquee";
import { useState } from "react"
import PlusIcon from "@/public/assets/icons/plus.svg"
import ArrowIcon from "@/public/assets/icons/arrow.svg"

export default function Industry({data}: any) {
	if (!data?.lapl_industries?.length) {
		return null;
	}

	const [activeItem, setActiveItem] = useState(1);

	const handleActiveItem = (index: number) => {
		setActiveItem(index);
	};

	const getImageUrl = (industry: any) => {
		// Use image from JSON data if available
		if (industry.image && industry.image[0] && industry.image[0].url) {
			return industry.image[0].url;
		}
		
		// Return null if no image in JSON - let the component handle it
		return null;
	};

	return (
		<>
			<section data-kte="kt-14213" className="kt-14213 section-padding">
				<div data-kte="kt-52425" className="kt-52425 container">
					<div data-kte="kt-23209" className="kt-23209 text-center">
						<h1 data-kte="kt-90929" className="kt-90929 ds-3 my-3" data-aos="fade-zoom-in" data-aos-delay={300}>{data?.title}</h1>
						<p data-aos="fade-zoom-in" data-aos-delay={100}>{data?.description}</p>
					</div>
					<div data-kte="kt-65717" className="kt-65717 row mt-6 position-relative">
						{data.lapl_industries.map((industry: any, index: number) => (
							<div key={industry.id || index} className={`col-lg-4 ${index > 1 ? 'mt-4' : ''}`}>
								<div data-kte="kt-69760" className="kt-69760 p-2 rounded-4 shadow-1 bg-white position-relative z-1 hover-up" data-aos="fade-zoom-in" data-aos-delay={100 * (index % 2)}>
									<div data-kte="kt-24563" className="kt-24563 card-service bg-white p-6 border rounded-4">
										{getImageUrl(industry) && (
											<img 
												src={getImageUrl(industry)} 
												alt={industry.title}
												width={48}
												height={48}
											/>
										)}
										<h6 data-kte="kt-74484" className="kt-74484 my-3">{industry.title}</h6>
										<p data-kte="kt-96178" className="kt-96178 mb-6">{industry.description}</p>
										<Link href={`/industries/${industry.slug}`} data-kte="kt-21754" className="kt-21754 rounded-pill border icon-shape d-inline-flex gap-3 icon-learn-more">
											<PlusIcon 
												className="kt-26493 plus"
												data-kte="kt-26493"
											/>
											<ArrowIcon 
												className="kt-60837 arrow"
												data-kte="kt-60837"
											/>		
											<span data-kte="kt-61907" className="kt-61907 fw-bold fs-7 text-900">Learn More</span>
										</Link>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}   

