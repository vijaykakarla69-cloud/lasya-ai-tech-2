import Link from "next/link";
import RightArrowIcon from "@/public/assets/icons/right-arrow.svg"
export default function BenefitsSection(){
    return(
<section data-kte="kt-81553" className="kt-81553 features-10 py-9 bg-primary-light">
				<div data-kte="kt-45657" className="kt-45657 text-center mb-8">
					<div data-kte="kt-70954" className="kt-70954 d-flex align-items-center justify-content-center bg-primary-soft d-inline-flex rounded-pill border-white border px-3 py-1" data-aos="zoom-in" data-aos-delay={200}>
						<img src="/assets/imgs/features-1/dots.png" alt="Lasya AI Tech" />
						<span data-kte="kt-88521" className="kt-88521 tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">What we offers</span>
					</div>
					<h3 data-kte="kt-27194" className="kt-27194 ds-3 my-3 fw-regular">
						Benefits of LasyaAiTech's
						<span data-kte="kt-53992" className="kt-53992 fw-bold" data-aos="fade-zoom-in" data-aos-delay={200}>Product Development <br data-kte="kt-53992" className="kt-53992 d-none d-lg-block" />
							Services</span>
					</h3>
				</div>
				<div data-kte="kt-80916" className="kt-80916 container">
					<div data-kte="kt-69191" className="kt-69191 row">
						{/* prettier-ignore */}
						<div data-kte="kt-56747" className="kt-56747 col-lg-3 col-md-6">
							<div data-kte="kt-65110" className="kt-65110 feature-item mb-5 position-relative mb-lg-0 bg-white p-5 rounded-4 hover-up" style={{height: "400px"}}>
								<div data-kte="kt-88110" className="kt-88110 bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
									<div data-kte="kt-76666" className="kt-76666 icon">
										<img src="/assets/imgs/features-1/icon-1.svg" alt="Lasya AI Tech" />
									</div>
								</div>
								<h6>Well-established product development Approach</h6>
								<p>LasyaAitech strategy and processes for product development have been refined for over 14 years. The projects we run are robust and can withstand the evolving demands of the tech industry.</p>
								<Link href="#" data-kte="kt-21463" className="kt-21463 text-primary fs-7 fw-bold">
									Learm More
									<RightArrowIcon />
								</Link>
								<div data-kte="kt-37635" className="kt-37635 position-absolute end-0 top-0">
									<img src="/assets/imgs/feature-10/bg-line.png" alt="" />
								</div>
							</div>
						</div>
						<div data-kte="kt-88455" className="kt-88455 col-lg-3 col-md-6">
							<div data-kte="kt-25154" className="kt-25154 feature-item mb-5 position-relative mb-lg-0 bg-white p-5 rounded-4 hover-up" style={{height: "400px"}}>
								<div data-kte="kt-87654" className="kt-87654 bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
									<div data-kte="kt-35359" className="kt-35359 icon">
										<img src="/assets/imgs/features-1/icon-2.svg" alt="Lasya AI Tech" />
									</div>
								</div>
								<h6>maximum product quality possible</h6>
								<p>When you entrust fintech dev experts your best idea, you expect the highest outcomes possible. That's exactly the case with LasyaAitech. A product crafted by us will exceed expectations of yours and your customers.</p>
								<Link href="#" data-kte="kt-30116" className="kt-30116 text-primary fs-7 fw-bold">
									Learm More
									<RightArrowIcon />
								</Link>
								<div data-kte="kt-53595" className="kt-53595 position-absolute end-0 top-0">
									<img src="/assets/imgs/feature-10/bg-line.png" alt="" />
								</div>
							</div>
						</div>
						<div data-kte="kt-20852" className="kt-20852 col-lg-3 col-md-6">
							<div data-kte="kt-96729" className="kt-96729 feature-item mb-5 position-relative mb-lg-0 bg-white p-5 rounded-4 hover-up" style={{height: "400px"}}>
								<div data-kte="kt-87502" className="kt-87502 bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
									<div data-kte="kt-86627" className="kt-86627 icon">
										<img src="/assets/imgs/features-1/icon-3.svg" alt="Lasya AI Tech" />
									</div>
								</div>
								<h6>Cost-effective solution</h6>
								<p>Our transparent pricing model without any hidden costs allows you to budget effectively. Moreover, with our product development approach, we ensure that you get the most value from your investment.</p>
								<Link href="#" data-kte="kt-97471" className="kt-97471 text-primary fs-7 fw-bold">
									Learm More
									<RightArrowIcon />
								</Link>
								<div data-kte="kt-45486" className="kt-45486 position-absolute end-0 top-0">
									<img src="/assets/imgs/feature-10/bg-line.png" alt="" />
								</div>
							</div>
						</div>
						<div data-kte="kt-83488" className="kt-83488 col-lg-3 col-md-6">
							<div data-kte="kt-70711" className="kt-70711 feature-item mb-5 position-relative mb-lg-0 bg-white p-5 rounded-4 hover-up" style={{height: "400px"}}>
								<div data-kte="kt-66734" className="kt-66734 bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
									<div data-kte="kt-78239" className="kt-78239 icon">
										<img src="/assets/imgs/features-1/icon-4.svg" alt="Lasya AI Tech" />
									</div>
								</div>
								<h6>Flexibility and scalability</h6>
								<p>Here at Lasyaaitech we understand that product requirements can change as the market evolves and new trends and solutions arise. We offer timely project adjustments to ensure you lose no time or value.</p>
								<Link href="#" data-kte="kt-56348" className="kt-56348 text-primary fs-7 fw-bold">
									Learm More
									<RightArrowIcon />
								</Link>
								<div data-kte="kt-40877" className="kt-40877 position-absolute end-0 top-0">
									<img src="/assets/imgs/feature-10/bg-line.png" alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
    )
}