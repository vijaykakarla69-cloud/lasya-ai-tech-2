'use client'
import Link from 'next/link'
import { APP_CONSTANTS } from '@/src/supporting-data/constants'
import versionData from '@/deployment_version.json'

import { useState } from 'react'
import Logo from '@/src/components/common/Logo'
import { SOCIAL_PROFILE_URLS } from '@/src/supporting-data/constants'
export default function Footer() {
	const [showCookieSettings, setShowCookieSettings] = useState(false)
	const [expandedSections, setExpandedSections] = useState<Record<number, boolean>>({})

	const toggleSection = (index: number) => {
		setExpandedSections(prev => ({
			...prev,
			[index]: !prev[index]
		}))
	}

	const footerData = [
		// {
		// 	menuName: "Latest Trends",
		// 	menuItems: [
		// 		{
		// 			menuItemName: "Hire React Js Developers",
		// 			menuItemLink: "/services/hire-reactjs-developers"
		// 		},
		// 		{
		// 			menuItemName: "Hire Node Js Developers",
		// 			menuItemLink: "/services/hire-nodejs-developers"
		// 		},
		// 		{
		// 			menuItemName: "Hire Typescript Developers",
		// 			menuItemLink: "/services/hire-typescript-developers"
		// 		},
		// 		{
		// 			menuItemName: "Hire JavaScript Developers",
		// 			menuItemLink: "/services/hire-javascript-developers"
		// 		},
		// 		{
		// 			menuItemName: "Hire React Native Developers",
		// 			menuItemLink: "/services/hire-react-native-developer"
		// 		},
		// 		{
		// 			menuItemName: "Frontend Development",
		// 			menuItemLink: "/services/frontend-development-services"
		// 		},
		// 		{
		// 			menuItemName: "Backend Development",
		// 			menuItemLink: "/services/backend-development-services"
		// 		},
		// 		{
		// 			menuItemName: "UI/UX Design",
		// 			menuItemLink: "/services/ui-ux-design-services"
		// 		},
		// 		{
		// 			menuItemName: "Startup Service",
		// 			menuItemLink: "/services/offshore-software-development-for-startups"
		// 		},
		// 		{
		// 			menuItemName: "CTO as a Service",
		// 			menuItemLink: "/services/cto-as-a-service"
		// 		}	
		// 	]
		// },
		{
			menuName: "Industries",
			menuItems: [
				{
					menuItemName: "Fintech",
					menuItemLink: "/industries/fintech"
				},
				{
					menuItemName: "E-commerce Development",
					menuItemLink: "/industries/e-commerce-development"
				},
				{
					menuItemName: "Health & Fitness",
					menuItemLink: "/industries/health-fitness"
				},
				{
					menuItemName: "Travel & Hospitality",
					menuItemLink: "/industries/travel-hospitality"
				},
				{
					menuItemName: "Startups",
					menuItemLink: "/industries/startups"		
				},
				{
					menuItemName: "Media",
					menuItemLink: "/industries/media"
				}
			]
		},
		{
			menuName: "Technology",
			menuItems: [
				{
					menuItemName: "AI Chatbot Development",
					menuItemLink: "/technologies/ai-powered-chatbots"
				},
				{
					menuItemName: "AI & Machine Learning",
					menuItemLink: "/technologies/ai-machine-learning"
				},
				{
					menuItemName: "Python Development Services",
					menuItemLink: "/technologies/python-development-services"
				},
				{
					menuItemName: "Generative AI Solutions",
					menuItemLink: "/technologies/generative-ai-solutions"
				},
				{
					menuItemName: "Web Development",
					menuItemLink: "/technologies/web-development"
				},
				{
					menuItemName: "Mobile App Development",
					menuItemLink: "/technologies/mobile-app-development"
				},
				{
					menuItemName: "iOS Development",
					menuItemLink: "/technologies/ios-development"
				},
				{
					menuItemName: "Android Development",
					menuItemLink: "/technologies/android-app-development"
				},
				{
					menuItemName: "Flutter App Development",
					menuItemLink: "/technologies/flutter-app-development"
				}
			]
		},
		{
			menuName: "Legal",
			menuItems: [
				{
					menuItemName: "Privacy Policy",
					menuItemLink: "/privacy-policy"
				},
				{
					menuItemName: "Cookie Policy",
					menuItemLink: "/cookie-policy"
				},
				{
					menuItemName: "Cookie Settings",
					menuItemLink: "#",
					onClick: (e: React.MouseEvent) => {
						e.preventDefault();
						// Dispatch a custom event to open the cookie settings modal globally
						window.dispatchEvent(new CustomEvent('openCookieSettings'));
					}
				}
			]
		}
	];
	const footerOtherData = {
		companyDescription: `${APP_CONSTANTS.COMPANY_NAME} is a leading software development company specializing in full-stack development, mobile app solutions, web development, and expert consulting. We empower businesses with innovative, scalable, and efficient digital solutions tailored to their unique needs.`
	}

	const currentYear = new Date().getFullYear();
	const companyName = APP_CONSTANTS.COMPANY_NAME;
	return (
		<>
			<footer>
				<div data-kte="kt-24603" className="kt-24603 section-footer position-relative">
					<div data-kte="kt-68882" className="kt-68882 container-fluid bgft-1">
						<div data-kte="kt-79176" className="kt-79176 container position-relative z-2">
							<div data-kte="kt-64674" className="kt-64674 row py-90 gx-5">
								<div data-kte="kt-13014" className="kt-13014 col-lg-4 pe-lg-4 mb-5 mb-lg-0">
									<Logo color="white" />
									<p data-kte="kt-71865" className="kt-71865 text-white fw-medium mt-3 mb-6 opacity-50">{footerOtherData.companyDescription}</p>
									<div className="d-flex flex-wrap gap-3 align-items-center mb-6" aria-label="Social links">
										<a
											href={SOCIAL_PROFILE_URLS.facebook}
											target="_blank"
											rel="noopener noreferrer"
											className="text-white opacity-75 hover-opacity-100"
											aria-label="LasyaAitech on Facebook"
										>
											<i className="bi bi-facebook fs-4" />
										</a>
										<a
											href={SOCIAL_PROFILE_URLS.linkedin}
											target="_blank"
											rel="noopener noreferrer"
											className="text-white opacity-75 hover-opacity-100"
											aria-label="LasyaAitech on LinkedIn"
										>
											<i className="bi bi-linkedin fs-4" />
										</a>
										<a
											href={SOCIAL_PROFILE_URLS.instagram}
											target="_blank"
											rel="noopener noreferrer"
											className="text-white opacity-75 hover-opacity-100"
											aria-label="LasyaAitech on Instagram"
										>
											<i className="bi bi-instagram fs-4" />
										</a>
									</div>
								</div>
								<div data-kte="kt-30218" className="kt-30218 col-lg-8">
									{/* Desktop View - Grid Layout */}
									<div data-kte="kt-92268" className="kt-92268 row d-none d-md-flex gx-4">
										{footerData.map((item, index) => (
											<div key={index} data-kte="kt-45681" className={`kt-45681 col-lg-4 col-md-4 px-3 ${item.menuName === 'Industries' ? 'ps-lg-4' : ''} ${item.menuName === 'Legal' ? 'ps-lg-5' : ''}`}>
												<h3 data-kte="kt-26993" className="kt-26993 text-white opacity-50 fs-6 fw-black text-uppercase pb-3 pt-5">{item.menuName}</h3>
												<div data-kte="kt-82523" className="kt-82523 d-flex flex-column align-items-start">
													{item.menuItems.map((menuItem) => (
														<Link 
															key={menuItem.menuItemLink || menuItem.menuItemName}
															className="hover-effect text-white mb-2 fw-medium fs-6" 
															href={menuItem.menuItemLink}
															onClick={menuItem.onClick || undefined}
														>
															{menuItem.menuItemName}
														</Link>
													))}
												</div>
											</div>
										))}
									</div>
									{/* Mobile View - Accordion Layout */}
									<div className="d-md-none">
										{footerData.map((item, index) => (
											<div key={index} className="mb-3">
												<button
													onClick={() => toggleSection(index)}
													className="w-100 d-flex justify-content-between align-items-center text-white bg-transparent border-0 p-3 border-bottom border-white border-opacity-10"
													style={{ cursor: 'pointer' }}
												>
													<h3 className="text-white opacity-50 fs-6 fw-black text-uppercase mb-0">
														{item.menuName}
													</h3>
													<i className={`bi ${expandedSections[index] ? 'bi-chevron-up' : 'bi-chevron-down'} text-white`} />
												</button>
												{expandedSections[index] && (
													<div className="px-3 py-2">
														{item.menuItems.map((menuItem) => (
															<Link 
																key={menuItem.menuItemLink || menuItem.menuItemName}
																className="d-block text-white mb-2 fw-medium fs-6 py-1" 
																href={menuItem.menuItemLink}
																onClick={(e) => {
																	if (menuItem.onClick) {
																		menuItem.onClick(e)
																	}
																	toggleSection(index)
																}}
															>
																{menuItem.menuItemName}
															</Link>
														))}
													</div>
												)}
											</div>
										))}
									</div>
								</div>
							</div>
							<div data-kte="kt-89535" className="kt-89535 row text-center py-4 border-top border-white border-opacity-10">
								<span data-kte="kt-30374" className="kt-30374 text-white opacity-50">
									Copyright © {currentYear} {companyName}. All Rights Reserved | V {versionData.version}
								</span>
							</div>
						</div>
					</div>
					<div data-kte="kt-23202" className="kt-23202 position-absolute top-0 start-50 translate-middle-x z-0">
						<img src="/assets/imgs/footer-1/line-bg.png" alt="lasyaaitech" />	
					</div>
					<div data-kte="kt-81276" className="kt-81276 position-absolute top-0 start-0 z-0">
						<img src="/assets/imgs/footer-1/ellipse-left.png" alt="lasyaaitech" />
					</div>
					<div data-kte="kt-58127" className="kt-58127 position-absolute top-0 end-0 z-0">
						<img src="/assets/imgs/footer-1/ellipse-right.png" alt="lasyaaitech" />
					</div>
				</div>
			</footer>
		</>
	)
}
