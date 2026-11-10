"use client"
import Link from "next/link"
import ArrowIcon from "@/public/assets/icons/blue-right-arrow.svg"
import WhiteCrossArrowIcon from "@/public/assets/icons/cross-white-arrow.svg"
import PhoneIcon from "@/public/assets/icons/phone.svg"

export default function HeroSection({ data }: { data: any }) { 
    // Debug: Log the data structure
    console.log('HeroSection data:', data);
    
    if (!data || !data.hero) return null;

    const heroData = data.hero
    const caseStudyButton = heroData.button.find((btn: any) => btn.variant === 'secondary')
    const letsTalkButton = heroData.button.find((btn: any) => btn.variant === 'text')
    const getFreeQuoteButton = heroData.button.find((btn: any) => btn.variant === 'primary')

    return (
        <>
            <section data-kte="kt-43484" className="kt-43484 position-relative overflow-hidden section-padding">
                <div data-kte="kt-74137" className="kt-74137 container">
                    <div data-kte="kt-79467" className="kt-79467 row content align-items-center">
                        <div data-kte="kt-95341" className="kt-95341 col-lg-6 col-md-12 mb-lg-0 mb-5">
                            <div data-kte="kt-11727" className="kt-11727 pe-2">
                                {getFreeQuoteButton && (
                                    <Link href={getFreeQuoteButton.link} data-kte="kt-70610" className="kt-70610 d-flex align-items-center bg-linear-1 d-inline-flex rounded-pill px-2 py-1">
                                        <span data-kte="kt-90037" className="kt-90037 bg-primary fs-9 fw-bold rounded-pill px-2 py-1 text-white">New</span>
                                        <span data-kte="kt-15270" className="kt-15270 fs-7 fw-medium text-primary mx-2">{getFreeQuoteButton.label}</span>
                                        <ArrowIcon className="ms-2" />
                                    </Link>
                                )}
                                <h1 data-kte="kt-92627" className="kt-92627 ds-3 mt-4 mb-5" data-aos="fade-zoom-in" data-aos-delay={0}>
                                    {heroData.title}
                                </h1>
                                <p data-kte="kt-56490" className="kt-56490 pe-10 mb-5" data-aos="fade-zoom-in" data-aos-delay={200}>
                                    {heroData.description}
                                </p>
                                <div data-kte="kt-46423" className="kt-46423 d-flex align-items-center gap-3">
                                    {caseStudyButton && (
                                        <Link href={caseStudyButton.link} data-kte="kt-81732" className="kt-81732 btn btn-gradient" data-aos="fade-zoom-in" data-aos-delay={300}>
                                            {caseStudyButton.label}
                                            <WhiteCrossArrowIcon/>
                                        </Link>
                                    )}
                                    {letsTalkButton && (
                                        <Link href={letsTalkButton.link} data-kte="kt-76691" className="kt-76691 btn btn-outline-secondary hover-up" data-aos="fade-zoom-in" data-aos-delay={500}>
                                            <PhoneIcon/>
                                            {letsTalkButton.label}
                                           
                                        </Link>
                                    )}
                                </div>
                                {/* <div data-kte="kt-38109" className="kt-38109 row mt-8 mb-3">
                                    <h6 data-kte="kt-32103" className="kt-32103 text-500 fs-5" data-aos="fade-zoom-in" data-aos-delay={100}>Trusted by great companies</h6>
                                </div>
                                <div data-kte="kt-77391" className="kt-77391 d-flex align-items-center">
                                    <div data-kte="kt-44422" className="kt-44422 me-2" data-aos="fade-zoom-in" data-aos-delay={200}>
                                        <div data-kte="kt-71834" className="kt-71834 d-flex">
                                            <img src="/assets/imgs/hero-1/avatar-1.png" alt="Lasya AI Tech" />
                                            <img data-kte="kt-66923" className="kt-66923 avt-hero" src="/assets/imgs/hero-1/avatar-2.png" alt="Lasya AI Tech" />
                                            <img data-kte="kt-61957" className="kt-61957 avt-hero" src=" assets/imgs/hero-1/avatar-3.png" alt="Lasya AI Tech" />
                                        </div>
                                        <span data-kte="kt-77807" className="kt-77807 fs-6 fw-bold">4.8/5 <span data-kte="kt-77807" className="kt-77807 text-secondary fw-medium">(26k Reviews)</span></span>
                                    </div>
                                    <div data-kte="kt-91185" className="kt-91185 ms-3" data-aos="fade-zoom-in" data-aos-delay={300}>
                                        <img src="/assets/imgs/hero-1/brand-1.svg" alt="Lasya AI Tech" />
                                    </div>
                                    <div data-kte="kt-55474" className="kt-55474 ms-3" data-aos="fade-zoom-in" data-aos-delay={300}>
                                        <img src="/assets/imgs/hero-1/brand-2.svg" alt="Lasya AI Tech" />
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        <div data-kte="kt-92159" className="kt-92159 col-lg-6 position-relative justify-content-center">
                            <img data-kte="kt-87093" className="kt-87093 hero-img" src="/assets/imgs/hero-1/background.png" alt="Lasya AI Tech" />
                            <div data-kte="kt-67353" className="kt-67353 shape-1 position-absolute">
                                <img data-kte="kt-88952" className="kt-88952 rightToLeft rounded-3" src="/assets/imgs/hero-1/shape-1.png" alt="Lasya AI Tech" data-aos="zoom-in" data-aos-delay={500} />
                            </div>
                            <div data-kte="kt-99741" className="kt-99741 shape-2 position-absolute d-none d-md-block">
                                <img src="/assets/imgs/hero-1/shape-2.png" alt="Lasya AI Tech" data-aos="zoom-in" data-aos-delay={200} />
                            </div>
                            {/* <div data-kte="kt-93878" className="kt-93878 alltuchtopdown card-hero backdrop-filter rounded-3 text-center d-inline-block p-3 position-absolute">
                                <img 
                                    className="rounded-3" 
                                    src="/assets/imgs/hero-1/scheduleameeting.jpg" 
                                    alt="Lasya AI Tech" 
                                    style={{
                                        width: '280px',  // Fixed width to match first image
                                        height: '160px', // Fixed height to match first image
                                        objectFit: 'cover',
                                        objectPosition: 'center'
                                    }}
                                />
                                <h6 data-kte="kt-18463" className="kt-18463 mt-3">Schedule a Meeting</h6>
                                <p data-kte="kt-98231" className="kt-98231 fs-7 text-700">
                                    Book a meeting through our calendar<br/> to discuss your project!
                                </p>
                                <Link href="#" data-kte="kt-33693" className="kt-33693 shadow-sm d-flex align-items-center bg-white d-inline-flex rounded-pill px-2 py-1 mb-3">
                                    <span data-kte="kt-83720" className="kt-83720 bg-primary fs-9 fw-bold rounded-pill px-2 py-1 text-white">Get</span>
                                    <span data-kte="kt-68301" className="kt-68301 fs-7 fw-medium text-primary mx-2">Free Update</span>
                                  
                                </Link>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
            <style jsx>{`
                @media (max-width: 768px) {
                    .section-padding {
                        padding: 140px 0 !important;
                    }
                    
                    .col-lg-6.position-relative {
                        min-height: 400px;
                        margin-bottom: 30px;
                        overflow: visible;
                    }
                    
                    .hero-img {
                        width: 100%;
                        height: auto;
                        max-width: 100%;
                        object-fit: contain;
                        position: relative;
                        margin-top: -50px; /* Adjust this value to move image up/down */
                    }
                    
                    /* Adjust shape positions for mobile */
                    .shape-1 {
                        top: 15%;
                        right: 10%;
                    }
                    
                    .shape-2 {
                        bottom: 25%;
                        left: 10%;
                    }
                    
                    .shape-3 {
                        top: 45%;
                        right: 5%;
                    }
                }
            `}</style>
        </>
    )
}
