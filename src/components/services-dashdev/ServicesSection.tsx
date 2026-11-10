import Link from "next/link";
import RightArrow from "@/public/assets/icons/right-arrow.svg";

export default function ServicesSection(){
    return(
<section data-kte="kt-78387" className="kt-78387 section-cta-3 position-relative py-150 section-padding fix">
				<div data-kte="kt-74414" className="kt-74414 container">
					<div data-kte="kt-22127" className="kt-22127 row">
						<div data-kte="kt-62424" className="kt-62424 col-auto ms-auto">
							<div data-kte="kt-47731" className="kt-47731 bg-primary rounded-4">
								<div data-kte="kt-90810" className="kt-90810 p-7">
									<h3 data-kte="kt-96678" className="kt-96678 text-white">
										Vision to Life with <br />
										LasyaAiTech: Product <br />
										Development mastery
									</h3>
									<Link href="/page-contact-1" data-kte="kt-86115" className="kt-86115 d-flex align-items-center mt-8 mb-9">
										<img src="/assets/imgs/cta-3/icon-contact.svg" alt="Lasya AI Tech" />
										<span data-kte="kt-84183" className="kt-84183 ms-3">
											<span data-kte="kt-84894" className="kt-84894 text-white mb-0 fs-4">Contact Us</span>
											<span data-kte="kt-91723" className="kt-91723 text-white fs-4 d-block">+01 (24) 568 900</span>
										</span>
									</Link>
									<Link href="#" data-kte="kt-83616" className="kt-83616 fw-bold btn text-start bg-white-keep d-flex align-items-center justify-content-between text-primary hover-up w-100">
										<span>Get 15 Days Free Trial</span>
										<RightArrow className="fill-primary" />
									</Link>
								</div>
								</div>
							</div>
						</div>
					</div>
				</section>
    )
}