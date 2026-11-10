'use client';

import Link from "next/link"

export default function BlogHeaderSection({ blogData }: { blogData: any }) {
    const headerData = blogData?.blog_header || {};
    const button1 = headerData.button1 || 'BUSINESS';
    const button2 = headerData.button2 || 'MARKETING';
    const title = headerData.title || blogData?.title || 'Blog Title';
    // const description = headerData.description || blogData?.description || '';

    return (
        <section data-kte="kt-24267" className="kt-24267 blog-header mt-10">
            <div data-kte="kt-57048" className="kt-57048 container">
                <div data-kte="kt-60702" className="kt-60702 row">
                    <div data-kte="kt-10078" className="kt-10078 col-md-8 mx-auto">
                        <div data-kte="kt-97830" className="kt-97830 d-flex gap-2">
                            <Link href="#" data-kte="kt-52618" className="kt-52618 bg-primary-soft rounded-pill px-3 fw-bold py-2 text-primary text-uppercase fs-7">
                                {button1}
                            </Link>
                            <Link href="#" data-kte="kt-49292" className="kt-49292 bg-primary-soft rounded-pill px-3 fw-bold py-2 text-primary text-uppercase fs-7">
                                {button2}
                            </Link>
                        </div>
                        <h5 data-kte="kt-19042" className="kt-19042 fs-3 mt-3 mb-4">{title}</h5>
                        {/* <p data-kte="kt-23713" className="kt-23713 fs-5 text-900 mb-0">{description}</p> */}
                    </div>
                </div>
            </div>
        </section>
    )
}