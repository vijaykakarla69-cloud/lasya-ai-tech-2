"use client"
import Link from "next/link"
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import PhoneIcon from "@/public/assets/icons/phone.svg"
import BlackRightArrow from "@/public/assets/icons/black-right-arrow.svg"
import WhiteCrossArrow from "@/public/assets/icons/white-cross-arrow.svg"
export default function NewsLetterSection({ data }: { data: any }) {

	const swiperOptions2 = {
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

	if (!data) return null	

	return (
		<>
				<section data-kte="kt-76070" className="kt-76070 section-testimonial-1 pb-120 pt-120 position-relative">
					<div data-kte="kt-45069" className="kt-45069 container position-relative z-1">
						<div data-kte="kt-17800" className="kt-17800 row">
							<div data-kte="kt-71945" className="kt-71945 col-lg-4">
								<div data-kte="kt-40071" className="kt-40071 pe-8 mt-10">
									<div data-kte="kt-67282" className="kt-67282 d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
										<img src="/assets/imgs/features-1/dots.png" alt="Lasya AI Tech" />
										<span data-kte="kt-80088" className="kt-80088 tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">
											{data.review1[0]?.button[0]?.label}
										</span>
									</div>
									<h3 data-kte="kt-60272" className="kt-60272 ds-3 mt-3 mb-3" data-aos="fade-zoom-in" data-aos-delay={100}>
										{data.review1[0]?.title}
									</h3>
									<span data-kte="kt-86361" className="kt-86361 fs-5 fw-medium" data-aos="fade-zoom-in" data-aos-delay={300}>
										{data.review1[0]?.description}
									</span>
									<div data-kte="kt-29470" className="kt-29470 d-flex flex-wrap align-items-center mt-8">
										{data.review1[0]?.button.slice(1).map((btn: any, index: number) => (
											<Link 
												key={index} 
												href={btn.link} 
												className={`${index === 0 ? 'btn btn-outline-secondary hover-up' : 'ms-5 ms-md-5 mt-5 mt-md-0 fw-bold'}`}
											>
												{btn.label}
												{btn.variant === 'secondary' && (
													<PhoneIcon />
												)}
												{btn.variant === 'text' && (
													<BlackRightArrow />
												)}
											</Link>
										))}
									</div>
								</div>
							</div>
							<div data-kte="kt-30204" className="kt-30204 col-lg-8">
								<div data-kte="kt-14769" className="kt-14769 row">
									{data.review1[0]?.lapl_reviews.map((review: any, index: number) => (
										<div key={index} className={`col-lg-6 ${index > 0 ? 'mt-5' : ''}`}>
											<div data-kte="kt-42998" className="kt-42998 bg-neutral-100 p-5 rounded-3 position-relative card-hover">
												<p data-kte="kt-71647" className="kt-71647 text-900">{review.description}</p>
												<div data-kte="kt-42829" className="kt-42829 d-flex align-items-center mt-5">
													<img data-kte="kt-77816" className="kt-77816 avatar-lg" src={`/assets/imgs/testimonial-1/avatar-${index + 1}.png`} alt="Lasya AI Tech" />
													<div data-kte="kt-26897" className="kt-26897 d-flex flex-column">
														<h6 data-kte="kt-54575" className="kt-54575 ms-3 fs-6 mb-0">{review.name}</h6>
														<div data-kte="kt-59150" className="kt-59150 flag ms-3">
															<img src={`/assets/imgs/testimonial-1/flag-${index + 1}.png`} alt="Lasya AI Tech" />
															<span data-kte="kt-56273" className="kt-56273 fs-8">{review.role}</span>
														</div>
													</div>
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
					<div data-kte="kt-58235" className="kt-58235 position-absolute top-0 start-0 z-0">
						<img src="/assets/imgs/testimonial-1/bg-line.png" alt="Lasya AI Tech" />
					</div>
				</section>
				{/*Testimonial 2*/}
				<section data-kte="kt-56049" className="kt-56049 section-testimonial-2 position-relative bg-white section-padding">
					<div data-kte="kt-52363" className="kt-52363 container position-relative z-1">
						<div data-kte="kt-19805" className="kt-19805 row pb-9">
							<div data-kte="kt-13880" className="kt-13880 col-lg-7 mx-lg-auto">
								<div data-kte="kt-16715" className="kt-16715 text-center mb-lg-0 mb-5">
									<h4 data-kte="kt-35370" className="kt-35370 ds-4 my-3">
										{data.review2[0]?.title}
									</h4>
									<p data-kte="kt-98312" className="kt-98312 fs-5 mb-0">
										{data.review2[0]?.description}
									</p>
								</div>
							</div>
						</div>
						<div data-kte="kt-55010" className="kt-55010 row">
							{data.review2[0]?.lapl_reviews.map((review: any, index: number) => (
								<div key={index} data-kte="kt-83909" className="kt-83909 col-lg-4">
									<div className={`bg-neutral-100 p-5 ${index === 0 ? '' : 'mt-5'} rounded-3`} data-aos="fade-zoom-in" data-aos-delay={index * 100}>
										<p data-kte="kt-82611" className="kt-82611 text-900">{review.description}</p>
										<div data-kte="kt-72829" className="kt-72829 d-flex align-items-center mt-5">
											<img data-kte="kt-88246" className="kt-88246 avatar-lg" src={`/assets/imgs/testimonial-1/avatar-${index + 1}.png`} alt="Lasya AI Tech" />
											<div data-kte="kt-16359" className="kt-16359 d-flex flex-column">
												<h6 data-kte="kt-82661" className="kt-82661 ms-3 fs-6 mb-0">{review.name}</h6>
												<div data-kte="kt-83342" className="kt-83342 flag ms-3">
													<img src={`/assets/imgs/testimonial-1/flag-${index + 1}.png`} alt="Lasya AI Tech" />
													<span data-kte="kt-98581" className="kt-98581 fs-8">{review.role}</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
					{data.review2[0]?.button.map((btn: any, index: number) => (
						<div key={index} data-kte="kt-60552" className="kt-60552 text-center mt-8 position-relative z-3">
							<Link href={btn.link} data-kte="kt-65209" className="kt-65209 btn btn-dark hover-up">
								{btn.label}
								<WhiteCrossArrow />
							</Link>
						</div>
					))}
					<div data-kte="kt-49397" className="kt-49397 mask-image-2 position-absolute top-50 bottom-0 start-0 end-0 z-1" />
				</section>
				{/*Testimonial 3*/}
				<section data-kte="kt-92710" className="kt-92710 section-testimonial-3 position-relative section-padding fix">
					<div data-kte="kt-24022" className="kt-24022 container position-relative z-1">
						<div data-kte="kt-41953" className="kt-41953 row pb-9">
							<div data-kte="kt-86936" className="kt-86936 col-lg-7 mx-lg-auto">
								<div data-kte="kt-83059" className="kt-83059 text-center mb-lg-0 mb-5">
									<div data-kte="kt-92470" className="kt-92470 d-flex align-items-center position-relative z-2 justify-content-center bg-primary-soft d-inline-flex rounded-pill border border-2 border-white px-3 py-1">
										<img src="/assets/imgs/features-1/dots.png" alt="Lasya AI Tech" />
										<span data-kte="kt-87593" className="kt-87593 tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">
											{data.review3[0]?.button[0]?.label}
										</span>
									</div>
									<h5 data-kte="kt-77884" className="kt-77884 ds-5 my-3 fw-regular">
										{data.review3[0]?.title}
									</h5>
									<p data-kte="kt-43379" className="kt-43379 fs-5 mb-0 text-900">
										{data.review3[0]?.description}
									</p>
								</div>
							</div>
						</div>
						<div data-kte="kt-93385" className="kt-93385 row">
							<Swiper {...swiperOptions2}
								className="swiper slider-1 pt-2 pb-3"
								modules={[Keyboard, Autoplay, Pagination, Navigation]}
							>
								<div data-kte="kt-72692" className="kt-72692 swiper-wrapper">
									{data.review3[0]?.lapl_reviews.map((review: any, index: number) => (
										<SwiperSlide key={index} data-kte="kt-38239" className="kt-38239 swiper-slide">
											<div data-kte="kt-39838" className="kt-39838 bg-neutral-100 card-testimonial-3 p-5 rounded-3 position-relative">
												<div data-kte="kt-52108" className="kt-52108 d-flex align-items-center mb-5">
													<img data-kte="kt-85910" className="kt-85910 avatar-lg" src={`/assets/imgs/testimonial-1/avatar-${index + 1}.png`} alt="Lasya AI Tech" />
													<div data-kte="kt-41730" className="kt-41730 d-flex flex-column">
														<h6 data-kte="kt-82623" className="kt-82623 ms-3 fs-6 mb-0">{review.name}</h6>
														<div data-kte="kt-27454" className="kt-27454 flag ms-3">
															<img src={`/assets/imgs/testimonial-1/flag-${index + 1}.png`} alt="Lasya AI Tech" />
															<span data-kte="kt-27853" className="kt-27853 fs-8">{review.role}</span>
														</div>
													</div>
												</div>
												<p data-kte="kt-61379" className="kt-61379 text-900 border-bottom pb-4 mb-4">{review.description}</p>
												<div data-kte="kt-79689" className="kt-79689 d-flex">
													<img src="/assets/imgs/hero-4/star-yellow.svg" alt="Lasya AI Tech" />
													<img src="/assets/imgs/hero-4/star-yellow.svg" alt="Lasya AI Tech" />
													<img src="/assets/imgs/hero-4/star-yellow.svg" alt="Lasya AI Tech" />
													<img src="/assets/imgs/hero-4/star-yellow.svg" alt="Lasya AI Tech" />
													<img src="/assets/imgs/hero-4/star-yellow.svg" alt="Lasya AI Tech" />
													<span data-kte="kt-33559" className="kt-33559 fs-8 text-600 ms-2">{review.comment}</span>
												</div>
											</div>
										</SwiperSlide>
									))}
								</div>
								<div data-kte="kt-21727" className="kt-21727 swiper-pagination" />
							</Swiper>
						</div>
					</div>
					<div data-kte="kt-13243" className="kt-13243 position-absolute top-0 start-50 translate-middle-x z-0">
						<img src="/assets/imgs/service-2/bg-line.png" alt="Lasya AI Tech" />
					</div>
					<div data-kte="kt-77230" className="kt-77230 rotate-center ellipse-rotate-success position-absolute z-0" />
					<div data-kte="kt-48442" className="kt-48442 rotate-center-rev ellipse-rotate-primary position-absolute z-1" />
				</section>
				{/*Testimonial 4*/}
				


			{/*</Layout>*/}
		</>
	)
}