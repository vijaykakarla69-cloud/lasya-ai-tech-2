'use client';

import Link from "next/link"
import Facebook from "@/public/assets/icons/facebook.svg"

const BASE_URL = 'https://cms.kriva.tech';

export default function AuthorFooterSection({ blogData }: { blogData: any }) {
    return (
        <section data-kte="kt-14000" className="kt-14000 author-footer">
            <div data-kte="kt-84255" className="kt-84255 container">
                <div data-kte="kt-44172" className="kt-44172 row">
                    <div data-kte="kt-28614" className="kt-28614 col-md-8 mx-auto">
                        <div data-kte="kt-38041" className="kt-38041 d-flex align-items-center justify-content-between mt-5 py-3 border-top border-bottom">
                            <div data-kte="kt-11623" className="kt-11623 d-flex align-items-center position-relative z-1">
                                <div data-kte="kt-31209" className="kt-31209 icon-shape rounded-circle border border-2 border-white">
                                    <img 
                                        className="rounded-circle" 
                                        src={blogData.author_footer?.image?.[0]?.url ? `${BASE_URL}${blogData.author_footer.image[0].url}` : '/default-author.png'} 
                                        alt={blogData.author_footer?.name || 'Author'} 
                                    />
                                </div>
                                <div data-kte="kt-94435" className="kt-94435 ms-3">
                                    <h6 data-kte="kt-11351" className="kt-11351 fs-7 m-0">{blogData.author_footer?.name || 'Unknown Author'}</h6>
                                    <p data-kte="kt-80056" className="kt-80056 mb-0 fs-8">{blogData.author_footer?.date || 'Date not available'}</p>
                                </div>
                                <Link href="#" data-kte="kt-16646" className="kt-16646 position-absolute bottom-0 start-0 end-0 top-0 z-0" />
                            </div>
                            <div data-kte="kt-42480" className="kt-42480 d-lg-flex align-items-center">
                                <p data-kte="kt-56341" className="kt-56341 fw-bold text-500 mb-0 me-2">{blogData.author_footer?.social_text || 'Social network:'}</p>
                                <div data-kte="kt-44682" className="kt-44682 d-flex social-icons">
                                    <Link href="https://www.facebook.com/" data-kte="kt-81400" className="kt-81400 text-900 border border-end-0 border-opacity-10 icon-shape icon-md">
                                        <Facebook />
                                    </Link>
                                    <Link href="https://twitter.com/" data-kte="kt-93478" className="kt-93478 text-900 border border-end-0 border-opacity-10 icon-shape icon-md">
                                        <i data-kte="kt-72452" className="kt-72452 bi bi-twitter-x" />
                                    </Link>
                                    <Link href="https://www.linkedin.com/" data-kte="kt-67550" className="kt-67550 text-900 border border-opacity-10 icon-shape icon-md">
                                        <i data-kte="kt-93269" className="kt-93269 bi bi-linkedin" />
                                    </Link>
                                    <Link href="https://www.behance.net/" data-kte="kt-34259" className="kt-34259 text-900 border border-start-0 border-opacity-10 icon-shape icon-md">
                                        <i data-kte="kt-39593" className="kt-39593 bi bi-behance" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}