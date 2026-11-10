'use client'
import Link from "next/link"

interface Cta6Props {
	data?: {
		looking_to_speak?: Array<{
			badge_text: string;
			title: string;
			description: string;
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

export default function Cta6({ data }: Cta6Props) {
	const speakData = data?.looking_to_speak?.[0];
	const buttons = speakData?.buttons || [];

	return (
		<>
			<section className="section-cta-6 position-relative section-padding fix">
				<div className="container">
					<div className="row g-0">
						<div className="col-lg-6 pe-lg-0">
							<div className="h-100 position-relative">
								<img 
									className="w-100 h-100 object-fit-cover rounded-start-4" 
									style={{ minHeight: '570px' }}
									src={speakData?.image?.[0]?.url ? `https://cms.kriva.tech${speakData.image[0].url}` : "/assets/imgs/cta-6/img-1.png"} 
									alt={speakData?.image?.[0]?.alternativeText || "speak with us"} 
								/>
							</div>
						</div>
						<div className="col-12 col-lg-6 ps-lg-0 align-self-stretch">
							<div className="bg-white p-md-8 p-5 rounded-end-4 h-100 border border-start-0 shadow-1">
								<div className="d-flex align-items-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill mb-2 px-4 py-2">
									<img src="/assets/imgs/features-1/dots.png" alt="" />
									<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">{speakData?.badge_text}</span>
								</div>
								<h1 className="fs-1 mt-4">{speakData?.title}</h1>
								<p className="mb-9 mt-4">{speakData?.description}</p>
								<div className="d-flex flex-md-row flex-column align-items-center justify-content-start mt-5">
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
											<Link key={index} href={button.link} className="ms-md-5 mt-md-0 mt-5 text-decoration-underline fw-bold">
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
		</>
	)
}
