"use client"
import Link from "next/link";
import PlusIcon from "@/public/assets/icons/plus.svg"
import ArrowIcon from "@/public/assets/icons/arrow.svg"

export default function ServiceItems({ data }: { data: any }) {

	if (!data) return null;

		const getImageUrl = (url: string) => {
			return url ? `${url}` : '';
		};

	return (
		<section data-kte="kt-79720" className="kt-79720 section-padding">
			<div data-kte="kt-21502" className="kt-21502 container">
				<div data-kte="kt-97480" className="kt-97480 text-center">
					<div data-kte="kt-65517" className="kt-65517 d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
						<img src="/assets/imgs/features-1/dots.png" alt="Lasya AI Tech" />
						<span data-kte="kt-48180" className="kt-48180 tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">{data[0]?.title}</span>
					</div>
					<h1 data-kte="kt-31498" className="kt-31498 ds-3 my-3" data-aos="fade-zoom-in" data-aos-delay={300}>{data[0]?.subtitle}</h1>
					<p data-aos="fade-zoom-in" data-aos-delay={100}>{data[0]?.description}</p>
				</div>
				<div data-kte="kt-34981" className="kt-34981 row mt-6 position-relative justify-content-center">
					{data[0]?.service_items.map((item: any) => (
						<div key={item.id} data-kte="kt-58395" className="kt-58395 col-lg-4 col-md-4 mb-4">
							<div data-kte="kt-88185" className="kt-88185 p-2 rounded-4 shadow-1 bg-white position-relative z-1 hover-up h-100" data-aos="fade-zoom-in" data-aos-delay={100}>
								<div data-kte="kt-31386" className="kt-31386 card-service bg-white p-6 border rounded-4">
									<img src={getImageUrl(item.image[0]?.url)} alt="Lasya AI Tech" />
									<h6 data-kte="kt-21647" className="kt-21647 my-3">{item.title}</h6>
									<p data-kte="kt-85496" className="kt-85496 mb-6">{item.description}</p>
									<Link href={`/services/${item.slug}`} data-kte="kt-15617" className="kt-15617 rounded-pill border icon-shape d-inline-flex gap-3 icon-learn-more">
									<PlusIcon 
													className="kt-26493 plus"
													data-kte="kt-26493"
												/>
												<ArrowIcon 
													className="kt-60837 arrow"
													data-kte="kt-60837"
												/>				
										<span data-kte="kt-49476" className="kt-49476 fw-bold fs-7 text-900">Learn More</span>
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
    