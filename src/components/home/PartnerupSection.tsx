'use client'
import CountUp from 'react-countup'
export default function PartnerupSection({data}: {data: any}) {


    if (!data) return null;

    const partner = data[0]

    return (
        <>
            <section data-kte="kt-63676" className="kt-63676 section-contact-4 bg-4 section-padding">
                <div data-kte="kt-42467" className="kt-42467 container">
                    <div data-kte="kt-94149" className="kt-94149 row">
                        <div data-kte="kt-73728" className="kt-73728 col-lg-6">
                            <div data-kte="kt-26299" className="kt-26299 pe-lg-8 me-lg-auto mb-5 mb-lg-0">
                                <h6 data-kte="kt-66665" className="kt-66665 text-primary">{partner.button.label}</h6>
                                <h3 data-kte="kt-68331" className="kt-68331 ds-3">{partner.title}</h3>
                                <p data-kte="kt-81381" className="kt-81381 fs-5">{partner.description}</p>
                            </div>
                        </div>
                        <div data-kte="kt-97907" className="kt-97907 col-lg-6">
                            <div data-kte="kt-16670" className="kt-16670 rounded-4 border border-5 border-white zoom-img mb-5">
                                <img data-kte="kt-60766" className="kt-60766 rounded-4 w-100" src="/assets/imgs/contact-4/img-1.png" alt="Lasya AI Tech" />
                            </div>
                        </div>
                        <div data-kte="kt-94193" className="kt-94193 col-lg-4">
                            <div data-kte="kt-22890" className="kt-22890 rounded-4 border border-5 border-white zoom-img mb-5 mb-lg-0">
                                <img data-kte="kt-28760" className="kt-28760 rounded-4 w-100" src="/assets/imgs/contact-4/img-2.png" alt="Lasya AI Tech" />
                            </div>
                        </div>
                        <div data-kte="kt-86657" className="kt-86657 col-lg-4">
                            <div data-kte="kt-89575" className="kt-89575 h-100 bg-primary rounded-4 d-flex align-items-center justify-content-center border position-relative border-5 fix border-white py-5">
                                <div data-kte="kt-48954" className="kt-48954 position-relative z-1 fix">
                                    <div data-kte="kt-66068" className="kt-66068 d-flex justify-content-center">
                                        <img src="/assets/imgs/hero-1/avatar-1.png" alt="Lasya AI Tech" />
                                        <img data-kte="kt-49565" className="kt-49565 avt-hero" src="/assets/imgs/hero-1/avatar-2.png" alt="Lasya AI Tech" />
                                        <img data-kte="kt-54851" className="kt-54851 avt-hero" src=" assets/imgs/hero-1/avatar-3.png" alt="Lasya AI Tech" />
                                    </div>
                                    <h1 data-kte="kt-95954" className="kt-95954 count fw-black text-white my-0">
                                        {partner.stats.preffix}<CountUp end={partner.stats.number} enableScrollSpy={true} />k
                                    </h1>
                                    <p data-kte="kt-28219" className="kt-28219 fs-5 text-100-keep mb-0">{partner.stats.text}</p>
                                </div>
                                <img data-kte="kt-40814" className="kt-40814 position-absolute top-50 start-50 translate-middle z-0" src="/assets/imgs/contact-4/img-bg-1.png" alt="Lasya AI Tech" />
                            </div>
                        </div>
                        <div data-kte="kt-69614" className="kt-69614 col-lg-4">
                            <div data-kte="kt-81830" className="kt-81830 rounded-4 border border-5 border-white zoom-img mt-5 mt-lg-0">
                                <img data-kte="kt-64908" className="kt-64908 rounded-4 w-100" src="/assets/imgs/contact-4/img-3.png" alt="Lasya AI Tech" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
