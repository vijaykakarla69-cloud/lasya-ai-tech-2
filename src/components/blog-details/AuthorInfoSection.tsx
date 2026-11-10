'use client';

import Link from "next/link"
import Timer from "@/public/assets/icons/timer.svg"

export default function AuthorInfoSection({ blogData }: { blogData: any }) {
    return (
        <section data-kte="kt-56713" className="kt-56713 author-info">
            <div data-kte="kt-42750" className="kt-42750 container">
                <div data-kte="kt-60156" className="kt-60156 row">
                    <div data-kte="kt-90557" className="kt-90557 col-md-8 mx-auto">
                        <div data-kte="kt-25447" className="kt-25447 d-flex align-items-center justify-content-between mt-7 py-3 border-top border-bottom">
                            <div data-kte="kt-57435" className="kt-57435 d-flex align-items-center position-relative z-1">
                                <div data-kte="kt-17215" className="kt-17215 icon-shape rounded-circle border border-2 border-white">
                                    <img data-kte="kt-79972" className="kt-79972 rounded-circle" src="/assets/imgs/blog-4/avatar-1.png" alt="Lasya AI Tech" />
                                </div>
                                <div data-kte="kt-81614" className="kt-81614 ms-3">
                                    <h6 data-kte="kt-94751" className="kt-94751 fs-7 m-0">{blogData.author_info.author_name}</h6>
                                    <p data-kte="kt-46641" className="kt-46641 mb-0 fs-8">{blogData.author_info.date}</p>
                                </div>
                                <Link href="#" data-kte="kt-69723" className="kt-69723 position-absolute bottom-0 start-0 end-0 top-0 z-0" />
                            </div>
                            <div data-kte="kt-49086" className="kt-49086 d-flex align-items-center">
                                <Timer />
                                <span data-kte="kt-20014" className="kt-20014 ms-2 fs-7 text-900">{blogData.author_info.reading_time}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}