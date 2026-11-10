import Link from "next/link"

export interface LogoCloud5Props {
	data?: Array<{
		id: number;
		title: string;
		sub: string;
		images: Array<{
			id: number;
			image: Array<{
				id: number;
				name: string;
				url: string;
				width: number;
				height: number;
			}>;
		}>;
	}>;
}

export default function LogoCloud5({ data }: LogoCloud5Props) {
	if (!data || data.length === 0) {
		return null;
	}

	const developersData = data[0];
	if (!developersData) {
		return null;
	}

	const { title, sub, images = [] } = developersData;
	const logos = images[0]?.image || [];

	if (!logos.length) {
		return null;
	}

	return (
		<>
			<section className="section-logo-cloud section-logo-cloud-5 position-relative">
				<div className="container-fluid pt-110 pb-110 mt-lg-0 border-top border-bottom">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-3 pb-lg-0 pb-8">
								<h4 className="text-nowrap">{title}</h4>
								<p className="pt-2 pb-4">{sub}</p>
								<Link href="#" className="shadow-1 btn text-start bg-white d-inline-block text-primary hover-up">
									View our partners
									<svg className="ms-3" xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="none">
										<path className="fill-dark" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="black" />
									</svg>
								</Link>
							</div>
							<div className="col-lg-9 ps-lg-8 d-flex flex-wrap">
								{logos.map((logo, index) => (
									logo?.url && (
										<div key={index} className="bg-white py-3 px-3 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
											<img 
												className={index === 0 ? "filter-invert" : ""} 
												src={`https://cms.kriva.tech${logo.url}`} 
												alt={logo.name || `Partner logo ${index + 1}`}
												width={logo.width}
												height={logo.height}
											/>
										</div>
									)
								))}
							</div>
						</div>
					</div>
					<div className="bouncing-blobs-container rounded-4 fix">
						<div className="bouncing-blobs-glass rounded-4" />
						<div className="bouncing-blobs">
							<div className="bouncing-blob bouncing-blob--green" />
							<div className="bouncing-blob bouncing-blob--primary" />
							<div className="bouncing-blob bouncing-blob--infor bouncing-blob--infor-2" />
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
