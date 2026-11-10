'use client'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useState } from "react"
import BackToTop from '../elements/BackToTop'
import Breadcrumb from './Breadcrumb'

import Header from './header/Header'
import Footer from './footer/Footer'


interface LayoutProps {
	headerStyle?: Number
	footerStyle?: Number
	children?: React.ReactNode
	breadcrumbTitle?: string
}


export default function Layout({ headerStyle, footerStyle, breadcrumbTitle, children }: LayoutProps) {
	const [scroll, setScroll] = useState<boolean>(false)
	// Mobile Menu
	const [isMobileMenu, setMobileMenu] = useState<boolean>(false)
	const handleMobileMenu = (): void => {
		setMobileMenu(!isMobileMenu)
		!isMobileMenu ? document.body.classList.add("mobile-menu-active") : document.body.classList.remove("mobile-menu-active")
	}

	// Search
	const [isSearch, setSearch] = useState<boolean>(false)
	const handleSearch = (): void => setSearch(!isSearch)

	// OffCanvas
	const [isOffCanvas, setOffCanvas] = useState<boolean>(false)
	const handleOffCanvas = (): void => setOffCanvas(!isOffCanvas)

	useEffect(() => {
		if (typeof window !== 'undefined') {
			// import('wowjs').then((module) => {
			// 	const WOW = module.default;
			// 	new WOW({
			// 		live: false
			// 	}).init();
			// });
		}
	}, [])

	useEffect(() => {
		// once:true keeps sections visible after first animate (default once:false
		// re-hides them on scroll up/down via opacity:0)
		AOS.init({ once: true, mirror: false })

		// AOS collects its elements at init and only recalculates offsets on
		// refresh(). Sections rendered later — data-driven blocks, tab panels,
		// anything mounted after hydration — are never collected, so they keep
		// the opacity:0 that [data-aos] applies and stay invisible for good.
		// refreshHard() re-scans the DOM, so run it whenever the page changes.
		let raf = 0
		const refreshHard = () => {
			window.cancelAnimationFrame(raf)
			raf = window.requestAnimationFrame(() => AOS.refreshHard())
		}

		const timers = [50, 250, 800, 2000].map((d) => window.setTimeout(refreshHard, d))
		window.addEventListener('load', refreshHard)
		window.addEventListener('resize', refreshHard)

		const mainEl = document.querySelector('main') ?? document.body
		const mutationObserver = new MutationObserver(refreshHard)
		mutationObserver.observe(mainEl, { childList: true, subtree: true })

		// Safety net: whatever AOS's bookkeeping thinks, anything that actually
		// reaches the viewport must be visible. Without this a missed element is
		// invisible content the visitor can never recover by scrolling.
		const reveal = (el: Element) => el.classList.add('aos-animate')
		const intersectionObserver = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						reveal(entry.target)
						intersectionObserver.unobserve(entry.target)
					}
				})
			},
			{ rootMargin: '0px 0px -5% 0px' }
		)

		const observeAll = () => {
			document
				.querySelectorAll('[data-aos]:not(.aos-animate)')
				.forEach((el) => intersectionObserver.observe(el))
		}
		observeAll()
		const observeTimers = [300, 1200, 3000].map((d) => window.setTimeout(observeAll, d))
		const observeOnMutation = new MutationObserver(observeAll)
		observeOnMutation.observe(mainEl, { childList: true, subtree: true })

		const handleScroll = (): void => {
			const scrollCheck: boolean = window.scrollY > 100
			if (scrollCheck !== scroll) {
				setScroll(scrollCheck)
			}
		}

		document.addEventListener("scroll", handleScroll)

		return () => {
			window.cancelAnimationFrame(raf)
			timers.forEach(window.clearTimeout)
			observeTimers.forEach(window.clearTimeout)
			window.removeEventListener('load', refreshHard)
			window.removeEventListener('resize', refreshHard)
			mutationObserver.disconnect()
			observeOnMutation.disconnect()
			intersectionObserver.disconnect()
			document.removeEventListener("scroll", handleScroll)
		}
	}, [])
	return (
		<>
			<div id="top" />
			<Header scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isSearch={isSearch} handleSearch={handleSearch} isOffCanvas={isOffCanvas} handleOffCanvas={handleOffCanvas} />
			<main>
				{breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}
				{children}
			</main>
			<Footer />
			<BackToTop target="#top" />
		</>
	)
}
