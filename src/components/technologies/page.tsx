"use client"
import Layout from "@/src/components/layout/Layout"
import Link from "next/link"
import CountUp from "react-countup"
import { Navigation, Pagination, Autoplay, Keyboard } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Marquee from "react-fast-marquee";
import PlusIcon from "@/public/assets/icons/plus.svg"
import ArrowIcon from "@/public/assets/icons/arrow.svg"

import { useState } from "react"

export default function Technologies({ data }: { data: any }) {
  const [activeItem, setActiveItem] = useState(1);

  const handleActiveItem = (index: number) => {
    setActiveItem(index);
  };

  const getImageUrl = (tech: any) => {
    // Use image from JSON data if available
    if (tech.images && tech.images[0] && tech.images[0].url) {
      return tech.images[0].url;
    }
    
    // Return null if no image in JSON - let the component handle it
    return null;
  };

  if (!data?.data?.technologies) {
    return null;
  }

  return (
    <>
      <section data-kte="kt-31805" className="kt-31805 section-padding">
        <div data-kte="kt-92310" className="kt-92310 container">
          <div data-kte="kt-99796" className="kt-99796 text-center">
            <div data-kte="kt-77169" className="kt-77169 d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
              <img src="/assets/imgs/features-1/dots.png" alt="Lasya AI Tech" />
              <span data-kte="kt-40933" className="kt-40933 tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">{data.data.title}</span>
            </div>
            <h1 data-kte="kt-68502" className="kt-68502 ds-3 my-3" data-aos="fade-zoom-in" data-aos-delay={300}>{data.data.subtitle}</h1>
            <p data-aos="fade-zoom-in" data-aos-delay={100}>{data.data.description}</p>
          </div>
          <div data-kte="kt-39389" className="kt-39389 row mt-6 position-relative justify-content-center">
            {data.data.technologies.map((tech: any, index: number) => (
              <div data-kte="kt-44547" className="kt-44547 col-lg-4 col-md-4 mb-4" key={tech.id || index}>
                <div
                  className="p-2 rounded-4 shadow-1 bg-white position-relative z-1 hover-up h-100"
                  data-aos="fade-zoom-in"
                  data-aos-delay={100 + ((index % 3) * 100)}
                >
                  <div data-kte="kt-46618" className="kt-46618 card-service bg-white p-6 border rounded-3 d-flex flex-column h-100">
                    {getImageUrl(tech) && (
                      <img
                        src={getImageUrl(tech)}
                        alt={tech.title}
                        width={48}
                        height={48}
                      />
                    )}
                    <h6 data-kte="kt-48623" className="kt-48623 my-3">{tech.title}</h6>
                    <p data-kte="kt-44461" className="kt-44461 mb-6 flex-grow-1">{tech.description}</p>
                    <div className="mt-auto">
                      <Link
                        href={`/technologies/${tech.slug || tech.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                        className="rounded-pill border icon-shape d-inline-flex gap-3 icon-learn-more"
                      >
                        <PlusIcon
                          className="kt-26493 plus"
                          data-kte="kt-26493"
                        />
                        <ArrowIcon
                          className="kt-60837 arrow"
                          data-kte="kt-60837"
                        />
                        <span data-kte="kt-42290" className="kt-42290 fw-bold fs-7 text-900">Learn More</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}   