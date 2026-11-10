"use client"
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Autoplay, Pagination, Navigation } from "swiper/modules";
import RightArrowIcon from "@/public/assets/icons/right-arrow.svg"

export default function Projects() {
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
		<section data-kte="kt-41634" className="kt-41634 section-features-7 bg-neutral-100 section-padding">
			<div data-kte="kt-70558" className="kt-70558 container">
				<div data-kte="kt-23762" className="kt-23762 row mb-8 mb-lg-6">
						<div data-kte="kt-24269" className="kt-24269 col-lg-6">
							<div data-kte="kt-70708" className="kt-70708 d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
								<img src="/assets/imgs/features-1/dots.png" alt="Lasya AI Tech" />
								<span data-kte="kt-44260" className="kt-44260 tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Why us ?</span>
							</div>
							<h3 data-kte="kt-48535" className="kt-48535 ds-3 mt-3 mb-3">Reach out to <br /> the world's most</h3>
							<p data-kte="kt-40362" className="kt-40362 fs-5 fw-medium">⚡Here are a few reasons why our customers choose Kriva Tech.</p>
						</div>
						<div data-kte="kt-38120" className="kt-38120 col-lg-2 col-md-3 col-5 ms-auto align-self-end mb-lg-7">
							<div data-kte="kt-38193" className="kt-38193 position-relative z-0">
								<div data-kte="kt-61773" className="kt-61773 swiper-button-prev bg-white ms-lg-7">
									<i data-kte="kt-29089" className="kt-29089 bi bi-arrow-left" />
								</div>
								<div data-kte="kt-44377" className="kt-44377 swiper-button-next bg-white">
									<i data-kte="kt-97743" className="kt-97743 bi bi-arrow-right" />
								</div>
							</div>
						</div>
					</div>
					<div data-kte="kt-67761" className="kt-67761 row">
						<Swiper {...swiperOptions}
							className="swiper slider-1 pb-3"
							modules={[Keyboard, Autoplay, Pagination, Navigation]}
						>
							<div data-kte="kt-53042" className="kt-53042 swiper-wrapper">
								{/* prettier-ignore */}
								<SwiperSlide data-kte="kt-22453" className="kt-22453 swiper-slide">
									<div data-kte="kt-23760" className="kt-23760 card border-0 position-relative rounded-3 d-inline-flex card-hover">
										<img data-kte="kt-32694" className="kt-32694 rounded-top-3" src="/assets/imgs/features-7/img-1.png" alt="Lasya AI Tech" />
										<Link href="#" data-kte="kt-32747" className="kt-32747 position-absolute z-1 m-3 bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-3 py-1">
											<span data-kte="kt-89790" className="kt-89790 tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">business</span>
										</Link>
										<div data-kte="kt-84721" className="kt-84721 card-body bg-white p-6">
											<h6 data-kte="kt-23800" className="kt-23800 mb-3">Marketing Automation</h6>
											<p>As the SaaS industry continues to evolve, new trends are shaping the future of software delivery and consumption...</p>
											<Link href="#" data-kte="kt-44536" className="kt-44536 fw-bold text-primary d-inline-block pt-3 position-relative z-1">Keep Reading
									
												<RightArrowIcon />
											</Link>
										</div>
										<Link href="#" data-kte="kt-82393" className="kt-82393 position-absolute bottom-0 start-0 end-0 top-0 z-0" />
									</div>
								</SwiperSlide>
								<SwiperSlide data-kte="kt-36058" className="kt-36058 swiper-slide">
									<div data-kte="kt-83771" className="kt-83771 card border-0 position-relative rounded-3 d-inline-flex card-hover">
										<img data-kte="kt-62304" className="kt-62304 rounded-top-3" src="/assets/imgs/features-7/img-2.png" alt="Lasya AI Tech" />
										<Link href="#" data-kte="kt-69300" className="kt-69300 position-absolute z-1 m-3 bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-3 py-1">
											<span data-kte="kt-33580" className="kt-33580 tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Research</span>
										</Link>
										<div data-kte="kt-83618" className="kt-83618 card-body bg-white p-6">
											<h6 data-kte="kt-87768" className="kt-87768 mb-3">Project Management</h6>
											<p>As the SaaS industry continues to evolve, new trends are shaping the future of software delivery and consumption...</p>
											<Link href="#" data-kte="kt-76338" className="kt-76338 fw-bold text-primary d-inline-block pt-3 position-relative z-1">Keep Reading
												
												<RightArrowIcon />
											</Link>
										</div>
										<Link href="#" data-kte="kt-92013" className="kt-92013 position-absolute bottom-0 start-0 end-0 top-0 z-0" />
									</div>
								</SwiperSlide>
								<SwiperSlide data-kte="kt-41278" className="kt-41278 swiper-slide">
									<div data-kte="kt-30706" className="kt-30706 card border-0 position-relative rounded-3 d-inline-flex card-hover">
										<img data-kte="kt-37330" className="kt-37330 rounded-top-3" src="/assets/imgs/features-7/img-3.png" alt="Lasya AI Tech" />
										<Link href="#" data-kte="kt-20854" className="kt-20854 position-absolute z-1 m-3 bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-3 py-1">
											<span data-kte="kt-42639" className="kt-42639 tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Social Media</span>
										</Link>
										<div data-kte="kt-69225" className="kt-69225 card-body bg-white p-6">
											<h6 data-kte="kt-91336" className="kt-91336 mb-3">Social Media Management</h6>
											<p>As the SaaS industry continues to evolve, new trends are shaping the future of software delivery and consumption...</p>
											<Link href="#" data-kte="kt-41921" className="kt-41921 fw-bold text-primary d-inline-block pt-3 position-relative z-1">Keep Reading
											
												<RightArrowIcon />
											</Link>
										</div>
										<Link href="#" data-kte="kt-50730" className="kt-50730 position-absolute bottom-0 start-0 end-0 top-0 z-0" />
									</div>
								</SwiperSlide>
								<SwiperSlide data-kte="kt-63301" className="kt-63301 swiper-slide">
									<div data-kte="kt-91509" className="kt-91509 card border-0 position-relative rounded-3 d-inline-flex card-hover">
										<img data-kte="kt-23770" className="kt-23770 rounded-top-3" src="/assets/imgs/features-7/img-1.png" alt="Lasya AI Tech" />
										<Link href="#" data-kte="kt-25774" className="kt-25774 position-absolute z-1 m-3 bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-3 py-1">
											<span data-kte="kt-30504" className="kt-30504 tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">business</span>
										</Link>
										<div data-kte="kt-42491" className="kt-42491 card-body bg-white p-6">
											<h6 data-kte="kt-15050" className="kt-15050 mb-3">Marketing Automation</h6>
											<p>As the SaaS industry continues to evolve, new trends are shaping the future of software delivery and consumption...</p>
											<Link href="#" data-kte="kt-33311" className="kt-33311 fw-bold text-primary d-inline-block pt-3 position-relative z-1">Keep Reading
											
												<RightArrowIcon />
											</Link>
										</div>
										<Link href="#" data-kte="kt-39244" className="kt-39244 position-absolute bottom-0 start-0 end-0 top-0 z-0" />
									</div>
								</SwiperSlide>
								<SwiperSlide data-kte="kt-71990" className="kt-71990 swiper-slide">
									<div data-kte="kt-92625" className="kt-92625 card border-0 position-relative rounded-3 d-inline-flex card-hover">
										<img data-kte="kt-95121" className="kt-95121 rounded-top-3" src="/assets/imgs/features-7/img-2.png" alt="Lasya AI Tech" />
										<Link href="#" data-kte="kt-76941" className="kt-76941 position-absolute z-1 m-3 bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-3 py-1">
											<span data-kte="kt-76771" className="kt-76771 tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Research</span>
										</Link>
										<div data-kte="kt-90711" className="kt-90711 card-body bg-white p-6">
											<h6 data-kte="kt-42966" className="kt-42966 mb-3">Project Management</h6>
											<p>As the SaaS industry continues to evolve, new trends are shaping the future of software delivery and consumption...</p>
											<Link href="#" data-kte="kt-45619" className="kt-45619 fw-bold text-primary d-inline-block pt-3 position-relative z-1">Keep Reading
												
												<RightArrowIcon />
											</Link>
										</div>
										<Link href="#" data-kte="kt-22939" className="kt-22939 position-absolute bottom-0 start-0 end-0 top-0 z-0" />
									</div>
								</SwiperSlide>
								<SwiperSlide data-kte="kt-71359" className="kt-71359 swiper-slide">
									<div data-kte="kt-58770" className="kt-58770 card border-0 position-relative rounded-3 d-inline-flex card-hover">
										<img data-kte="kt-26102" className="kt-26102 rounded-top-3" src="/assets/imgs/features-7/img-3.png" alt="Lasya AI Tech" />
										<Link href="#" data-kte="kt-78307" className="kt-78307 position-absolute z-1 m-3 bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-3 py-1">
											<span data-kte="kt-82721" className="kt-82721 tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Social Media</span>
										</Link>
										<div data-kte="kt-40206" className="kt-40206 card-body bg-white p-6">
											<h6 data-kte="kt-69962" className="kt-69962 mb-3">Social Media Management</h6>
											<p>As the SaaS industry continues to evolve, new trends are shaping the future of software delivery and consumption...</p>
											<Link href="#" data-kte="kt-75198" className="kt-75198 fw-bold text-primary d-inline-block pt-3 position-relative z-1">Keep Reading

												<RightArrowIcon />
											</Link>
										</div>
										<Link href="#" data-kte="kt-17127" className="kt-17127 position-absolute bottom-0 start-0 end-0 top-0 z-0" />
									</div>
								</SwiperSlide>
							</div>
						</Swiper>
						</div>
					</div>
				</section>
    )
}