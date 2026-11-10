"use client"
import Link from "next/link"
import { useState } from "react";

export interface Faqs3Props {
	data?: Array<{
		badge_text: string;
		title: string;
		description: string;
		buttons: Array<{
			title: string;
			link: string;
		}>;
		FAQ: Array<{
			title: string;
			description: string;
		}>;
	}>;
}

export default function Faqs3({ data }: Faqs3Props) {
	const [activeItem, setActiveItem] = useState(1);

	if (!data || data.length === 0) {
		return null;
	}

	const faqData = data[0];
	const { badge_text, title, description, buttons, FAQ } = faqData;

	const handleActiveItem = (index: number) => {
		setActiveItem(index);
	};

	return (
		<>
			<section className="section-faqs-1 section-padding position-relative">
				<div className="container position-relative z-2">
					<div className="row align-items-center">
						<div className="col-lg-6">
							<div className="text-start">
								<div className="d-flex align-items-center position-relative z-2 justify-content-center bg-primary-soft d-inline-flex rounded-pill border border-2 border-white px-3 py-1">
									<img src="/assets/imgs/features-1/dots.png" alt="" />
									<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">{badge_text}</span>
								</div>
								<h3 className="ds-3 my-3 fw-bold">
									{title} <br />
									We've got answers
								</h3>
								<div className="position-relative d-inline-block mt-3 mb-6">
									<img src="/assets/imgs/faqs-3/img-1.png" alt="" className=" rounded-pill border border-3 border-white" />
									<img src="/assets/imgs/faqs-3/img-2.png" alt="" className="position-absolute z-1 top-0 start-50 mt-3 rounded-pill border border-3 border-white" />
								</div>
								<p className="fs-5 mb-0">{description}</p>
								<div className="d-flex align-items-center mt-5">
									{buttons.map((button, index) => (
										<Link key={index} href={button.link} className={index === 0 ? "btn btn-gradient" : "ms-5 fw-bold"}>
											{button.title}
											{index === 0 && (
												<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
													<path className="stroke-white" d="M17.25 15.25V6.75H8.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													<path className="stroke-white" d="M17 7L6.75 17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											)}
										</Link>
									))}
								</div>
							</div>
						</div>
						<div className="col-lg-6 mt-lg-0 mt-8 ">
							<div className="accordion">
								{FAQ.map((item, index) => (
									<div key={index} className="mb-3 card p-3 border bg-white rounded-2 shadow-2">
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
											<p className="ps-0card-body">{item.description}</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
