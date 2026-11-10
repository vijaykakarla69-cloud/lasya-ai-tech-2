'use client'
import Link from "next/link"
import { useState } from "react";
import ModalVideo from 'react-modal-video'

interface Cta5Props {
	data?: {
		it_services?: Array<{
			title: string;
			description: string;
			faq: Array<{
				title: string;
				description: string;
			}>;
			image: Array<{
				url: string;
				alternativeText: string | null;
			}>;
		}>;
	};
}

export default function Cta5({ data }: Cta5Props) {
	const [isOpen, setOpen] = useState(false);
	const [activeItem, setActiveItem] = useState(1);
	const servicesData = data?.it_services?.[0];
	const faqItems = servicesData?.faq || [];

	const handleActiveItem = (index: any) => {
		setActiveItem(index);
	};

	return (
		<>
			<section>
				<div className="container-fluid position-relative section-padding">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-6 text-lg-start text-center">
								<div className="position-relative z-1 d-inline-block mb-lg-0 mb-8">
									<img 
										className="rounded-4 position-relative z-1" 
										src={servicesData?.image?.[0]?.url ? `https://cms.kriva.tech${servicesData.image[0].url}` : "/assets/imgs/cta-5/img-1.png"} 
										alt={servicesData?.image?.[0]?.alternativeText || "service image"} 
									/>
									<div className="position-absolute bottom-0 start-md-100 start-0 translate-middle-md-x mb-md-8 backdrop-filter rounded-4 px-7 py-4 text-center z-1">
										<p className="pt-2">Loved by over 4k <br /> happy clients</p>
										<div className="d-flex align-items-center justify-content-center py-4">
											<img src="/assets/imgs/features-3/avatar-1.png" alt="Avatar 1 feature illustration" />
											<img className="avt-hero z-1" src="/assets/imgs/features-3/avatar-2.png" alt="Avatar 2 feature illustration" />
											<img className="avt-hero z-0" src=" assets/imgs/features-3/avatar-3.png" alt="Avatar 3 feature illustration" />
										</div>
										<div className="d-flex align-items-center justify-content-center">
											{[1, 2, 3, 4, 5].map((_, index) => (
												<svg key={index} xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 26 26" fill="none">
													<path d="M10.8881 5.26869C11.4269 3.61033 13.7731 3.61033 14.3119 5.26869L15.0248 7.46262C15.2657 8.20426 15.9568 8.70639 16.7367 8.70639H19.0435C20.7872 8.70639 21.5122 10.9377 20.1015 11.9626L18.2352 13.3185C17.6044 13.7769 17.3404 14.5894 17.5813 15.331L18.2942 17.5249C18.833 19.1833 16.935 20.5623 15.5243 19.5374L13.658 18.1815C13.0271 17.7231 12.1729 17.7231 11.542 18.1815L9.67572 19.5374C8.26504 20.5623 6.36697 19.1833 6.90581 17.5249L7.61866 15.331C7.85963 14.5894 7.59565 13.7769 6.96477 13.3185L5.0985 11.9626C3.68782 10.9377 4.41282 8.70639 6.15652 8.70639H8.46335C9.24316 8.70639 9.93428 8.20426 10.1752 7.46262L10.8881 5.26869Z" fill="#F28833" />
												</svg>
											))}
										</div>
									</div>
									<div className="position-absolute top-0 start-0 translate-middle z-0 pt-5">
										<img className="alltuchtopdown" src="/assets/imgs/cta-4/vector.svg" alt="" />
									</div>
								</div>
							</div>
							<div className="col-lg-6 mt-lg-0 mt-5">
								<h5 className="ds-5">{servicesData?.title}</h5>
								<p className="fs-5 my-4">{servicesData?.description}</p>
								<div className="accordion">
									{faqItems.map((faq, index) => (
										<div key={index} className="px-0 card p-3 border-0 border-bottom bg-transparent rounded-0">
											<div className="px-0 card-header border-0 bg-gradient-1">
												<a className={`pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(index + 1)} data-bs-toggle="collapse">
													<span className="icon-shape icon-xs fs-7 rounded-circle d-none d-md-block me-3 bg-primary text-white">{index + 1}</span>
													<h6 className="m-0">{faq.title}</h6>
													<span className="ms-auto arrow me-2">
														<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
															<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
														</svg>
													</span>
												</a>
											</div>
											<div id={`collapse${index + 1}`} className={activeItem === index + 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
												<p className="px-0 card-body fs-6 text-600">{faq.description}</p>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<ModalVideo channel='youtube' isOpen={isOpen} videoId="gXFATcwrO-U" onClose={() => setOpen(false)} />
		</>
	)
}
