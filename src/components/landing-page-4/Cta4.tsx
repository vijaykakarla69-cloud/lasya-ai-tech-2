'use client'
import Link from "next/link"
import { useState } from 'react'
import ModalVideo from 'react-modal-video'

interface Cta4Props {
	data?: {
		custom_services?: Array<{
			badge_text: string;
			title: string;
			subtitle: string;
			ponits: {
				services: Array<{
					title: string;
				}>;
			};
			buttons: Array<{
				title: string;
				link: string;
			}>;
			image: Array<{
				url: string;
				alternativeText: string | null;
			}>;
		}>;
	};
}

export default function Cta4({ data }: Cta4Props) {
	const [isOpen, setOpen] = useState(false)
	const serviceData = data?.custom_services?.[0];
	const services = serviceData?.ponits?.services || [];
	const buttons = serviceData?.buttons || [];

	return (
		<>
			<section className="section-cta-4 pb-110 @@classList">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 text-center">
							<div className="text-center rounded-4 position-relative d-inline-flex">
								<div className="zoom-img rounded-4 position-relative z-1" style={{ minWidth: '570px', minHeight: '570px' }}>
									<img 
										className="rounded-4 w-100 h-100 object-fit-cover" 
										style={{ width: '570px', height: '570px', objectFit: 'cover' }}
										src={serviceData?.image?.[0]?.url ? `https://cms.kriva.tech${serviceData.image[0].url}` : "/assets/imgs/cta-4/img-1.png"} 
										alt={serviceData?.image?.[0]?.alternativeText || "service image"} 
									/>
									<div className="position-absolute top-50 start-50 translate-middle z-2">
										<Link href="#" onClick={() => setOpen(true)} scroll={false} className="d-inline-flex align-items-center rounded-4 text-nowrap backdrop-filter px-3 py-2 popup-video hover-up me-3 shadow-1">
											<span className="backdrop-filter me-2 icon-shape icon-md rounded-circle">
												<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
													<path className="stroke-dark" d="M5.0978 3.31244L12.0958 6.80342C13.077 7.29449 13.0767 8.69249 12.0954 9.18316L5.09734 12.6927C4.21074 13.136 3.16687 12.4925 3.16687 11.5027L3.16687 4.50219C3.16687 3.51217 4.2112 2.86872 5.0978 3.31244Z" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</span>
											<span className="fw-bold fs-7 text-900">
												Video Guide
											</span>
										</Link>
									</div>
								</div>
								<div className="position-absolute top-100 start-0 translate-middle z-0 pt-5">
									<img className="alltuchtopdown" src="/assets/imgs/cta-4/vector.svg" alt="" />
								</div>
							</div>
						</div>
						<div className="col-lg-6 mt-lg-0 mt-8">
							<h6 className="text-primary">{serviceData?.badge_text}</h6>
							<h5 className="ds-5 my-3">{serviceData?.title}</h5>
							<p className="fs-5 text-500">{serviceData?.subtitle}</p>
							<div className="d-md-flex align-items-center mt-4 mb-5">
								<ul className="list-unstyled phase-items mb-0">
									{services.slice(0, 2).map((service, index) => (
										<li key={index} className="d-flex align-items-center mt-3">
											<img src="/assets/imgs/cta-2/check.svg" alt="check" />
											<span className="ms-2 text-900">{service.title}</span>
										</li>
									))}
								</ul>
								<ul className="list-unstyled phase-items ms-md-5 mb-0">
									{services.slice(2, 4).map((service, index) => (
										<li key={index} className="d-flex align-items-center mt-3">
											<img src="/assets/imgs/cta-2/check.svg" alt="check" />
											<span className="ms-2 text-900">{service.title}</span>
										</li>
									))}
								</ul>
							</div>
							<div className="row mt-8">
								<div className="d-flex align-items-center">
									{buttons.map((button, index) => (
										index === 0 ? (
											<Link key={index} href={button.link} className="btn btn-gradient">
												{button.title}
												<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
													<path className="stroke-white" d="M17.25 15.25V6.75H8.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													<path className="stroke-white" d="M17 7L6.75 17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</Link>
										) : (
											<Link key={index} href={button.link} className="ms-5 text-decoration-underline fw-bold">
												{button.title}
											</Link>
										)
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
