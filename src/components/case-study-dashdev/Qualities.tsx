"use client"

import Link from "next/link";

export default function Qualities({ data }: any) {
	if (!data) {
		return null;
	}

	// Predefined qualities icons
	const qualitiesIcons = [
		'/assets/imgs/casestudies/qualities/release_yellow_7b6cd787a7 (1).svg',
		'/assets/imgs/casestudies/qualities/bookmark_star_yellow_1a27256909.svg',
		'/assets/imgs/casestudies/qualities/money_flow_fd6aef689f.svg',
		'/assets/imgs/casestudies/qualities/money_reduction_yellow_c7332efbdc.svg',
		'/assets/imgs/casestudies/qualities/hand_Snake_yellow_30dd3e8fdf.svg',
		'/assets/imgs/casestudies/qualities/analysis_bfd84d0ead.svg',
		'/assets/imgs/casestudies/qualities/star_yellow_c898d03657.svg',
		'/assets/imgs/casestudies/qualities/concept_development_bulb_9f4948f655.svg',
		'/assets/imgs/casestudies/qualities/security_shield_ae3fefebf7.svg'
	];

	// Function to get the appropriate icon based on content
	const getQualityIcon = (quality: any, index: number) => {
		const title = quality.title?.toLowerCase() || '';
		const description = quality.Description?.toLowerCase() || '';
		const content = `${title} ${description}`;

		// Check for cost/money related content
		if (content.includes('cost') || content.includes('money') || content.includes('budget') || 
			content.includes('expensive') || content.includes('price') || content.includes('financial') ||
			content.includes('revenue') || content.includes('profit') || content.includes('savings')) {
			return '/assets/imgs/casestudies/qualities/money_reduction_yellow_c7332efbdc.svg';
		}

		// Check for partnership/people related content
		if (content.includes('partner') || content.includes('team') || content.includes('people') || 
			content.includes('collaboration') || content.includes('relationship') || content.includes('client') ||
			content.includes('user') || content.includes('customer') || content.includes('stakeholder')) {
			return '/assets/imgs/casestudies/qualities/hand_Snake_yellow_30dd3e8fdf.svg';
		}

		// Check for time/launch related content (months, weeks, days, launched, delivery, etc.)
		if (content.includes('month') || content.includes('week') || content.includes('day') || 
			content.includes('launch') || content.includes('deliver') || content.includes('timeline') ||
			content.includes('schedule') || content.includes('time') || content.includes('fast') ||
			content.includes('quick') || content.includes('speed')) {
			return '/assets/imgs/casestudies/qualities/bookmark_star_yellow_1a27256909.svg';
		}

		// For all other content, cycle through the available icons
		return qualitiesIcons[index % qualitiesIcons.length];
	};

	return (
		<section data-kte="kt-43112" className="kt-43112 section-padding">
			<div data-kte="kt-82286" className="kt-82286 container">
				<div data-kte="kt-70508" className="kt-70508 text-center">
					<div data-kte="kt-13962" className="kt-13962 d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
						<img src="/assets/imgs/features-1/dots.png" alt="Lasya AI Tech" />
						<span data-kte="kt-74169" className="kt-74169 tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">What we offers</span>
					</div>
					<h3 data-kte="kt-84641" className="kt-84641 ds-3 my-3" data-aos="fade-zoom-in" data-aos-delay={300}>{data.title}</h3>
				</div>
				<div data-kte="kt-22152" className="kt-22152 row mt-6 position-relative">
					{data.lapl__quality_list.map((quality: any, index: number) => {
						// Debug logging
						const selectedIcon = getQualityIcon(quality, index);
						console.log(`Quality "${quality.title}": Selected icon`, selectedIcon);
						
						return (
							<div key={quality.id} data-kte="kt-38718" className="kt-38718 col-lg-4">
								<div className={`p-2 ${index === 0 ? 'mt-lg-8' : 'mt-5'} rounded-4 shadow-1 bg-white position-relative z-1 hover-up`} data-aos="fade-zoom-in" data-aos-delay={100}>
									<div data-kte="kt-33075" className="kt-33075 card-service bg-white p-6 border rounded-4" style={{ height: '320px', overflow: 'hidden' }}>
										<img src={selectedIcon} alt={quality.title} style={{ height: '50px', objectFit: 'contain' }} />
										<h6 data-kte="kt-42042" className="kt-42042 my-3">{quality.title}</h6>
										<p data-kte="kt-19362" className="kt-19362 mb-6" style={{ overflow: 'auto', maxHeight: '180px' }}>{quality.Description}</p>
									</div>
								</div>
							</div>
						);
					})}
					<div data-kte="kt-78708" className="kt-78708 position-absolute top-50 start-50 translate-middle z-0">
						<img src="/assets/imgs/service-1/img-bg.png" alt="Lasya AI Tech" />
					</div>
				</div>
			</div>
		</section>
	)
}