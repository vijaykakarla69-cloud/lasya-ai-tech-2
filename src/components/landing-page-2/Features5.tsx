import Link from "next/link"

interface Features5Props {
	data?: {
		chips?: Array<{
			id: number;
			text: string;
		}>;
		card?: Array<{
			id: number;
			title: string;
			description: string;
			image?: Array<{
				url: string;
			}>;
			button?: Array<{
				title?: string;
				link?: string;
			}>;
		}>;
		technologies?: Array<{
			id: number;
			title: string;
			image?: Array<{
				url: string;
			}>;
		}>;
	};
}

export default function Features5({ data }: Features5Props) {
	return (
		<>
			<section className="section-feature-5">
				<div className="container-fluid position-relative section-padding bg-1">
					<div className="container">
						{data?.card?.[0] && (
							<div className="row align-items-center">
								<div className="col-lg-5">
									<div className="photo-description position-relative rounded-4">
										<img 
											className="rounded-4 border border-2 border-white position-relative z-1" 
											src={data.card[0].image?.[0]?.url ? `https://cms.kriva.tech${data.card[0].image[0].url}` : "/assets/imgs/features-5/img-1.png"} 
											alt="Feature illustration" 
										/>
										<div className="box-gradient-1 ms-lg-8 position-absolute bottom-0 start-0 bg-linear-1 rounded-4 z-0" />
									</div>
								</div>
								<div className="col-lg-6 offset-lg-1 mt-lg-0 mt-5">
									<h4 className="ds-4 fw-regular" dangerouslySetInnerHTML={{ __html: data.card[0].title || "All that's necessary <br /> for <span class='fw-bold'>effective team <br class='d-none d-lg-inline' /> effort.</span>" }} />
									<p className="fs-5">{data.card[0].description}</p>
									{data.card[0].button?.[0]?.title && (
										<Link href={data.card[0].button[0].link || "#"} className="btn btn-outline-secondary hover-up bg-transparent mt-5" data-aos="fade-zoom-in" data-aos-delay={200}>
											{data.card[0].button[0].title}
											<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path className="stroke-dark" d="M17.25 15.25V6.75H8.75" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												<path className="stroke-dark" d="M17 7L6.75 17.25" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</Link>
									)}
								</div>
							</div>
						)}
						<div className="row py-90">
							<div className="col-lg-10 px-lg-0 mx-lg-auto d-lg-flex justify-content-lg-between">
								{data?.chips?.map((chip, index) => (
									<Link 
										key={chip.id} 
										href="#" 
										className="px-4 py-3 bg-white hover-up rounded-pill text-500 fs-5 text-nowrap d-inline-block mb-lg-0 mb-3" 
										data-aos="fade-zoom-in" 
										data-aos-delay={index * 100}
									>
										{chip.text}
									</Link>
								))}
								{!data?.chips && (
									<>
										<Link href="#" className="px-4 py-3 bg-white hover-up rounded-pill text-500 fs-5 text-nowrap d-inline-block mb-lg-0 mb-3" data-aos="fade-zoom-in" data-aos-delay={0}>Team Messaging</Link>
										<Link href="#" className="px-4 py-3 bg-white hover-up rounded-pill text-500 fs-5 text-nowrap d-inline-block mb-lg-0 mb-3" data-aos="fade-zoom-in" data-aos-delay={100}>4K Video</Link>
										<Link href="#" className="px-4 py-3 bg-white hover-up rounded-pill text-500 fs-5 text-nowrap d-inline-block mb-lg-0 mb-3" data-aos="fade-zoom-in" data-aos-delay={200}>Ultimate Collaboration</Link>
										<Link href="#" className="px-4 py-3 bg-white hover-up rounded-pill text-500 fs-5 text-nowrap d-inline-block mb-lg-0 mb-3" data-aos="fade-zoom-in" data-aos-delay={300}>Unified Communications</Link>
										<Link href="#" className="px-4 py-3 bg-white hover-up rounded-pill text-500 fs-5 text-nowrap d-inline-block mb-lg-0 mb-3" data-aos="fade-zoom-in" data-aos-delay={400}>Advanced Meeting</Link>
									</>
								)}
							</div>
						</div>
						{data?.card?.[1] && (
							<div className="row align-items-start pb-5 pt-lg-5 pt-0">
								<div className="col-lg-5 order-2 order-lg-1 mt-lg-0 mt-10 pt-lg-0 pt-5">
									<h4 className="ds-4 fw-regular" dangerouslySetInnerHTML={{ __html: data.card[1].title || "Experience the <br /> <span class='fw-bold'>cutting-edge <br /></span>capabilities" }} />
									<p className="fs-5">{data.card[1].description}</p>
									{data.card[1].button?.[0]?.title && (
										<Link href={data.card[1].button[0].link || "#"} className="btn btn-outline-secondary hover-up bg-transparent mt-5" data-aos="fade-zoom-in" data-aos-delay={300}>
											{data.card[1].button[0].title}
											<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path className="stroke-dark" d="M17.25 15.25V6.75H8.75" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												<path className="stroke-dark" d="M17 7L6.75 17.25" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</Link>
									)}
								</div>
								<div className="col-lg-6 offset-lg-1 order-1 order-lg-2 mt-5 text-lg-end text-center">
									<div className="photo-description position-relative rounded-4 d-inline-block">
										<img 
											className="rounded-4 border border-2 border-white position-relative z-1" 
											src={data.card[1].image?.[0]?.url ? `https://cms.kriva.tech${data.card[1].image[0].url}` : "/assets/imgs/features-5/img-2.png"} 
											alt="Feature illustration" 
										/>
										<div className="position-absolute top-50 start-50 translate-middle z-0">
											<div className="box-gradient-2 position-relative bg-linear-1 rounded-4 z-0">
											</div>
										</div>
										<img className="position-absolute top-100 start-0 d-none d-md-block translate-middle rounded-4 border border-2 border-white position-relative z-1" src="/assets/imgs/features-5/img-3.png" alt="Feature illustration 3" data-aos="zoom-in" data-aos-delay={100} />
									</div>
								</div>
							</div>
						)}
						<div className="row pt-lg-150 pt-8 text-center d-none d-md-block">
							<div className="col-lg-10 col mx-lg-auto">
								<p className="text-500">Compatible with all operating systems and browsers in the world</p>
								<div className="compatible-group bg-white p-5 mt-5 rounded-4 d-md-flex justify-content-between">
									{data?.technologies?.map((tech) => (
										<div key={tech.id} className="compatible hover-up">
											<img src={tech.image?.[0]?.url ? `https://cms.kriva.tech${tech.image[0].url}` : `/assets/imgs/features-5/icon-${tech.id}.png`} alt={tech.title} />
											<p className="text-900 mt-3 mb-0">{tech.title}</p>
										</div>
									))}
									{!data?.technologies && (
										<>
											<div className="compatible hover-up">
												<img src="/assets/imgs/features-5/icon-1.png" alt="1 icon" />
												<p className="text-900 mt-3 mb-0">MacOs</p>
											</div>
											{/* Add other default technologies */}
										</>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
