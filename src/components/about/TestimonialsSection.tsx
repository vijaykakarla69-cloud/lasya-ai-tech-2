"use client";
import Link from "next/link";
import UpArrow from "@/public/assets/icons/uparrow.svg"
export default function TestimonialsSection({ data }: { data: any }) {
    if (!data || !data.lapl_reviews?.length) {
        return null;
    }

    const reviews = data.lapl_reviews;

    return (
        <>
            <section data-kte="kt-67356" className="kt-67356 section-testimonial-2 position-relative bg-white section-padding">
                <div data-kte="kt-69360" className="kt-69360 container position-relative z-1">
                    <div data-kte="kt-83480" className="kt-83480 row pb-9">
                        <div data-kte="kt-19510" className="kt-19510 col-lg-7 mx-lg-auto">
                            <div data-kte="kt-18842" className="kt-18842 text-center mb-lg-0 mb-5">
                                <h4 data-kte="kt-67733" className="kt-67733 ds-4 my-3">
                                    {data.title}
                                </h4>
                                {data.description && (
                                    <p data-kte="kt-86150" className="kt-86150 fs-5 text-500">
                                        {data.description}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                    <div data-kte="kt-37399" className="kt-37399 row">
                        {reviews.map((review: any, index: number) => (
                            <div key={review.id} className={`col-lg-4 ${index > 2 ? 'mt-4' : ''}`}>
                                <div className={`bg-neutral-100 p-5 ${index > 0 && index <= 2 ? 'mt-5 mt-lg-0' : ''} rounded-3`} data-aos="fade-zoom-in" data-aos-delay={index * 100}>
                                    <p data-kte="kt-36595" className="kt-36595 text-900">{review.description}</p>
                                    <div data-kte="kt-41275" className="kt-41275 d-flex align-items-center mt-5">
                                        <img data-kte="kt-75409" className="kt-75409 avatar-lg" src="/assets/imgs/testimonial-1/avatar-1.png" alt="Lasya AI Tech" />
                                        <div data-kte="kt-63401" className="kt-63401 d-flex flex-column">
                                            <h6 data-kte="kt-78616" className="kt-78616 ms-3 fs-6 mb-0">{review.name}</h6>
                                            <div data-kte="kt-83880" className="kt-83880 flag ms-3">
                                                <img src="/assets/imgs/testimonial-1/flag-1.png" alt="Lasya AI Tech" />
                                                <span data-kte="kt-94323" className="kt-94323 fs-8">{review.role}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {data.button && (
                    <div data-kte="kt-89187" className="kt-89187 text-center mt-8 position-relative z-3">
                        <Link href={data.button.link} className={`btn btn-${data.button.variant} hover-up`}>
                            {data.button.label}
                            <UpArrow />
                        </Link>
                    </div>
                )}
                <div data-kte="kt-18759" className="kt-18759 mask-image-2 position-absolute top-50 bottom-0 start-0 end-0 z-1" />
            </section>
        </>
    );
}