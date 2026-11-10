'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function LandingPage1Default() {
	const router = useRouter()

	useEffect(() => {
		const fetchAndRedirect = async () => {
			try {
				const response = await fetch('/api/lp1')
				const data = await response.json()
				const slug = data?.[0]?.slug || 'page1'
				router.replace(`/lp1/${slug}`)
			} catch {
				router.replace('/lp1/page1')
			}
		}
		fetchAndRedirect()
	}, [])

	return <div>Redirecting...</div>
}
