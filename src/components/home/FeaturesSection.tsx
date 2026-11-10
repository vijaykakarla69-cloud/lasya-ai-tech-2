"use client"
import Link from "next/link"
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useState, useEffect } from "react"
import BlackRightArrowIcon from "@/public/assets/icons/black-right-arrow.svg"
export default function FeaturesSection({data}: {data: any}) {  
    if (!data) return null; 

    const featuredProject = data[0]
    const whyUsButton = featuredProject?.button?.find((btn: any) => btn.variant === 'primary')

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
            <section data-kte="kt-81397" className="kt-81397 section-features-7 bg-neutral-100 section-padding">
                <div data-kte="kt-48669" className="kt-48669 container">
                    <div data-kte="kt-43098" className="kt-43098 row mb-8 mb-lg-6">
                        <div data-kte="kt-91663" className="kt-91663 col-lg-6">
                            {whyUsButton && (
                                <Link 
                                    href={whyUsButton.link} 
                                    className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" 
                                    data-aos="zoom-in" 
                                    data-aos-delay={100}
                                >
                                    <img src="/assets/imgs/features-1/dots.png" alt="Lasya AI Tech" />
                                    <span data-kte="kt-42184" className="kt-42184 tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">
                                        {whyUsButton.label}
                                    </span>
                                </Link>
                            )}
                            <h3 data-kte="kt-61682" className="kt-61682 ds-3 mt-3 mb-3">{featuredProject.title}</h3>
                            <p data-kte="kt-36552" className="kt-36552 fs-5 fw-medium">{featuredProject.subtitle}</p>
                        </div>
                        <div data-kte="kt-37942" className="kt-37942 col-lg-2 col-md-3 col-5 ms-auto align-self-end mb-lg-7">
                            <div data-kte="kt-10128" className="kt-10128 position-relative z-0">
                                <div data-kte="kt-28772" className="kt-28772 swiper-button-prev bg-white ms-lg-7">
                                    <i data-kte="kt-56365" className="kt-56365 bi bi-arrow-left" />
                                </div>
                                <div data-kte="kt-47209" className="kt-47209 swiper-button-next bg-white">
                                    <i data-kte="kt-93835" className="kt-93835 bi bi-arrow-right" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-kte="kt-18389" className="kt-18389 row">
                        <Swiper {...swiperOptions}
                            className="swiper slider-1 pb-3"
                            modules={[Keyboard, Autoplay, Pagination, Navigation]}
                        >
                            <div data-kte="kt-40705" className="kt-40705 swiper-wrapper">
                                {featuredProject.lapl_case_study_collections.map((study: any) => (
                                    <SwiperSlide key={study.id} data-kte="kt-12050" className="kt-12050 swiper-slide">
                                        <div data-kte="kt-41102" className="kt-41102 card border-0 position-relative rounded-3 d-inline-flex h-100">
                                            <div data-kte="kt-79460" className="kt-79460 card-img-wrapper" style={{ height: '240px' }}>
                                                <img 
                                                    className="rounded-top-3 w-100 h-100"
                                                    src={`https://cms.kriva.tech${study.image[0]?.url}`}
                                                    alt={study.title} 
                                                    style={{ objectFit: 'cover' }}
                                                />
                                            </div>
                                            <Link href="#" data-kte="kt-60249" className="kt-60249 position-absolute z-1 m-3 bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-3 py-1">
                                                <span data-kte="kt-56835" className="kt-56835 tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">{study.categories}</span>
                                            </Link>
                                            <div data-kte="kt-60211" className="kt-60211 card-body bg-white p-6 d-flex flex-column h-100">
                                                <h6 data-kte="kt-84602" className="kt-84602 mb-3">{study.title}</h6>
                                                <p data-kte="kt-41990" className="kt-41990 flex-grow-1">{study.description}</p>
                                                <Link href="#" data-kte="kt-28096" className="kt-28096 fw-bold text-primary mt-auto">
                                                    Keep Reading
                                                    <BlackRightArrowIcon className="ms-2" />
                                                </Link>
                                            </div>
                                            <Link href="#" data-kte="kt-78713" className="kt-78713 position-absolute bottom-0 start-0 end-0 top-0 z-0" />
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
