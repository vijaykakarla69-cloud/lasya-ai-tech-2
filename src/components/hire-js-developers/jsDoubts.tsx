"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";

const JsDoubts = ({ data }: { data: any }) => {
  if (!data) return null;

  const [isTab, setIsTab] = useState(1);

  const handleTab = (i: number) => {
    setIsTab(i);
  };

  const clientProjects = data?.case_studies?.filter(
    (study: any) => study.categories === "Client Project"
  ) || [];

  const dashboardTemplates = data?.case_studies?.filter(
    (study: any) => study.categories === "Dashboards and Templates"
  ) || [];

  return (
    <div>
      <section data-kte="kt-13335" className="kt-13335 section-blog-1 section-padding">
        <div data-kte="kt-93536" className="kt-93536 container">
          <div data-kte="kt-43631" className="kt-43631 row text-center position-relative z-1">
            <div data-kte="kt-69609" className="kt-69609 col">
              <div
                className="border-linear-1 rounded-pill d-inline-block mb-2"
                data-aos="zoom-in"
                data-aos-delay={100}
              >
                <div data-kte="kt-76501" className="kt-76501 text-primary bg-white px-4 py-2 rounded-pill position-relative z-2 fw-bold">
                  Doubts
                </div>
              </div>
              <h3 data-kte="kt-29968" className="kt-29968 ds-3 fw-normal position-relative z-2 mb-5 fw-bold">
                {data.title}
              </h3>
              <p data-kte="kt-42097" className="kt-42097 text-900 mb-3">{data.description}</p>
            </div>
          </div>

          <div data-kte="kt-46257" className="kt-46257 text-center mt-6 mb-8">
            <div data-kte="kt-99061" className="kt-99061 p filter-menu-active d-flex flex-wrap gap-2 justify-content-center">
              <button
                className={`${
                  isTab === 1 ? "nav-link active" : "nav-link"
                } btn btn-md btn-filter mb-2 px-4 py-2 me-2 w-30`}
                data-bs-toggle="tab"
                type="button"
                onClick={() => handleTab(1)}
                role="tab"
              >
                Client Projects
              </button>

              <button
                className={`${
                  isTab === 2 ? "nav-link active" : "nav-link"
                } btn btn-md btn-filter mb-2 px-4 py-2 me-2 w-30`}
                data-bs-toggle="tab"
                type="button"
                onClick={() => handleTab(2)}
                role="tab"
              >
                Dashboard and Templates
              </button>
            </div>
          </div>

          <div data-kte="kt-86466" className="kt-86466 tab-content" id="nav-tabContent">
            <div
              className={`${
                isTab === 1 ? "tab-pane fade show active" : "tab-pane fade"
              }`}
              role="tabpanel"
            >
              <div data-kte="kt-34506" className="kt-34506 row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {clientProjects.map((study: any) => (
                  <div data-kte="kt-58261" className="kt-58261 col" key={study.id}>
                    <div
                      className="card h-100 border-0 rounded-3 position-relative"
                      data-aos="fade-zoom-in"
                      data-aos-delay={100}
                    >
                      <div data-kte="kt-31980" className="kt-31980 card-img-wrapper" style={{ height: '240px', overflow: 'hidden' }}>
                        <img
                          className="rounded-3 w-100 h-100"
                          src={`${study.image[0].url}`}
                          alt={study.title}
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                      <div data-kte="kt-55082" className="kt-55082 card-body p-0 bg-white">
                        <Link
                          href="#"
                          className="bg-primary-soft position-relative z-1 d-inline-flex rounded-pill px-3 py-2 mt-3"
                        >
                          <span data-kte="kt-31989" className="kt-31989 tag-spacing fs-7 fw-bold text-linear-2 text-uppercase">
                            {study.categories}
                          </span>
                        </Link>
                        <h6 data-kte="kt-91141" className="kt-91141 my-3">{study.title}</h6>
                        <p data-kte="kt-42503" className="kt-42503 line-clamp-3">{study.description}</p>
                      </div>
                      <Link
                        href="#"
                        className="position-absolute bottom-0 start-0 end-0 top-0 z-0"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`${
                isTab === 2 ? "tab-pane fade show active" : "tab-pane fade"
              }`}
              role="tabpanel"
            >
              <div data-kte="kt-29388" className="kt-29388 row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {dashboardTemplates.map((study: any) => (
                  <div data-kte="kt-34589" className="kt-34589 col" key={study.id}>
                    <div
                      className="card h-100 border-0 rounded-3 position-relative"
                      data-aos="fade-zoom-in"
                      data-aos-delay={100}
                    >
                      <div data-kte="kt-87083" className="kt-87083 card-img-wrapper" style={{ height: '240px', overflow: 'hidden' }}>
                        <img
                          className="rounded-3 w-100 h-100"
                          src={`${study.image[0].url}`}
                          alt={study.title}
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                      <div data-kte="kt-74548" className="kt-74548 card-body p-0 bg-white">
                        <Link
                          href="#"
                          className="bg-primary-soft position-relative z-1 d-inline-flex rounded-pill px-3 py-2 mt-3"
                        >
                          <span data-kte="kt-57516" className="kt-57516 tag-spacing fs-7 fw-bold text-linear-2 text-uppercase">
                            {study.categories}
                          </span>
                        </Link>
                        <h6 data-kte="kt-70987" className="kt-70987 my-3">{study.title}</h6>
                        <p data-kte="kt-99179" className="kt-99179 line-clamp-3">{study.description}</p>
                      </div>
                      <Link
                        href="#"
                        className="position-absolute bottom-0 start-0 end-0 top-0 z-0"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {data.button?.[0] && (
            <div data-kte="kt-15077" className="kt-15077 text-center mt-6">
              <Link
                href={data.button[0].link}
                className="btn btn-primary px-4 py-2"
              >
                {data.button[0].text}
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default JsDoubts;
