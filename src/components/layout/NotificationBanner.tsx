'use client'
import { useEffect, useState, useRef } from 'react'

interface BannerConfig {
	enabled: boolean
	message: string
	type?: 'info' | 'warning' | 'success' | 'hiring'
	closeable: boolean
	link?: {
		url: string
		text: string
	}
}

interface NotificationBannerProps {
	config: BannerConfig
}

export default function NotificationBanner({ config }: NotificationBannerProps) {
	const [isVisible, setIsVisible] = useState(false)
	const bannerRef = useRef<HTMLDivElement>(null)
	
	// Initialize CSS variable
	useEffect(() => {
		if (typeof document !== 'undefined') {
			document.documentElement.style.setProperty('--banner-height', '0px')
		}
	}, [])
	
	// Update CSS variable for banner height to adjust header position
	useEffect(() => {
		const updateBannerHeight = () => {
			if (typeof document !== 'undefined' && isVisible && bannerRef.current) {
				const height = bannerRef.current.offsetHeight
				document.documentElement.style.setProperty('--banner-height', `${height}px`)
			} else if (typeof document !== 'undefined') {
				document.documentElement.style.setProperty('--banner-height', '0px')
			}
		}

		updateBannerHeight()

		// Use ResizeObserver to handle dynamic content changes
		if (isVisible && bannerRef.current) {
			const resizeObserver = new ResizeObserver(() => {
				updateBannerHeight()
			})
			resizeObserver.observe(bannerRef.current)

			return () => {
				resizeObserver.disconnect()
			}
		}
	}, [isVisible])

	useEffect(() => {
		if (!config.enabled) {
			setIsVisible(false)
			return
		}

		// Check if banner was dismissed (only for closeable banners)
		if (config.closeable) {
			const dismissedKey = `banner-dismissed-${config.message.slice(0, 20).replace(/\s/g, '-')}`
			const wasDismissed = localStorage?.getItem(dismissedKey)
			if (wasDismissed === 'true') {
				setIsVisible(false)
				return
			}
		}

		setIsVisible(true)
	}, [config])

	const handleClose = () => {
		if (config.closeable) {
			const dismissedKey = `banner-dismissed-${config.message.slice(0, 20).replace(/\s/g, '-')}`
			localStorage?.setItem(dismissedKey, 'true')
			setIsVisible(false)
		}
	}

	if (!isVisible || !config.enabled) {
		return null
	}

	// Determine banner styling based on type
	const getBannerStyles = () => {
		switch (config.type) {
			case 'warning':
				return { className: 'bg-warning text-dark', style: {} }
			case 'success':
				return { className: 'bg-success text-white', style: {} }
			case 'hiring':
				return { 
					className: 'text-white', 
					style: { background: 'linear-gradient(90deg, #00a4a3 0%, #33b5b4 100%)' }
				}
			case 'info':
			default:
				return { className: 'bg-primary text-white', style: {} }
		}
	}

	const bannerStyles = getBannerStyles()

	return (
		<div 
			ref={bannerRef}
			className={`notification-banner ${bannerStyles.className} w-100`} 
			style={{ 
				position: 'fixed',
				top: 0,
				left: 0,
				right: 0,
				zIndex: 1001,
				margin: 0,
				padding: 0,
				...bannerStyles.style 
			}}
		>
			<div className="container-fluid px-3 px-lg-8" style={{ paddingTop: '8px', paddingBottom: '8px', margin: 0 }}>
				<div className="d-flex align-items-center justify-content-center gap-3 position-relative" style={{ margin: 0, paddingRight: config.closeable ? '30px' : '0' }}>
					<div className="banner-message text-center" style={{ width: '100%' }}>
						<span className="small fw-medium">{config.message}</span>
						{config.link && (
							<a 
								href={config.link.url} 
								className="ms-2 text-decoration-underline fw-bold"
								style={{ color: 'inherit', opacity: 0.9 }}
							>
								{config.link.text}
							</a>
						)}
					</div>
					{config.closeable && (
						<button
							onClick={handleClose}
							className="btn-close btn-close-white flex-shrink-0 position-absolute"
							aria-label="Close banner"
							style={{ 
								right: '8px',
								top: '50%',
								transform: 'translateY(-50%)',
								filter: config.type === 'warning' ? 'invert(1)' : 'none',
								opacity: 0.8,
								zIndex: 10
							}}
						/>
					)}
				</div>
			</div>
		</div>
	)
}

