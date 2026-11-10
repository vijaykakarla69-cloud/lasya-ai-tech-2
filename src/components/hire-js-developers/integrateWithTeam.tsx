"use client";

export default function IntegrateWithTeam({ data }: { data: any }) { 
  const teamData = data?.[0];
  
  return (
    <>
      <section data-kte="kt-89222" className="kt-89222 section-testimonial-13 position-relative section-padding fix">
        <div data-kte="kt-32253" className="kt-32253 container position-relative z-1">
          <div data-kte="kt-29400" className="kt-29400 row">
            <div data-kte="kt-20369" className="kt-20369 col-lg-7 mx-lg-auto">
              <div data-kte="kt-31513" className="kt-31513 text-center mb-lg-0">
                <div data-kte="kt-42380" className="kt-42380 d-flex align-items-center position-relative z-2 justify-content-center bg-primary-soft d-inline-flex rounded-pill border border-2 border-white px-3 py-1">
                  <img src="/assets/imgs/features-1/dots.png" alt="Lasya AI Tech" />
                  <span data-kte="kt-19538" className="kt-19538 tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">
                    INTEGRATE WITH OUR TEAM
                  </span>
                </div>
                <h5 data-kte="kt-19422" className="kt-19422 ds-5 my-3 fw-regular fw-bold">
                  {teamData?.title || "Seamlessly integrate with your team"}
                </h5>
                <p data-kte="kt-50306" className="kt-50306 fs-5 mb-0 text-500">
                  {teamData?.subtitle || "Our JS developers have been carefully selected and meticulously trained to work with North American StartUps, ScaleUps, and Enterprises. Need an extra hand? They can start working immediately."}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div data-kte="kt-44002" className="kt-44002 position-absolute top-0 start-50 translate-middle-x z-0">
          <img src="/assets/imgs/service-2/bg-line.png" alt="Lasya AI Tech" />
        </div>
        <section data-kte="kt-35735" className="kt-35735 section-testimonial-2 position-relative">
          <div data-kte="kt-74318" className="kt-74318 container position-relative z-1 mt-5">
            <div data-kte="kt-90001" className="kt-90001 row pb-9 mt-5">
              {teamData?.team_qualities?.map((item: any) => (
                <div data-kte="kt-94901" className="kt-94901 col-lg-6 mt-5" key={item.id}>
                  <div 
                    className="bg-neutral-100 p-5 rounded-3 h-100 d-flex flex-column"
                    data-aos="fade-zoom-in"
                    data-aos-delay={0}
                    style={{minHeight: '300px'}}
                  >
                    <div data-kte="kt-30562" className="kt-30562 d-flex align-items-center">
                      {item.icon?.[0] && (
                        <img 
                          className="avatar-lg"
                          src={`${item.icon[0].url}`}
                          alt={item.icon[0].name || "integration icon"}
                          width={48}
                          height={48}
                        />
                      )}
                    </div>
                    <h6 data-kte="kt-30928" className="kt-30928 mt-4">{item.title}</h6>
                    <p data-kte="kt-81128" className="kt-81128 text-900 mt-2 flex-grow-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <div data-kte="kt-34001" className="kt-34001 rotate-center ellipse-rotate-success position-absolute z-0" />
        <div data-kte="kt-48196" className="kt-48196 rotate-center-rev ellipse-rotate-primary position-absolute z-1" />
      </section>
    </>
  );
}
