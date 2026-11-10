'use client'

import { useLoading } from '@/src/services/LoadingService'

export default function Preloader({ noBg }: { noBg?: boolean }) {
	const isLoading = useLoading((state) => state.isLoading)

	if (!isLoading) return null

	// Set noBg to true if isLoading is true
	const effectiveNoBg = isLoading ? true : noBg;

	return (
		<div id="preloader" className={effectiveNoBg ? 'no-bg' : ''}>
			<div id="loader" data-kte="kt-97834" className="kt-97834 loader">
				<div data-kte="kt-39438" className="kt-39438 loader-container text-centẻ">
					<div data-kte="kt-36739" className="kt-36739 loader-icon">
						<img src="/assets/imgs/latlogoonly.png" alt="Preloader" data-kte="kt-93973" className="kt-93973 logo-icon" />
					
					</div>
				</div>
			</div>
		</div>
	)
}
