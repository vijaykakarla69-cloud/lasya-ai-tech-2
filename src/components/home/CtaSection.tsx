'use client'
import Link from "next/link"
import { useState, useEffect } from 'react'
import CountUp from 'react-countup'
import ModalVideo from 'react-modal-video'

export default function CtaSection({data}: {data: any}) {
	// Debug: Log the data structure
	console.log('CtaSection data:', data);
    const [isOpen, setOpen] = useState(false)

    if (!data) return null;

    return (
        <>
            <section data-kte="kt-23963" className="kt-23963 section-testimonial-13 position-relative section-padding fix">
                <div data-kte="kt-30506" className="kt-30506 container position-relative z-1">
                    <div data-kte="kt-75069" className="kt-75069 row pb-9">
                        <div data-kte="kt-17600" className="kt-17600 col-lg-7 mx-lg-auto">
                            <div data-kte="kt-46731" className="kt-46731 text-center mb-lg-0 mb-5">
                                {data?.button && (    
                                    <Link 
                                        href={data.button.url}
                                        className="d-flex align-items-center position-relative z-2 justify-content-center bg-primary-soft d-inline-flex rounded-pill border border-2 border-white px-3 py-1"
                                    >
                                        <img src="/assets/imgs/features-1/dots.png" alt="Lasya AI Tech" />
                                        <span data-kte="kt-57798" className="kt-57798 tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">
                                            {data.button.label}  
                                        </span>
                                    </Link> 
                                )}
                                <h5 data-kte="kt-78313" className="kt-78313 ds-5 my-3 fw-regular">   
                                    {data?.title}
                                </h5>
                                <p data-kte="kt-63978" className="kt-63978 fs-5 mb-0 text-500">
                                    {data?.description}   
                                </p>
                            </div>
                        </div>
                    </div>
                    <div data-kte="kt-36048" className="kt-36048 row">
                        <div data-kte="kt-70903" className="kt-70903 col-lg-8">
                            <div data-kte="kt-15383" className="kt-15383 position-relative mb-lg-0 mb-8 fix">
                                <div data-kte="kt-36790" className="kt-36790 zoom-img rounded-4 fix">
                                    <img 
                                        src="/assets/imgs/hero-1/meeting1.jpg" 
                                        alt="Lasya AI Tech" 
                                        style={{
                                            width: '800px',      // Increased width
                                            height: '500px',     // Increased height
                                            objectFit: 'cover',
                                            objectPosition: 'center',
                                            borderRadius: '16px',
                                            boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                                            border: '1px solid rgba(0,0,0,0.08)',
                                            maxWidth: '100%'     // Added to ensure responsiveness
                                        }}
                                    />
                                </div>
                                
                            </div>
                        </div>
                        <div data-kte="kt-66826" className="kt-66826 col-lg-4">
                            <div data-kte="kt-47879" className="kt-47879 row flex-lg-column">
                                <div data-kte="kt-93961" className="kt-93961 col-md-6 col-lg-12">
                                    <div data-kte="kt-64089" className="kt-64089 backdrop-filter bg-linear-2 rounded-4 px-6 py-4 z-1">
                                        <div data-kte="kt-66196" className="kt-66196 d-flex flex-column align-items-center">
                                            {data?.stats.map((stat: any, index: any) => (
                                                <div key={stat.id} data-kte="kt-31261" className="kt-31261 text-center w-100">
                                                    <div data-kte="kt-54604" className="kt-54604 d-flex justify-content-center align-items-center">
                                                        <span data-kte="kt-48657" className="kt-48657 h2 fw-black text-white">
                                                            {stat.preffix}
                                                        </span>
                                                        <CountUp 
                                                            end={stat.number} 
                                                            enableScrollSpy={true}
                                                            className="h2 fw-black text-white"
                                                        />
                                                    </div>
                                                    <p data-kte="kt-55047" className="kt-55047 text-white mb-2">
                                                        {stat.text}
                                                    </p>
                                                    {index < data.stats.length - 1 && (
                                                        <div data-kte="kt-67564" className="kt-67564 border-bottom border-white opacity-25 w-50 mx-auto mb-2"></div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div data-kte="kt-19210" className="kt-19210 col-md-6 col-lg-12">
                                    <div data-kte="kt-99825" className="kt-99825 zoom-img rounded-4 fix d-inline-block mt-4 mt-lg-4 mt-md-0 h-100">
                                        <img data-kte="kt-56840" className="kt-56840 h-100" src="/assets/imgs/hero-1/meeting2.jpg" alt="Lasya AI Tech" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-kte="kt-27926" className="kt-27926 position-absolute top-0 start-50 translate-middle-x z-0">
                    <img src="/assets/imgs/service-2/bg-line.png" alt="Lasya AI Tech" />
                </div>
                <div data-kte="kt-12681" className="kt-12681 rotate-center ellipse-rotate-success position-absolute z-0" />
                <div data-kte="kt-84451" className="kt-84451 rotate-center-rev ellipse-rotate-primary position-absolute z-1" />
            </section>
        </>
    )
}
