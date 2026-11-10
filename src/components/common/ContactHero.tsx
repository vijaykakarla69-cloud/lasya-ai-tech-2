export default function ContactHero({ data }: { data: any }) {
    // Since data is an array, we need to get the first item
    const heroData = Array.isArray(data) ? data[0] : data || {};
  
    return (
        <>
          <section data-kte="kt-79646" className="kt-79646 section-testimonial-13 position-relative section-padding padding-bottom-25 fix">
                      <div data-kte="kt-29691" className="kt-29691 container position-relative z-1">
                          <div data-kte="kt-25079" className="kt-25079 row pb-9">
                              <div data-kte="kt-37674" className="kt-37674 col-lg-9 mx-lg-auto">
                                  <div data-kte="kt-19837" className="kt-19837 text-center mb-lg-0 mb-5">
                                      <div data-kte="kt-50429" className="kt-50429 d-flex align-items-center position-relative z-2 justify-content-center bg-primary-soft d-inline-flex rounded-pill border border-2 border-white px-3 py-1">
                                          <img src="/assets/imgs/features-1/dots.png" alt="" />
                                          <span data-kte="kt-41160" className="kt-41160 tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">{heroData.title}</span>
                                      </div>
                                      <h1 data-kte="kt-69887" className="kt-69887 ds-5 my-3 fw-regular">{heroData.subtitle}</h1>
                                      <p data-kte="kt-68949" className="kt-68949 fs-5 mb-0 text-500">{heroData.description}</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div data-kte="kt-33636" className="kt-33636 position-absolute top-0 start-50 translate-middle-x z-0">
                          <img src="/assets/imgs/service-2/bg-line.png" alt="" />
                      </div>
                      <div data-kte="kt-75479" className="kt-75479 rotate-center ellipse-rotate-success position-absolute z-0" />
                      <div data-kte="kt-47635" className="kt-47635 rotate-center-rev ellipse-rotate-primary position-absolute z-1" />
                  </section>
  
        </>
    )
  }
  