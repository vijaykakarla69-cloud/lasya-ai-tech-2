"use client";
export default function FeaturesJs({ data }: { data: any }) {
  return (
    <>
      <section data-kte="kt-30993" className="kt-30993 features-1 section-padding">
        <div data-kte="kt-88887" className="kt-88887 container">
          <div data-kte="kt-45353" className="kt-45353 row justify-content-center">
            {Array.isArray(data) ? data.map((feature: any, index: number) => (
              <div
                key={feature.id}
                className="col-lg-3 col-md-6"
                data-aos="fade-zoom-in"
                data-aos-delay={50}
              >
                <div data-kte="kt-84251" className="kt-84251 feature-item mb-5 mb-lg-0">
                  <div data-kte="kt-40039" className="kt-40039 bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
                    <div data-kte="kt-93231" className="kt-93231 icon">
                      <img 
                        src={`${feature.icon[0].url}`} 
                        alt={feature.icon[0].name} 
                      />
                    </div>
                  </div>
                  <h6>{feature.title}</h6>
                  <p>{feature.description}</p>
                </div>
              </div>
            )) : "Loading..."}
          </div>
        </div>
      </section>
    </>
  );
}
