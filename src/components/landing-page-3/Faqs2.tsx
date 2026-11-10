'use client'
import { useState } from 'react';
import Link from "next/link"

interface Faqs2Props {
	data?: Array<{
		id: number;
		badge_text: string;
		title: string;
		subtitle: string;
		faq: Array<{
			id: number;
			title: string;
			description: string;
		}>;
	}>;
}

export default function Faqs2({ data }: Faqs2Props) {
	// Accordion
	const [activeItem, setActiveItem] = useState(1);

	const handleActiveItem = (index: any) => {
		setActiveItem(index);
	};

	const faqData = data?.[0] || {
		badge_text: "Pricing FAQs",
		title: "Ask us anything",
		subtitle: "Have any questions? We're here to assist you.",
		faq: []
	};

	// Split FAQs into two columns
	const midPoint = Math.ceil(faqData.faq.length / 2);
	const leftColumnFaqs = faqData.faq.slice(0, midPoint);
	const rightColumnFaqs = faqData.faq.slice(midPoint);

	return (
		<>
			<section className="section-faqs-2 section-padding bg-4 position-relative">
				<div className="container position-relative z-2">
					<div className="text-center mb-8">
						<div className="d-flex align-items-center position-relative z-2 justify-content-center bg-primary-soft d-inline-flex rounded-pill border border-2 border-white px-3 py-1">
							<img src="/assets/imgs/features-1/dots.png" alt="" />
							<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">{faqData.badge_text}</span>
						</div>
						<h3 className="ds-3 my-3 fw-bold">{faqData.title}</h3>
						<p className="fs-5 mb-0">{faqData.subtitle}</p>
					</div>
					<div className="row align-items-center position-relative z-1">
						<div className="col-lg-6">
							<div className="accordion">
								{leftColumnFaqs.map((item, index) => (
									<div key={item.id} className="mb-3 card p-3 border bg-white rounded-3">
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={`pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(index + 1)} data-bs-toggle="collapse">
												<h6 className="m-0">{item.title}</h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id={`collapse${index + 1}`} className={activeItem === index + 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="ps-0 card-body">
												{item.description}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>
						<div className="col-lg-6 mt-lg-0 mt-2">
							<div className="accordion">
								{rightColumnFaqs.map((item, index) => (
									<div key={item.id} className="mb-3 card p-3 border bg-white rounded-3">
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={`pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(index + midPoint + 1)} data-bs-toggle="collapse">
												<h6 className="m-0">{item.title}</h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id={`collapse${index + midPoint + 1}`} className={activeItem === index + midPoint + 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="ps-0 card-body">
												{item.description}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="ellipse-center position-absolute top-50 start-50 translate-middle z-0" />
				</div>
			</section>
		</>
	)
}
