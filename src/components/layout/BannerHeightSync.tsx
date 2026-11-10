'use client'

import { useEffect } from 'react'

interface BannerHeightSyncProps {
  bannerId?: string
}

export default function BannerHeightSync({ bannerId = 'subscription-banner' }: BannerHeightSyncProps) {
  useEffect(() => {
    if (typeof document === 'undefined') return

    const root = document.documentElement
    const bannerEl = document.getElementById(bannerId)

    const updateHeight = () => {
      if (bannerEl) {
        const height = bannerEl.offsetHeight
        root.style.setProperty('--banner-height', `${height}px`)
      } else {
        root.style.setProperty('--banner-height', '0px')
      }
    }

    updateHeight()

    if (!bannerEl) return

    const resizeObserver = new ResizeObserver(() => {
      updateHeight()
    })

    resizeObserver.observe(bannerEl)

    return () => {
      resizeObserver.disconnect()
      root.style.setProperty('--banner-height', '0px')
    }
  }, [bannerId])

  return null
}


