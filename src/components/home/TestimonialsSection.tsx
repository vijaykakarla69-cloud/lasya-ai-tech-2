"use client"
import Link from "next/link"
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useState, useEffect } from "react"
import CrossWhiteArrowIcon from "@/public/assets/icons/cross-white-arrow.svg"
import QuoteIcon from "@/public/assets/icons/quote.svg"
export default function TestimonialSection({data}: {data: any}) {
    if (!data) return null;

    const testimonial = data[0]
    const reviews = testimonial.lapl_reviews

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
            <section data-kte="kt-95986" className="kt-95986 section-testimonial-2 position-relative bg-white section-padding">
                <div data-kte="kt-73896" className="kt-73896 container position-relative z-1">
                    <div data-kte="kt-56243" className="kt-56243 row pb-9">
                        <div data-kte="kt-93071" className="kt-93071 col-lg-7 mx-lg-auto">
                            <div data-kte="kt-62990" className="kt-62990 text-center mb-lg-0 mb-5">
                                <h4 data-kte="kt-29453" className="kt-29453 ds-4 my-3">
                                    {testimonial.title}
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div data-kte="kt-87316" className="kt-87316 row">
                        {reviews.map((review: any, index: any) => (
                            <div key={review.id} className={`col-lg-4 ${index > 2 ? 'mt-4' : ''}`}>
                                <div className={`bg-neutral-100 p-5 ${index > 0 && index <= 2 ? 'mt-5 mt-lg-0' : ''} rounded-3`} data-aos="fade-zoom-in" data-aos-delay={index * 100}>
                                    <p data-kte="kt-55868" className="kt-55868 text-900">{review.description}</p>
                                    <div data-kte="kt-21304" className="kt-21304 d-flex align-items-center mt-5">
                                        <img data-kte="kt-72587" className="kt-72587 avatar-lg" src="/assets/imgs/testimonial-1/avatar-1.png" alt="Lasya AI Tech" />
                                        <div data-kte="kt-10406" className="kt-10406 d-flex flex-column">
                                            <h6 data-kte="kt-31827" className="kt-31827 ms-3 fs-6 mb-0">{review.name}</h6>
                                            <div data-kte="kt-10335" className="kt-10335 flag ms-3">
                                                <img src="/assets/imgs/testimonial-1/flag-1.png" alt="Lasya AI Tech" />
                                                <span data-kte="kt-92453" className="kt-92453 fs-8">{review.role}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div data-kte="kt-10713" className="kt-10713 text-center mt-8 position-relative z-3">
                    <Link href={testimonial.button.link} data-kte="kt-37225" className="kt-37225 btn btn-dark hover-up">
                        {testimonial.button.label}
                        <CrossWhiteArrowIcon className="ms-2" />
                    </Link>
                </div>
                <div data-kte="kt-28890" className="kt-28890 mask-image-2 position-absolute top-50 bottom-0 start-0 end-0 z-1" />
            </section>

            {/* Swiper Section */}
            <section data-kte="kt-61841" className="kt-61841 section-testimonial-3 position-relative section-padding fix">
                <div data-kte="kt-55638" className="kt-55638 container position-relative z-1">
                    <div data-kte="kt-77098" className="kt-77098 row">
                        <Swiper {...swiperOptions}
                            className="swiper slider-1 pt-2 pb-3"
                            modules={[Keyboard, Autoplay, Pagination, Navigation]}
                        >
                            <div data-kte="kt-56814" className="kt-56814 swiper-wrapper">
                                {reviews.map((review: any) => (
                                    <SwiperSlide key={review.id} data-kte="kt-30468" className="kt-30468 swiper-slide">
                                        <div data-kte="kt-18394" className="kt-18394 bg-neutral-100 card-testimonial-3 p-5 rounded-3 position-relative">
                                            <div data-kte="kt-74533" className="kt-74533 d-flex align-items-center mb-5">
                                                <img data-kte="kt-40549" className="kt-40549 avatar-lg" src="/assets/imgs/testimonial-1/avatar-1.png" alt="Lasya AI Tech" />
                                                <div data-kte="kt-85312" className="kt-85312 d-flex flex-column">
                                                    <h6 data-kte="kt-93053" className="kt-93053 ms-3 fs-6 mb-0">{review.name}</h6>
                                                    <div data-kte="kt-88425" className="kt-88425 flag ms-3">
                                                        <img src="/assets/imgs/testimonial-1/flag-1.png" alt="Lasya AI Tech" />
                                                        <span data-kte="kt-17922" className="kt-17922 fs-8">{review.role}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <p data-kte="kt-18583" className="kt-18583 text-900 border-bottom pb-4 mb-4">{review.description}</p>
                                            <div data-kte="kt-67163" className="kt-67163 d-flex">
                                                <img src="/assets/imgs/hero-4/star-yellow.svg" alt="Lasya AI Tech" />
                                                <img src="/assets/imgs/hero-4/star-yellow.svg" alt="Lasya AI Tech" />
                                                <img src="/assets/imgs/hero-4/star-yellow.svg" alt="Lasya AI Tech" />
                                                <img src="/assets/imgs/hero-4/star-yellow.svg" alt="Lasya AI Tech" />
                                                <img src="/assets/imgs/hero-4/star-yellow.svg" alt="Lasya AI Tech" />
                                                <span data-kte="kt-10245" className="kt-10245 fs-8 text-600 ms-2">{review.comment}</span>
                                            </div>
                                            {/* Quote icon */}
                                            <div data-kte="kt-59494" className="kt-59494 position-absolute top-0 end-0 m-4">
                                                <QuoteIcon />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </div>
                            <div data-kte="kt-83843" className="kt-83843 swiper-pagination" />
                        </Swiper>
                    </div>
                </div>
                {/* Background elements */}
                <div data-kte="kt-99144" className="kt-99144 position-absolute top-0 start-50 translate-middle-x z-0">
                    <img src="/assets/imgs/service-2/bg-line.png" alt="Lasya AI Tech" />
                </div>
                <div data-kte="kt-18892" className="kt-18892 rotate-center ellipse-rotate-success position-absolute z-0" />
                <div data-kte="kt-28895" className="kt-28895 rotate-center-rev ellipse-rotate-primary position-absolute z-1" />
            </section>
        </>
    )
}
