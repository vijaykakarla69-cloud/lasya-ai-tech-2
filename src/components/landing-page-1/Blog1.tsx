import Link from "next/link"

export interface BlogCard {
	id: number;
	title: string;
	description: string;
	badge_text: string;
	image?: string;
}

export interface Blog1Data {
	badge_text: string;
	title: string;
	description: string;
	blog_cards: BlogCard[];
}

interface Blog1Props {
	data?: Blog1Data;
}

export default function Blog1({ data }: Blog1Props) {
	if (!data) return null;

	return (
		<section className="section-blog-1 @@padding">
			<div className="container">
				<div className="row align-items-end">
					<div className="col-12 col-md-6 me-auto">
						<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
							<img src="/assets/imgs/features-1/dots.png" alt="" />
							<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">{data.badge_text}</span>
						</div>
						<h3 className="ds-3 mt-3 mb-3" data-aos="fade-zoom-in" data-aos-delay={100}>{data.title}</h3>
						<span className="fs-5 fw-medium" data-aos="fade-zoom-in" data-aos-delay={200}>{data.description}</span>
					</div>
					<div className="col-12 col-md-6 mt-3 mt-md-0">
						<Link href="#" className="ms-md-5 fw-bold text-primary">See all articles
							<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="none">
								<path className="fill-dark" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="black" />
							</svg>
						</Link>
					</div>
				</div>
				<div className="row">
					{data.blog_cards.map((card, idx) => (
						<div className="col-lg-4 text-start" key={card.id}>
							<div className="card border-0 rounded-3 mt-8 position-relative d-inline-flex" data-aos="fade-zoom-in" data-aos-delay={100 * (idx + 1)}>
								<img className="rounded-3" src={card.image} alt="Blog article thumbnail" />
								<div className="card-body p-0 bg-white">
									<Link href="#" className="bg-primary-soft position-relative z-1 d-inline-flex rounded-pill px-3 py-2 mt-3">
										<span className="tag-spacing fs-7 fw-bold text-linear-2 text-uppercase">{card.badge_text}</span>
									</Link>
									<h6 className="my-3">{card.title}</h6>
									<p>{card.description}</p>
								</div>
								<Link href="#" className="position-absolute bottom-0 start-0 end-0 top-0 z-0" />
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
