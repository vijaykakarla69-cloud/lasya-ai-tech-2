"use client"
import Link from "next/link"
import { useState, useEffect } from "react"
import { AllServices } from '@/src/services/allServices'
import NewsletterModal from './NewsletterModal';
import UpArrow from "@/public/assets/icons/uparrow.svg"
import RightArrow from "@/public/assets/icons/right-arrow.svg"
import DownArrow from "@/public/assets/icons/down-arrow.svg"
import ctaSectionData from '@/src/data/ctasection.json'

export default function ContactCta({ compact }: { compact?: boolean } = {}) {
  const [activeItem, setActiveItem] = useState<number | null>(null)
  const [showModal, setShowModal] = useState(false)

  // Get data from ctasection.json instead of API call
  const ctaData = ctaSectionData?.data;

  const handleActiveItem = (index: number) => {
    setActiveItem(activeItem === index ? null : index)
  }

  if (!ctaData) {
    return null
  }

  return (
    <section
      data-kte="kt-19199"
      className={`kt-19199 section-testimonial-13 position-relative fix ${compact ? 'pt-0 pb-4' : 'section-padding section-padding-25'}`}
    >
      <div data-kte="kt-51298" className="kt-51298 container position-relative z-1">
        <div data-kte="kt-21008" className={`kt-21008 row ${compact ? 'pb-4' : 'pb-9'}`}>          <div data-kte="kt-94692" className="kt-94692 mx-lg-auto">
            <div data-kte="kt-29468" className="kt-29468 text-center mb-lg-0 mb-5">
              <div data-kte="kt-49151" className="kt-49151 d-flex align-items-center position-relative z-2 justify-content-center bg-primary-soft d-inline-flex rounded-pill border border-2 border-white px-3 py-1">
                <img src="/assets/imgs/features-1/dots.png" alt="Lasya AI Tech" />
                <span data-kte="kt-19274" className="kt-19274 tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Contact Us</span>
              </div>
              <div data-kte="kt-50426" className="kt-50426 row align-items-center pt-5">
                <div data-kte="kt-59830" className="kt-59830 col-lg-6">
                  <div data-kte="kt-49440" className="kt-49440 text-start">
                    <h3 data-kte="kt-21183" className="kt-21183 ds-3 my-3 fw-bold">{ctaData.title}</h3>
                    <div data-kte="kt-87494" className="kt-87494 position-relative d-inline-block mt-3 mb-6">
                      {ctaData.image.map((img: any, index: any) => (
                        <img
                          key={index}
                          src={`${img.image[0].url}`}      
                          alt={img.image[0].alternativeText || ""}
                          className={`rounded-pill border border-3 border-white ${
                            index === 1 ? "position-absolute z-1 top-0 start-50 mt-3" : ""
                          }`}
                        />
                      ))}
                    </div>
                    <p data-kte="kt-83431" className="kt-83431 fs-5 mb-0">{ctaData.subtitle}</p>
                    <div data-kte="kt-32964" className="kt-32964 d-flex align-items-center mt-5 gap-3">
                      <Link href={ctaData.button.link} data-kte="kt-50935" className="kt-50935 btn btn-gradient">
                        {ctaData.button.text}
                        <UpArrow />
                      </Link>
                      <button 
                        onClick={() => setShowModal(true)}
                        className="btn bg-primary-soft text-primary hover-up"
                      >
                        Subscribe Newsletter
                         <RightArrow className="ms-2" />
                      </button>
                    </div>
                  </div>
                </div>
                <div data-kte="kt-17709" className="kt-17709 col-lg-6 mt-lg-0 mt-8">
                  <div data-kte="kt-37849" className="kt-37849 accordion">
                    {ctaData.faq.map((item: any, index: any) => (
                      <div key={item.id} data-kte="kt-75793" className="kt-75793 mb-3 card p-3 border bg-white rounded-2 shadow-2">
                        <div data-kte="kt-89333" className="kt-89333 px-0 card-header border-0 bg-gradient-1">
                          <div 
                            className={`pointer text-900 fw-bold d-flex align-items-center justify-content-between`}
                            onClick={() => handleActiveItem(index)}
                          >
                            <h6 data-kte="kt-65798" className="kt-65798 m-0">{item.question}</h6>
                            <span className={`arrow transition-transform ${activeItem === index ? 'rotate-180' : ''}`}>
                              <DownArrow />
                            </span>
                          </div>
                        </div>
                        <div 
                          className={activeItem === index ? "collapse show" : "collapse"}
                        >
                          <p data-kte="kt-95826" className="kt-95826 ps-0 card-body mb-0">{item.answer}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-kte="kt-19916" className="kt-19916 position-absolute top-0 start-50 translate-middle-x z-0">
        <img src="/assets/imgs/service-2/bg-line.png" alt="Lasya AI Tech" />
      </div>
      <div data-kte="kt-69974" className="kt-69974 rotate-center ellipse-rotate-success position-absolute z-0" />
      <div data-kte="kt-25031" className="kt-25031 rotate-center-rev ellipse-rotate-primary position-absolute z-1" />

      <NewsletterModal 
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </section>
  )
}