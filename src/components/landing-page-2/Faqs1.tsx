"use client"
import Link from "next/link"
import { useState } from "react";

export interface Faqs1Props {
	data?: {
		title?: string;
		description?: string;
		card?: Array<{
			id: number;
			title: string;
			description?: string;
			icon?: Array<{
				url: string;
			}>;
		}>;
		faq?: Array<{
			id: number;
			title: string;
			description: string;
		}>;
	};
}

export default function Faqs1({ data }: Faqs1Props) {
	const [activeItem, setActiveItem] = useState(1);

	const handleActiveItem = (index: any) => {
		setActiveItem(index);
	};

	return (
		<>
			<section className="section-faqs-1 section-padding position-relative">
				<div className="container position-relative z-2">
					<div className="row align-items-center">
						<div className="col-lg-6">
								<div className="text-start position-relative d-inline-block mb-lg-0 mb-5">
									<img className="rounded-4" src="/assets/imgs/faqs-1/img-1.png" alt="LasyaAitech 1" />
								<div className="px-0 card-team rounded-4 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto px-5 py-8 m-5">
									{data?.card?.map((item, index) => (
										<div key={item.id} className="d-flex flex-column flex-md-row align-items-start gap-3 mb-4" data-aos="fade-zoom-in" data-aos-delay={index * 100}>
											<img src={item.icon?.[0]?.url ? `https://cms.kriva.tech${item.icon[0].url}` : `/assets/imgs/faqs-1/icon-${index + 1}.png`} alt={item.title} />
											<div>
												<h6 className="m-0">{item.title}</h6>
												<p className="m-0">{item.description}</p>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
						<div className="col-lg-6 mt-lg-0 mt-5">
							<h3 className="ds-3" data-aos="fade-up" data-aos-delay={0}>{data?.title}</h3>
							<p className="fs-5 my-4" data-aos="fade-up" data-aos-delay={0}>{data?.description}</p>
							<div className="accordion">
								{data?.faq?.map((item, index) => (
									<div key={item.id} className="px-0 card p-3 border-0 border-bottom bg-transparent rounded-0" data-aos="fade-up" data-aos-delay={0}>
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={`pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(index + 1)} data-bs-toggle="collapse">
												<span className="icon-shape icon-xs fs-7 rounded-circle d-none d-md-block me-3 bg-primary text-white">{index + 1}</span>
												<h6 className="m-0">{item.title}</h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id={`collapse${index + 1}`} className={activeItem === index + 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="px-0 card-body fs-6 text-600">{item.description}</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
				<img className="position-absolute top-0 end-0 z-0" src="/assets/imgs/faqs-1/img-bg-line.png" alt="" />
			</section>
		</>
	)
}
