"use client"
import Link from 'next/link'
import React, { useState } from 'react'

export interface Services6Props {
    data?: Array<{
        badge_text: string;
        title: string;
        consultancy_tab_section: Array<{
            tab_heading: string;
            title: string;
            description: string;
            cards: Array<{
                title: string;
                description: string;
            }>;
            image: Array<{
                url: string;
            }>;
        }>;
        buttons: Array<{
            title: string;
            link: string;
        }>;
    }>;
}

export default function Services6({ data }: Services6Props) {
    const [activeTab, setActiveTab] = useState(0)

    if (!data || data.length === 0) {
        return null;
    }

    const enduringValue = data[0];
    if (!enduringValue) {
        return null;
    }

    const { badge_text, title, consultancy_tab_section = [], buttons = [] } = enduringValue;

    return (
        <>
            <section className="section-services-4 position-relative fix section-padding">
                <div className="container position-relative z-2">
                    <div className="text-center">
                        <div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
                            <img src="/assets/imgs/features-1/dots.png" alt="" />
                            <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">{badge_text}</span>
                        </div>
                        <h3 className="ds-3 my-3 fw-regular">{title}</h3>
                    </div>
                    <div className="row pt-8">
                        <div className="col-lg-4">
                            <div className="d-flex align-items-start">
                                <div className="nav w-100 flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                    {consultancy_tab_section.map((tab, index) => (
                                        <button 
                                            key={index}
                                            className={`${activeTab === index ? "active" : ""} nav-link pe-5 justify-content-between d-flex`} 
                                            onClick={() => setActiveTab(index)}
                                            type="button"
                                            role="tab"
                                        >
                                            {tab.tab_heading}
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                            <path className="fill-white" d="M17.4177 5.41772L16.3487 6.48681L21.1059 11.244H0V12.756H21.1059L16.3487 17.5132L17.4177 18.5822L24 12L17.4177 5.41772Z" fill="white" />
                                        </svg>
                                    </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="tab-content" id="v-pills-tabContent">
                                {consultancy_tab_section.map((tab, index) => (
                                    <div key={index} className={`${activeTab === index ? "show active" : ""} tab-pane fade`} role="tabpanel">
                                    <div className="row align-items-center rounded-3 bg-white p-5">
                                        <div className="col-lg-5 mb-lg-0 mb-5">
                                                {tab.image?.[0]?.url && (
                                                    <img 
                                                        className="rounded-3" 
                                                        src={`https://cms.kriva.tech${tab.image[0].url}`} 
                                                        alt={tab.title || 'Service illustration'} 
                                                    />
                                                )}
                                        </div>
                                        <div className="col-lg-7">
                                            <div className="p-lg-3">
                                                    <h4 className="fw-regular">{tab.title}</h4>
                                                    <p>{tab.description}</p>
                                                    {(tab.cards || []).map((card, idx) => (
                                                        <div key={idx} className="d-flex">
                                                    <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
                                                        <div className="icon">
                                                            <img src="/assets/imgs/service-4/icon-1.svg" alt="1 icon" />
                                                        </div>
                                                    </div>
                                                    <div className="ps-5">
                                                                <h6>{card.title}</h6>
                                                                <p>{card.description}</p>
                                                </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-6">
                        {buttons.map((button, index) => (
                            <Link key={index} href={button.link} className={`${index > 0 ? 'ms-md-3 mt-md-0 mt-3' : ''} btn ${index === 0 ? 'btn-gradient' : 'btn-outline-secondary hover-up'}`}>
                                {button.title}
                                {index === 0 ? (
                            <svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                <path className="stroke-white" d="M17.25 15.25V6.75H8.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path className="stroke-white" d="M17 7L6.75 17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                                ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                <path className="stroke-dark" d="M8.89286 4.75H6.06818C5.34017 4.75 4.75 5.34017 4.75 6.06818C4.75 13.3483 10.6517 19.25 17.9318 19.25C18.6598 19.25 19.25 18.6598 19.25 17.9318V15.1071L16.1429 13.0357L14.5317 14.6468C14.2519 14.9267 13.8337 15.0137 13.4821 14.8321C12.8858 14.524 11.9181 13.9452 10.9643 13.0357C9.98768 12.1045 9.41548 11.1011 9.12829 10.494C8.96734 10.1537 9.06052 9.76091 9.32669 9.49474L10.9643 7.85714L8.89286 4.75Z" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                                )}
                        </Link>
                        ))}
                    </div>
                </div>
                <div className="position-absolute top-0 start-50 translate-middle-x z-0">
                    <img src="/assets/imgs/blog-2/img-bg-line.png" alt="" />
                </div>
                <div className="bouncing-blobs-container">
                    <div className="bouncing-blobs-glass" />
                    <div className="bouncing-blobs">
                        <div className="bouncing-blob bouncing-blob--green" />
                        <div className="bouncing-blob bouncing-blob--primary" />
                    </div>
                </div>
            </section>
        </>
    )
}
