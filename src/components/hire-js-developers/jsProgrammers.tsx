"use client"

import React from "react";


export default function JsProgrammers({ data }: { data: any }) {
  return (
    <div>
      <section data-kte="kt-40022" className="kt-40022 section-feature-12 border-bottom pb-120 pt-50">
        <div data-kte="kt-83387" className="kt-83387 container">
          <div data-kte="kt-56679" className="kt-56679 text-center">
            <h5 data-kte="kt-68618" className="kt-68618 ds-5">
              {data?.title || "Loading..."}
            </h5>
            <p data-kte="kt-61697" className="kt-61697 fs-5 pb-4">
              {data?.description || "Loading..."}
            </p>
          </div>
          <div data-kte="kt-28905" className="kt-28905 row justify-content-between g-4">
            {data?.program_models?.map((item: any) => (
              <div data-kte="kt-88621" className="kt-88621 col-lg-6" key={item.id}>
                <div data-kte="kt-13481" className="kt-13481 feature-item bg-neutral-100 p-7 rounded-4 hover-up h-100">
                  <div data-kte="kt-21061" className="kt-21061 icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
                    <div data-kte="kt-13300" className="kt-13300 icon">
                      {item.icon?.[0]?.url && (
                        <img 
                          className="filter-invert" 
                          src={`${item.icon[0].url}`} 
                          alt={item.icon[0]?.alternativeText || item.icon[0]?.name || 'Default Alt Text'} 
                        />
                      )}
                    </div>
                  </div>
                  <h4 data-kte="kt-71768" className="kt-71768 text-truncate">{item.title}</h4>
                  <p data-kte="kt-14360" className="kt-14360 line-clamp-3">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
