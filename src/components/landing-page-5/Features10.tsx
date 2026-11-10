import Link from "next/link"

export interface Features10Props {
	data?: Array<{
		title: string;
		description: string;
		image: Array<{
			url: string;
		}>;
	}>;
}

export default function Features10({ data }: Features10Props) {
	if (!data || data.length === 0) {
		return null;
	}

	return (
		<>
			<section className="features-10 py-9 bg-primary-light">
				<div className="container">
					<div className="row">
						{data.map((feature, index) => (
							<div key={index} className="col-lg-3 col-md-6">
								<div className="feature-item mb-5 position-relative mb-lg-0 bg-white p-5 rounded-4 hover-up">
									<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
										<div className="icon">
											<img src={`https://cms.kriva.tech${feature.image[0]?.url}`} alt="Feature illustration" />
										</div>
									</div>
									<h6>{feature.title}</h6>
									<p>{feature.description}</p>
									<Link href="#" className="text-primary fs-7 fw-bold">
										Learn More
										<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={19} height={18} viewBox="0 0 19 18" fill="none">
											<g clipPath="url(#clip0_399_9647)">
												<path className="fill-dark" d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z" fill="#111827" />
											</g>
											<defs>
												<clipPath>
													<rect width={18} height={18} fill="white" transform="translate(0.5)" />
												</clipPath>
											</defs>
										</svg>
									</Link>
									<div className="position-absolute end-0 top-0">
										<img src="/assets/imgs/feature-10/bg-line.png" alt="" />
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	)
}
