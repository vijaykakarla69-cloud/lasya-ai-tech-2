"use client";
import React from 'react';

const JsPartnerWith = ({ data }: { data: any }) => {
  if (!data || !data.partner_section) return null;

  return (
    <div>
      <section data-kte="kt-81928" className="kt-81928 section-testimonial-2 position-relative">
        <div data-kte="kt-99980" className="kt-99980 container position-relative z-1">
          <div data-kte="kt-78955" className="kt-78955 row pb-9 text-center justify-content-center align-items-center mt-9">
            <h2 data-kte="kt-99395" className="kt-99395 text-center fw-bold">
              {data.title}
            </h2>
            <p data-kte="kt-30442" className="kt-30442 text-center fs-5 text-900 mt-3">
              {data.description}
            </p>
          </div>
          <div data-kte="kt-76901" className="kt-76901 row pb-9 mt-2">
            {Array.isArray(data.partner_section) && data.partner_section.map((item: any) => (
              <div data-kte="kt-97404" className="kt-97404 col-lg-4 mt-5" key={item.id}>
                <div 
                  className="bg-neutral-100 p-5 rounded-3 h-100" 
                  data-aos="fade-zoom-in" 
                  data-aos-delay={0}
                  style={{minHeight: '300px'}}
                >
                  <div data-kte="kt-95735" className="kt-95735 d-flex align-items-center mt-5">
                    <img
                      className="avatar-lg"
                      src={`${item.icon[0]?.url}`} 
                      alt={item.icon[0]?.alternativeText || item.icon[0]?.name}
                    />
                  </div>
                  <h6>{item.title}</h6>
                  <p data-kte="kt-23820" className="kt-23820 text-900">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default JsPartnerWith;
