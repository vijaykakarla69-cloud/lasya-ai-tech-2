'use client'
import CountUp from 'react-countup'

interface Static2Props {
	data?: Array<{
		id: number;
		stats: Array<{
			id: number;
			preffix: string;
			number: number;
			suffix: string | null;
			text: string;
		}>;
	}>;
}

export default function Static2({ data }: Static2Props) {
	const statsData = data?.[0]?.stats || [
		{
			id: 1,
			preffix: "+",
			number: 24,
			suffix: "k",
			text: "Continuous growth with"
		},
		{
			id: 2,
			preffix: "+",
			number: 1024,
			suffix: null,
			text: "Successfully completed"
		},
		{
			id: 3,
			preffix: "+",
			number: 865,
			suffix: null,
			text: "Recruit more than"
		},
		{
			id: 4,
			preffix: "+",
			number: 168,
			suffix: "k",
			text: "Increase internet awareness"
		}
	];

	return (
		<>
			<section className="section-static-1 position-relative fix z-0 section-padding">
				<div className="container">
					<div className="inner">
						<div className="row justify-content-between">
							{statsData.map((stat) => (
								<div key={stat.id} className="col-xl-3 col-lg-4 col-sm-6">
									<div className="counter-item-cover counter-item">
										<div className="content text-center mx-auto">
											<h6>{stat.text}</h6>
											<span className="h1 count fw-black text-primary my-0">
												{stat.preffix}
												<span className="odometer" />
												<CountUp end={stat.number} enableScrollSpy={true} />
												{stat.suffix && <span>{stat.suffix}</span>}
											</span>
											<p className="fs-5">New accounts</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
