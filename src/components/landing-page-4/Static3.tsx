'use client'
import CountUp from 'react-countup'

interface Static3Props {
	data?: {
		stats?: Array<{
			title: string;
			stat_numbers: Array<{
				preffix: string | null;
				number: number;
				suffix: string | null;
				text: string;
			}>;
		}>;
	};
}

export default function Static3({ data }: Static3Props) {
	const statsData = data?.stats?.[0];
	const stats = statsData?.stat_numbers || [];

	return (
		<section className="section-static-1 position-relative fix z-0 py-8">
			<div className="container">
				<div className="inner">
					<div className="row align-items-center justify-content-between">
						<div className="col-lg-auto col-md-12 text-center text-lg-start mb-5 mb-lg-0">
							<h4 className="mb-0">
								{statsData?.title || "See why we are trusted the world over"}
							</h4>
						</div>
						{stats.map((stat, index) => (
							<div key={index} className="col-lg-auto col-md-6">
								<div className="counter-item-cover counter-item">
									<div className="content text-center mx-auto">
										<span className="h1 count fw-black text-primary my-0">
											{stat.preffix}<span className="odometer"><CountUp end={stat.number} enableScrollSpy={true} /></span>{stat.suffix}
										</span>
										<p>{stat.text}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="bouncing-blobs-container">
				<div className="bouncing-blobs-glass fix" />
				<div className="bouncing-blobs">
					<div className="bouncing-blob bouncing-blob--green" style={{ top: '101.874px', left: '417.612px', transform: 'translate(-102.259px, -101.874px)' }} />
					<div className="bouncing-blob bouncing-blob--primary" style={{ top: '26.9572px', left: '1055.17px', transform: 'translate(13.2637px, -26.9572px)' }} />
					<div className="bouncing-blob bouncing-blob--infor bouncing-blob--infor-2" style={{ top: '-64.4607px', left: '628.92px', transform: 'translate(163.971px, 64.4607px)' }} />
				</div>
			</div>
		</section>
	)
}
