"use client"
import Link from "next/link";

export default function MissionSection({ data }: { data: any }) { 
  if (!data || !Array.isArray(data)) {
    return null;
  }

  return (
    <section data-kte="kt-55058" className="kt-55058 section-testimonial-3 position-relative section-padding fix">
      <div data-kte="kt-10688" className="kt-10688 container position-relative z-1">
        <div data-kte="kt-74104" className="kt-74104 row">
          <div data-kte="kt-71243" className="kt-71243 col-lg-6">
            <img src="/assets/imgs/cta-7/img-1.png" alt="Mission Vision Values" data-kte="kt-38209" className="kt-38209 img-fluid" />
          </div>
          <div data-kte="kt-50556" className="kt-50556 col-lg-6">
            {data.map((item: any, index: number) => (
              <div key={index} data-kte="kt-17278" className="kt-17278 content mb-8">
                <h2 data-kte="kt-60086" className="kt-60086 mb-4 fw-bold fs-3">{item.title}</h2>
                <p data-kte="kt-14688" className="kt-14688 text-700 fs-5">{item.description}</p>
                {item.bullet_points && item.bullet_points.bullet_points && (
                  <ul data-kte="kt-20790" className="kt-20790 list-unstyled values-list mt-4">
                    {item.bullet_points.bullet_points.map((point: any, idx: number) => (
                      <li key={idx} data-kte="kt-86922" className="kt-86922 d-flex align-items-center mt-3">
                        <div data-kte="kt-88093" className="kt-88093 icon-box bg-primary-soft rounded-circle d-flex align-items-center justify-content-center">
                          <img src="/assets/imgs/features-1/check.svg" alt="check" />
                        </div>
                        <span data-kte="kt-27779" className="kt-27779 ms-3 text-700 fs-5">{point.title}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Background Image */}
      <div data-kte="kt-92296" className="kt-92296 position-absolute top-0 start-0 z-0">
        <img src="/assets/imgs/service-2/bg-line.png" alt="background" />
      </div>
    </section>
  );
}