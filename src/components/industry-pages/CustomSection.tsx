"use client"

import Link from "next/link";

export default function CustomSection({data}: any) {
    const getImageUrl = (imageData: any) => {
        // Use image from JSON data if available
        if (imageData && imageData.url) {
            return imageData.url;
        }
        // Return null if no image in JSON - let the component handle it
        return null;
    };

    return (
        <section>
            <div data-kte="kt-62124" className="kt-62124 container-fluid position-relative bg-linear-3 section-padding">
                <div data-kte="kt-78936" className="kt-78936 container">
                    <div data-kte="kt-34692" className="kt-34692 text-center mb-8">
                        <div data-kte="kt-87630" className="kt-87630 d-flex align-items-center justify-content-center bg-primary-soft d-inline-flex rounded-pill border-white border px-3 py-1" data-aos="zoom-in" data-aos-delay={200}>
                            <img src="/assets/imgs/features-1/dots.png" alt="Lasya AI Tech" />
                            <span data-kte="kt-89668" className="kt-89668 tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">What we offers</span>
                        </div>
                        <h3 data-kte="kt-38850" className="kt-38850 ds-3 my-3 fw-regular">
                            {data?.[0]?.title}
                        </h3>
                    </div>
                    <div data-kte="kt-34961" className="kt-34961 row">
                        {data?.[0]?.services?.map((service: any, index: number) => (
                            <div 
                                key={service.id} 
                                className={`col-lg-3 col-md-6 mt-4 mt-lg-0`} 
                                data-aos="fade-zoom-in" 
                                data-aos-delay={index * 100}
                            >
                                <div data-kte="kt-75637" className="kt-75637 card-service bg-white p-5 rounded-4 hover-up h-100" style={{ minHeight: '420px' }}>
                                    <div data-kte="kt-83495" className="kt-83495 icon-wrapper mb-4" style={{ height: '62px', display: 'flex', alignItems: 'center' }}>
                                        {getImageUrl(service.image?.[0]) ? (
                                            <img 
                                                className="filter-invert" 
                                                src={getImageUrl(service.image[0])}
                                                alt={service.title}
                                                width={62}
                                                height={62}
                                            />
                                        ) : null}
                                    </div>
                                    <h6 data-kte="kt-88330" className="kt-88330 mb-3">{service.title}</h6>
                                    <p>{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}