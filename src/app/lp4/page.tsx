'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function LandingPage4Default() {
	const router = useRouter()

	useEffect(() => {
		const fetchAndRedirect = async () => {
			try {
				const response = await fetch('/api/lp4')
				const data = await response.json()
				const slug = data?.[0]?.slug || 'page1'
				router.replace(`/lp4/${slug}`)
			} catch {
				router.replace('/lp4/page1')
			}
		}
		fetchAndRedirect()
	}, [])

	return <div>Redirecting...</div>
}