"use client"

import Link from "next/link";

export default function DifferSection({data}: any) {
    const getImageUrl = (imageData: any) => {
        // Use image from JSON data if available
        if (imageData && imageData.url) {
            return imageData.url;
        }
        // Return null if no image in JSON - let the component handle it
        return null;
    };

    return (
        <section data-kte="kt-41592" className="kt-41592 section-feature-12 border-bottom pb-120 pt-110">
            <div data-kte="kt-16534" className="kt-16534 container">
                <div data-kte="kt-26322" className="kt-26322 text-center">
                    <h5 data-kte="kt-71221" className="kt-71221 ds-5">{data?.[0]?.title}</h5>
                    <p data-kte="kt-91911" className="kt-91911 fs-5 pb-4">
                        We break down barriers so teams can focus on what matters – working together <br data-kte="kt-78460" className="kt-78460 d-none d-lg-block" />
                        to create products their customers love.
                    </p>
                </div>
                <div data-kte="kt-62339" className="kt-62339 row g-4">
                    {data?.[0]?.services?.map((service: any, index: number) => (
                        <div key={service.id} data-kte="kt-30381" className="kt-30381 col-lg-6">
                            <div data-kte="kt-92969" className="kt-92969 feature-item bg-neutral-100 p-7 rounded-4 hover-up h-100" style={{ minHeight: '300px' }}>
                                <div data-kte="kt-79710" className="kt-79710 icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
                                    <div data-kte="kt-75441" className="kt-75441 icon">
                                        {getImageUrl(service?.image?.[0]) ? (
                                            <img 
                                                className="filter-invert" 
                                                src={getImageUrl(service.image[0])}
                                                alt={service.title || 'service icon'} 
                                                width={62}
                                                height={62}
                                            />
                                        ) : (
                                            <img 
                                                className="filter-invert" 
                                                src="/assets/imgs/service-1/icon-6.svg" 
                                                alt="default icon"
                                                width={62}
                                                height={62}
                                            />
                                        )}
                                    </div>
                                </div>
                                <h4 data-kte="kt-80820" className="kt-80820 mb-3">{service.title}</h4>
                                <p data-kte="kt-12601" className="kt-12601 mb-0">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}