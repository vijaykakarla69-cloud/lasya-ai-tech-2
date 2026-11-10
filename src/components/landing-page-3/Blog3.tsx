import Link from "next/link"

interface Blog3Props {
	data?: Array<{
		id: number;
		badge_text: string;
		title: string;
		subtitle: string;
		cards: Array<{
			id: number;
			title: string;
			description: string;
			icon: Array<{
				id: number;
				url: string;
				name: string;
			}>;
		}>;
	}>;
}

export default function Blog3({ data }: Blog3Props) {
	const blogData = data?.[0] || {
		badge_text: "From Blog",
		title: "Our Latest Articles",
		subtitle: "Explore the insights and trends shaping our industry",
		cards: [
			{
				id: 1,
				title: "10 Proven SEO Strategies to Boost Your Website Traffic in 2024",
				description: "As the SaaS industry continues to evolve, new trends are shaping the future of software delivery and consumption...",
				icon: [{ id: 1, url: "/assets/imgs/blog-3/img-1.png", name: "img-1.png" }]
			},
			{
				id: 2,
				title: "The Power of Branding: How to Create a Memorable Brand Identity",
				description: "As the SaaS industry continues to evolve, new trends are shaping the future of software delivery and consumption...",
				icon: [{ id: 2, url: "/assets/imgs/blog-3/img-2.png", name: "img-2.png" }]
			},
			{
				id: 3,
				title: "Why Consistent Brand Identity is Key to Business Success",
				description: "As the SaaS industry continues to evolve, new trends are shaping the future of software delivery and consumption...",
				icon: [{ id: 3, url: "/assets/imgs/blog-3/img-3.png", name: "img-3.png" }]
			},
			{
				id: 4,
				title: "Top Trends in Digital Marketing and How They Impact Your Business",
				description: "As the SaaS industry continues to evolve, new trends are shaping the future of software delivery and consumption...",
				icon: [{ id: 4, url: "/assets/imgs/blog-3/img-4.png", name: "img-4.png" }]
			}
		]
	};

	return (
		<>
			<section className="section-blog-3 position-relative @@classList section-padding fix">
				<div className="container position-relative z-1">
					<div className="row align-items-end mb-5">
						<div className="col-md-auto col-12 me-auto">
							<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
								<img src="/assets/imgs/features-1/dots.png" alt="" />
								<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">{blogData.badge_text}</span>
							</div>
							<h3 className="ds-3 mt-3 mb-3">{blogData.title}</h3>
							<span className="fs-5 fw-medium">{blogData.subtitle}</span>
						</div>
						<div className="col-md-auto col-12 pt-md-0 pt-3">
							<Link href="#" className="ms-md-5 fw-bold text-primary">See all articles
								<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="none">
									<path className="fill-dark" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="black" />
								</svg>
							</Link>
						</div>
					</div>
					<div className="row">
						{blogData.cards.slice(0, 2).map((card) => (
							<div key={card.id} className="col-lg-6 pe-lg-8">
								<Link href="#" className="d-flex flex-md-row flex-column align-items-center mb-4 hover-up">
									<img className="rounded-3 w-100 w-md-auto" src={
										card.icon?.[0]?.url
											? card.icon[0].url.startsWith('http') || card.icon[0].url.startsWith('/assets')
												? card.icon[0].url
												: `https://cms.kriva.tech${card.icon[0].url}`
											: '/assets/imgs/blog-3/img-1.png'
									} alt="Blog article thumbnail" />
									<span className="content ms-5 mt-md-0 mt-3">
										<h6 className="mb-2">{card.title}</h6>
										<p>{card.description}</p>
									</span>
								</Link>
							</div>
						))}
						{blogData.cards.slice(2, 4).map((card) => (
							<div key={card.id} className="col-lg-6 pe-lg-8">
								<Link href="#" className="d-flex flex-md-row flex-column align-items-center mb-4 hover-up">
									<img className="rounded-3 w-100 w-md-auto" src={
										card.icon?.[0]?.url
											? card.icon[0].url.startsWith('http') || card.icon[0].url.startsWith('/assets')
												? card.icon[0].url
												: `https://cms.kriva.tech${card.icon[0].url}`
											: '/assets/imgs/blog-3/img-1.png'
									} alt="Blog article thumbnail" />
									<span className="content ms-5 mt-md-0 mt-3">
										<h6 className="mb-2">{card.title}</h6>
										<p>{card.description}</p>
									</span>
								</Link>
							</div>
						))}
					</div>
				</div>
				<div className="position-absolute top-0 start-50 translate-middle-x z-0">
					<img src="/assets/imgs/blog-2/img-bg-line.png" alt="" />
				</div>
				<div className="bouncing-blobs-container">
					<div className="bouncing-blobs-glass" />
					<div className="bouncing-blobs">
						<div className="bouncing-blob bouncing-blob--green" />
						<div className="bouncing-blob bouncing-blob--primary" />
					</div>
				</div>
			</section>
		</>
	)
}
