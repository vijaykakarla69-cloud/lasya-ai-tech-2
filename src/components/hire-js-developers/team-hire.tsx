"use client";
import CountUp from "react-countup";
export default function TeamHire({ data }: { data: any }) {
  return (
    <>
      <section data-kte="kt-58811" className="kt-58811 section-cta-8 bg-4">
        <div data-kte="kt-28393" className="kt-28393 container-fluid position-relative section-padding">
          <div data-kte="kt-57225" className="kt-57225 container">
            <div data-kte="kt-17643" className="kt-17643 row align-items-center">
              <div data-kte="kt-65868" className="kt-65868 col-lg-5">
                <div
                  className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2"
                  data-aos="zoom-in"
                  data-aos-delay={100}
                >
                  <img src="/assets/imgs/features-1/dots.png" alt="Lasya AI Tech" />
                  <span data-kte="kt-81705" className="kt-81705 tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">
                    {data?.title || "Loading..."}
                  </span>
                </div>
                <h5 data-kte="kt-41110" className="kt-41110 ds-5 mt-2">
                  {data?.subtitle || "Loading..."}
                </h5>
                <p data-kte="kt-99935" className="kt-99935 mt-3">{data?.description || "Loading..."}</p>
              </div>
              <div data-kte="kt-15972" className="kt-15972 col-lg-6 offset-lg-1 text-center mt-lg-0 mt-8">
                <div data-kte="kt-12067" className="kt-12067 position-relative z-1 d-inline-block mb-lg-0 mb-8">
                  <img
                    className="rounded-4 position-relative z-1"
                    src={data?.image?.[0]?.url ? `${data.image[0].url}` : "Loading..."}    
                    alt={data?.image?.[0]?.name || "Lasya AI Tech"}
                  />
                  <div data-kte="kt-20911" className="kt-20911 alltuchtopdown tag-year position-absolute backdrop-filter bg-primary rounded-4 px-4 py-5 text-center z-1">
                    <span data-kte="kt-84783" className="kt-84783 h2 count fw-black my-0 lh-1 text-white text-nowrap">
                      <span data-kte="kt-80419" className="kt-80419 odometer" />{" "}
                      <CountUp end={15} enableScrollSpy={true} />+
                    </span>
                    <p data-kte="kt-68425" className="kt-68425 text-white text-nowrap mb-0">
                      Years of Experience
                    </p>
                  </div>
                  <div data-kte="kt-56003" className="kt-56003 position-absolute tag-dots z-0 pt-5">
                    <img
                      className="alltuchtopdown"
                      src="/assets/imgs/cta-4/vector.svg"
                      alt="Lasya AI Tech"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
