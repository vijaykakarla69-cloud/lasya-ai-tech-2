"use client"
import Layout from "@/src/components/layout/Layout"
import Link from "next/link"
import CountUp from "react-countup"
import { Navigation, Pagination, Autoplay, Keyboard } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Marquee from "react-fast-marquee";
import { useState } from "react"
import PhoneIcon from "@/public/assets/icons/phone.svg"
import DiscoverIcon from "@/public/assets/icons/discover.svg"
import PlusIcon from "@/public/assets/icons/plus.svg"
import ArrowIcon from "@/public/assets/icons/arrow.svg"
import BlackRightArrow from "@/public/assets/icons/black-right-arrow.svg"

export default function Technology({data}: {data: any}) {
	const [activeItem, setActiveItem] = useState(1);

	// Debug: Log the data structure
	console.log('Technology component data:', data);

	// Early return if data is not loaded yet
	if (!data) {
		return null;
	}

	const handleActiveItem = (index: number) => {
		setActiveItem(index);
	};

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
			<section data-kte="kt-24975" className="kt-24975 position-relative overflow-hidden section-padding">
				<div data-kte="kt-98096" className="kt-98096 container">
					<div data-kte="kt-86785" className="kt-86785 row content align-items-center">
						<div data-kte="kt-71523" className="kt-71523 col-lg-6 col-md-12 mb-lg-0 mb-5">
							<div data-kte="kt-59633" className="kt-59633 pe-2">
								<h1 data-kte="kt-39071" className="kt-39071 ds-3 mt-4 mb-5" data-aos="fade-zoom-in" data-aos-delay={0}>
									{data?.hero_section?.title}
								</h1>
								
								
								<Link href={data?.button_contact?.link} data-kte="kt-16465" className="kt-16465 ms-md-3 mt-3 mt-md-0 btn btn-outline-secondary hover-up" data-aos="fade-zoom-in" data-aos-delay={500}>
									<PhoneIcon />
									{data?.button_contact?.text}
								</Link>
								
							</div>
						</div>
						<div data-kte="kt-85749" className="kt-85749 col-lg-6 position-relative justify-content-center">
							<img data-kte="kt-92538" className="kt-92538 hero-img" src="/assets/imgs/hero-1/background.png" alt="Lasya AI Tech" />
							<div data-kte="kt-94519" className="kt-94519 shape-1 position-absolute">
								<img data-kte="kt-17449" className="kt-17449 rightToLeft" src="/assets/imgs/hero-1/shape-1.png" alt="Lasya AI Tech" data-aos="zoom-in" data-aos-delay={500} />
							</div>
							<div data-kte="kt-50182" className="kt-50182 shape-2 position-absolute d-none d-md-block">
								<img src="/assets/imgs/hero-1/shape-2.png" alt="Lasya AI Tech" data-aos="zoom-in" data-aos-delay={200} />
							</div>
							
						</div>
					</div>
				</div>
			</section>
			{false && (
				<div data-kte="kt-78509" className="kt-78509 d-flex flex-column flex-md-row text-center align-items-center justify-content-between border-top border-bottom mb-7 container" style={{maxWidth: "800px", margin: "0 auto"}}>
					<div data-kte="kt-85214" className="kt-85214 py-2">
						<span data-kte="kt-97907" className="kt-97907 text-500 fs-7">Client</span>
						<p data-kte="kt-42950" className="kt-42950 text-900 mb-0 fs-6">Quantum Solutions</p>
					</div>
					<div data-kte="kt-34771" className="kt-34771 py-2">
						<span data-kte="kt-21270" className="kt-21270 text-500 fs-7">Start</span>
						<p data-kte="kt-59389" className="kt-59389 text-900 mb-0 fs-6">01 Aug 2024</p>
					</div>
					<div data-kte="kt-55551" className="kt-55551 py-2">
						<span data-kte="kt-17503" className="kt-17503 text-500 fs-7">Complete</span>
						<p data-kte="kt-50955" className="kt-50955 text-900 mb-0 fs-6">01 Sep 2024</p>
					</div>
					<div data-kte="kt-18734" className="kt-18734 py-2">
						<span data-kte="kt-48113" className="kt-48113 text-500 fs-7">Services</span>
						<p data-kte="kt-90494" className="kt-90494 text-900 mb-0 fs-6">UI/UX Design</p>
					</div>
					<div data-kte="kt-49846" className="kt-49846 py-2">
						<span data-kte="kt-92907" className="kt-92907 text-500 fs-7">Website</span>
						<p data-kte="kt-86792" className="kt-86792 text-900 mb-0 fs-6">quantum.sw</p>
					</div>
				</div>
			)}

			{false && (
			<section>
				<div data-kte="kt-98579" className="kt-98579 section-logo-cloud container-fluid pt-110 pb-110 mt-lg-0 border-top border-bottom">
					<div data-kte="kt-74480" className="kt-74480 container">
						<h5 data-kte="kt-79096" className="kt-79096 text-500 mb-5 text-center">Trusted by great companies</h5>
						<div data-kte="kt-86682" className="kt-86682 carouselTicker carouselTicker-right">
							<ul data-kte="kt-68638" className="kt-68638 carouselTicker__list pb-4">
								<Marquee direction="right">
									<li data-kte="kt-66438" className="kt-66438 carouselTicker__item bg-white py-3 px-4 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
										<img data-kte="kt-74466" className="kt-74466 filter-invert" src="/assets/imgs/logo-cloud-3/logo-1.svg" alt="Lasya AI Tech" />
									</li>
									<li data-kte="kt-43574" className="kt-43574 carouselTicker__item bg-white py-3 px-4 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
										<img src="/assets/imgs/logo-cloud-3/logo-2.svg" alt="Lasya AI Tech" />
									</li>
									<li data-kte="kt-17469" className="kt-17469 carouselTicker__item bg-white py-3 px-4 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
										<img src="/assets/imgs/logo-cloud-3/logo-3.svg" alt="Lasya AI Tech" />
									</li>
									<li data-kte="kt-88269" className="kt-88269 carouselTicker__item bg-white py-3 px-4 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
										<img src="/assets/imgs/logo-cloud-3/logo-4.svg" alt="Lasya AI Tech" />
									</li>
									<li data-kte="kt-21563" className="kt-21563 carouselTicker__item bg-white py-3 px-4 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
										<DiscoverIcon />
									</li>
									<li data-kte="kt-51224" className="kt-51224 carouselTicker__item bg-white py-3 px-4 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
										<img src="/assets/imgs/logo-cloud-3/logo-6.svg" alt="Lasya AI Tech" />
									</li>
									<li data-kte="kt-63118" className="kt-63118 carouselTicker__item bg-white py-3 px-4 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
										<img src="/assets/imgs/logo-cloud-3/logo-7.svg" alt="Lasya AI Tech" />
									</li>
								</Marquee>
							</ul>
						</div>
						<div data-kte="kt-62999" className="kt-62999 row">
							<div data-kte="kt-63642" className="kt-63642 col-lg-10 mx-lg-auto">
								<div data-kte="kt-76313" className="kt-76313 carouselTicker carouselTicker-left">
									<ul data-kte="kt-28561" className="kt-28561 carouselTicker__list pb-4">
										<Marquee>
											<li data-kte="kt-36334" className="kt-36334 carouselTicker__item bg-white py-3 px-4 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2">
												<img data-kte="kt-44047" className="kt-44047 filter-invert" src="/assets/imgs/logo-cloud-3/logo-8.svg" alt="Lasya AI Tech" />
											</li>
											<li data-kte="kt-42801" className="kt-42801 carouselTicker__item bg-white py-3 px-4 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2">
												<img data-kte="kt-37729" className="kt-37729 filter-invert" src="/assets/imgs/logo-cloud-3/logo-9.svg" alt="Lasya AI Tech" />
											</li>
											<li data-kte="kt-88722" className="kt-88722 carouselTicker__item bg-white py-3 px-4 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2">
												<img src="/assets/imgs/logo-cloud-3/logo-3.svg" alt="Lasya AI Tech" />
											</li>
											<li data-kte="kt-68912" className="kt-68912 carouselTicker__item bg-white py-3 px-4 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2">
												<img data-kte="kt-26383" className="kt-26383 filter-invert" src="/assets/imgs/logo-cloud-3/logo-10.svg" alt="Lasya AI Tech" />
											</li>
											<li data-kte="kt-84091" className="kt-84091 carouselTicker__item bg-white py-3 px-4 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2">
												<img src="/assets/imgs/logo-cloud-3/logo-11.svg" alt="Lasya AI Tech" />
											</li>
											<li data-kte="kt-40190" className="kt-40190 carouselTicker__item bg-white py-3 px-4 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2">
												<img data-kte="kt-87641" className="kt-87641 filter-invert" src="/assets/imgs/logo-cloud-3/logo-12.svg" alt="Lasya AI Tech" />
											</li>
										</Marquee>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			)}
			<section data-kte="kt-32897" className="kt-32897 section-team-1 position-relative fix section-padding">
				<div data-kte="kt-48259" className="kt-48259 container position-relative z-2">
					<div data-kte="kt-68493" className="kt-68493 text-center">
						<div data-kte="kt-94442" className="kt-94442 d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
							<img src="/assets/imgs/features-1/dots.png" alt="Lasya AI Tech" />
							<span data-kte="kt-90219" className="kt-90219 tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">
								{data?.Leading_Solutions?.title}
							</span>
						</div>
						<h3 data-kte="kt-39646" className="kt-39646 ds-3 my-3 fw-regular">
							{data?.Leading_Solutions?.subtitle}
						</h3>
					</div>
					<div data-kte="kt-24190" className="kt-24190 row mt-6 position-relative px-5">
						<Swiper {...swiperOptions}
							className="swiper slider-2 px-1"
							modules={[Keyboard, Autoplay, Pagination, Navigation]}
						>
							<div data-kte="kt-17111" className="kt-17111 swiper-wrapper">
								{data?.Leading_Solutions?.models?.map((item: any, index: number) => (
									<SwiperSlide data-kte="kt-84177" className="kt-84177 swiper-slide" key={index}>
										<div data-kte="kt-36757" className="kt-36757 card-service-4 position-relative bg-white p-6 border rounded-3 text-center shadow-1 hover-up mt-2" style={{height: "400px", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
											<div>
												<div data-kte="kt-86949" className="kt-86949 bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 mx-auto mb-4">
													<div data-kte="kt-59672" className="kt-59672 icon">
														{index === 0 ? (
															<img src="/assets/imgs/service-1/icon-1.svg" alt={item.title} />
														) : index === 1 ? (
															<img src="/assets/imgs/service-1/icon-2.svg" alt={item.title} />
														) : index === 2 ? (
															<img src="/assets/imgs/service-1/icon-3.svg" alt={item.title} />
														) : index === 3 ? (
															<img src="/assets/imgs/service-1/icon-4.svg" alt={item.title} />
														) : index === 4 ? (
															<img src="/assets/imgs/service-1/icon-5.svg" alt={item.title} />
														) : (
															<img src="/assets/imgs/service-1/icon-6.svg" alt={item.title} />
														)}
													</div>
												</div>
												<h5 data-kte="kt-29379" className="kt-29379 mb-3">{item.title}</h5>
												<p>{item.description}</p>
											</div>
											<div data-kte="kt-45965" className="kt-45965 rectangle position-absolute bottom-0 start-50 translate-middle-x" />
										</div>
									</SwiperSlide>
								))}
							</div>
						</Swiper>
						<div data-kte="kt-59346" className="kt-59346 swiper-button-prev d-none d-lg-flex shadow-2 position-absolute top-50 translate-middle-y bg-white" style={{left: "-30px"}}>
							<i data-kte="kt-36014" className="kt-36014 bi bi-arrow-left" />
						</div>
						<div data-kte="kt-93041" className="kt-93041 swiper-button-next d-none d-lg-flex shadow-2 position-absolute top-50 translate-middle-y bg-white" style={{right: "-30px"}}>
							<i data-kte="kt-42016" className="kt-42016 bi bi-arrow-right" />
						</div>
					</div>
				</div>
			</section>

			<section data-kte="kt-92582" className="kt-92582 section-padding">
				<div data-kte="kt-37370" className="kt-37370 container">
					<div data-kte="kt-20685" className="kt-20685 text-center">
						<div data-kte="kt-88437" className="kt-88437 d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
							<img src="/assets/imgs/features-1/dots.png" alt="Lasya AI Tech" />
							<span data-kte="kt-73022" className="kt-73022 tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">{data?.Explore_Services?.title}</span>
						</div>
						<h3 data-kte="kt-91320" className="kt-91320 ds-3 my-3 aos-init aos-animate" data-aos="fade-zoom-in" data-aos-delay="300">{data?.Explore_Services?.subtitle}</h3>
					</div>
					<div data-kte="kt-72962" className="kt-72962 row mt-6 position-relative">
						{data?.Explore_Services?.models?.map((item: any, index: number) => (
							<div data-kte="kt-91506" className="kt-91506 col-lg-4" key={index}>
								<div className={`p-2 ${index === 0 ? 'mt-lg-8' : index === 3 ? 'mt-lg-5' : 'mt-lg-5'} rounded-4 shadow-1 bg-white position-relative z-1 hover-up aos-init aos-animate`} data-aos="fade-zoom-in" data-aos-delay={100 + (index * 100)}>
									<div data-kte="kt-28657" className="kt-28657 card-service bg-white p-6 border rounded-4">
										<img src={`/assets/imgs/service-1/icon-${index + 1}.svg`} alt={item.title} />
										<h6 data-kte="kt-54407" className="kt-54407 my-3">{item.title}</h6>
										<p data-kte="kt-16239" className="kt-16239 mb-6">{item.description}</p>
										<a href="#" data-kte="kt-56124" className="kt-56124 rounded-pill border icon-shape d-inline-flex gap-3 icon-learn-more">
										<PlusIcon 
													className="kt-26493 plus"
													data-kte="kt-26493"
												/>
												<ArrowIcon 
													className="kt-60837 arrow"
													data-kte="kt-60837"
												/>
											<span data-kte="kt-99344" className="kt-99344 fw-bold fs-7 text-900">Learn More</span>
										</a>
									</div>
								</div>
							</div>
						))}
						<div data-kte="kt-69327" className="kt-69327 position-absolute top-50 start-50 translate-middle z-0">
							<img src="/assets/imgs/service-1/img-bg.png" alt="Lasya AI Tech" />
						</div>
					</div>
				</div>
			</section>

			<section data-kte="kt-39364" className="kt-39364 section-feature-12 border-bottom pb-120 pt-110">
				<div data-kte="kt-34768" className="kt-34768 container">
					<div data-kte="kt-41357" className="kt-41357 text-center">
						<h5 data-kte="kt-99027" className="kt-99027 ds-5">{data?.OurCore_Values?.title}</h5>
						<p data-kte="kt-87682" className="kt-87682 fs-5 pb-4">
							{data?.OurCore_Values?.subtitle}
						</p>
					</div>
					<div data-kte="kt-82747" className="kt-82747 row">
						{data?.OurCore_Values?.models?.map((item: any, index: number) => (
							<div data-kte="kt-35984" className="kt-35984 col-lg-6" key={index}>
								<div data-kte="kt-34713" className="kt-34713 feature-item mb-5 bg-neutral-100 p-7 rounded-4 hover-up">
									<div data-kte="kt-27353" className="kt-27353 icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
										<div data-kte="kt-66673" className="kt-66673 icon">
											{index === 0 ? (
												<img data-kte="kt-72066" className="kt-72066 filter-invert" src="/assets/imgs/service-1/icon-1.svg" alt={item.title} />
											) : index === 1 ? (
												<img data-kte="kt-74373" className="kt-74373 filter-invert" src="/assets/imgs/service-1/icon-2.svg" alt={item.title} />
											) : index === 2 ? (
												<img data-kte="kt-44971" className="kt-44971 filter-invert" src="/assets/imgs/service-1/icon-3.svg" alt={item.title} />
											) : index === 3 ? (
												<img data-kte="kt-38668" className="kt-38668 filter-invert" src="/assets/imgs/service-1/icon-4.svg" alt={item.title} />
											) : (
												<img data-kte="kt-98520" className="kt-98520 filter-invert" src={item.icon?.url || "/assets/imgs/service-1/icon-6.svg"} alt={item.title} />
											)}
										</div>
									</div>
									<h4>{item.title}</h4>
									<p>{item.description}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<section data-kte="kt-44485" className="kt-44485 section-page-changelog section-padding">
				<div data-kte="kt-97640" className="kt-97640 container">
					<div data-kte="kt-37045" className="kt-37045 text-center">
						<h3 data-kte="kt-33918" className="kt-33918 ds-3 my-3">{data?.WebProcessTitle}</h3>
					</div>
					<div data-kte="kt-76633" className="kt-76633 row pt-120">
						<div data-kte="kt-44816" className="kt-44816 col">
							<ul data-kte="kt-54585" className="kt-54585 timeline">
								{data?.DetailsList?.map((item: any, index: number) => (
									<li className={`timeline-item ${index > 0 ? 'pt-120' : ''} d-flex flex-lg-row flex-column`} key={index}>
										<div data-kte="kt-23751" className="kt-23751 pe-lg-7">
											<h6>{item.title}</h6>
											<p data-kte="kt-84933" className="kt-84933 fw-bold text-900">{item.description}</p>
										</div>
										<img 
											className="rounded-3 mt-lg-0 mt-4" 
											src={item.image?.url || `/assets/imgs/changelog/img-${index + 1}.png`} 
											alt={item.title} 
										/>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</section>
			<section data-kte="kt-12481" className="kt-12481 features-10 py-9 bg-primary-light">
				<div data-kte="kt-64652" className="kt-64652 container">
					<div data-kte="kt-55676" className="kt-55676 row">
						{data?.Benifits_Section?.map((item: any, index: number) => (
							<div data-kte="kt-30603" className="kt-30603 col-lg-3 col-md-6" key={index}>
								<div data-kte="kt-16539" className="kt-16539 feature-item mb-5 position-relative mb-lg-0 bg-white p-5 rounded-4 hover-up">
									<div data-kte="kt-78381" className="kt-78381 bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
										<div data-kte="kt-84263" className="kt-84263 icon">
											<img src={item.groom_icon?.url || `/assets/imgs/features-1/icon-${index + 1}.svg`} alt={item.title} />
										</div>
									</div>
									<h6>{item.title}</h6>
									<p>{item.description}</p>
									<div data-kte="kt-25035" className="kt-25035 position-absolute end-0 top-0">
										<img src="/assets/imgs/feature-10/bg-line.png" alt="" />
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{false && (
			<section data-kte="kt-74777" className="kt-74777 section-logo-cloud section-logo-cloud-5 position-relative">
				<div data-kte="kt-54819" className="kt-54819 container-fluid pt-110 pb-110 mt-lg-0 border-top border-bottom">
					<div data-kte="kt-44477" className="kt-44477 container">
						<div data-kte="kt-24548" className="kt-24548 row align-items-center">
							<div data-kte="kt-79137" className="kt-79137 col-lg-3 pb-lg-0 pb-8">
								<h4 data-kte="kt-92388" className="kt-92388 text-nowrap">Loved By Developers <br />
									Trusted By Enterprises
								</h4>
								<p data-kte="kt-34541" className="kt-34541 pt-2 pb-4">We helped these brands turn online assessments into success stories. </p>
								<Link href="#" data-kte="kt-45766" className="kt-45766 shadow-1 btn text-start bg-white d-inline-block text-primary hover-up">
									View our partners
								<BlackRightArrow />
								</Link>
							</div>
							<div data-kte="kt-10564" className="kt-10564 col-lg-9 ps-lg-8">

								<div data-kte="kt-34790" className="kt-34790 bg-white py-3 px-3 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
									<img data-kte="kt-22199" className="kt-22199 filter-invert" src="/assets/imgs/logo-cloud-3/logo-1.svg" alt="Lasya AI Tech" />
								</div>
								<div data-kte="kt-97627" className="kt-97627 bg-white py-3 px-3 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
									<img src="/assets/imgs/logo-cloud-3/logo-2.svg" alt="Lasya AI Tech" />
								</div>
								<div data-kte="kt-54075" className="kt-54075 bg-white py-3 px-3 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
									<img src="/assets/imgs/logo-cloud-3/logo-3.svg" alt="Lasya AI Tech" />
								</div>
								<div data-kte="kt-16001" className="kt-16001 bg-white py-3 px-3 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
									<img src="/assets/imgs/logo-cloud-3/logo-4.svg" alt="Lasya AI Tech" />
								</div>
								
								<div data-kte="kt-27019" className="kt-27019 bg-white py-3 px-3 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
									<img src="/assets/imgs/logo-cloud-3/logo-6.svg" alt="Lasya AI Tech" />
								</div>
								<div data-kte="kt-64584" className="kt-64584 bg-white py-3 px-3 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
									<img data-kte="kt-76999" className="kt-76999 filter-invert" src="/assets/imgs/logo-cloud-3/logo-8.svg" alt="Lasya AI Tech" />
								</div>
								<div data-kte="kt-42366" className="kt-42366 bg-white py-3 px-3 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
									<img data-kte="kt-40973" className="kt-40973 filter-invert" src="/assets/imgs/logo-cloud-3/logo-9.svg" alt="Lasya AI Tech" />
								</div>
								<div data-kte="kt-58109" className="kt-58109 bg-white py-3 px-3 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
									<img src="/assets/imgs/logo-cloud-3/logo-3.svg" alt="Lasya AI Tech" />
								</div>
								<div data-kte="kt-27488" className="kt-27488 bg-white py-3 px-3 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
									<img data-kte="kt-68163" className="kt-68163 filter-invert" src="/assets/imgs/logo-cloud-3/logo-13.svg" alt="Lasya AI Tech" />
								</div>
								<div data-kte="kt-19506" className="kt-19506 bg-white py-3 px-3 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
									<img src="/assets/imgs/logo-cloud-3/logo-11.svg" alt="Lasya AI Tech" />
								</div>
								<div data-kte="kt-13291" className="kt-13291 bg-white py-3 px-3 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
									<img data-kte="kt-61019" className="kt-61019 filter-invert" src="/assets/imgs/logo-cloud-3/logo-12.svg" alt="Lasya AI Tech" />
								</div>
								<div data-kte="kt-55217" className="kt-55217 bg-white py-3 px-3 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
									<img src="/assets/imgs/logo-cloud-3/logo-7.svg" alt="Lasya AI Tech" />
								</div>
							</div>
						</div>
						<div data-kte="kt-81240" className="kt-81240 bouncing-blobs-container rounded-4 fix">
							<div data-kte="kt-81357" className="kt-81357 bouncing-blobs-glass rounded-4" />
							<div data-kte="kt-46411" className="kt-46411 bouncing-blobs">
								<div data-kte="kt-20856" className="kt-20856 bouncing-blob bouncing-blob--green" />
								<div data-kte="kt-55854" className="kt-55854 bouncing-blob bouncing-blob--primary" />
								<div data-kte="kt-91710" className="kt-91710 bouncing-blob bouncing-blob--infor bouncing-blob--infor-2" />
							</div>
						</div>
					</div>
				</div>
			</section>
			)}

			<section data-kte="kt-17329" className="kt-17329 section-faqs-2 section-padding bg-4 position-relative">
					<div data-kte="kt-28810" className="kt-28810 container position-relative z-2">
						<div data-kte="kt-15951" className="kt-15951 text-center mb-8">
								
							<h3 data-kte="kt-85020" className="kt-85020 ds-3 my-3 fw-bold">{data?.FAQ_title}</h3>
							<p data-kte="kt-86477" className="kt-86477 fs-5 mb-0">{data?.FAQ_description}</p>
						</div>
						<div className={`row align-items-center position-relative z-1 ${data?.FAQ_details?.length < 10 ? 'justify-content-center' : ''}`}>
							<div data-kte="kt-64822" className="kt-64822 col-lg-6">
								<div data-kte="kt-87573" className="kt-87573 accordion">
									{data?.FAQ_details?.slice(0, Math.ceil(data?.FAQ_details?.length / 2)).map((item: any, index: number) => (
										<div data-kte="kt-10136" className="kt-10136 mb-3 card p-3 border bg-white rounded-3" key={index}>
											<div data-kte="kt-65970" className="kt-65970 px-0 card-header border-0 bg-gradient-1">
												<a 
													className={`${activeItem === index + 1 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} 
													onClick={() => handleActiveItem(index + 1)} 
													data-bs-toggle="collapse"
												>
													<h6 data-kte="kt-73215" className="kt-73215 m-0">{item.title}</h6>
												</a>
											</div>
											<div 
												id={`collapse${(index + 1).toString().padStart(2, '0')}`} 
												className={activeItem === index + 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} 
												data-bs-parent=".accordion"
											>
												<p data-kte="kt-14074" className="kt-14074 ps-0 card-body">{item.description}</p>
											</div>
										</div>
									))}
								</div>
							</div>
							{data?.FAQ_details?.length > 1 && (
								<div data-kte="kt-71617" className="kt-71617 col-lg-6 mt-lg-0 mt-2">
									<div data-kte="kt-98840" className="kt-98840 accordion">
										{data?.FAQ_details?.slice(Math.ceil(data?.FAQ_details?.length / 2)).map((item: any, index: number) => (
											<div data-kte="kt-25824" className="kt-25824 mb-3 card p-3 border bg-white rounded-3" key={index + Math.ceil(data?.FAQ_details?.length / 2)}>
												<div data-kte="kt-35190" className="kt-35190 px-0 card-header border-0 bg-gradient-1">
													<a 
														className={`${activeItem === index + Math.ceil(data?.FAQ_details?.length / 2) + 1 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} 
														onClick={() => handleActiveItem(index + Math.ceil(data?.FAQ_details?.length / 2) + 1)} 
														data-bs-toggle="collapse"
													>
														<h6 data-kte="kt-79757" className="kt-79757 m-0">{item.title}</h6>
													</a>
												</div>
												<div 
													id={`collapse${(index + Math.ceil(data?.FAQ_details?.length / 2) + 1).toString().padStart(2, '0')}`} 
													className={activeItem === index + Math.ceil(data?.FAQ_details?.length / 2) + 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} 
													data-bs-parent=".accordion"
												>
													<p data-kte="kt-72193" className="kt-72193 ps-0 card-body">{item.description}</p>
												</div>
											</div>
										))}
									</div>
								</div>
							)}
						</div>
						<div data-kte="kt-41950" className="kt-41950 ellipse-center position-absolute top-50 start-50 translate-middle z-0" />
					</div>
				</section>
		</>
	);
}


