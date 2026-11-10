'use client'
import Link from "next/link"
import CountUp from 'react-countup'

interface Static1Props {
	data?: {
		title?: string;
		button?: Array<{
			id: number;
			title: string;
			link: string;
		}>;
		stat_numbers?: Array<{
			id: number;
			preffix?: string;
			number: number;
			suffix?: string;
			text: string;
		}>;
	};
}

export default function Static1({ data }: Static1Props) {
	return (
		<>
			<section className="section-static-1 position-relative bg-primary fix z-0 section-padding">
				<div className="container position-relative z-3">
					<div className="row border-bottom border-primary-light pb-8">
						<div className="col-lg-6 me-lg-auto">
							<h5 className="ds-5 text-100 m-0">{data?.title}</h5>
						</div>
						<div className="col-auto align-self-end mt-lg-0 mt-5">
							{data?.button?.[0] && (
								<Link href={data.button[0].link} className="btn btn-outline-secondary hover-up bg-transparent text-100">
									{data.button[0].title}
									<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
										<path d="M17.25 15.25V6.75H8.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										<path d="M17 7L6.75 17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</Link>
							)}
						</div>
					</div>
				</div>
				<div className="container mt-8">
					<div className="inner">
						<div className="row justify-content-center">
							{data?.stat_numbers?.map((stat) => (
								<div key={stat.id} className="col-xl-3 col-lg-4 col-sm-6">
									<div className="counter-item-cover counter-item">
										<div className="content text-center mx-auto">
											<span className="fw-bold lh-sm count ds-2 text-100">
												{stat.preffix}<span className="odometer" /><CountUp end={stat.number} enableScrollSpy={true} />{stat.suffix}
											</span>
											<p className="fs-5 text-100">{stat.text}</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className="img-decorate position-absolute top-0 start-0">
					<img src="/assets/imgs/static-1/img-decorate.png" alt="Img Decorate" />
				</div>
				<div className="bouncing-blobs-container">
					<div className="bouncing-blobs-glass bg-transparent" />
					<div className="bouncing-blobs">
						<div className="bouncing-blob bouncing-blob--white" />
					</div>
				</div>
			</section>
		</>
	)
}
