"use client"

export default function Creation({ data }: any) {
	if (!data) {
		return null;
	}

	// Predefined creation images
	const creationImages = [
		'/assets/imgs/casestudies/creation/file_b020bfc864.jpg',
		'/assets/imgs/casestudies/creation/img_1_1_ae1474d03a.png',
		'/assets/imgs/casestudies/creation/blog4_0140f76294.avif',
		'/assets/imgs/casestudies/creation/img_1_26c6a11071.png',
		'/assets/imgs/casestudies/creation/blog2_e6f6dfa738.avif',
		'/assets/imgs/casestudies/creation/img_2_1_d79ef924aa.png',
		'/assets/imgs/casestudies/creation/img_3_1_c43b242737.png',
		'/assets/imgs/casestudies/creation/img_4_1_a36ddc118a.png'
	];

	// Function to create a simple hash from string for consistent offset
	const getHashOffset = (str: string) => {
		let hash = 0;
		for (let i = 0; i < str.length; i++) {
			const char = str.charCodeAt(i);
			hash = ((hash << 5) - hash) + char;
			hash = hash & hash; // Convert to 32-bit integer
		}
		return Math.abs(hash) % creationImages.length;
	};

	// Get offset based on the first content item title (to make it consistent per case study)
	const caseStudyOffset = data.create_content && data.create_content.length > 0 
		? getHashOffset(data.create_content[0].title || data.title || 'default')
		: 0;

	// Function to get creation image with case study specific offset
	const getCreationImage = (index: number) => {
		const adjustedIndex = (index + caseStudyOffset) % creationImages.length;
		return creationImages[adjustedIndex];
	};

	return (
		<section data-kte="kt-42923" className="kt-42923 section-page-changelog section-padding">
			<div data-kte="kt-14600" className="kt-14600 container">
				<div data-kte="kt-40089" className="kt-40089 text-center">
					<h3 data-kte="kt-70385" className="kt-70385 ds-3 my-3">{data.title}</h3>
				</div>
				<div data-kte="kt-94428" className="kt-94428 row pt-120">
					<div data-kte="kt-65809" className="kt-65809 col">
						<ul data-kte="kt-48611" className="kt-48611 timeline">
							{data.create_content.map((content: any, index: number) => {
								// Debug logging
								const selectedImage = getCreationImage(index);
								const adjustedIndex = (index + caseStudyOffset) % creationImages.length;
								console.log(`Creation "${content.title}": Offset=${caseStudyOffset}, Index=${index}→${adjustedIndex}, Image:`, selectedImage);
								
								return (
									<li key={content.id} className={`timeline-item ${index > 0 ? 'pt-120' : ''} d-flex flex-lg-row flex-column`}>
										<div data-kte="kt-99030" className="kt-99030 pe-lg-7" style={{ width: '50%', minWidth: '300px' }}>
											<p data-kte="kt-78290" className="kt-78290 fw-bold text-900">{content.title}</p>
											<ul>
												{content.points.map((point: any, pointIndex: number) => (
													<li key={pointIndex}>{Object.values(point)[0] as string}</li>
												))}
											</ul>
										</div>
										<div style={{ width: '50%', minWidth: '300px' }}>
											<img 
												className="rounded-3 mt-lg-0 mt-4" 
												src={selectedImage}
												alt={content.title}
												style={{ width: '100%', height: '300px', objectFit: 'cover' }}
											/>
										</div>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}