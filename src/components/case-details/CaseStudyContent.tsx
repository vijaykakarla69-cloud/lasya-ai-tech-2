"use client"
import Link from "next/link"
import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper/modules'
import { useLoading } from '@/src/services/LoadingService'

const BASE_URL = 'https://cms.kriva.tech';

export default function CaseStudyContent({ caseStudyData }: any) {  
  const { showLoading, hideLoading } = useLoading();
  const swiperOptions = { 
    slidesPerView: 1,
    slidesPerGroup: 1,
    centeredSlides: false,  
    loop: true,
    autoplay: {
      delay: 4000,
    },
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  }

  useEffect(() => {
    if (!caseStudyData?.data?.[0]?.lapl_case_details?.[0]) {
      showLoading();
    } else {
      hideLoading();
    }
  }, [caseStudyData, showLoading, hideLoading]);

  if (!caseStudyData?.data?.[0]?.lapl_case_details?.[0]) {
    return null;
  }

  const caseDetails = caseStudyData.data[0].lapl_case_details[0];

  return (
    <section>
      <div data-kte="kt-40032" className="kt-40032 container section-padding">
        <div data-kte="kt-48275" className="kt-48275 row">
          <div data-kte="kt-67331" className="kt-67331 d-flex gap-2">
            {caseDetails?.labels?.map((label: any, index: number) => (
              <Link 
                key={index}
                href="#" 
                className="bg-primary-soft rounded-pill px-3 fw-bold py-2 text-primary text-uppercase fs-7"
              >
                {label?.labels}
              </Link>
            ))}
          </div>
          <h5 data-kte="kt-32818" className="kt-32818 ds-5 mt-3 mb-8">
            {caseDetails.title || 'Loading...'}
          </h5>
          <div data-kte="kt-57876" className="kt-57876 col-12">
            <div data-kte="kt-64893" className="kt-64893 position-relative mb-9">  
              <Swiper {...swiperOptions}
                className="swiper slider-two rounded-3"
                modules={[Keyboard, Autoplay, Pagination, Navigation]}  
              >
                <div data-kte="kt-97710" className="kt-97710 swiper-wrapper">
                  {caseDetails?.lapl_case_detail_image?.map((image: any, index: number) => (
                    <SwiperSlide key={index} data-kte="kt-23818" className="kt-23818 swiper-slide">
                      <img 
                        className="w-100" 
                        src={`${BASE_URL}${image.images[0].url}`} 
                        alt="Lasya AI Tech" 
                      />
                    </SwiperSlide>
                  ))}
                </div>
              </Swiper>
              <div>
                <div data-kte="kt-57668" className="kt-57668 swiper-button-prev bg-white position-absolute top-100 start-50 translate-middle-y me-8 mt-1 shadow">
                  <i data-kte="kt-60125" className="kt-60125 bi bi-arrow-left" />
                </div>  
                <div data-kte="kt-86545" className="kt-86545 swiper-button-next bg-white position-absolute top-100 start-50 translate-middle-y ms-8 mt-1 shadow">
                  <i data-kte="kt-52311" className="kt-52311 bi bi-arrow-right" /> 
                </div>
              </div>
            </div>
            <div data-kte="kt-74413" className="kt-74413 d-flex flex-column flex-md-row text-center align-items-center justify-content-between border-top border-bottom mb-7">
              <div data-kte="kt-21865" className="kt-21865 py-3">
                <span data-kte="kt-53998" className="kt-53998 text-500 fs-6">Client</span>
                <p data-kte="kt-16744" className="kt-16744 text-900 mb-0">Quantum Solutions</p>
              </div>
              <div data-kte="kt-86504" className="kt-86504 py-3">
                <span data-kte="kt-46408" className="kt-46408 text-500 fs-6">Start</span>
                <p data-kte="kt-59101" className="kt-59101 text-900 mb-0">01 Aug 2024</p>
              </div>
              <div data-kte="kt-46552" className="kt-46552 py-3">
                <span data-kte="kt-87317" className="kt-87317 text-500 fs-6">Complete</span>
                <p data-kte="kt-45049" className="kt-45049 text-900 mb-0">01 Sep 2024</p>
              </div>
              <div data-kte="kt-36890" className="kt-36890 py-3">
                <span data-kte="kt-39381" className="kt-39381 text-500 fs-6">Services</span>
                <p data-kte="kt-11773" className="kt-11773 text-900 mb-0">UI/UX Design</p>
              </div>
              <div data-kte="kt-45870" className="kt-45870 py-3">
                <span data-kte="kt-35475" className="kt-35475 text-500 fs-6">Website</span>
                <p data-kte="kt-71460" className="kt-71460 text-900 mb-0">quantum.sw</p>
              </div>
            </div>
            {caseDetails.casedetail?.map((detail: any, index: number) => (
              <div key={index}>
                {detail.children.map((child: any, childIndex: number) => (
                  <div key={childIndex}>
                    {detail.type === 'heading' ? (
                      <h3 data-kte="kt-47432" className="kt-47432 mb-4 mt-5 fw-bold">{child.text}</h3>
                    ) : (
                      <p className={`fs-5 ${
                        child.bold || 
                        child.text.includes("Research") ||
                        child.text.includes("Solution") ||
                        child.text.includes("Results") ||
                        child.text.includes("Conclusion")
                          ? 'fw-bold'
                          : 'text-500'
                      }`}>
                        {child.text}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}