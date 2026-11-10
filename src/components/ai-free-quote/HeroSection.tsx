                    export default function HeroSection({ data }: { data: any }) {
    // Since data is an array, we need to get the first item
    const heroData = Array.isArray(data) ? data[0] : data || {};
  
    return (
        <>
          <section data-kte="kt-34133" className="kt-34133 section-testimonial-13 position-relative section-padding padding-bottom-25 fix">
                      <div data-kte="kt-17914" className="kt-17914 container position-relative z-1">
                          <div data-kte="kt-40440" className="kt-40440 row pb-9">
                              <div data-kte="kt-23828" className="kt-23828 col-lg-9 mx-lg-auto">
                                  <div data-kte="kt-46672" className="kt-46672 text-center mb-lg-0 mb-5">
                                      <div data-kte="kt-23073" className="kt-23073 d-flex align-items-center position-relative z-2 justify-content-center bg-primary-soft d-inline-flex rounded-pill border border-2 border-white px-3 py-1">
                                          <img src="/assets/imgs/features-1/dots.png" alt="" />
                                          <span data-kte="kt-87276" className="kt-87276 tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">{heroData.title}</span>
                                      </div>
                                      <h1 data-kte="kt-63755" className="kt-63755 ds-5 my-3 fw-regular">AI Development Quote & Pricing</h1>
                                      <p data-kte="kt-71264" className="kt-71264 fs-5 mb-0 text-500">{heroData.description}</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div data-kte="kt-80252" className="kt-80252 position-absolute top-0 start-50 translate-middle-x z-0">
                          <img src="/assets/imgs/service-2/bg-line.png" alt="" />
                      </div>
                      <div data-kte="kt-50190" className="kt-50190 rotate-center ellipse-rotate-success position-absolute z-0" />
                      <div data-kte="kt-46703" className="kt-46703 rotate-center-rev ellipse-rotate-primary position-absolute z-1" />
                  </section>
  
        </>
    )
  }
