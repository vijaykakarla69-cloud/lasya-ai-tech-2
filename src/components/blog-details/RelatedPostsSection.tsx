'use client';

import Link from "next/link"
//
export default function RelatedPostsSection({ blogData }: { blogData: any }) {
    return (
        <section data-kte="kt-58242" className="kt-58242 section-blog-8 section-padding position-relative fix">
            <div data-kte="kt-99876" className="kt-99876 container position-relative z-1">
                <div data-kte="kt-56660" className="kt-56660 row text-center">
                    <h5 data-kte="kt-87351" className="kt-87351 ds-5">{blogData.related_posts?.title}</h5>
                </div>
                <div data-kte="kt-50673" className="kt-50673 row">
                    {blogData.related_posts?.lapl_blog_collections?.map((collection: any) => (
                        <div data-kte="kt-66018" className="kt-66018 col-lg-4 text-start" key={collection.id}>
                            <div data-kte="kt-69117" className="kt-69117 card border-0 rounded-3 mt-8 position-relative d-inline-flex">
                                <img data-kte="kt-74980" className="kt-74980 rounded-top-3" 
                                     src={`https://cms.kriva.tech${collection.image && Array.isArray(collection.image) && collection.image.length > 0 ? collection.image[0]?.url : '/assets/imgs/blog-details/img-1.png'}`} 
                                     alt={collection.title} />
                                <div data-kte="kt-24383" className="kt-24383 card-body bg-white p-0">
                                    <Link href="#" data-kte="kt-46295" className="kt-46295 bg-primary-soft position-relative z-1 d-inline-flex rounded-pill px-3 py-2 mt-3">
                                        <span data-kte="kt-24475" className="kt-24475 tag-spacing fs-7 fw-bold text-linear-2 text-uppercase">{collection.category}</span>
                                    </Link>
                                    <h6 data-kte="kt-58238" className="kt-58238 my-3">{collection.title}</h6>
                                    <p>{collection.description}</p>
                                </div>
                                <Link href={`/blog/${collection.slug}`} data-kte="kt-99744" className="kt-99744 position-absolute bottom-0 start-0 end-0 top-0 z-0" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <div data-kte="kt-44396" className="kt-44396 rotate-center ellipse-rotate-success position-absolute z-0" />
            <div data-kte="kt-75630" className="kt-75630 rotate-center-rev ellipse-rotate-primary position-absolute z-0" />
        </section>
    )
}