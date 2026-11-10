"use client"
import Link from "next/link"
import { useState } from 'react'
import WhiteRightArrowIcon from "@/public/assets/icons/white-right-arrow.svg"

export default function CaseStudySection({ data }: { data: any }) {
	const [isTab, setIsTab] = useState(1);

	if (!data?.data?.case_study) {
		return null;
	}

	const caseStudy = data.data.case_study;

	const handleTab = (i: number) => {
		setIsTab(i);
	};

	const tabTitles = caseStudy.lapl_services.map((service: any) => service.categories);

	return (
		<>
			<section>
				<div data-kte="kt-19953" className="kt-19953 container-fluid position-relative section-padding">
					<div data-kte="kt-77893" className="kt-77893 container">
						<div data-kte="kt-69717" className="kt-69717 row">
							<div data-kte="kt-24550" className="kt-24550 col-lg-6">
								<h5 data-kte="kt-84520" className="kt-84520 fw-regular ds-5 mb-4">Delivering <span data-kte="kt-84520" className="kt-84520 fw-bold">Exceptional <br /> Services Across </span> All Industries.</h5>
							</div>
							<div data-kte="kt-53494" className="kt-53494 row align-items-center">
								<div data-kte="kt-36663" className="kt-36663 col-lg-12">

									<nav style={{width: '100%', maxWidth: '1200px', margin: '0 auto', position: 'relative'}}>
										<div data-kte="kt-38073" className="kt-38073 nav nav-tabs bg-neutral-100 justify-content-between border-bottom-0 mb-5" 
											 id="nav-tab" 
											 role="tablist" 
											 style={{ width: '100%', minHeight: '60px' }}>

											{tabTitles.map((title: string, index: number) => (
												<button
													key={index}
													className={isTab === index + 1 ? "nav-link active custom-tab" : "nav-link custom-tab"}
													type="button"
													onClick={() => handleTab(index + 1)}
													role="tab"
													style={{ 
														flex: '1',
														padding: '15px 10px',
														fontSize: '15px',
														textAlign: 'center',
														zIndex: 2,
														position: 'relative',
														minWidth: '120px',
														height: '100%',
														display: 'flex',
														alignItems: 'center',
														justifyContent: 'center'
													}}
												>
													{title}
												</button>
											))}
										</div>
									</nav>
								</div>
								<div data-kte="kt-34930" className="kt-34930 col-lg-12">
									<div data-kte="kt-30012" className="kt-30012 tab-content" id="nav-tabContent" style={{ minHeight: '400px' }}>
											{caseStudy.lapl_services.map((service: any, index: number) => (	
											<div key={service.id} className={isTab === index + 1 ? "tab-pane fade show active" : "tab-pane fade"} role="tabpanel" style={{ height: '100%' }}>
												<p data-kte="kt-96053" className="kt-96053 text-900 mb-3 fw-bold" style={{ fontSize: '1.25rem' }}>{service.title}</p>
												<div data-kte="kt-10208" className="kt-10208 row" style={{ minHeight: '300px' }}>
													<div data-kte="kt-19605" className="kt-19605 col-12 col-md-6 mb-3 mb-md-0" style={{ height: '100%', overflowY: 'auto' }}>
														<p data-kte="kt-46736" className="kt-46736 text-900">{service.description}</p>
														<ul data-kte="kt-63686" className="kt-63686 list-unstyled phase-items mb-0">
															{service.points.services.map((point: any, idx: number) => (
																<li key={idx} data-kte="kt-93913" className="kt-93913 d-flex align-items-center mt-3">
																	<img src="/assets/imgs/cta-2/check.svg" alt="Lasya AI Tech" />
																	<p data-kte="kt-80601" className="kt-80601 ms-2 mb-0 text-900 fs-6">{point.title}</p>
																</li>
															))}
														</ul>
														<div data-kte="kt-95912" className="kt-95912 d-flex flex-wrap gap-2 mt-4">
															{service.lapl_chips.map((chip: any) => (
																<Link
																	key={chip.id}
																	href={`/services/${chip.slug}`}
																	className="bg-primary-soft position-relative z-1 d-inline-flex rounded-pill px-3 py-2"
																>
																	<span data-kte="kt-54198" className="kt-54198 tag-spacing fs-7 fw-bold text-linear-2 text-uppercase">
																		{chip.technology}
																	</span>
																</Link>
															))}
														</div>
													</div>
													<div data-kte="kt-54676" className="kt-54676 col-12 col-md-6 position-relative text-center">
														<img data-kte="kt-50176" className="kt-50176 rounded-3" src="/assets/imgs/cta-7/img-2.jpg" alt="" style={{position: 'relative', zIndex: 1}} />
														
														
													</div>
												</div>
											</div>
										))}
									</div>
									<div data-kte="kt-76654" className="kt-76654 border-top pt-6 mt-md-8 mt-6 position-relative" style={{ minHeight: '120px' }}>
										<div data-kte="kt-84271" className="kt-84271 position-absolute start-0 top-50 translate-middle-y" style={{ paddingTop: '2rem' }}>
											<Link href="/get-a-free-quote" data-kte="kt-20434" className="kt-20434 fw-bold btn btn-gradient d-inline-flex align-items-center hover-up">
												<span data-kte="kt-56376" className="kt-56376 me-10">Get a Free quote</span>
												<WhiteRightArrowIcon />
											</Link>
											<p data-kte="kt-28581" className="kt-28581 fs-7 text-500 mt-3">{caseStudy.text}</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div data-kte="kt-35942" className="kt-35942 position-absolute top-0 end-0 z-1 flickering p-10 m-10 d-none d-lg-block">
							<img src="/assets/imgs/cta-7/star-1.svg" alt="Lasya AI Tech" />
						</div>
					</div>
				</div>
			</section>
		</>
	)
}