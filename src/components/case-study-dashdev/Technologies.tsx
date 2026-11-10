"use client"

export default function Technologies({ data }: any) {
	if (!data) {
		return null;
	}

	// Function to fix technology image URLs
	const getTechnologyImageUrl = (url: string) => {
		if (!url) return '';
		
		// Fix URLs that point to /uploads/ but should point to /assets/imgs/casestudies/technology/
		if (url.startsWith('/uploads/')) {
			const filename = url.split('/').pop(); // Extract filename
			return `/assets/imgs/casestudies/technology/${filename}`;
		}
		
		return url;
	};

	return (
		<section data-kte="kt-39771" className="kt-39771 section-logo-cloud section-logo-cloud-5 position-relative">
			<div data-kte="kt-60496" className="kt-60496 container-fluid pt-110 pb-110 mt-lg-0 border-top border-bottom">
				<div data-kte="kt-86149" className="kt-86149 container">
					<div data-kte="kt-42189" className="kt-42189 row align-items-center">
						<div data-kte="kt-51490" className="kt-51490 col-lg-3 pb-lg-0 pb-8">
							<h4 data-kte="kt-44422" className="kt-44422 text-nowrap">{data.title}</h4>
						</div>
						<div data-kte="kt-29134" className="kt-29134 col-lg-9 ps-lg-8">
							{data.images.map((image: any, index: number) => {
								// Debug logging
								const originalUrl = image.icons[0].url;
								const correctedUrl = getTechnologyImageUrl(originalUrl);
								// console.log(`Technology "${image.icon_name}": ${originalUrl} → ${correctedUrl}`);
								
								return (
									<div key={image.id} data-kte="kt-70736" className="kt-70736 d-inline-flex flex-column align-items-center me-3 mb-4">
										<div 
											className="py-4 px-4 rounded-2 d-flex align-items-center justify-content-center"
											style={{
												backgroundColor: '#00a4a3',
												width: '120px',
												height: '120px',
												transition: 'transform 0.3s ease',
											}}
											onMouseEnter={(e) => {
												e.currentTarget.style.transform = 'translateY(-10px)';
											}}
											onMouseLeave={(e) => {
												e.currentTarget.style.transform = 'translateY(0)';
											}}
										>
											<img 
												src={correctedUrl} 
												alt={image.icons[0].name}
												style={{
													width: '80px',
													height: '80px',
													objectFit: 'contain',
													filter: 'brightness(0) invert(1)' // Makes the icon white
												}}
												onError={(e) => {
													console.error(`Failed to load technology icon: ${correctedUrl}`);
												}}
											/>
										</div>
										<span data-kte="kt-84510" className="kt-84510 mt-3 text-center" style={{ fontSize: '20px', fontWeight: 700 }}>
											{image.icon_name}
										</span>
									</div>
								);
							})}
						</div>
					</div>
				</div>
				<div data-kte="kt-30606" className="kt-30606 bouncing-blobs-container rounded-4 fix">
					<div data-kte="kt-10671" className="kt-10671 bouncing-blobs-glass rounded-4" />
					<div data-kte="kt-13928" className="kt-13928 bouncing-blobs">
						<div data-kte="kt-86778" className="kt-86778 bouncing-blob bouncing-blob--green" />
						<div data-kte="kt-40776" className="kt-40776 bouncing-blob bouncing-blob--primary" />
						<div data-kte="kt-70400" className="kt-70400 bouncing-blob bouncing-blob--infor bouncing-blob--infor-2" />
					</div>
				</div>
			</div>
		</section>
	)
}