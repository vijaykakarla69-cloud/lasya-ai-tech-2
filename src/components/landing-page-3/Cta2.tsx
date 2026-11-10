'use client'
import Link from "next/link"
import { useState } from 'react'
import CountUp from 'react-countup'
import ModalVideo from 'react-modal-video'

interface Cta2Props {
	data?: {
		id: number;
		badge_text: string;
		title1: string;
		title2: string;
		description: string;
		points: Array<{
			point: string;
		}>;
		stats: Array<{
			id: number;
			preffix: string;
			number: number;
			suffix: string | null;
			text: string;
		}>;
		image: Array<{
			id: number;
			url: string;
			name: string;
		}>;
	};
}

export default function Cta2({ data }: Cta2Props) {
	const [isOpen, setOpen] = useState(false)

	const solutionData = data || {
		badge_text: "Why We Are The Best",
		title1: "We provide solutions to big small organizations",
		title2: "Where your financial dreams become reality",
		description: "Provide your team with top-tier group mentoring programs and exceptional professional benefits.",
		points: [
			{ point: "Best For IT Consulting" },
			{ point: "Save Money & Time" },
			{ point: "Innovative Approaches" },
			{ point: "100% Satisfaction" }
		],
		stats: [
			{
				id: 1,
				preffix: "+",
				number: 12,
				suffix: null,
				text: "Years' Experience"
			}
		],
		image: [
			{
				id: 1,
				url: "/assets/imgs/cta-2/img-1.png",
				name: "img-1.png"
			}
		]
	};

	return (
		<>
			<section className="section-cta-2 bg-3 position-relative section-padding fix">
				<div className="container">
					<div className="text-center mb-8">
						<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
							<img src="/assets/imgs/features-1/dots.png" alt="" />
							<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">{solutionData.badge_text}</span>
						</div>
						<h3 className="ds-3 my-3 fw-regular">{solutionData.title1}</h3>
					</div>
					<div className="row">
						<div className="col-lg-5 pe-lg-0">
							<div className="bg-linear-1 text-center rounded-4 position-relative">
								<img className="rounded-4 border border-2 border-white mb-10 mt-5" src={`https://cms.kriva.tech${solutionData.image[0]?.url}`} alt="Call to action illustration" />
								<div className="position-absolute bottom-0 left-0 mb-3 w-100">
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
									<ModalVideo channel='youtube' isOpen={isOpen} videoId="gXFATcwrO-U" onClose={() => setOpen(false)} />
								</div>
								<div className="position-absolute top-0 end-0">
									<img className="flickering" src="/assets/imgs/cta-2/star-2.png" alt="" />
								</div>
								<div className="position-absolute bottom-0 start-0">
									<img className="alltuchtopdown" src="/assets/imgs/cta-2/star-1.png" alt="" />
								</div>
							</div>
						</div>
						<div className="col-lg-6 offset-lg-1 ps-lg-0 pe-lg-5 mt-lg-0 mt-6">
							<h5 className="ds-5">{solutionData.title2}</h5>
							<p className="fs-5 text-500">{solutionData.description}</p>
							<div className="d-md-flex align-items-center mt-4 mb-5">
								<ul className="list-unstyled phase-items mb-0">
									{solutionData.points.slice(0, 2).map((point, index) => (
										<li key={index} className="d-flex align-items-center mt-3">
											<img src="/assets/imgs/cta-2/check.svg" alt="Check call to action illustration" />
											<span className="ms-2 text-900 fw-medium fs-6">{point.point}</span>
										</li>
									))}
								</ul>
								<ul className="list-unstyled phase-items ms-md-5 mb-0">
									{solutionData.points.slice(2, 4).map((point, index) => (
										<li key={index} className="d-flex align-items-center mt-3">
											<img src="/assets/imgs/cta-2/check.svg" alt="Check call to action illustration" />
											<span className="ms-2 text-900 fw-medium fs-6">{point.point}</span>
										</li>
									))}
								</ul>
							</div>
							<div className="row position-relative mt-5 mt-md-0">
								<div className="col-md-6 d-flex align-items-center">
									<div className="rounded-circle">
										<img className="rounded-circle border border-5 border-primary-light" src="assets/imgs/cta-2/avatar-1.png" alt="Avatar 1 call to action illustration" />
									</div>
									<div className="ms-3">
										<img className="filter-invert" src="/assets/imgs/cta-2/name-ad.svg" alt="Name Ad call to action illustration" />
										<h6 className="mt-1">Kensei <span className="text-500 fs-6">, CEO</span></h6>
									</div>
								</div>
								<div className="col-md-6 d-flex align-items-center">
									<span className="line-verticarl border-start h-50 pe-8 position-absolute top-50 start-50 translate-middle d-none d-md-block" />
									<div className="counter-item-cover counter-item">
										<div className="content text-center mx-auto">
											<h2 className="count ds-2 fw-black text-primary">
												{solutionData.stats[0].preffix}
												<span className="odometer" />
												<CountUp end={solutionData.stats[0].number} enableScrollSpy={true} />
												{solutionData.stats[0].suffix && <span>{solutionData.stats[0].suffix}</span>}
											</h2>
										</div>
									</div>
									<p className="ms-3 fs-5">{solutionData.stats[0].text}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
