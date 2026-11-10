"use client"
import Link from "next/link"

export default function ProfessionalTeamSection({data}: {data: any}) {
	// Debug: Log the data structure
	console.log('ProfessionalTeamSection data:', data);
    if (!data || !data[0]) return null;

    const professional = data[0]
    const whoWeAreButton = professional.button.find((btn: any) => btn.variant === 'primary')
    const qualities = professional.points.qualities

    return (
        <>
            <section data-kte="kt-73054" className="kt-73054 section-cta-10 position-relative section-padding fix">
                <div data-kte="kt-32189" className="kt-32189 container">
                    <div data-kte="kt-72744" className="kt-72744 row align-items-center">
                        <div data-kte="kt-81970" className="kt-81970 col-lg-6 ps-lg-0 pe-lg-8">
                            {whoWeAreButton && (
                                <div 
                                    className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" 
                                    data-aos="zoom-in" 
                                    data-aos-delay={100}
                                >
                                    <img src="/assets/imgs/features-1/dots.png" alt="Lasya AI Tech" />
                                    <span data-kte="kt-12759" className="kt-12759 tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">
                                        {whoWeAreButton.label}
                                    </span>
                                </div>
                            )}
                            <h5 data-kte="kt-40935" className="kt-40935 ds-5 my-3">{professional.title}</h5>
                            <p data-kte="kt-92427" className="kt-92427 fs-5 text-500">{professional.description}</p>
                            <div data-kte="kt-72669" className="kt-72669 d-md-flex align-items-center mt-4 mb-5">
                                <ul data-kte="kt-94955" className="kt-94955 list-unstyled phase-items mb-0">
                                    {qualities.slice(0, 2).map((quality: any) => (
                                        <li key={quality.title} data-kte="kt-14961" className="kt-14961 d-flex align-items-center mt-3">
                                            <img src="/assets/imgs/cta-2/check.svg" alt="Lasya AI Tech" />
                                            <span data-kte="kt-84538" className="kt-84538 ms-2 text-900 fw-medium fs-6">{quality.title}</span>
                                        </li>
                                    ))}
                                </ul>
                                <ul data-kte="kt-52157" className="kt-52157 list-unstyled phase-items ms-md-5 mb-0">
                                    {qualities.slice(2, 4).map((quality: any) => (
                                        <li key={quality.title} data-kte="kt-83445" className="kt-83445 d-flex align-items-center mt-3">
                                            <img src="/assets/imgs/cta-2/check.svg" alt="Lasya AI Tech" />
                                            <span data-kte="kt-72432" className="kt-72432 ms-2 text-900 fw-medium fs-6">{quality.title}</span>
                                        </li>
                                    ))}
                                </ul>
                                <ul data-kte="kt-87873" className="kt-87873 list-unstyled phase-items ms-md-5 mb-0">
                                    {qualities.slice(4, 6).map((quality: any) => (
                                        <li key={quality.title} data-kte="kt-98643" className="kt-98643 d-flex align-items-center mt-3">
                                            <img src="/assets/imgs/cta-2/check.svg" alt="Lasya AI Tech" />
                                            <span data-kte="kt-49660" className="kt-49660 ms-2 text-900 fw-medium fs-6">{quality.title}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div data-kte="kt-69410" className="kt-69410 col-lg-5 offset-lg-1">
                            <div data-kte="kt-67645" className="kt-67645 text-center position-relative">
                                <img data-kte="kt-16786" className="kt-16786 rounded-4 border border-2 bg-white shadow-2 hover-up mt-5 p-6 position-relative z-1" src="/assets/imgs/cta-10/img-1.png" alt="Lasya AI Tech" />
                                <div data-kte="kt-43785" className="kt-43785 bg-linear-1 rounded-4 position-absolute top-0 start-0 bottom-0 end-0 h-75 z-0" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
