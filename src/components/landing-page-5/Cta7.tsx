'use client'
import Link from "next/link"
import { useState } from "react"
import CountUp from 'react-countup'

export interface Cta7Props {
	data?: Array<{
		title: string;
		image: Array<{
			url: string;
		}>;
		stats: Array<{
			preffix: string;
			number: number;
			suffix: string;
			text: string;
		}>;
		tab: Array<{
			tab_title: string;
			description: string;
			paragraph: string;
			points?: {
				services: Array<{
					title: string;
				}>;
			};
		}>;
		button: Array<{
			title: string;
			link: string;
		}>;
	}>;
}

export default function Cta7({ data }: Cta7Props) {
	const [activeTab, setActiveTab] = useState(0)
	
	if (!data || data.length === 0) {
		return null;
	}

	const performanceData = data[0];
	const { title, image, stats, tab, button } = performanceData;

	return (
		<>
			<section>
				<div className="container-fluid position-relative section-padding">
					<div className="container">
						<div className="row">
							<div className="col-lg-6">
								<h5 className="fw-regular ds-5">{title}</h5>
							</div>
							<div className="row align-items-center">
								<div className="col-lg-6 text-lg-start text-center">
									<div className="position-relative z-1 d-inline-block mb-lg-0 mb-8">
										<img className="rounded-4 position-relative z-1" src={`https://cms.kriva.tech${image[0]?.url}`} alt="Call to action illustration" />
										<div className="alltuchtopdown position-absolute top-50 start-50 ms-md-10 mt-md-10 backdrop-filter bg-primary rounded-4 px-6 py-4 text-center z-1">
											{stats.map((stat, index) => (
												<div key={index}>
													<span className="h2 count fw-black mb-0 lh-1 text-white text-nowrap">
														{stat.preffix}<CountUp end={stat.number} enableScrollSpy={true} />{stat.suffix}
													</span>
													<p className={`text-white text-nowrap ${index === 0 ? 'border-bottom border-opacity-50 border-white pb-3 mb-3' : 'mb-0'}`}>
														{stat.text}
													</p>
												</div>
											))}
										</div>
									</div>
								</div>
								<div className="col-lg-6 mt-lg-0 mt-5">
									<nav>
										<div className="nav nav-tabs bg-neutral-100 justify-content-evenly border-bottom-0 mb-5" id="nav-tab" role="tablist">
											{tab.map((item, index) => (
												<button
													key={index}
													className={`nav-link ${activeTab === index ? 'active' : ''} position-relative`}
													onClick={() => setActiveTab(index)}
													role="tab"
												>
													{item.tab_title}
													<span className="underline bg-primary" />
												</button>
											))}
										</div>
									</nav>
									<div className="tab-content" id="nav-tabContent">
										{tab.map((item, index) => (
											<div key={index} className={`tab-pane fade ${activeTab === index ? 'show active' : ''}`} role="tabpanel">
												{item.description && <p className="text-900 mb-3">{item.description}</p>}
												<div className="row">
													<div className="col-12 col-md-6 mb-3 mb-md-0">
														<p className="text-900">{item.paragraph}</p>
														{item.points?.services && (
															<ul className="list-unstyled phase-items mb-0">
																{item.points.services.map((service, idx) => (
																	<li key={idx} className="d-flex align-items-center mt-3">
																		<img src="/assets/imgs/cta-2/check.svg" alt="Check call to action illustration" />
																		<p className="ms-2 mb-0 text-900 fs-6">{service.title}</p>
																	</li>
																))}
															</ul>
														)}
													</div>
													<div className="col-12 col-md-6 position-relative text-center">
														<img className="rounded-3" src="/assets/imgs/cta-7/img-2.png" alt="" />
														<Link href="#" className="position-md-absolute d-block translate-middle-md w-50 start-0 ms-md-0 ms-10 mt-3 mt-md-0 p-3 rounded-3 bg-linear-1">
															<span className="rounded-circle">
																<img className="rounded-circle border border-5 border-primary-light" src="/assets/imgs/cta-2/avatar-1.png" alt="Avatar 1 call to action illustration" />
															</span>
															<h6 className="mt-1">Kensei <span className="text-500 fs-6">, CEO</span></h6>
														</Link>
														<div className="position-md-absolute bottom-0 start-50 mt-3 mt-md-0 translate-middle-md-x">
															<img src="/assets/imgs/cta-7/name-admin.svg" alt="" />
														</div>
													</div>
												</div>
											</div>
										))}
									</div>
									<div className="border-top pt-6 mt-md-8 mt-6">
										{button.map((btn, index) => (
											<Link key={index} href={btn.link} className="fw-bold btn btn-gradient d-inline-flex align-items-center hover-up">
												<span className="me-10">{btn.title}</span>
												<svg xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="none">
													<path className="fill-white" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="white" />
												</svg>
											</Link>
										))}
										<p className="fs-7 text-500 mt-3">No Card Required. Cancel Anytime.</p>
									</div>
								</div>
							</div>
						</div>
						<div className="position-absolute top-0 end-0 z-1 flickering p-10 m-10 d-none d-lg-block">
							<img src="/assets/imgs/cta-7/star-1.svg" alt="" />
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
