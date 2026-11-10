"use client"
import { useCallback } from 'react'

export interface SocialShareData {
	title: string
	description?: string
	url: string
}

export interface SocialPlatform {
	name: string
	icon?: React.ComponentType<any>
	color?: string
	shareUrl: (data: SocialShareData) => string
}

const DEFAULT_PLATFORMS: SocialPlatform[] = [
	{
		name: 'WhatsApp',
		shareUrl: (data) => `https://api.whatsapp.com/send?text=${encodeURIComponent(`Check out this: ${data.title}\n\n${data.url}`)}`
	},
	{
		name: 'Facebook',
		shareUrl: (data) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(data.url)}`
	},
	{
		name: 'LinkedIn',
		shareUrl: (data) => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(data.url)}`
	},
	{
		name: 'Twitter',
		shareUrl: (data) => `https://twitter.com/intent/tweet?text=${encodeURIComponent(data.title)}&url=${encodeURIComponent(data.url)}`
	},
	{
		name: 'Email',
		shareUrl: (data) => `mailto:?subject=${encodeURIComponent(data.title)}&body=${encodeURIComponent(`${data.description || data.title}\n\n${data.url}`)}`
	}
]

export function useSocialShare(platforms: SocialPlatform[] = DEFAULT_PLATFORMS) {
	const share = useCallback((platformName: string, data: SocialShareData) => {
		const platform = platforms.find(p => p.name.toLowerCase() === platformName.toLowerCase())

		if (!platform) {
			console.warn(`Social platform '${platformName}' not found`)
			return
		}

		const shareUrl = platform.shareUrl(data)

		if (platformName === 'Email') {
			window.location.href = shareUrl
		} else {
			window.open(shareUrl, '_blank', 'noopener,noreferrer')
		}

		return shareUrl
	}, [platforms])

	const shareToAll = useCallback((data: SocialShareData) => {
		const urls: string[] = []

		platforms.forEach(platform => {
			const shareUrl = platform.shareUrl(data)
			urls.push(shareUrl)

			if (platform.name === 'Email') {
				window.location.href = shareUrl
			} else {
				window.open(shareUrl, '_blank', 'noopener,noreferrer')
			}
		})

		return urls
	}, [platforms])

	const getShareUrl = useCallback((platformName: string, data: SocialShareData) => {
		const platform = platforms.find(p => p.name.toLowerCase() === platformName.toLowerCase())

		if (!platform) {
			console.warn(`Social platform '${platformName}' not found`)
			return null
		}

		return platform.shareUrl(data)
	}, [platforms])

	return {
		share,
		shareToAll,
		getShareUrl,
		platforms
	}
}

// Utility function for creating custom platforms
export function createSocialPlatform(
	name: string,
	shareUrlTemplate: string,
	icon?: React.ComponentType<any>,
	color?: string
): SocialPlatform {
	return {
		name,
		icon,
		color,
		shareUrl: (data) => {
			return shareUrlTemplate
				.replace('{url}', encodeURIComponent(data.url))
				.replace('{title}', encodeURIComponent(data.title))
				.replace('{description}', encodeURIComponent(data.description || data.title))
		}
	}
}

// Predefined platform templates
export const SOCIAL_PLATFORM_TEMPLATES = {
	WHATSAPP: 'https://api.whatsapp.com/send?text={title}\n\n{url}',
	FACEBOOK: 'https://www.facebook.com/sharer/sharer.php?u={url}',
	LINKEDIN: 'https://www.linkedin.com/sharing/share-offsite/?url={url}',
	TWITTER: 'https://twitter.com/intent/tweet?text={title}&url={url}',
	EMAIL: 'mailto:?subject={title}&body={description}\n\n{url}',
	TELEGRAM: 'https://t.me/share/url?url={url}&text={title}',
	REDDIT: 'https://reddit.com/submit?url={url}&title={title}',
	PINTEREST: 'https://pinterest.com/pin/create/button/?url={url}&description={title}',
	BUFFER: 'https://buffer.com/add?url={url}&text={title}',
	POCKET: 'https://getpocket.com/save?url={url}&title={title}'
}