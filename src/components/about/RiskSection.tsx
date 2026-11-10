"use client"
import Link from "next/link";

export default function RiskSection({ data }: { data: any }) {    
  if (!data?.title) {
   return null;
  }

  return (
    <>
      <section data-kte="kt-83773" className="kt-83773 section-cta-12 bg-3 position-relative section-padding fix">
        <div data-kte="kt-23240" className="kt-23240 container">
          <div data-kte="kt-20601" className="kt-20601 row">
            <div data-kte="kt-86891" className="kt-86891 col-lg-5 mobile-spacing">
              <div data-kte="kt-10374" className="kt-10374 d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2">
                <img src="/assets/imgs/features-1/dots.png" alt="Lasya AI Tech" />
                <span data-kte="kt-48842" className="kt-48842 tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">
                  {data.subtitle}
                </span>
              </div>
              <h5 data-kte="kt-52365" className="kt-52365 ds-5 my-3">{data.title}</h5>
              <p data-kte="kt-97039" className="kt-97039 fs-5 text-500 mb-8">{data.description}</p>
              {data.button && (
                <Link 
                  href={data.button.link}
                  className={`btn btn-${data.button.variant} hover-up`}
                >
                  {data.button.label}
                </Link>
              )}
            </div>
            <div data-kte="kt-28381" className="kt-28381 col-lg-7">
              {data.risk_image && (
                <img 
                  src={`${data.risk_image.url}`}
                  alt={data.risk_image.alternativeText || "Risk section image"}
                  className="img-fluid"
                />
              )}
            </div>
          </div>
        </div>
        <div data-kte="kt-60042" className="kt-60042 rotate-center ellipse-rotate-success position-absolute z-0" />
        <div data-kte="kt-40111" className="kt-40111 rotate-center-rev ellipse-rotate-primary position-absolute z-0" />
        <div data-kte="kt-50582" className="kt-50582 rotate-center-rev ellipse-rotate-info position-absolute z-0" />
        <div data-kte="kt-54750" className="kt-54750 position-absolute top-0 start-0 z-0">
          <img src="/assets/imgs/testimonial-1/bg-line.png" alt="Lasya AI Tech" width={100} height={100} />
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 768px) {
          .mobile-spacing {
            margin-bottom: 40px;
          }
          
          .btn {
            margin-bottom: 30px;
          }
        }
      `}</style>
    </>
  );
}