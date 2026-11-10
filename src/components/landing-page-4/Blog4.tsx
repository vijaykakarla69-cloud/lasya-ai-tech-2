"use client"
import Link from "next/link"
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

interface Blog4Props {
	data?: {
		blog?: Array<{
			badge_text: string;
			title: string;
			subtitle: string;
			cards: Array<{
				title: string;
				description: string;
				badge_text: string;
				image: Array<{
					url: string;
					alternativeText: string | null;
				}>;
			}>;
		}>;
	};
}

export default function Blog4({ data }: Blog4Props) {
	const blogData = data?.blog?.[0];
	const cards = blogData?.cards || [];

	const swiperOptions = {
		slidesPerView: 3,
		spaceBetween: 20,
		slidesPerGroup: 1,
		centeredSlides: false,
		loop: true,
		autoplay: {
			delay: 4000,
		},
		breakpoints: {
			1200: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 3,
			},
			768: {
				slidesPerView: 2,
			},
			576: {
				slidesPerView: 1,
			},
			0: {
				slidesPerView: 1,
			},
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
		},
	}

	return (
		<>
			<section className="section-blog-4 pb-120 @@classList">
				<div className="container">
					<div className="row align-items-end">
						<div className="col-12 col-md-4 me-auto">
							<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
								<img src="/assets/imgs/features-1/dots.png" alt="" />
								<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">{blogData?.badge_text}</span>
							</div>
							<h3 className="ds-3 mt-3 mb-3">{blogData?.title}</h3>
							<span className="fs-5 fw-medium">{blogData?.subtitle}</span>
						</div>
						<div className="col-12 col-md-4 col-auto mt-5 mt-md-0">
							<Link href="#" className="ms-md-5 fw-bold text-primary">See all articles
								<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="none">
									<path className="fill-dark" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="black" />
								</svg>
							</Link>
						</div>
					</div>
					<div className="row mt-8">
						<Swiper {...swiperOptions}
							className="swiper slider-1 pt-2 pb-3"
							modules={[Keyboard, Autoplay, Pagination, Navigation]}
						>
							<div className="swiper-wrapper">
								{cards.map((card, index) => (
									<SwiperSlide key={index} className="swiper-slide">
										<div className="card border-0 position-relative rounded-3 d-inline-flex card-hover shadow-2">
											<img 
												className="rounded-top-3" 
												src={card.image?.[0]?.url ? `https://cms.kriva.tech${card.image[0].url}` : `/assets/imgs/blog-4/card-img-${index + 1}.png`} 
												alt={card.image?.[0]?.alternativeText || card.title} 
											/>
											<Link href="#" className="position-absolute z-1 m-3 bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-3 py-1">
												<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">{card.badge_text}</span>
											</Link>
											<div className="card-body bg-white border border-top-0 rounded-bottom-3 p-6">
												<h6 className="mb-3">{card.title}</h6>
												<p>{card.description}</p>
												<div className="d-flex align-items-center justify-content-between mt-5 pt-5 border-top">
													<div className="d-flex align-items-center">
														<div className="icon-shape rounded-circle border border-2 border-white">
															<img className="rounded-circle" src={`/assets/imgs/blog-4/avatar-${(index % 3) + 1}.png`} alt="avatar" />
														</div>
														<div className="ms-3">
															<h6 className="fs-7 m-0 mb-1">Author Name</h6>
															<p className="mb-0 fs-8">Date</p>
														</div>
													</div>
													<div className="icon-shape icon-md bg-white rounded-circle border">
														<svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} viewBox="0 0 24 25" fill="none">
															<path d="M17.25 15.5322V7.03223H8.75" stroke="#00a4a3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															<path d="M17 7.28223L6.75 17.5322" stroke="#00a4a3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
														</svg>
													</div>
												</div>
											</div>
											<Link href="#" className="position-absolute bottom-0 start-0 end-0 top-0 z-0" />
										</div>
									</SwiperSlide>
								))}
							</div>
						</Swiper>
					</div>
				</div>
			</section>
		</>
	)
}
