import Link from "next/link"

export interface ServiceCard {
	id: number;
	title: string;
	description: string;
	image?: Array<{
		url: string;
	}>;
}

export interface Services1Data {
	badge_text: string;
	title: string;
	description: string;
	lapl_landing_page_5_collections: ServiceCard[];
}

interface Services1Props {
	data?: Services1Data;
}

export default function Services1({ data }: Services1Props) {
	if (!data) return null;

	return (
		<section className="section-padding">
			<div className="container">
				<div className="text-center">
					<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
						<img src="/assets/imgs/features-1/dots.png" alt="" />
						<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">{data.badge_text}</span>
					</div>
					<h3 className="ds-3 my-3" data-aos="fade-zoom-in" data-aos-delay={300}>{data.title}</h3>
					<p data-aos="fade-zoom-in" data-aos-delay={100}>{data.description}</p>
				</div>
				<div className="row mt-6 position-relative">
					{data.lapl_landing_page_5_collections.map((service, idx) => (
						<div key={service.id} className="col-lg-4">
							<div className="p-2 mt-5 rounded-4 shadow-1 bg-white position-relative z-1 hover-up" data-aos="fade-zoom-in" data-aos-delay={100 * (idx + 1)}>
								<div className="card-service bg-white p-6 border rounded-4">
									<img src={service.image?.[0]?.url ? (service.image[0].url.startsWith('/assets') ? service.image[0].url : `https://cms.kriva.tech${service.image[0].url}`) : "/assets/imgs/service-1/icon-1.svg"} alt="Service icon" />
									<h6 className="my-3">{service.title}</h6>
									<p className="mb-6">{service.description}</p>
									<Link href="#" className="rounded-pill border icon-shape d-inline-flex gap-3 icon-learn-more">
										<svg className="plus" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
											<g clipPath="url(#clip0_226_5470)">
												<path className="fill-dark" d="M15.375 7.375H8.625V0.625C8.625 0.279813 8.34519 0 8 0C7.65481 0 7.375 0.279813 7.375 0.625V7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H7.375V15.375C7.375 15.7202 7.65481 16 8 16C8.34519 16 8.625 15.7202 8.625 15.375V8.625H15.375C15.7202 8.625 16 8.34519 16 8C16 7.65481 15.7202 7.375 15.375 7.375Z" fill="#111827" />
											</g>
											<defs>
												<clipPath>
													<rect width={16} height={16} fill="white" />
												</clipPath>
											</defs>
										</svg>
										<svg className="arrow" xmlns="http://www.w3.org/2000/svg" width={18} height={10} viewBox="0 0 18 10" fill="none">
											<path className="fill-dark" d="M13.0633 0.0634766L12.2615 0.86529L15.8294 4.43321H0V5.56716H15.8294L12.2615 9.13505L13.0633 9.93686L18 5.00015L13.0633 0.0634766Z" fill="#111827" />
										</svg>
										<span className="fw-bold fs-7 text-900">Learn More</span>
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
