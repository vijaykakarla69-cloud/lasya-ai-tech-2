"use client"

import Whatsapp1Icon from "@/public/assets/icons/whatsapp1.svg"
import Facebook1Icon from "@/public/assets/icons/facebook1.svg"
import LinkedinIcon from "@/public/assets/icons/linkedin.svg"
import XIcon from "@/public/assets/icons/x.svg"
import GmailIcon from "@/public/assets/icons/gmail.svg"
import { SOCIAL_PROFILE_URLS } from "@/src/supporting-data/constants"

/** Instagram glyph (brand color circle uses white icon like other SocialShare icons). */
function InstagramIcon() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="#ffffff" aria-hidden>
			<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
		</svg>
	)
}

export interface SocialPlatform {
	name: string
	icon: React.ComponentType<any>
	color: string
	shareUrl: (data: SocialShareData) => string
}

export interface SocialShareData {
	title: string
	description?: string
	url: string
}

export interface SocialShareProps {
	data: SocialShareData
	platforms?: SocialPlatform[]
	size?: 'sm' | 'md' | 'lg'
	showLabels?: boolean
	className?: string
	iconClassName?: string
	onShare?: (platform: string) => void
}

/**
 * Opens official LasyaAitech Facebook, LinkedIn, and Instagram pages (not page-share URLs).
 * Use with SocialShare: `platforms={COMPANY_SOCIAL_FOLLOW_PLATFORMS}` — `data` is ignored for URLs.
 */
export const COMPANY_SOCIAL_FOLLOW_PLATFORMS: SocialPlatform[] = [
	{
		name: 'Facebook',
		icon: Facebook1Icon,
		color: '#1877F2',
		shareUrl: () => SOCIAL_PROFILE_URLS.facebook,
	},
	{
		name: 'LinkedIn',
		icon: LinkedinIcon,
		color: '#0A66C2',
		shareUrl: () => SOCIAL_PROFILE_URLS.linkedin,
	},
	{
		name: 'Instagram',
		icon: InstagramIcon,
		color: '#E4405F',
		shareUrl: () => SOCIAL_PROFILE_URLS.instagram,
	},
]

const DEFAULT_PLATFORMS: SocialPlatform[] = [
	{
		name: 'WhatsApp',
		icon: Whatsapp1Icon,
		color: '#25D366',
		shareUrl: (data) => `https://api.whatsapp.com/send?text=${encodeURIComponent(`Check out this: ${data.title}\n\n${data.url}`)}`
	},
	{
		name: 'Facebook',
		icon: Facebook1Icon,
		color: '#1877F2',
		shareUrl: (data) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(data.url)}`
	},
	{
		name: 'LinkedIn',
		icon: LinkedinIcon,
		color: '#0A66C2',
		shareUrl: (data) => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(data.url)}`
	},
	{
		name: 'Twitter',
		icon: XIcon,
		color: '#000000',
		shareUrl: (data) => `https://twitter.com/intent/tweet?text=${encodeURIComponent(data.title)}&url=${encodeURIComponent(data.url)}`
	},
	{
		name: 'Email',
		icon: GmailIcon,
		color: '#ffffff',
		shareUrl: (data) => `mailto:?subject=${encodeURIComponent(data.title)}&body=${encodeURIComponent(`${data.description || data.title}\n\n${data.url}`)}`
	}
]

const SIZE_CONFIG = {
	sm: { width: '32px', height: '32px', fontSize: '12px' },
	md: { width: '48px', height: '48px', fontSize: '14px' },
	lg: { width: '56px', height: '56px', fontSize: '16px' }
}

export default function SocialShare({
	data,
	platforms = DEFAULT_PLATFORMS,
	size = 'md',
	showLabels = false,
	className = "",
	iconClassName = "",
	onShare
}: SocialShareProps) {
	const sizeConfig = SIZE_CONFIG[size]

	const handleShare = (platform: SocialPlatform) => {
		const shareUrl = platform.shareUrl(data)

		if (platform.name === 'Email') {
			window.location.href = shareUrl
		} else {
			window.open(shareUrl, '_blank', 'noopener,noreferrer')
		}

		onShare?.(platform.name)
	}

	return (
		<div className={`d-flex align-items-center gap-3 ${className}`}>
			{platforms.map((platform) => {
				const IconComponent = platform.icon

				return (
					<div key={platform.name} className="d-flex flex-column align-items-center gap-1">
						<div
							onClick={() => handleShare(platform)}
							className={`d-flex align-items-center justify-content-center rounded-circle position-relative ${iconClassName}`}
							style={{
								width: sizeConfig.width,
								height: sizeConfig.height,
								backgroundColor: platform.color,
								cursor: 'pointer',
								zIndex: 1,
								transition: 'transform 0.2s ease-in-out'
							}}
							onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
							onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
							role="button"
							tabIndex={0}
							aria-label={`Share on ${platform.name}`}
						>
							<IconComponent />
						</div>
						{showLabels && (
							<small style={{ fontSize: sizeConfig.fontSize }} className="text-muted">
								{platform.name}
							</small>
						)}
					</div>
				)
			})}
		</div>
	)
}

// Utility function for creating custom social platforms
export function createSocialPlatform(
	name: string,
	icon: React.ComponentType<any>,
	color: string,
	shareUrlTemplate: string
): SocialPlatform {
	return {
		name,
		icon,
		color,
		shareUrl: (data) => {
			// Replace placeholders in template
			return shareUrlTemplate
				.replace('{url}', encodeURIComponent(data.url))
				.replace('{title}', encodeURIComponent(data.title))
				.replace('{description}', encodeURIComponent(data.description || data.title))
		}
	}
}
