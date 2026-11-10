# Social Share Components

This directory contains reusable social sharing components and utilities for the Lasya Aitech website.

## Components

### SocialShare Component

A complete social sharing component that renders social media icons and handles sharing functionality.

```tsx
import SocialShare from '@/src/components/common/SocialShare'

function MyComponent() {
	return (
		<SocialShare
			data={{
				title: "Check out this amazing job opportunity!",
				description: "Join our team at Lasya Aitech",
				url: window.location.href
			}}
			size="md"
			className="justify-content-center"
			onShare={(platform) => console.log(`Shared on ${platform}`)}
		/>
	)
}
```

#### Props

- `data`: SocialShareData - The content to share
- `platforms`: SocialPlatform[] (optional) - Array of platforms to include (defaults to all)
- `size`: 'sm' | 'md' | 'lg' - Size of the icons
- `showLabels`: boolean (optional) - Whether to show platform names below icons
- `className`: string (optional) - Additional CSS classes for the container
- `iconClassName`: string (optional) - Additional CSS classes for each icon
- `onShare`: function (optional) - Callback when a platform is clicked

#### SocialShareData

```tsx
interface SocialShareData {
	title: string           // Main title/content
	description?: string    // Optional description
	url: string            // URL to share
}
```

## Hooks

### useSocialShare Hook

A hook that provides social sharing functionality without the UI component.

```tsx
import { useSocialShare } from '@/src/components/common/useSocialShare'

function MyComponent() {
	const { share, getShareUrl, platforms } = useSocialShare()

	const handleShare = (platform) => {
		share(platform, {
			title: "Amazing job opportunity!",
			url: window.location.href
		})
	}

	return (
		<div>
			{platforms.map(platform => (
				<button key={platform.name} onClick={() => handleShare(platform.name)}>
					Share on {platform.name}
				</button>
			))}
		</div>
	)
}
```

## Available Platforms

By default, the following platforms are supported:

- WhatsApp
- Facebook
- LinkedIn
- Twitter/X
- Email

## Custom Platforms

You can create custom social platforms using the `createSocialPlatform` utility:

```tsx
import { createSocialPlatform } from '@/src/components/common/useSocialShare'
import TelegramIcon from '@/public/assets/icons/telegram.svg'

const telegramPlatform = createSocialPlatform(
	'Telegram',
	'https://t.me/share/url?url={url}&text={title}',
	TelegramIcon,
	'#0088cc'
)
```

## Platform Templates

Predefined URL templates are available in `SOCIAL_PLATFORM_TEMPLATES`:

```tsx
import { SOCIAL_PLATFORM_TEMPLATES } from '@/src/components/common/useSocialShare'

const customPlatform = createSocialPlatform(
	'Reddit',
	SOCIAL_PLATFORM_TEMPLATES.REDDIT
)
```

## Usage Examples

### Basic Usage
```tsx
<SocialShare
	data={{
		title: "Join our team!",
		url: "https://lasyaaitech.com/careers"
	}}
/>
```

### Job Sharing (Careers Page)
```tsx
<SocialShare
	data={{
		title: `Check out this job: ${job.title}`,
		description: `Job opportunity at ${companyName}`,
		url: window.location.href
	}}
	size="lg"
	className="justify-content-center"
/>
```

### Blog Post Sharing
```tsx
<SocialShare
	data={{
		title: blogPost.title,
		description: blogPost.excerpt,
		url: `${siteUrl}/blog/${blogPost.slug}`
	}}
	platforms={[/* custom platforms for blog */]}
/>
```

### With Custom Styling
```tsx
<SocialShare
	data={shareData}
	size="sm"
	showLabels={true}
	className="my-custom-class"
	iconClassName="shadow-sm"
	onShare={(platform) => analytics.track('social_share', { platform })}
/>
```

## Integration with Analytics

The `onShare` callback can be used to track social sharing events:

```tsx
<SocialShare
	data={shareData}
	onShare={(platform) => {
		// Track the share event
		gtag('event', 'share', {
			method: platform,
			content_type: 'job_posting'
		})

		// Or send to your analytics service
		analytics.track('social_share', {
			platform,
			url: shareData.url,
			title: shareData.title
		})
	}}
/>
```
