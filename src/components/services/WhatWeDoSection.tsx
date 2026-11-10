'use client'
import Link from "next/link"
import { useState } from "react"
import WhiteArrow from "@/public/assets/icons/white-right-arrow.svg"

export default function WhatWeDoSection({ data }: { data: any }) {
	// Debug: Log the data structure
	console.log('WhatWeDoSection data:', data);

	const [isTab, setIsTab] = useState(1);

	if (!data) return null

	const handleTab = (i: number) => {
		setIsTab(i);
	};

	const tabTitles = [
		"Staff Augmentation",
		"Web App", 
		"Mobile App",
		"UI/UX Design",
		"Startup Services", 
		"AI, ML & IoT"
	];

	// Add image mapping for each tab
	const tabImages = [
		"/assets/imgs/cta-7/wedb.png",
		"/assets/imgs/cta-7/wedb3.png",
		"/assets/imgs/cta-7/wedb4.png",
		"/assets/imgs/cta-7/wedb6.png",
		"/assets/imgs/cta-7/wedb2.png",
		"/assets/imgs/cta-7/wedb5.png"
	];

	return (
		<>


			<section>
				<div data-kte="kt-38371" className="kt-38371 container-fluid position-relative section-padding">
					<div data-kte="kt-26115" className="kt-26115 container">
						<div data-kte="kt-52629" className="kt-52629 row">
							<div data-kte="kt-90962" className="kt-90962 col-lg-6">
								<h5 data-kte="kt-58336" className="kt-58336 fw-regular ds-5 mb-4">High <span data-kte="kt-58336" className="kt-58336 fw-bold">Performance <br /> Services For </span> All Industries.</h5>
							</div>
							<div data-kte="kt-48526" className="kt-48526 row align-items-center">
								<div data-kte="kt-68558" className="kt-68558 col-lg-12">
									<nav style={{width: '100%', margin: '0 auto'}}>
										<div data-kte="kt-19527" className="kt-19527 nav nav-tabs bg-neutral-100 justify-content-between border-bottom-0 mb-5" id="nav-tab" role="tablist" style={{ width: '100%' }}>
											{tabTitles.map((title, index) => (
												<button
													key={index}
													className={isTab === index + 1 ? "nav-link active custom-tab" : "nav-link custom-tab"}
													type="button"
													onClick={() => handleTab(index + 1)}
													role="tab"
													style={{ flex: '1', padding: '15px 10px', fontSize: '15px', textAlign: 'center', zIndex: 2, position: 'relative' }}
												>
													{title}
												</button>
											))}
										</div>
									</nav>
								</div>
								<div data-kte="kt-89782" className="kt-89782 col-lg-12">
									<div data-kte="kt-29202" className="kt-29202 tab-content" id="nav-tabContent">
										{data.map((service: any, index: number) => (
											<div key={service.id} className={isTab === index + 1 ? "tab-pane fade show active" : "tab-pane fade"} role="tabpanel">
												<p data-kte="kt-80881" className="kt-80881 text-900 mb-3 fw-bold" style={{ fontSize: '1.25rem' }}>{service.title}</p>
												<div data-kte="kt-40896" className="kt-40896 row">
													<div data-kte="kt-74429" className="kt-74429 col-12 col-md-6 mb-3 mb-md-0">
														<p data-kte="kt-29856" className="kt-29856 text-900">{service.description}</p>
														<ul data-kte="kt-64466" className="kt-64466 list-unstyled phase-items mb-0">
															{service.points.services.map((point: any, idx: number) => (
																<li key={idx} data-kte="kt-60602" className="kt-60602 d-flex align-items-center mt-3">
																	<img src="/assets/imgs/cta-2/check.svg" alt="Lasya AI Tech" />
																	<p data-kte="kt-75620" className="kt-75620 ms-2 mb-0 text-900 fs-6">{point.title}</p>
																</li>
															))}
														</ul>
														<div data-kte="kt-51763" className="kt-51763 d-flex flex-wrap gap-2 mt-4">
															{service.lapl_chips.map((chip: any) => (
																<Link
																	key={chip.id}
																	href={`/services/${chip.slug}`}
																	className="bg-primary-soft position-relative z-1 d-inline-flex rounded-pill px-3 py-2"
																>
																	<span data-kte="kt-91007" className="kt-91007 tag-spacing fs-7 fw-bold text-linear-2 text-uppercase">
																		{chip.technology}
																	</span>
																</Link>
															))}
														</div>
													</div>
													<div data-kte="kt-23237" className="kt-23237 col-12 col-md-6 position-relative text-center">
														<div data-kte="kt-41917" className="kt-41917 position-relative" style={{ maxWidth: '500px', margin: '0 auto' }}>
															<img 
																className="rounded-3" 
																src={tabImages[isTab - 1]} 
																alt="" 
																style={{
																
																	width:'400px',
																	height:'400px',
																	objectFit: 'cover',
																	position: 'relative',
																	zIndex: 1
																}} 
															/>
														</div>
													</div>
												</div>
											</div>
										))}
									</div>
									<div data-kte="kt-41370" className="kt-41370 pt-2 mt-md-4 mt-2">
										<Link href="/get-a-free-quote" data-kte="kt-89941" className="kt-89941 fw-bold btn btn-gradient d-inline-flex align-items-center hover-up">
											<span data-kte="kt-84071" className="kt-84071 me-10">Get a Free quote</span>
											<WhiteArrow className="ms-2" />
										</Link>
										
									</div>
								</div>
							</div>
						</div>
						<div data-kte="kt-68211" className="kt-68211 position-absolute top-0 end-0 z-1 flickering p-10 m-10 d-none d-lg-block">
							<img src="/assets/imgs/cta-7/star-1.svg" alt="Lasya AI Tech" />
						</div>
					</div>
				</div>
			</section>
		</>
	)
}