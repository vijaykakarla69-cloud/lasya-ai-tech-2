import Marquee from "react-fast-marquee";

interface LogoCloud4Props {
	data?: {
		technologies?: Array<{
			technologies: Array<{
				image: Array<{
					url: string;
					alternativeText: string | null;
				}>;
			}>;
		}>;
	};
}

export default function LogoCloud4({ data }: LogoCloud4Props) {
	const logos = data?.technologies?.[0]?.technologies?.[0]?.image || [];

	return (
		<>
			<div className="container-fluid mt-8 mt-lg-0 bg-4">
				<div className="container">
					<div className="row">
						{/* Carausel Scroll */}
						<div className="carouselTicker carouselTicker-right my-7 position-relative z-1">
							<ul className="carouselTicker__list">
								<Marquee direction="right">
									{logos.map((logo, index) => (
										<li key={index} className="carouselTicker__item">
											<img 
												src={`https://cms.kriva.tech${logo.url}`} 
												alt={logo.alternativeText || "technology logo"} 
											/>
										</li>
									))}
								</Marquee>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
