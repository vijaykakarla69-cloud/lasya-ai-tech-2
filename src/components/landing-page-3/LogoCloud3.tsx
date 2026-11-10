import Marquee from "react-fast-marquee";

interface LogoCloud3Props {
	data?: Array<{
		id: number;
		title: string;
		images: Array<{
			id: number;
			image: Array<{
				id: number;
				url: string;
				name: string;
			}>;
		}>;
	}>;
}

export default function LogoCloud3({ data }: LogoCloud3Props) {
	const logoData = data?.[0] || {
		title: "Trusted by great companies",
		images: []
	};

	return (
		<>
			<div className="section-logo-cloud container-fluid pt-110 pb-110 mt-lg-0 border-top border-bottom">
				<div className="container">
					<h5 className="text-500 mb-5 text-center">{logoData.title}</h5>
					<div className="carouselTicker carouselTicker-right">
						<ul className="carouselTicker__list pb-4">
							<Marquee direction="right">
								{logoData.images.map((item) => (
									<li key={item.id} className="carouselTicker__item bg-white py-3 px-4 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
										<img 
											className={item.image[0]?.name.includes('logo-1') ? 'filter-invert' : ''} 
											src={`https://cms.kriva.tech${item.image[0]?.url}`} 
											alt="Client logo" 
										/>
									</li>
								))}
							</Marquee>
						</ul>
					</div>
					<div className="row">
						<div className="col-lg-10 mx-lg-auto">
							<div className="carouselTicker carouselTicker-left">
								<ul className="carouselTicker__list pb-4">
									<Marquee>
										{logoData.images.map((item) => (
											<li key={item.id} className="carouselTicker__item bg-white py-3 px-4 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2">
												<img 
													className={item.image[0]?.name.includes('logo-1') ? 'filter-invert' : ''} 
													src={`https://cms.kriva.tech${item.image[0]?.url}`} 
													alt="Client logo" 
												/>
											</li>
										))}
									</Marquee>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
