"use client"
import React, { useState, useEffect } from 'react'
import data from '@/src/data/careerpage-v1.json'
import CareerApplicationForm from '@/src/components/careers/CareerApplicationForm'
interface CareerTracksProps {
    slug?: string
}

export default function CareerTracks({ slug }: CareerTracksProps) {
    
    // Nav
    const [isNav, setIsNav] = useState(1)
    const { job_roles } = data
    
    // Get current role based on slug
    const getCurrentRole = () => {
        if (slug) {
            return job_roles.find(role => role.role_id === slug)
        }
        // Default to first role if no slug
        return job_roles[0]
    }
    
    const currentRole = getCurrentRole()
    const career_sections = currentRole?.career_sections || []

    useEffect(() => {
        // Component mounted
    }, [slug, currentRole]);

    const handleNav = (i: number) => {
        setIsNav(i)
    }

    return (
        <>
            <section className="section-services-4 position-relative fix section-padding">
                <div className="container position-relative z-2">
                    <div className="text-center mb-5">
                        <div className="position-relative">
                            <div className="gradient-blur position-absolute top-50 start-50 translate-middle" style={{
                                width: '80%',
                                height: '120px',
                                background: 'linear-gradient(90deg, rgba(0,164,163,0.15) 0%, rgba(39,142,255,0.15) 100%)',
                                filter: 'blur(40px)',
                                zIndex: -1
                            }} />
                            <div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2 position-relative" data-aos="zoom-in" data-aos-delay={100}>
                                <span className="tag-spacing fs-7 fw-bold text-linear-2 text-uppercase">We're Hiring</span>
                            </div>
                            <h1 className="ds-3 mt-4 mb-4 fw-regular position-relative">
                                <span className="fw-bold text-gradient">{currentRole?.role_title || 'Full Stack Developer'}</span>
                            </h1>
                            <p className="mb-0 fs-5 mx-auto" style={{ maxWidth: '700px', color: '#4b5563' }}>
                                {currentRole?.career_sections?.[0]?.description || 'Join our innovative development team and build modern web applications using the latest technologies.'}
                            </p>
                        </div>
                    </div>
                    <div className="row pt-5">
                        <div className="col-lg-4">
                            <div className="d-flex align-items-start">
                                <div className="nav w-100 flex-column nav-pills career-nav" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                    {career_sections.map((section, index) => (
                                        <button 
                                            key={section.id}
                                            className={`${isNav === index + 1 ? "active" : ""} nav-link pe-5 justify-content-between d-flex align-items-center mb-3`} 
                                            onClick={() => handleNav(index + 1)} 
                                            id={`v-pills-${section.id}-tab`}
                                            data-bs-toggle="pill" 
                                            data-bs-target={`#v-pills-${section.id}`}
                                            type="button" 
                                            role="tab" 
                                            aria-controls={`v-pills-${section.id}`}
                                            aria-selected={isNav === index + 1}
                                            style={{
                                                transition: 'all 0.3s ease',
                                                borderRadius: '12px',
                                                border: '1px solid transparent'
                                            }}
                                        >
                                            <div className="d-flex align-items-center">
                                                
                                                {section.title}
                                            </div>
                                            {index === 0 && (
                                                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none">
                                            <path className="fill-white" d="M17.4177 5.41772L16.3487 6.48681L21.1059 11.244H0V12.756H21.1059L16.3487 17.5132L17.4177 18.5822L24 12L17.4177 5.41772Z" fill="white" />
                                        </svg>
                                            )}
                                    </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="tab-content position-relative" id="v-pills-tabContent">
                                <div className="content-gradient-blur position-absolute" style={{
                                    width: '100%',
                                    height: '100%',
                                    background: 'linear-gradient(135deg, rgba(0,164,163,0.05) 0%, rgba(39,142,255,0.05) 100%)',
                                    borderRadius: '20px',
                                    zIndex: -1
                                }} />
                                {career_sections.map((section, index) => (
                                    <div 
                                        key={section.id}
                                        className={`${isNav === index + 1 ? "show active" : ""} tab-pane fade`} 
                                        id={`v-pills-${section.id}`} 
                                        role="tabpanel" 
                                        aria-labelledby={`v-pills-${section.id}-tab`} 
                                        tabIndex={0}
                                    >
                                        <div className="row align-items-center rounded-4 bg-white p-4 p-lg-5 shadow-sm">
                                            <div className="col-12">
                                            <div className="p-lg-3">
                                                    <div className="section-header mb-5">
                                                        <h4 className="fw-bold mb-3 text-gradient">{section.heading}</h4>
                                                        <p className="lead text-muted mb-0">{section.description}</p>
                                                        </div>
                                                    <div className="career-section-content">
                                                        {section.key_features.map((feature, idx) => (
                                                            <div key={idx} className="feature-section mb-5 position-relative">
                                                                <div className="feature-gradient-line position-absolute" style={{
                                                                    width: '3px',
                                                                    height: '100%',
                                                                    background: 'linear-gradient(to bottom, #00a4a3, #278eff)',
                                                                    left: '-20px',
                                                                    borderRadius: '4px'
                                                                }} />
                                                                <h6 className="text-primary mb-4 d-flex align-items-center fw-bold">
                                                                    {feature.title}
                                                                </h6>
                                                                <div className="bg-light p-4 rounded-4 feature-content" style={{
                                                                    background: 'linear-gradient(to right, rgba(0,164,163,0.03), rgba(39,142,255,0.03))'
                                                                }}>
                                                                    <ul className="list-unstyled mb-0">
                                                                        {feature.description.split('\n').map((item, i) => (
                                                                            <li key={i} className="mb-3 d-flex align-items-start">
                                                                                {item.startsWith('•') ? (
                                                                                    <>
                                                                                        <span className="bullet-point me-3 mt-1" style={{
                                                                                            width: '6px',
                                                                                            height: '6px',
                                                                                            background: '#00a4a3',
                                                                                            borderRadius: '50%',
                                                                                            flexShrink: 0
                                                                                        }} />
                                                                                        <span className="text-muted">{item.substring(2)}</span>
                                                                                    </>
                                                                                ) : (
                                                                                    <span className="text-muted">{item}</span>
                                                                                )}
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                    </div>
                                                </div>
                                                        ))}
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
           
                <div className="bouncing-blobs-container">
                    <div className="bouncing-blobs-glass" />
                    <div className="bouncing-blobs">
                        <div className="bouncing-blob bouncing-blob--green" />
                        <div className="bouncing-blob bouncing-blob--primary" />
                    </div>
                </div>
            </section>
            
            {/* Application Form */}
            <CareerApplicationForm 
                jobData={{
                    title: currentRole?.role_title,
                    type: currentRole?.role_level,
                    experience: currentRole?.experience_range,
                    slug: slug
                }}
            />
        </>
    )
}
