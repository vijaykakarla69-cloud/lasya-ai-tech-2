import Link from 'next/link'
import MobileMenu from '../MobileMenu'
import Search from '../Search'
import ThemeSwitch from '@/src/components/elements/ThemeSwitch'
import Menu from '../Menu'
import { APP_CONSTANTS, NOTIFICATION_BANNER_CONFIG } from '@/src/supporting-data/constants'
import Logo from '@/src/components/common/Logo'
import WhiteRightArrowIcon from "@/public/assets/icons/white-right-arrow.svg"
// import NotificationBanner from '../NotificationBanner'
export default function Header({ scroll, isMobileMenu, handleMobileMenu, isSearch, handleSearch, isOffCanvas, handleOffCanvas }: any) {
	return (
		<>
			{/* <NotificationBanner config={NOTIFICATION_BANNER_CONFIG} /> */}
			<header style={{ margin: 0, padding: 0, paddingTop: !scroll ? 'var(--banner-height, 0px)' : 0 }}>
				<nav className={`navbar navbar-expand-lg navbar-light w-100 border-bottom z-999 ${scroll ? 'navbar-stick' : ''}`} style={{ position: `${scroll? "fixed" : "relative"}`, top: `${scroll? "var(--banner-height, 0px)" : "auto"}`, bottom: `${scroll? "auto" : "0"}`, margin: 0, padding: 0, zIndex: 1000 }}>
					<div data-kte="kt-74270" className="kt-74270 container-fluid px-lg-8">
						<Logo color="black" />
						<Menu />
						<div data-kte="kt-44395" className="kt-44395 d-flex align-items-center pe-5 pe-lg-0 me-5 me-lg-0">
							<div data-kte="kt-91432" className="kt-91432 d-lg-flex align-items-center pe-8 d-none"></div>
							<ThemeSwitch />
							<a
								href="/ai-free-quote"
								data-kte="kt-62001"
								className="kt-62001 btn btn-gradient btn-sm rounded-2 px-3 py-2 d-none d-md-inline-flex align-items-center justify-content-center"
							>
								AI Free Quote
							</a>
							<div data-kte="kt-21528" className="kt-21528 burger-icon burger-icon-white border rounded-3" onClick={handleMobileMenu}>
								<span data-kte="kt-61448" className="kt-61448 burger-icon-top" />
								<span data-kte="kt-14577" className="kt-14577 burger-icon-mid" />
								<span data-kte="kt-75955" className="kt-75955 burger-icon-bottom" />
							</div>
						</div>
					</div>
				</nav>
				
				<Search isSearch={isSearch} handleSearch={handleSearch} />
				<MobileMenu handleMobileMenu={handleMobileMenu} isMobileMenu={isMobileMenu} />
			</header>

		</>
	)
}
