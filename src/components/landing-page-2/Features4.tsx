import Link from "next/link"

interface Features4Props {
	data?: {
		badgetext?: string;
		title?: string;
		lapl_ultra_hd_collections?: Array<{
			id: number;
			title: string;
			description: string;
			icon?: Array<{
				url: string;
			}>;
		}>;
	};
}

export default function Features4({ data }: Features4Props) {
	return (
		<>
			<section>
				<div className="container-fluid position-relative bg-linear-3 section-padding">
					<div className="container">
						<div className="text-center mb-8">
							<div className="d-flex align-items-center justify-content-center bg-primary-soft d-inline-flex rounded-pill border-white border px-3 py-1" data-aos="zoom-in" data-aos-delay={200}>
								<img src="/assets/imgs/features-1/dots.png" alt="" />
								<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">{data?.badgetext || "WHAT WE OFFER"}</span>
							</div>
							<h3 className="ds-3 my-3 fw-regular" dangerouslySetInnerHTML={{ __html: data?.title || "Professional <span class='fw-bold' data-aos='fade-zoom-in' data-aos-delay='200'>UltraHD Video <br class='d-none d-lg-block' /> Conferencing</span> Platform" }} />
						</div>
						<div className="row">
							{data?.lapl_ultra_hd_collections?.map((item, index) => (
								<div key={item.id} className="col-lg-3 col-md-6 mt-4 mt-lg-0" data-aos="fade-zoom-in" data-aos-delay={index * 100}>
									<div className={`card-service bg-white p-5 rounded-4 hover-up ${index % 2 === 1 ? 'mt-lg-6' : ''}`}>
										{item.icon?.[0]?.url ? (
											<img className="filter-invert" src={`https://cms.kriva.tech${item.icon[0].url}`} alt={item.title} />
										) : (
											<img className="filter-invert" src={`/assets/imgs/features-4/icon-${index + 1}.svg`} alt="Feature illustration" />
										)}
										<h6 className="my-3 fs-5">{item.title}</h6>
										<p className="mb-6">{item.description}</p>
										<Link href="#" className="rounded-pill border icon-shape d-inline-flex gap-3 icon-learn-more">
											<svg className="plus" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
												<g clipPath="url(#)">
													<path className="fill-dark" d="M15.375 7.375H8.625V0.625C8.625 0.279813 8.34519 0 8 0C7.65481 0 7.375 0.279813 7.375 0.625V7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H7.375V15.375C7.375 15.7202 7.65481 16 8 16C8.34519 16 8.625 15.7202 8.625 15.375V8.625H15.375C15.7202 8.625 16 8.34519 16 8C16 7.65481 15.7202 7.375 15.375 7.375Z" fill="#111827" />
												</g>
											</svg>
											<svg className="arrow" xmlns="http://www.w3.org/2000/svg" width={18} height={10} viewBox="0 0 18 10" fill="none">
												<path className="fill-dark" d="M13.0633 0.0634766L12.2615 0.86529L15.8294 4.43321H0V5.56716H15.8294L12.2615 9.13505L13.0633 9.93686L18 5.00015L13.0633 0.0634766Z" fill="#111827" />
											</svg>
											<span className="fw-bold fs-7 text-900">Learn More</span>
										</Link>
									</div>
								</div>
							))}
							{!data?.lapl_ultra_hd_collections && (
								<>
									{/* Default hardcoded items */}
									<div className="col-lg-3 col-md-6 mt-4 mt-lg-0" data-aos="fade-zoom-in" data-aos-delay={0}>
										<div className="card-service bg-white p-5 rounded-4 hover-up">
											<img className="filter-invert" src="/assets/imgs/features-4/icon-1.svg" alt="1 icon" />
											<h6 className="my-3 fs-5">Unified Communications</h6>
											<p className="mb-6">Promptly solve urgent work issues! Create personal and group chats that allow for exchanging messages not only during conferences but also outside of them.</p>
											<Link href="#" className="rounded-pill border icon-shape d-inline-flex gap-3 icon-learn-more">
												<svg className="plus" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
													<g clipPath="url(#)">
														<path className="fill-dark" d="M15.375 7.375H8.625V0.625C8.625 0.279813 8.34519 0 8 0C7.65481 0 7.375 0.279813 7.375 0.625V7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H7.375V15.375C7.375 15.7202 7.65481 16 8 16C8.34519 16 8.625 15.7202 8.625 15.375V8.625H15.375C15.7202 8.625 16 8.34519 16 8C16 7.65481 15.7202 7.375 15.375 7.375Z" fill="#111827" />
													</g>
												</svg>
												<svg className="arrow" xmlns="http://www.w3.org/2000/svg" width={18} height={10} viewBox="0 0 18 10" fill="none">
													<path className="fill-dark" d="M13.0633 0.0634766L12.2615 0.86529L15.8294 4.43321H0V5.56716H15.8294L12.2615 9.13505L13.0633 9.93686L18 5.00015L13.0633 0.0634766Z" fill="#111827" />
												</svg>
												<span className="fw-bold fs-7 text-900">Learn More</span>
											</Link>
										</div>
									</div>
									{/* Add other default items here */}
								</>
							)}
						</div>
						<div className="row mt-8">
							<div className="col-lg-7">
								<div className="d-flex align-items-center justify-content-lg-end justify-content-center">
									<Link href="#" className="btn btn-gradient">
										Get Free Quote
										<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
											<path className="stroke-white" d="M17.25 15.25V6.75H8.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											<path className="stroke-white" d="M17 7L6.75 17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</Link>
									<Link href="#" className="ms-5 text-decoration-underline fw-bold">How We Work</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
