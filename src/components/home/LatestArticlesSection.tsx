"use client"
import Link from "next/link"
import { useState } from "react"
import NewsletterModal from '../common/NewsletterModal';
import RightArrow from "@/public/assets/icons/right-arrow.svg"

export default function LatestArticlesSection({data}: {data: any}) {
    const [showModal, setShowModal] = useState(false);

    if (!data || !data[0]) return null;

    const homeBlog = data[0]
    const fromBlogButton = homeBlog.button?.find((btn: any) => btn.variant === 'primary')
    const blogCollections = homeBlog.lapl_blog_collections

    return (
        <>
            <section data-kte="kt-85047" className="kt-85047 section-blog-1 section-padding position-relative">
                <div data-kte="kt-14979" className="kt-14979 container position-relative z-2">
                    <div data-kte="kt-44266" className="kt-44266 row align-items-center mb-5">
                        <div data-kte="kt-58741" className="kt-58741 col-lg-6 col-md-12 text-center text-lg-start mb-4 mb-lg-0">
                            {fromBlogButton && fromBlogButton.url && (
                                <Link 
                                    href={fromBlogButton.url}
                                    className="d-inline-flex align-items-center bg-primary-soft rounded-pill px-3 py-2" 
                                >
                                    <span data-kte="kt-94019" className="kt-94019 fs-7 fw-semibold text-primary">
                                        FROM BLOG
                                    </span>
                                </Link>
                            )}
                            <h2 data-kte="kt-58137" className="kt-58137 display-4 mt-4 mb-0">Our Latest Articles</h2>
                        </div>
                        
                        <div data-kte="kt-92284" className="kt-92284 col-lg-6 col-md-12 text-center text-lg-end">
                            <button 
                                onClick={() => setShowModal(true)}
                                className="fw-bold text-primary btn bg-white hover-up shadow-2 w-100 w-lg-auto"
                            >
                                subscribe our newsletter
                               <RightArrow />
                            </button>
                        </div>
                    </div>

                    <div data-kte="kt-14347" className="kt-14347 row">
                        <div data-kte="kt-31286" className="kt-31286 col-lg-7 mb-4 mb-lg-0">
                            {blogCollections[0] && (
                                <div data-kte="kt-34678" className="kt-34678 position-relative">
                                    <div data-kte="kt-87392" className="kt-87392 main-article bg-white rounded-4 overflow-hidden">
                                        <div data-kte="kt-75107" className="kt-75107 row g-0 flex-column flex-md-row">
                                            <div data-kte="kt-91890" className="kt-91890 col-md-6">
                                                <img 
                                                    className="w-100"
                                                    src={`https://cms.kriva.tech${blogCollections[0].image[0]?.url}`}
                                                    alt={blogCollections[0].title}
                                                    style={{ objectFit: 'cover', height: '100%', minHeight: '300px' }}
                                                />
                                            </div>
                                            <div data-kte="kt-27402" className="kt-27402 col-md-6 bg-light rounded-end-4 p-4 p-lg-5">
                                                <div data-kte="kt-94007" className="kt-94007 badge bg-primary-soft text-primary px-3 py-2 rounded-pill d-inline-block mb-3" style={{width: 'fit-content'}}>
                                                    {blogCollections[0].category || "OUTSOURCING"}
                                                </div>
                                                <h4 data-kte="kt-87996" className="kt-87996 mb-3">{blogCollections[0].title}</h4>
                                                <p data-kte="kt-78193" className="kt-78193 text-secondary mb-4">{blogCollections[0].description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div data-kte="kt-81430" className="kt-81430 col-lg-5">
                            {blogCollections.slice(1, 3).map((blog: any) => (
                                <div key={blog.id} data-kte="kt-79320" className="kt-79320 d-flex flex-column flex-md-row gap-3 mb-4">
                                    <img 
                                        className="rounded-3 w-100 w-md-auto" 
                                        src={`https://cms.kriva.tech${blog.image[0]?.url}`}   
                                        alt={blog.title}
                                        style={{ maxWidth: '180px', height: '120px', objectFit: 'cover' }}
                                    />
                                    <div>
                                        <h5 data-kte="kt-46561" className="kt-46561 mb-2">{blog.title}</h5>
                                        <p data-kte="kt-21409" className="kt-21409 text-secondary mb-0">{blog.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <NewsletterModal 
                isOpen={showModal}
                onClose={() => setShowModal(false)}
            />

            <style jsx>{`
                .category-badge {
                    display: inline-block;
                    padding: 6px 16px;
                    background-color: #F0EEFF;
                    color: #008a89;
                    border-radius: 20px;
                    font-size: 14px;
                    font-weight: 600;
                    text-decoration: none;
                }
                
                .blog-content {
                    padding: 20px;
                }
                .bg-primary-soft {
                    background-color: #F0EEFF;
                }
                .text-primary {
                    color: #008a89 !important;
                }
                .main-article {
                    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
                    transition: all 0.3s ease;
                }
                .main-article:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 8px 16px rgba(0,0,0,0.1);
                }
                .bg-light {
                    background-color: #F8F9FC !important;
                }
                .fs-7 {
                    font-size: 0.875rem;
                }
                .newsletter-link {
                    display: inline-flex;
                    align-items: center;
                    color: #008a89;
                    text-decoration: none;
                    font-size: 0.875rem;
                    padding: 0.5rem 1rem;
                    background: #fff;
                    border-radius: 0.5rem;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
                    transition: all 0.3s ease;
                }
                
                .newsletter-link:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                }
                
                .newsletter-link svg {
                    transition: transform 0.3s ease;
                }
                
                .newsletter-link:hover svg {
                    transform: translateX(4px);
                }
                
                .hover-up {
                    transition: all .25s cubic-bezier(.02,.01,.47,1);
                }
                
                .hover-up:hover {
                    transform: translateY(-3px);
                }
                
                .shadow-2 {
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
                }
                
                .btn {
                    padding: 0.75rem 1.5rem;
                    border-radius: 0.5rem;
                    font-size: 0.875rem;
                    line-height: 1;
                    display: inline-flex;
                    align-items: center;
                }
                
                .bg-white {
                    background-color: #fff;
                }
                
                .text-primary {
                    color: #008a89 !important;
                }
                
                .fill-dark {
                    fill: currentColor;
                }

                @media (max-width: 768px) {
                    .main-article {
                        margin-bottom: 2rem;
                    }
                    
                    .display-4 {
                        font-size: 2rem;
                    }
                    
                    .btn {
                        width: 100%;
                        margin-top: 1rem;
                    }
                }
            `}</style>
        </>
    )
}