'use client'
import Link from "next/link"
import CountUp from 'react-countup'

export interface Features3Data {
	image?: string;
	rateForUsTitle?: string;
	avatars?: string[];
	rateText?: string;
	companyVisionTitle?: string;
	companyVisionHeading?: string;
	companyVisionDescription?: string;
	ctaButton?: {
		text: string;
		link: string;
	};
	ctaLink?: {
		text: string;
		link: string;
	};
	stats?: Array<{
		value: number;
		suffix?: string;
		label: string;
	}>;
}

interface Features3Props {
	data?: Features3Data;
}

export default function Features3({ data }: Features3Props) {
	if (!data) return null;

	return (
		<section>
			<div className="container-fluid position-relative bg-neutral-100 section-padding bg-neutral-100">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6 text-lg-end text-center">
							<div className="position-relative d-inline-block mb-lg-0 mb-8">
								<img className="rounded-4" src={data.image} alt="Feature illustration" data-aos="fade-zoom-in" data-aos-delay={200} />
								<div className="position-absolute bottom-0 start-0 translate-middle-md-x mb-md-8 backdrop-filter rounded-3 p-md-4 p-3 text-center">
									<h6>{data.rateForUsTitle}</h6>
									<div className="d-flex align-items-center justify-content-center py-4">
										{data.avatars?.map((avatar, idx) => (
											<img key={idx} src={avatar} alt="Feature illustration" className={idx > 0 ? `avt-hero z-${idx}` : ''} />
										))}
									</div>
									<p className="pt-2">{data.rateText}</p>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="ps-lg-5">
								<h6 data-aos="fade-zoom-in" data-aos-delay={100}>{data.companyVisionTitle}</h6>
								<h3 className="ds-3 mt-2 mb-5" data-aos="fade-zoom-in" data-aos-delay={200}>{data.companyVisionHeading}</h3>
								<p className="mb-5" data-aos="fade-zoom-in" data-aos-delay={300}>{data.companyVisionDescription}</p>
								<div className="d-flex align-items-center pb-7 border-bottom">
									{data.ctaButton && (
										<Link href={data.ctaButton.link} className="btn btn-gradient" data-aos="fade-zoom-in" data-aos-delay={0}>
											{data.ctaButton.text}
											<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path className="stroke-white" d="M17.25 15.25V6.75H8.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												<path className="stroke-white" d="M17 7L6.75 17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</Link>
									)}
									{data.ctaLink && (
										<Link href={data.ctaLink.link} className="ms-5 text-decoration-underline fw-bold" data-aos="fade-zoom-in" data-aos-delay={300}>{data.ctaLink.text}</Link>
									)}
								</div>
								<div className="row">
									{data.stats?.map((stat, idx) => (
										<div key={idx} className={`col-12 col-md-6 d-flex align-items-center justify-content-center${idx === 0 ? ' border-end' : ''} mt-5`}>
											<h2 className="odometer"><CountUp end={typeof stat.value === 'number' && !isNaN(stat.value) ? stat.value : 0} enableScrollSpy={true} /></h2>
											{stat.suffix && <span className="fs-4 fw-medium align-self-start">{stat.suffix}</span>}
											<p className="ms-3" data-aos="fade-zoom-in" data-aos-delay={200 + idx * 100}>{stat.label}</p>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
