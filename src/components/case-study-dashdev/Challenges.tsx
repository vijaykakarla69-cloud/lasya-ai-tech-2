"use client"

import RightThickIcon from "@/public/assets/icons/right-thick.svg"


export default function Challenges({ data }: any) {
    if (!data || data.length < 2) {
        return null;
    }

    const challenges = data[0];
    const solutions = data[1];

    return (
        <section data-kte="kt-56445" className="kt-56445 section-work-process">
            <div data-kte="kt-67414" className="kt-67414 container step-2 pt-120 pb-120">
                <div data-kte="kt-19106" className="kt-19106 row align-items-center">
                    <div data-kte="kt-58086" className="kt-58086 col-lg-6">
                        <div data-kte="kt-63365" className="kt-63365 position-relative d-inline-block mb-lg-0 mb-8">
                            {challenges.image && challenges.image[0] && (
                                <div data-kte="kt-37232" className="kt-37232 position-relative z-1 d-inline-block zoom-img rounded-4 border-5 border-white border">
                                    <img 
                                        src={challenges.image[0].url}
                                        alt={challenges.image[0].alternativeText || challenges.title} 
                                        className="w-100"
                                    />
                                </div>
                            )}
                            <div data-kte="kt-67075" className="kt-67075 square-2 position-absolute rounded-4 bg-linear-1 w-100 h-100 z-0" />
                        </div>
                    </div>
                    <div data-kte="kt-55918" className="kt-55918 col-lg-6 ps-md-8">
                        <h3 data-kte="kt-32887" className="kt-32887 ds-3">01<span data-kte="kt-32887" className="kt-32887 text-primary">.</span></h3>
                        <h5 data-kte="kt-12468" className="kt-12468 ds-5">{challenges.title}</h5>
                        <ul data-kte="kt-79466" className="kt-79466 list-unstyled mt-5">
                            {challenges.points.map((item: any, index: number) => (
                                <li key={index} data-kte="kt-34710" className="kt-34710 d-flex mb-3">
                                    <div data-kte="kt-56160" className="kt-56160 flex-shrink-0 mt-1">
                                    <RightThickIcon className="text-primary" />
                                    </div>
                                    <p data-kte="kt-72362" className="kt-72362 fs-5 text-900 mb-0 ms-3 fw-bold flex-grow-1">{item.point}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div data-kte="kt-59490" className="kt-59490 container step-1 pt-120 pb-120">
                <div data-kte="kt-15461" className="kt-15461 row align-items-center">
                    <div data-kte="kt-90716" className="kt-90716 col-lg-6">
                        <h3 data-kte="kt-14684" className="kt-14684 ds-3">02<span data-kte="kt-14684" className="kt-14684 text-primary">.</span></h3>
                        <h5 data-kte="kt-93463" className="kt-93463 ds-5">{solutions.title}</h5>
                        <ul data-kte="kt-94994" className="kt-94994 list-unstyled mt-5">
                            {solutions.points.map((item: any, index: number) => (
                                <li key={index} data-kte="kt-89278" className="kt-89278 d-flex mb-3">
                                    <div data-kte="kt-17383" className="kt-17383 flex-shrink-0 mt-1">
                                        <RightThickIcon className="text-primary" />
                                    </div>
                                    <p data-kte="kt-81018" className="kt-81018 fs-5 text-900 mb-0 ms-3 fw-bold flex-grow-1">{item.point}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div data-kte="kt-81519" className="kt-81519 col-lg-6">
                        <div data-kte="kt-33565" className="kt-33565 position-relative d-inline-block mt-lg-0 mt-8">
                            {solutions.image && solutions.image[0] && (
                                <div data-kte="kt-40374" className="kt-40374 position-relative z-1 d-inline-block zoom-img rounded-4 border-5 border-white border">
                                    <img 
                                        src={solutions.image[0].url}
                                        alt={solutions.image[0].alternativeText || solutions.title}
                                        className="w-100"
                                    />
                                </div>
                            )}
                            <div data-kte="kt-42727" className="kt-42727 square position-absolute rounded-4 bg-linear-1 w-100 h-100 z-0" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}