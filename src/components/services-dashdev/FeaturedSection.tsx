"use client"
import Link from "next/link";
import CrossBlackArrowIcon from "@/public/assets/icons/cross-black-arrow.svg"
export default function FeaturedSection(){
    return(
<section data-kte="kt-22654" className="kt-22654 section-feature-5">
					<div data-kte="kt-77894" className="kt-77894 container-fluid position-relative section-padding bg-1">
						<div data-kte="kt-79353" className="kt-79353 container">
							<div data-kte="kt-73827" className="kt-73827 text-center mb-8">
								<h3 data-kte="kt-71081" className="kt-71081 ds-3 fw-bold">Featured Projects</h3>
							</div>
							<div data-kte="kt-47270" className="kt-47270 row align-items-center">
								<div data-kte="kt-42789" className="kt-42789 col-lg-5">
									<div data-kte="kt-22135" className="kt-22135 photo-description position-relative  rounded-4">
										<img data-kte="kt-59718" className="kt-59718 rounded-4 border border-2 border-white position-relative z-1" src="/assets/imgs/features-5/img-1.png" alt="Lasya AI Tech" />
										<div data-kte="kt-50328" className="kt-50328 box-gradient-1 ms-lg-8 position-absolute bottom-0 start-0 bg-linear-1 rounded-4 z-0" />
									</div>
								</div>
								<div data-kte="kt-53367" className="kt-53367 col-lg-6 offset-lg-1 mt-lg-0 mt-5">
									<h4 data-kte="kt-13355" className="kt-13355 ds-5 fw-regular">CHOOSING BETWEEN<br />WHITE LABEL SOLUTIONS OR 
									<span data-kte="kt-80813" className="kt-80813 fw-bold" data-aos="fade-zoom-in" data-aos-delay={200}>CUSTOM PRODUCT <br data-kte="kt-80813" className="kt-80813 d-none d-lg-inline" />DEVELOPMENT</span></h4>
									<p data-kte="kt-14246" className="kt-14246 fs-5">Find out what advantages every product creation strategy offers. Discover factors for choosing and scenarios in which you should opt for either a white label solution or custom product development.</p>
									<Link href="#" data-kte="kt-85670" className="kt-85670 btn btn-outline-secondary hover-up bg-transparent mt-5" data-aos="fade-zoom-in" data-aos-delay={200}>
										Explore Now
										<CrossBlackArrowIcon />
									</Link>
								</div>
							</div>
							<div data-kte="kt-63712" className="kt-63712 row py-90">
								
							</div>
							<div data-kte="kt-41379" className="kt-41379 row align-items-start pb-5 pt-lg-5 pt-0">
								<div data-kte="kt-17067" className="kt-17067 col-lg-5 order-2 order-lg-1 mt-lg-0 mt-10 pt-lg-0 pt-5">
									<h4 data-kte="kt-18860" className="kt-18860 ds-5 fw-regular">SOFTWARE OUTSOURCE VS <br /> <span data-kte="kt-18860" className="kt-18860 fw-bold" data-aos="fade-zoom-in" data-aos-delay={200}>PRODUCT DEVELOPMENT <br data-kte="kt-18860" className="kt-18860 d-none d-lg-inline" />MODELS</span></h4>
									<p data-kte="kt-17232" className="kt-17232 fs-5">Learn about the distinctive features of software outsource and product development and how to pick the perfect-fit collaboration model for your project.</p>
									<Link href="#" data-kte="kt-64802" className="kt-64802 btn btn-outline-secondary hover-up bg-transparent mt-5" data-aos="fade-zoom-in" data-aos-delay={300}>
										Explore Now
										<CrossBlackArrowIcon />
									</Link>
								</div>
								<div data-kte="kt-34767" className="kt-34767 col-lg-6 offset-lg-1 order-1 order-lg-2 mt-5 text-lg-end text-center">
									<div data-kte="kt-15511" className="kt-15511 photo-description position-relative rounded-4 d-inline-block">
										<img data-kte="kt-56558" className="kt-56558 rounded-4 border border-2 border-white position-relative z-1" src="/assets/imgs/features-5/img-2.png" alt="Lasya AI Tech" />
										<div data-kte="kt-34677" className="kt-34677 position-absolute top-50 start-50 translate-middle z-0">
											<div data-kte="kt-44781" className="kt-44781 box-gradient-2 position-relative bg-linear-1 rounded-4 z-0">
											</div>
										</div>
										<img data-kte="kt-69892" className="kt-69892 position-absolute top-100 start-0 d-none d-md-block translate-middle rounded-4 border border-2 border-white position-relative z-1" src="/assets/imgs/features-5/img-3.png" alt="Lasya AI Tech" data-aos="zoom-in" data-aos-delay={100} />
									</div>
								</div>
							</div>
							
						</div>
					</div>
				</section>
            )
}