'use client'
import Link from 'next/link'
import { useState } from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { headerMenuDataMaster, headerMenuData } from '@/src/supporting-data/constants'
import Logo from '@/src/components/common/Logo'
export default function MobileMenu({ isMobileMenu, handleMobileMenu }: any) {
	const [isAccordion, setIsAccordion] = useState(0)

	const handleAccordion = (key: any) => {
		setIsAccordion(prevState => prevState === key ? null : key)
	}
	return (
		<>
			<div className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar button-bg-2 ${isMobileMenu ? 'sidebar-visible' : ''}`}>
				<div data-kte="kt-83395" className="kt-83395 mobile-header-wrapper-inner">
					<div data-kte="kt-43433" className="kt-43433 mobile-header-logo">
						<Logo color="black" />
						<div className={`burger-icon burger-icon-white border rounded-3 ${isMobileMenu ? 'burger-close' : ''}`} onClick={handleMobileMenu}>
							<span data-kte="kt-37441" className="kt-37441 burger-icon-top" />
							<span data-kte="kt-31643" className="kt-31643 burger-icon-mid" />
							<span data-kte="kt-12960" className="kt-12960 burger-icon-bottom" />
						</div>
					</div>
					<div data-kte="kt-94431" className="kt-94431 mobile-header-content-area">
						<div data-kte="kt-60809" className="kt-60809 perfect-scroll">
							<div data-kte="kt-56619" className="kt-56619 mobile-menu-wrap mobile-header-border">
								<nav>
									<ul data-kte="kt-63093" className="kt-63093 mobile-menu font-heading ps-0">
										{headerMenuDataMaster.map((item, index) => (
											<li key={index}>
												<Link href={item.menuLink}>{item.menuName}</Link>
											</li>
										))}
									</ul>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
