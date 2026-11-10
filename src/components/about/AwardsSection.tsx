"use client"
import Link from "next/link";

export default function AwardsSection({ data, items }: { data: any, items: any[] }) {
  if (!items?.length) { 
    return null;
  }

  return (
    <section data-kte="kt-14148" className="kt-14148 section-blog-1 section-padding">  
      <div data-kte="kt-56397" className="kt-56397 container">
        <div data-kte="kt-82529" className="kt-82529 text-center mb-5">
          <div data-kte="kt-60674" className="kt-60674 d-flex align-items-center justify-content-center">
            <div data-kte="kt-59869" className="kt-59869 bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2"> 
              <img src="/assets/imgs/features-1/dots.png" alt="Lasya AI Tech" />
              <span data-kte="kt-15145" className="kt-15145 tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Awards</span>
            </div>
          </div>
          <h2 data-kte="kt-96467" className="kt-96467 mt-4">{data?.title}</h2>
          <p data-kte="kt-44470" className="kt-44470 fs-5">{data?.description}</p>
        </div>

        <div data-kte="kt-19916" className="kt-19916 awards-container">
          {items.map((award: any, index: number) => (
            <div key={index} data-kte="kt-16026" className="kt-16026 row align-items-center mb-5" data-aos="fade-up" data-aos-delay={100 * index}>
              <div data-kte="kt-61468" className="kt-61468 col-lg-6 mb-4 mb-lg-0">
                {award.image && (
                  <img 
                    className="rounded-3 w-100" 
                    src={`/assets/imgs/uploads${award.image.formats?.small?.url || award.image.url}`}
                    alt={award.image.alternativeText || award.title} 
                  />
                )}
              </div>
              <div data-kte="kt-89547" className="kt-89547 col-lg-6">
                <div data-kte="kt-98267" className="kt-98267 ps-lg-4">
                  <div data-kte="kt-35869" className="kt-35869 bg-primary-soft rounded-pill px-3 py-2 d-inline-block mb-3">
                    <span data-kte="kt-39320" className="kt-39320 tag-spacing fs-7 fw-bold text-linear-2 text-uppercase">
                      {award.subtitle}
                    </span>
                  </div>
                  <h4 data-kte="kt-84140" className="kt-84140 mb-3">{award.title}</h4>
                  <p data-kte="kt-16795" className="kt-16795 mb-0">{award.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}