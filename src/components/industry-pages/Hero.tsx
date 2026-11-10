"use client"
import PhoneIcon from "@/public/assets/icons/phone.svg"
import Link from "next/link"

export default function Hero({ data }: any) {
	const getImageUrl = (imageData: any) => {
		// Use image from JSON data if available
		if (imageData && imageData.url) {
			return imageData.url;
		}
		return null;
	};

	return (
		<section data-kte="kt-83485" className="kt-83485 position-relative overflow-hidden section-padding">
				<div data-kte="kt-79782" className="kt-79782 container">
					<div data-kte="kt-72992" className="kt-72992 row content align-items-center">
						<div data-kte="kt-15403" className="kt-15403 col-lg-6 col-md-12 mb-lg-0 mb-5">
							<div data-kte="kt-48646" className="kt-48646 pe-2">
								{data?.hero?.title && (	
								<h1 data-kte="kt-47471" className="kt-47471 ds-3 mt-4 mb-5" data-aos="fade-zoom-in" data-aos-delay={0}>{data?.hero?.title}</h1>  	 	     
								)}
								{data?.hero?.description && (
								<p data-kte="kt-74914" className="kt-74914 pe-10 mb-5" data-aos="fade-zoom-in" data-aos-delay={200}>{data?.hero?.description}</p>
								)}
								{data?.hero?.button && (
									<Link href={data?.hero?.button?.link} data-kte="kt-44230" className="kt-44230 ms-md-3 mt-3 mt-md-0 btn btn-outline-secondary hover-up" data-aos="fade-zoom-in" data-aos-delay={500}>
										<PhoneIcon />
									{data?.hero?.button?.text}
								</Link>
								)}
							</div>
						</div>
						<div data-kte="kt-20837" className="kt-20837 col-lg-6 position-relative justify-content-center">
							{data?.hero?.image && data.hero.image.length > 0 && getImageUrl(data.hero.image[0]) ? (
								<img 
									className="hero-img" 
									src={getImageUrl(data.hero.image[0])} 
									alt={data?.hero?.title || 'Hero image'}
									width={data.hero.image[0].width}
									height={data.hero.image[0].height}
								/>
							) : null}
						</div>
					</div>
				</div>
		</section>  
	)
}