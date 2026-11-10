"use client";
import Link from "next/link";

export default function HeroJsSada({ data }: { data: any }) {
  return (
    <>
      <section data-kte="kt-88474" className="kt-88474 section-hero-2 position-relative fix section-padding pb-lg-0">
        <div data-kte="kt-86591" className="kt-86591 container">
          <div data-kte="kt-29872" className="kt-29872 row text-center position-relative z-1">
            <div data-kte="kt-10368" className="kt-10368 col">
              <div
                className="border-linear-1 rounded-pill d-inline-block mb-2"
                data-aos="zoom-in"
                data-aos-delay={100}
              >
                <div data-kte="kt-54315" className="kt-54315 text-primary bg-white px-4 py-2 rounded-pill fw-medium position-relative z-2 fw-bold">
                  {data?.button}
                </div>
              </div>
              <h1 data-kte="kt-17815" className="kt-17815 ds-3 fw-normal position-relative z-2 mb-5 fw-bold">
                {data?.title}
              </h1>
              <p data-kte="kt-79601" className="kt-79601 fs-5 mb-0">
                {data?.description}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
