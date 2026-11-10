'use client'
import Link from "next/link"
import CountUp from 'react-countup'

interface Features8Props {
	data?: {
		core_values?: Array<{
			title: string;
			description: string;
			stat_numbers: Array<{
				preffix: string | null;
				number: number;
				suffix: string | null;
				text: string;
			}>;
			core_values_cards: Array<{
				title: string;
				description: string;
			}>;
		}>;
	};
}

export default function Features8({ data }: Features8Props) {
	const coreValuesData = data?.core_values?.[0];
	const statNumbers = coreValuesData?.stat_numbers || [];
	const coreValuesCards = coreValuesData?.core_values_cards || [];

	return (
		<>
			<section>
				<div className="container-fluid position-relative bg-primary-light section-padding">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-4 col-md-6 mb-lg-0 mb-8 pe-5 pe-lg-10 position-relative z-1">
								<img src="/assets/imgs/features-8/icon-star.svg" alt="" />
								<h2 className="text-white mt-3 mb-4 fw-black">{coreValuesData?.title}</h2>
								<p className="text-white">{coreValuesData?.description}</p>
								{statNumbers.map((stat, index) => (
									<div key={index} className="col d-flex align-items-center mt-5 min-w-">
										<span className="h2 count fw-black text-white min-w-70">
											{stat.preffix}
											<span className="odometer" />
											<CountUp end={stat.number} enableScrollSpy={true} />
										</span>
										{stat.suffix && <span className="fw-medium text-white fs-4 align-self-start">{stat.suffix}</span>}
										<p className="ms-3 text-white">{stat.text}</p>
									</div>
								))}
							</div>
							<div className="col-lg-4 col-md-6 mb-lg-0 mb-8 pe-lg-8">
								<ul className="list-unstyled">
									{coreValuesCards.slice(0, 3).map((card, index) => (
										<li key={index}>
											<Link href="#" className="d-flex align-items-start mb-6">
												<img className="mt-2" src="/assets/imgs/features-2/tick.svg" alt="Tick feature illustration" />
												<div className="ms-3 pb-4 border-bottom">
													<h5 className="text-white mb-2">{card.title}</h5>
													<p className="text-white mb-0">{card.description}</p>
												</div>
											</Link>
										</li>
									))}
								</ul>
							</div>
							<div className="col-lg-4 mb-lg-0 mb-8 pe-lg-8">
								<ul className="list-unstyled">
									{coreValuesCards.slice(3, 6).map((card, index) => (
										<li key={index}>
											<Link href="#" className="d-flex align-items-start mb-6">
												<img className="mt-2" src="/assets/imgs/features-2/tick.svg" alt="Tick feature illustration" />
												<div className="ms-3 pb-4 border-bottom">
													<h5 className="text-white mb-2">{card.title}</h5>
													<p className="text-white mb-0">{card.description}</p>
												</div>
											</Link>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
					<div className="position-absolute bottom-0 start-0 bg-rotate z-0">
						<img className="rotate-center" src="/assets/imgs/features-8/bg-img-favicon.png" alt="" />
					</div>
					<div className="position-absolute top-0 end-0 z-1 p-8">
						<div className="bloom" />
					</div>
				</div>
			</section>
		</>
	)
}
