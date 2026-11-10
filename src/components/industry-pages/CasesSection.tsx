"use client"

import Link from "next/link"

const BASE_URL = 'https://cms.kriva.tech';

export default function CasesSection({ data }: any) {
    const getImageUrl = (url: string) => {
        return url ? `${BASE_URL}${url}` : '';
    };

    if (!data || !data.case_studies || data.case_studies.length === 0) {
        return null;
    }

    return (
        <section data-kte="kt-47652" className="kt-47652 section-blog-1 py-9 bg-neutral-50">
            <div data-kte="kt-59991" className="kt-59991 container">
                <div data-kte="kt-70164" className="kt-70164 text-center mb-6">
                    <div data-kte="kt-17346" className="kt-17346 d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
                        <img src="/assets/imgs/features-1/dots.png" alt="Lasya AI Tech" />
                        <span data-kte="kt-89104" className="kt-89104 tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Case Studies</span>
                    </div>
                    <h3 data-kte="kt-48252" className="kt-48252 ds-3 my-3" data-aos="fade-zoom-in" data-aos-delay={300}>
                        {data.title || "Our Success Stories"}
                    </h3>
                    <p data-aos="fade-zoom-in" data-aos-delay={100}>
                        {data.subtitle || "Discover how we've helped businesses transform their digital presence"}
                    </p>
                </div>

                <div data-kte="kt-76015" className="kt-76015 row">
                    {data.case_studies.map((study: any, index: number) => (
                        <div key={study.id} data-kte="kt-26113" className="kt-26113 col-lg-4 col-md-6 text-start mb-5">
                            <div
                                className="card border-0 rounded-3 position-relative d-inline-flex hover-up bg-white shadow-1"
                                data-aos="fade-zoom-in"
                                data-aos-delay={100 + (index * 100)}
                                style={{ height: '100%', width: '100%' }}
                            >
                                <Link
                                    href={`/casestudies/${study.slug}`}
                                    style={{
                                        height: '250px',
                                        overflow: 'hidden',
                                        display: 'block',
                                        borderTopLeftRadius: '12px',
                                        borderTopRightRadius: '12px',
                                        padding: '12px',
                                        background: 'white'
                                    }}
                                >
                                    {study.image?.[0]?.url ? (
                                        <img
                                            className="rounded-3"
                                            src={getImageUrl(study.image[0].url)}
                                            alt={study.title || 'Case study image'}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                transition: 'transform 0.3s ease',
                                                border: '1px solid #e5e7eb',
                                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                                                borderRadius: '12px'
                                            }}
                                        />
                                    ) : (
                                        <div
                                            className="rounded-3 d-flex align-items-center justify-content-center"
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                background: '#f8f9fa',
                                                border: '1px solid #e5e7eb'
                                            }}
                                        >
                                            <img src="/assets/imgs/service-1/icon-1.svg" alt="Default" width={48} height={48} />
                                        </div>
                                    )}
                                </Link>
                                <div data-kte="kt-88972" className="kt-88972 card-body p-4 bg-white" style={{ minHeight: '200px' }}>
                                    <Link 
                                        href={`/casestudies/${study.slug}`} 
                                        data-kte="kt-78772" 
                                        className="kt-78772 bg-primary-soft position-relative z-1 d-inline-flex rounded-pill px-3 py-2 mb-3"
                                    >
                                        <span data-kte="kt-88033" className="kt-88033 tag-spacing fs-7 fw-bold text-linear-2 text-uppercase">
                                            {study.categories || 'Case Study'}
                                        </span>
                                    </Link>
                                    <h5 className="mb-3">
                                        <Link 
                                            href={`/casestudies/${study.slug}`} 
                                            className="text-decoration-none text-dark hover-up"
                                        >
                                            {study.title}
                                        </Link>
                                    </h5>
                                    <p className="text-muted mb-3">
                                        {study.description && study.description.length > 150 
                                            ? `${study.description.substring(0, 150)}...` 
                                            : study.description
                                        }
                                    </p>
                                    <Link 
                                        href={`/casestudies/${study.slug}`} 
                                        className="btn btn-outline-primary btn-sm"
                                    >
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {data.show_view_all && (
                    <div className="text-center mt-6">
                        <Link 
                            href="/casestudies" 
                            className="btn btn-gradient d-inline-flex align-items-center hover-up"
                        >
                            <span className="me-2">View All Case Studies</span>
                            <img src="/assets/icons/white-right-arrow.svg" alt="Arrow" />
                        </Link>
                    </div>
                )}
            </div>
        </section>
    )
} 