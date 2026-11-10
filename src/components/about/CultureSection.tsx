"use client"
import Link from "next/link";

export default function CultureSection({ data }: { data: any }) {
  if (!data?.items?.length && !data?.title) {
    return null;
  }

  return (
    <div data-kte="kt-75036" className="kt-75036 section-features-7 bg-white section-padding">
      <div data-kte="kt-63129" className="kt-63129 container">
        <div data-kte="kt-65446" className="kt-65446 text-center mb-5">
          <h2 data-kte="kt-34987" className="kt-34987 mb-3">{data?.title}</h2>
          <p data-kte="kt-13891" className="kt-13891 fs-5">{data?.description}</p>
        </div>
        <div data-kte="kt-48223" className="kt-48223 row">
          {data?.items?.map((item: any, index: number) => (
            <div key={index} data-kte="kt-77736" className="kt-77736 col-lg-6 mb-4" data-aos="fade-up" data-aos-delay={index * 100}>
              <div data-kte="kt-78614" className="kt-78614 feature-item mb-5 mb-lg-0 bg-neutral-100 p-4 rounded-3 hover-up">
                <div data-kte="kt-25841" className="kt-25841 bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
                  <div data-kte="kt-56747" className="kt-56747 icon">
                    {item.culture_icon ? (
                      <img src={`${item.culture_icon.url}`} alt={item.title} />
                    ) : (
                      <img src="/assets/imgs/features-1/icon-1.svg" alt={item.title} />
                    )}
                  </div>
                </div>
                <h6 data-kte="kt-95573" className="kt-95573 text-primary">{item.title}</h6>
                <p data-kte="kt-21222" className="kt-21222 text-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}