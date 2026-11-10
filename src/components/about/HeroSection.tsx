export default function PageHeroSection({ data }: { data: any }) {
    // Handle both direct data and nested data structures
    const heroData = data?.data?.about_hero || data?.about_hero || data || {};

    if (!heroData) return null;

    return (
        <>
          <section data-kte="kt-20801" className="kt-20801 section-testimonial-13 position-relative section-padding padding-bottom-25 fix">
                      <div data-kte="kt-32653" className="kt-32653 container position-relative z-1">
                          <div data-kte="kt-63568" className="kt-63568 row pb-9">
                              <div data-kte="kt-64008" className="kt-64008 col-lg-9 mx-lg-auto">
                                  <div data-kte="kt-14699" className="kt-14699 text-center mb-lg-0 mb-5">
                                      <div data-kte="kt-53824" className="kt-53824 d-flex align-items-center position-relative z-2 justify-content-center bg-primary-soft d-inline-flex rounded-pill border border-2 border-white px-3 py-1">
                                          <img src="/assets/imgs/features-1/dots.png" alt="" />
                                          <span data-kte="kt-19928" className="kt-19928 tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase" dangerouslySetInnerHTML={{ __html: heroData.title }}></span>
                                      </div>
                                      <h1 data-kte="kt-16997" className="kt-16997 ds-5 my-3 fw-regular" dangerouslySetInnerHTML={{ __html: heroData.subtitle }}></h1>
                                      <p data-kte="kt-42576" className="kt-42576 fs-5 mb-0 text-500" dangerouslySetInnerHTML={{ __html: heroData.description }}></p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div data-kte="kt-72942" className="kt-72942 position-absolute top-0 start-50 translate-middle-x z-0">
                          <img src="/assets/imgs/service-2/bg-line.png" alt="" />
                      </div>
                      <div data-kte="kt-22353" className="kt-22353 rotate-center ellipse-rotate-success position-absolute z-0" />
                      <div data-kte="kt-45931" className="kt-45931 rotate-center-rev ellipse-rotate-primary position-absolute z-1" />
                  </section>
        </>
    )
}
