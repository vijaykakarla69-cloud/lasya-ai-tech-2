"use client"
import Link from 'next/link'
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export interface Project1Props {
	data?: Array<{
		badge_text: string;
		title: string;
		subtitle: string;
		blog_cards: Array<{
			title: string;
			description: string;
			badge_text: string;
			image: Array<{
				url: string;
				name: string;
			}>;
		}>;
	}>;
}

export default function Project1({ data }: Project1Props) {
	if (!data || data.length === 0) {
		return null;
	}

	const projectData = data[0];
	const { badge_text, title, subtitle, blog_cards = [] } = projectData;

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
			<section className="section-project-2 pt-120 pb-8">
				<div className="container">
					<div className="row mb-8">
						<div className="col-lg-6">
							<div className="d-flex align-items-center justify-text-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-3 py-1">
								<img src="/assets/imgs/features-1/dots.png" alt="" />
								<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">{badge_text}</span>
							</div>
							<h3 className="ds-3 mt-3 mb-3">{title}</h3>
							<p className="fs-5 fw-medium">{subtitle}</p>
						</div>
						<div className="col-lg-2 col-md-3 col-6 ms-auto align-self-end mb-lg-7 mt-lg-0 mt-4">
							<div className="position-relative z-0">
								<div className="swiper-button-prev shadow bg-white ms-lg-7">
									<i className="bi bi-arrow-left" />
								</div>
								<div className="swiper-button-next shadow bg-white">
									<i className="bi bi-arrow-right" />
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<Swiper
							{...swiperOptions}
							className="swiper slider-1 pt-2 pb-8"
							modules={[Keyboard, Autoplay, Pagination, Navigation]}
						>
							<div className="swiper-wrapper">
								{blog_cards.map((card, index) => (
									<SwiperSlide key={index} className="swiper-slide">
										<div className="text-center">
											<div className="zoom-img position-relative d-inline-block z-1">
												<div className="rounded-3 fix">
													<img 
														className="img-fluid w-100" 
														src={`https://cms.kriva.tech${card.image[0]?.url}`} 
														alt={card.image[0]?.name || `Project image ${index + 1}`} 
													/>
												</div>
												<Link href="#" className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-4 hover-up">
													<p className="fs-7 text-primary mb-1">{card.badge_text}</p>
													<h6>{card.title}</h6>
													<p className="text-900">{card.description}</p>
												</Link>
											</div>
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
