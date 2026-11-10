import React from 'react'
import SocialShare from './SocialShare'
import { useSocialShare } from './useSocialShare'

// Example 1: Basic usage with default platforms
export function BasicSocialShare() {
	return (
		<SocialShare
			data={{
				title: "Join Lasya Aitech - Amazing Career Opportunities!",
				description: "Discover exciting job opportunities in tech",
				url: window.location.href
			}}
		/>
	)
}

// Example 2: Job-specific sharing with custom styling
export function JobSocialShare({ jobTitle, jobUrl }: { jobTitle: string, jobUrl: string }) {
	return (
		<div className="text-center">
			<h5 className="mb-3">Share this position</h5>
			<SocialShare
				data={{
					title: `Check out this job opportunity: ${jobTitle}`,
					description: `Job opening at Lasya Aitech`,
					url: jobUrl
				}}
				size="lg"
				className="justify-content-center"
				onShare={(platform) => {
					// Track sharing analytics
					console.log(`Job shared on ${platform}`)
				}}
			/>
		</div>
	)
}

// Example 3: Using the hook for custom UI
export function CustomSocialShare() {
	const { share, platforms, getShareUrl } = useSocialShare()

	const shareData = {
		title: "Custom sharing example",
		description: "This uses the hook for custom UI",
		url: window.location.href
	}

	return (
		<div className="d-flex gap-2">
			{platforms.map(platform => (
				<button
					key={platform.name}
					className="btn btn-outline-primary btn-sm"
					onClick={() => share(platform.name, shareData)}
				>
					Share on {platform.name}
				</button>
			))}
		</div>
	)
}

// Example 4: Blog post sharing
export function BlogSocialShare({ post }: { post: { title: string, slug: string } }) {
	return (
		<div className="mb-4">
			<SocialShare
				data={{
					title: post.title,
					description: `Read this article on Lasya Aitech blog`,
					url: `${window.location.origin}/blog/${post.slug}`
				}}
				size="md"
				showLabels={false}
				className="justify-content-start"
			/>
		</div>
	)
}

// Example 5: Minimal sharing (only essential platforms)
export function MinimalSocialShare() {
	const { share } = useSocialShare([
		{ name: 'Twitter', shareUrl: (data) => `https://twitter.com/intent/tweet?text=${encodeURIComponent(data.title)}&url=${encodeURIComponent(data.url)}` },
		{ name: 'LinkedIn', shareUrl: (data) => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(data.url)}` }
	])

	return (
		<div className="d-flex gap-2">
			<button
				className="btn btn-link text-decoration-none"
				onClick={() => share('Twitter', {
					title: "Check this out!",
					url: window.location.href
				})}
			>
			 🐦 Share on Twitter
			</button>
			<button
				className="btn btn-link text-decoration-none"
				onClick={() => share('LinkedIn', {
					title: "Professional opportunity",
					url: window.location.href
				})}
			>
			 💼 Share on LinkedIn
			</button>
		</div>
	)
}

// Example 6: Social sharing with analytics tracking
export function TrackedSocialShare() {
	return (
		<SocialShare
			data={{
				title: "Lasya Aitech - Leading Tech Solutions",
				description: "Innovative technology solutions for modern businesses",
				url: "https://lasyaaitech.com"
			}}
			onShare={(platform) => {
				// Send tracking data to analytics service
				if (typeof window !== 'undefined' && (window as any).gtag) {
					(window as any).gtag('event', 'share', {
						method: platform,
						content_type: 'website',
						item_id: 'homepage'
					})
				}
			}}
		/>
	)
}
