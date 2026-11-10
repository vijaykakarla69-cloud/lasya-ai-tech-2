'use client'

import { useLoading } from '@/src/services/LoadingService'
import '@/src/styles/SkeletonLoading.css'
import { useEffect } from 'react'
import AOS from 'aos'

const SkeletonLoading = () => {
  const isLoading = useLoading((state) => state.isLoading)

  useEffect(() => {
    const contentContainer = document.getElementById('content-container')
    if (contentContainer) {
      if (isLoading) {
        contentContainer.style.visibility = 'hidden'
        contentContainer.style.opacity = '0'
      } else {
        contentContainer.style.visibility = 'visible'
        contentContainer.style.opacity = '1'
        // Recalc after reveal so mid-page AOS sections aren't stuck at opacity 0
        requestAnimationFrame(() => AOS.refresh())
      }
    }
  }, [isLoading])

  if (!isLoading) return null

  return (
    <div data-kte="kt-89176" className="kt-89176 skeleton-overlay">
      {/* Ghost Header */}
      <header data-kte="kt-78369" className="kt-78369 skeleton-header">
        <div data-kte="kt-90476" className="kt-90476 container">
          <div data-kte="kt-43239" className="kt-43239 skeleton-header-content">
            <div data-kte="kt-66614" className="kt-66614 skeleton-logo"></div>
            <div data-kte="kt-59358" className="kt-59358 skeleton-nav">
              <div data-kte="kt-66221" className="kt-66221 skeleton-nav-item"></div>
              <div data-kte="kt-13665" className="kt-13665 skeleton-nav-item"></div>
              <div data-kte="kt-39487" className="kt-39487 skeleton-nav-item"></div>
              <div data-kte="kt-44830" className="kt-44830 skeleton-nav-item"></div>
            </div>
            <div data-kte="kt-84784" className="kt-84784 skeleton-header-right">
              <div data-kte="kt-43669" className="kt-43669 skeleton-theme-btn"></div>
              <div data-kte="kt-79501" className="kt-79501 skeleton-cta-btn"></div>
              <div data-kte="kt-70511" className="kt-70511 skeleton-menu-btn"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section data-kte="kt-80526" className="kt-80526 skeleton-hero">
        <div data-kte="kt-25906" className="kt-25906 container">
          <div data-kte="kt-17791" className="kt-17791 row align-items-center">
            <div data-kte="kt-60981" className="kt-60981 col-lg-6">
              <div data-kte="kt-74313" className="kt-74313 skeleton-chip"></div>
              <div data-kte="kt-85301" className="kt-85301 skeleton-title"></div>
              <div data-kte="kt-34176" className="kt-34176 skeleton-description"></div>
              <div data-kte="kt-93810" className="kt-93810 skeleton-buttons">
                <div data-kte="kt-47595" className="kt-47595 skeleton-btn"></div>
                <div data-kte="kt-18385" className="kt-18385 skeleton-btn"></div>
              </div>
            </div>
            <div data-kte="kt-90942" className="kt-90942 col-lg-6">
              <div data-kte="kt-22413" className="kt-22413 skeleton-image"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section data-kte="kt-42331" className="kt-42331 skeleton-content">
          <div data-kte="kt-89200" className="kt-89200 container">
            <div data-kte="kt-74816" className="kt-74816 skeleton-content-center">
              <div data-kte="kt-72119" className="kt-72119 skeleton-chip-center"></div>
              <div data-kte="kt-39205" className="kt-39205 skeleton-title-center"></div>
              <div data-kte="kt-75200" className="kt-75200 skeleton-description-center"></div>
            </div>
            <div data-kte="kt-55554" className="kt-55554 skeleton-grid">
              <div data-kte="kt-14792" className="kt-14792 skeleton-grid-left">
                <div data-kte="kt-17489" className="kt-17489 skeleton-large-image"></div>
              </div>
              <div data-kte="kt-75568" className="kt-75568 skeleton-grid-right">
                <div data-kte="kt-71662" className="kt-71662 skeleton-small-image"></div>
                <div data-kte="kt-95776" className="kt-95776 skeleton-small-image"></div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default SkeletonLoading