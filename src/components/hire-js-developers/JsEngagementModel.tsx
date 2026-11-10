"use client";
import Link from 'next/link'
import React from 'react'

const JsEngagementModel = ({ data }: { data: any }) => {
  if (!data) {
    return null;
  }

  return (
    <div>
      <section data-kte="kt-53470" className="kt-53470 section-feature-12 border-bottom pb-50">
        <div data-kte="kt-18629" className="kt-18629 container">
          <div data-kte="kt-27261" className="kt-27261 text-center">
            <h5 data-kte="kt-22160" className="kt-22160 ds-5">
              {data?.title || "Loading..."}
            </h5>
            <p data-kte="kt-77478" className="kt-77478 fs-5 pb-4">
              {data?.description || "Loading..."}
            </p>
          </div>
          <div data-kte="kt-97619" className="kt-97619 row mb-5">
            {data?.engagement_model?.map((model: any) => (
              <div data-kte="kt-53794" className="kt-53794 col-lg-6" key={model.id}>
                <div data-kte="kt-71814" className="kt-71814 feature-item mb-5 bg-neutral-100 p-7 rounded-4 hover-up">
                  <div data-kte="kt-13680" className="kt-13680 icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
                    <div data-kte="kt-66925" className="kt-66925 icon">
                      {model.icon?.[0]?.url ? (
                        <img 
                          className="filter-invert" 
                          src={`${model.icon[0].url}`} 
                          alt={model.title} 
                        />
                      ) : (
                        <img 
                          className="filter-invert" 
                          src="/assets/imgs/service-1/icon-6.svg" 
                          alt="default" 
                        />
                      )}
                    </div>
                  </div>
                  <h4>{model.title}</h4>
                  <p>{model.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default JsEngagementModel