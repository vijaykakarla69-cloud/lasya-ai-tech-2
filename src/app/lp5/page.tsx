'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function LandingPage5Default() {
	const router = useRouter()

	useEffect(() => {
		const fetchAndRedirect = async () => {
			try {
				const response = await fetch('/api/lp5')
				const data = await response.json()
				const slug = data?.[0]?.slug || 'page1'
				router.replace(`/lp5/${slug}`)
			} catch {
				router.replace('/lp5/page1')
			}
		}
		fetchAndRedirect()
	}, [])

	return <div>Redirecting...</div>
}