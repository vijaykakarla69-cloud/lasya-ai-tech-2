export default function PageHeroSection({ data }: { data: any }) {
  return (
      <>
        <section data-kte="kt-25915" className="kt-25915 section-testimonial-13 position-relative section-padding padding-bottom-25 fix">
					<div data-kte="kt-48142" className="kt-48142 container position-relative z-1">
						<div data-kte="kt-61740" className="kt-61740 row pb-9">
							<div data-kte="kt-84037" className="kt-84037 col-lg-9 mx-lg-auto">
								<div data-kte="kt-70621" className="kt-70621 text-center mb-lg-0 mb-5">
									<div data-kte="kt-64086" className="kt-64086 d-flex align-items-center position-relative z-2 justify-content-center bg-primary-soft d-inline-flex rounded-pill border border-2 border-white px-3 py-1">
										<img src="/assets/imgs/features-1/dots.png" alt="Lasya AI Tech" />
										<span data-kte="kt-18689" className="kt-18689 tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase" dangerouslySetInnerHTML={{ __html: data.title }}></span>
									</div>
									<h1 data-kte="kt-15957" className="kt-15957 ds-5 my-3 fw-regular" dangerouslySetInnerHTML={{ __html: data.mainTitle }}></h1>
									<p data-kte="kt-33651" className="kt-33651 fs-5 mb-0 text-500" dangerouslySetInnerHTML={{ __html: data.description }}></p>
								</div>
							</div>
						</div>
					</div>
					<div data-kte="kt-49371" className="kt-49371 position-absolute top-0 start-50 translate-middle-x z-0">
						<img src="/assets/imgs/service-2/bg-line.png" alt="Lasya AI Tech" />
					</div>
					<div data-kte="kt-93142" className="kt-93142 rotate-center ellipse-rotate-success position-absolute z-0" />
					<div data-kte="kt-74717" className="kt-74717 rotate-center-rev ellipse-rotate-primary position-absolute z-1" />
				</section>

      </>
  )
}
