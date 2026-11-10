"use client"
import Link from "next/link";
import CountUp from "react-countup"

export default function Stats({ data }: any) {

    if (!data?.stats) {
        return null;
    }

    const { title, button, stat_number } = data.stats;

    return (
        <section data-kte="kt-13055" className="kt-13055 section-static-1 position-relative bg-primary fix z-0 section-padding">
            <div data-kte="kt-55578" className="kt-55578 container mt-8">
                <div data-kte="kt-17883" className="kt-17883 inner">
                    <div data-kte="kt-62878" className="kt-62878 row justify-content-center">
                        {stat_number.map((stat: any) => (
                            <div key={stat.id} data-kte="kt-19323" className="kt-19323 col-xl-3 col-lg-4 col-sm-6">
                                <div data-kte="kt-24670" className="kt-24670 counter-item-cover counter-item">
                                    <div data-kte="kt-45345" className="kt-45345 content text-center mx-auto">
                                        <span data-kte="kt-54853" className="kt-54853 fw-bold lh-sm count ds-2 text-100">
                                            {stat.preffix}<span data-kte="kt-93607" className="kt-93607 odometer" />
                                            <CountUp end={stat.number} enableScrollSpy={true} />
                                            <span>{stat.suffix}</span>
                                        </span>
                                        <h6 data-kte="kt-21828" className="kt-21828 fs-5 text-warning mb-3 text-uppercase fw-bold">{stat.text}</h6>
                                        <p data-kte="kt-35380" className="kt-35380 fs-6 text-100 opacity-80 mt-2 lh-base">{stat.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div data-kte="kt-55390" className="kt-55390 img-decorate position-absolute top-0 start-0">
                <img src="/assets/imgs/static-1/img-decorate.png" alt="Lasya AI Tech" />
            </div>
            <div data-kte="kt-22031" className="kt-22031 bouncing-blobs-container">
                <div data-kte="kt-11182" className="kt-11182 bouncing-blobs-glass bg-transparent" />
                <div data-kte="kt-72956" className="kt-72956 bouncing-blobs">
                    <div data-kte="kt-50274" className="kt-50274 bouncing-blob bouncing-blob--white" />
                </div>
            </div>
        </section>
    )
}