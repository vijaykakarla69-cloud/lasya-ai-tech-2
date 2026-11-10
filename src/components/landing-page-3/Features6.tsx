'use client'
import Link from "next/link"
import { useState } from "react";
import CountUp from 'react-countup'

interface Features6Props {
	data?: Array<{
		id: number;
		badge_text: string;
		title: string;
		prefix: string;
		number: number;
		suffix: string;
		description: string;
		faq: Array<{
			id: number;
			title: string;
			description: string;
		}>;
		right_side_cards: Array<{
			id: number;
			title: string;
			description: string;
			icon: Array<{
				id: number;
				url: string;
				name: string;
			}>;
		}>;
	}>;
}

export default function Features6({ data }: Features6Props) {
	// Accordion
	const [activeItem, setActiveItem] = useState(1);

	const handleActiveItem = (index: any) => {
		setActiveItem(index);
	};

	const standOutData = data?.[0] || {
		badge_text: "Why We Are The Best",
		title: "Proud projects that make us stand out",
		prefix: "+",
		number: 50,
		suffix: "k",
		description: "Nunc bibendum augue sed mattis porta. Donec pharetra magna tortor, quis bibendum ligula faucibus vitae,",
		faq: [],
		right_side_cards: []
	};

	return (
		<>
			<section className="section-team-1 position-relative fix section-padding">
				<div className="container position-relative z-2">
					<div className="text-center">
						<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
							<img src="/assets/imgs/features-1/dots.png" alt="" />
							<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">{standOutData.badge_text}</span>
						</div>
						<h3 className="ds-3 my-3 fw-regular">{standOutData.title}</h3>
					</div>
					<div className="row mt-8">
						<div className="col-lg-6 mt-lg-0 mt-5">
							<div>
								<div className="counter-item-cover counter-item">
									<div className="content text-start mx-auto">
										<h2 className="count ds-2 fw-bold text-primary my-0">
											{standOutData.prefix}
											<span className="odometer" />
											<CountUp end={standOutData.number} enableScrollSpy={true} />
											{standOutData.suffix}
										</h2>
									</div>
								</div>
							</div>
							<p className="fs-5 text-500">{standOutData.description}</p>
							<div className="accordion">
								{standOutData.faq.map((item, index) => (
									<div key={item.id} className="px-0 card p-3 border-0 border-bottom bg-transparent rounded-0">
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
											<p className="px-0 card-body fs-6 text-600">
												{item.description}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>
						<div className="col-lg-6 px-lg-6 mt-lg-0 mt-8">
							{standOutData.right_side_cards.map((card) => (
								<Link key={card.id} href="#" className="d-flex flex-column flex-md-row align-items-center mb-6 hover-up">
									<img className="rounded-3 w-100 w-md-auto" src={`https://cms.kriva.tech${card.icon[0]?.url}`} alt="Feature illustration" />
									<div className="content mt-md-0 mt-4 ms-5">
										<h6 className="mb-2">{card.title}</h6>
										<p>{card.description}</p>
									</div>
								</Link>
							))}
						</div>
					</div>
				</div>
				<div className="position-absolute top-0 start-50 translate-middle-x z-0">
					<img src="/assets/imgs/service-2/bg-line.png" alt="" />
				</div>
				<div className="rotate-center ellipse-rotate-success position-absolute z-1" />
				<div className="rotate-center-rev ellipse-rotate-primary position-absolute z-1" />
			</section>
		</>
	)
}
