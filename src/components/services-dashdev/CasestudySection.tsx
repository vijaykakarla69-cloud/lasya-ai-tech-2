"use client"
import Link from "next/link";
import { Navigation } from "swiper/modules"
import { Pagination } from "swiper/modules"
import { Autoplay } from "swiper/modules"
import { Keyboard } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import RightArrow from "@/public/assets/icons/right-arrow.svg"
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
export default function CaseStudySection(){
    return(
<section data-kte="kt-54048" className="kt-54048 section-features-7 bg-neutral-100 section-padding">
<div data-kte="kt-73686" className="kt-73686 container">
    <div data-kte="kt-22178" className="kt-22178 row mb-8 mb-lg-6">
        <div data-kte="kt-37409" className="kt-37409 col-lg-6">
            <div data-kte="kt-40571" className="kt-40571 d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
                <img src="/assets/imgs/features-1/dots.png" alt="Lasya AI Tech" />
                <span data-kte="kt-92573" className="kt-92573 tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Why us ?</span>
            </div>
            <h3 data-kte="kt-48265" className="kt-48265 ds-3 mt-3 mb-3">Reach out to <br /> the world's most</h3>
            <p data-kte="kt-83953" className="kt-83953 fs-5 fw-medium">⚡Here are a few reasons why our customers choose Kriva Tech.</p>
        </div>
        <div data-kte="kt-36327" className="kt-36327 col-lg-2 col-md-3 col-5 ms-auto align-self-end mb-lg-7">
            <div data-kte="kt-73593" className="kt-73593 position-relative z-0">
                <div data-kte="kt-91039" className="kt-91039 swiper-button-prev bg-white ms-lg-7">
                    <i data-kte="kt-89361" className="kt-89361 bi bi-arrow-left" />
                </div>
                <div data-kte="kt-24011" className="kt-24011 swiper-button-next bg-white">
                    <i data-kte="kt-87651" className="kt-87651 bi bi-arrow-right" />
                </div>
            </div>
        </div>
    </div>
    <div data-kte="kt-61809" className="kt-61809 row">
        <Swiper {...swiperOptions}
            className="swiper slider-1 pb-3"
            modules={[Keyboard, Autoplay, Pagination, Navigation]}
        >
            <div data-kte="kt-78649" className="kt-78649 swiper-wrapper">
                {/* prettier-ignore */}
                <SwiperSlide data-kte="kt-16380" className="kt-16380 swiper-slide">
                    <div data-kte="kt-23497" className="kt-23497 card border-0 position-relative rounded-3 d-inline-flex card-hover">
                        <img data-kte="kt-62759" className="kt-62759 rounded-top-3" src="/assets/imgs/features-7/img-1.png" alt="Lasya AI Tech" />
                        <Link href="#" data-kte="kt-31198" className="kt-31198 position-absolute z-1 m-3 bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-3 py-1">
                            <span data-kte="kt-24729" className="kt-24729 tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">business</span>
                        </Link>
                        <div data-kte="kt-30814" className="kt-30814 card-body bg-white p-6">
                            <h6 data-kte="kt-87958" className="kt-87958 mb-3">Marketing Automation</h6>
                            <p>As the SaaS industry continues to evolve, new trends are shaping the future of software delivery and consumption...</p>
                            <Link href="#" data-kte="kt-60713" className="kt-60713 fw-bold text-primary d-inline-block pt-3 position-relative z-1">Keep Reading
                              <RightArrow />
                            </Link>
                        </div>
                        <Link href="#" data-kte="kt-20240" className="kt-20240 position-absolute bottom-0 start-0 end-0 top-0 z-0" />
                    </div>
                </SwiperSlide>
                <SwiperSlide data-kte="kt-67051" className="kt-67051 swiper-slide">
                    <div data-kte="kt-52970" className="kt-52970 card border-0 position-relative rounded-3 d-inline-flex card-hover">
                        <img data-kte="kt-46746" className="kt-46746 rounded-top-3" src="/assets/imgs/features-7/img-2.png" alt="Lasya AI Tech" />
                        <Link href="#" data-kte="kt-70969" className="kt-70969 position-absolute z-1 m-3 bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-3 py-1">
                            <span data-kte="kt-64705" className="kt-64705 tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Research</span>
                        </Link>
                        <div data-kte="kt-14017" className="kt-14017 card-body bg-white p-6">
                            <h6 data-kte="kt-90793" className="kt-90793 mb-3">Project Management</h6>
                            <p>As the SaaS industry continues to evolve, new trends are shaping the future of software delivery and consumption...</p>
                            <Link href="#" data-kte="kt-82406" className="kt-82406 fw-bold text-primary d-inline-block pt-3 position-relative z-1">Keep Reading
                               <RightArrow />
                            </Link>
                        </div>
                        <Link href="#" data-kte="kt-85932" className="kt-85932 position-absolute bottom-0 start-0 end-0 top-0 z-0" />
                    </div>
                </SwiperSlide>
                <SwiperSlide data-kte="kt-15029" className="kt-15029 swiper-slide">
                    <div data-kte="kt-43716" className="kt-43716 card border-0 position-relative rounded-3 d-inline-flex card-hover">
                        <img data-kte="kt-87602" className="kt-87602 rounded-top-3" src="/assets/imgs/features-7/img-3.png" alt="Lasya AI Tech" />
                        <Link href="#" data-kte="kt-53742" className="kt-53742 position-absolute z-1 m-3 bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-3 py-1">
                            <span data-kte="kt-62782" className="kt-62782 tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Social Media</span>
                        </Link>
                        <div data-kte="kt-18749" className="kt-18749 card-body bg-white p-6">
                            <h6 data-kte="kt-30837" className="kt-30837 mb-3">Social Media Management</h6>
                            <p>As the SaaS industry continues to evolve, new trends are shaping the future of software delivery and consumption...</p>
                            <Link href="#" data-kte="kt-28414" className="kt-28414 fw-bold text-primary d-inline-block pt-3 position-relative z-1">Keep Reading
                             <RightArrow />
                            </Link>
                        </div>
                        <Link href="#" data-kte="kt-49825" className="kt-49825 position-absolute bottom-0 start-0 end-0 top-0 z-0" />
                    </div>
                </SwiperSlide>
                <SwiperSlide data-kte="kt-80920" className="kt-80920 swiper-slide">
                    <div data-kte="kt-16571" className="kt-16571 card border-0 position-relative rounded-3 d-inline-flex card-hover">
                        <img data-kte="kt-33054" className="kt-33054 rounded-top-3" src="/assets/imgs/features-7/img-1.png" alt="Lasya AI Tech" />
                        <Link href="#" data-kte="kt-88202" className="kt-88202 position-absolute z-1 m-3 bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-3 py-1">
                            <span data-kte="kt-61692" className="kt-61692 tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">business</span>
                        </Link>
                        <div data-kte="kt-59835" className="kt-59835 card-body bg-white p-6">
                            <h6 data-kte="kt-83527" className="kt-83527 mb-3">Marketing Automation</h6>
                            <p>As the SaaS industry continues to evolve, new trends are shaping the future of software delivery and consumption...</p>
                            <Link href="#" data-kte="kt-22900" className="kt-22900 fw-bold text-primary d-inline-block pt-3 position-relative z-1">Keep Reading
                               <RightArrow />
                            </Link>
                        </div>
                        <Link href="#" data-kte="kt-64111" className="kt-64111 position-absolute bottom-0 start-0 end-0 top-0 z-0" />
                    </div>
                </SwiperSlide>
                <SwiperSlide data-kte="kt-66119" className="kt-66119 swiper-slide">
                    <div data-kte="kt-65428" className="kt-65428 card border-0 position-relative rounded-3 d-inline-flex card-hover">
                        <img data-kte="kt-94106" className="kt-94106 rounded-top-3" src="/assets/imgs/features-7/img-2.png" alt="Lasya AI Tech" />
                        <Link href="#" data-kte="kt-38773" className="kt-38773 position-absolute z-1 m-3 bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-3 py-1">
                            <span data-kte="kt-62277" className="kt-62277 tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Research</span>
                        </Link>
                        <div data-kte="kt-25136" className="kt-25136 card-body bg-white p-6">
                            <h6 data-kte="kt-95469" className="kt-95469 mb-3">Project Management</h6>
                            <p>As the SaaS industry continues to evolve, new trends are shaping the future of software delivery and consumption...</p>
                            <Link href="#" data-kte="kt-56825" className="kt-56825 fw-bold text-primary d-inline-block pt-3 position-relative z-1">Keep Reading
                             <RightArrow />
                            </Link>
                        </div>
                        <Link href="#" data-kte="kt-24245" className="kt-24245 position-absolute bottom-0 start-0 end-0 top-0 z-0" />
                    </div>
                </SwiperSlide>
                <SwiperSlide data-kte="kt-38052" className="kt-38052 swiper-slide">
                    <div data-kte="kt-78591" className="kt-78591 card border-0 position-relative rounded-3 d-inline-flex card-hover">
                        <img data-kte="kt-24173" className="kt-24173 rounded-top-3" src="/assets/imgs/features-7/img-3.png" alt="Lasya AI Tech" />
                        <Link href="#" data-kte="kt-75122" className="kt-75122 position-absolute z-1 m-3 bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-3 py-1">
                            <span data-kte="kt-21919" className="kt-21919 tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Social Media</span>
                        </Link>
                        <div data-kte="kt-83538" className="kt-83538 card-body bg-white p-6">
                            <h6 data-kte="kt-64980" className="kt-64980 mb-3">Social Media Management</h6>
                            <p>As the SaaS industry continues to evolve, new trends are shaping the future of software delivery and consumption...</p>
                            <Link href="#" data-kte="kt-12007" className="kt-12007 fw-bold text-primary d-inline-block pt-3 position-relative z-1">Keep Reading
                               <RightArrow />
                            </Link>
                        </div>
                        <Link href="#" data-kte="kt-58545" className="kt-58545 position-absolute bottom-0 start-0 end-0 top-0 z-0" />
                    </div>
                </SwiperSlide>
            </div>
        </Swiper>
    </div>
</div>
</section>
    )
}