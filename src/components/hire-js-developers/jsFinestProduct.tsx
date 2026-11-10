'use client'
import React from "react";
export default function JsFinestProduct({ data }: { data: any }) {

  return (
    <div>
      {data?.map((section: any) => (
        <section key={section.id} data-kte="kt-43473" className="kt-43473 section-testimonial-2 position-relative">
          <div data-kte="kt-43085" className="kt-43085 container position-relative z-1">
            <div data-kte="kt-55943" className="kt-55943 row pb-9 text-center justify-content-center align-items-center mt-9">
              <h2 data-kte="kt-99734" className="kt-99734 text-center fw-bold">
                {section.title}
              </h2>
              <p data-kte="kt-38661" className="kt-38661 text-center fs-5 text-900 mt-3">
                {section.description}
              </p>
            </div>
            <div data-kte="kt-30812" className="kt-30812 row pb-9 mt-2">
              {section.finest_models?.map((item: any) => (
                <div data-kte="kt-87021" className="kt-87021 col-lg-4" key={item.id}>
                  <div
                    className="bg-neutral-100 p-5 rounded-3 h-100" 
                    data-aos="fade-zoom-in"
                    data-aos-delay={0}
                  >
                    <div data-kte="kt-81680" className="kt-81680 d-flex align-items-center mt-5">
                      <img 
                        className="avatar-lg" 
                        src={`${item.icon[0]?.url}`}  
                        alt={item.icon[0]?.alternativeText || item.icon[0]?.name} 
                      />
                    </div>
                    <h6>{item.title}</h6>
                    <p data-kte="kt-30607" className="kt-30607 text-900">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
