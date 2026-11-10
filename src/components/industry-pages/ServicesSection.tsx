"use client"

import Link from "next/link";

export default function ServicesSection({data}: any) {
    const getImageUrl = (imageData: any) => {
        // Use image from JSON data if available
        if (imageData && imageData.url) {
            return imageData.url;
        }
        return null;
    };

    // Map of default icons for services without images
    const defaultIcons: { [key: string]: string } = {
        "FINANCIAL MARKETPLACE": "/assets/imgs/service-1/icon-5.svg",
        "FINANCIAL ERP SOFTWARE": "/assets/imgs/service-1/icon-6.svg"
    };

    const getServiceIcon = (service: any) => {
        if (service.image && service.image[0] && getImageUrl(service.image[0])) {
            return getImageUrl(service.image[0]);
        }
        return defaultIcons[service.title] || "/assets/imgs/service-1/icon-1.svg";
    };

    return (
        <section data-kte="kt-27860" className="kt-27860 section-padding">
            <div data-kte="kt-39747" className="kt-39747 container">
                <div data-kte="kt-33067" className="kt-33067 text-center">
                    <div data-kte="kt-17346" className="kt-17346 d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
                        <img src="/assets/imgs/features-1/dots.png" alt="Lasya AI Tech" />
                        <span data-kte="kt-89104" className="kt-89104 tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">What we offers</span>
                    </div>
                    <h3 data-kte="kt-48252" className="kt-48252 ds-3 my-3" data-aos="fade-zoom-in" data-aos-delay={300}>{data?.title}</h3>
                    <p data-aos="fade-zoom-in" data-aos-delay={100}>
                        By doing a financial analysis of these statements, you can see <br /> whether you have enough working capital.
                    </p>
                </div>
                <div data-kte="kt-95326" className="kt-95326 row mt-6 position-relative">
                    {data?.services?.map((service: any, index: number) => (
                        <div key={service.id} className={`col-lg-4 ${index % 3 === 0 ? 'mt-lg-8' : 'mt-5'}`}>
                            <div className={`p-2 rounded-4 shadow-1 bg-white position-relative z-1 hover-up`} 
                                data-aos="fade-zoom-in" 
                                data-aos-delay={100 + (index * 100)}
                            >
                                <div data-kte="kt-97522" className="kt-97522 card-service bg-white p-5 rounded-4 hover-up h-100">
                                    <div data-kte="kt-41168" className="kt-41168 icon-wrapper mb-4">
                                        {service.image && service.image[0] && getImageUrl(service.image[0]) ? (
                                            <img 
                                                src={getImageUrl(service.image[0])}
                                                alt={service.title}
                                                width={48}
                                                height={48}
                                            />
                                        ) : null}
                                    </div>
                                    <h6 data-kte="kt-41125" className="kt-41125 mb-3">{service.title}</h6>
                                    <p>{service.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div data-kte="kt-37982" className="kt-37982 position-absolute top-50 start-50 translate-middle z-0">
                        <img src="/assets/imgs/service-1/img-bg.png" alt="background" />
                    </div>
                </div>
            </div>
        </section>
    )
}