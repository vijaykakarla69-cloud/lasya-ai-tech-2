'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function LandingPage3Default() {
	const router = useRouter()

	useEffect(() => {
		const fetchAndRedirect = async () => {
			try {
				const response = await fetch('/api/lp3')
				const data = await response.json()
				const slug = data?.[0]?.slug || 'page1'
				router.replace(`/lp3/${slug}`)
			} catch {
				router.replace('/lp3/page1')
			}
		}
		fetchAndRedirect()
	}, [])

	return <div>Redirecting...</div>
}