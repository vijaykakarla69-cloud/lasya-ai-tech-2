export default function PageHeroSection({ data }: { data: any }) {
    const heroData = data?.hero_section || {};

    return (
        <>
            <section data-kte="kt-78926" className="kt-78926 section-testimonial-13 position-relative section-padding padding-bottom-25 fix">
                <div data-kte="kt-65408" className="kt-65408 container position-relative z-1">
                    <div data-kte="kt-85598" className="kt-85598 row pb-9">
                        <div data-kte="kt-10902" className="kt-10902 col-lg-9 mx-lg-auto">
                            <div data-kte="kt-34299" className="kt-34299 text-center mb-lg-0 mb-5">
                                <div data-kte="kt-88865" className="kt-88865 d-flex align-items-center position-relative z-2 justify-content-center bg-primary-soft d-inline-flex rounded-pill border border-2 border-white px-3 py-1">
                                    <img src="/assets/imgs/features-1/dots.png" alt="" />
                                    <span data-kte="kt-13674" className="kt-13674 tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">{heroData.button_text}</span>
                                </div>
                                <h1 data-kte="kt-38933" className="kt-38933 ds-5 my-3 fw-regular">{heroData.title}</h1>
                                <p data-kte="kt-89732" className="kt-89732 fs-5 mb-0 text-500">{heroData.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-kte="kt-36224" className="kt-36224 position-absolute top-0 start-50 translate-middle-x z-0">
                    <img src="/assets/imgs/service-2/bg-line.png" alt="" />
                </div>
                <div data-kte="kt-27016" className="kt-27016 rotate-center ellipse-rotate-success position-absolute z-0" />
                <div data-kte="kt-25426" className="kt-25426 rotate-center-rev ellipse-rotate-primary position-absolute z-1" />
            </section>
        </>
    )
}
