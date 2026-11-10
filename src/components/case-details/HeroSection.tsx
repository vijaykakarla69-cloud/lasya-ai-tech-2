"use client"
import Link from "next/link"
import React from 'react'
import SmallRightArrowIcon from "@/public/assets/icons/small-right-arrow.svg"

export default function HeroSection() {
  return (
    <section data-kte="kt-94104" className="kt-94104 section-page-header py-10 fix position-relative">
      <div data-kte="kt-81519" className="kt-81519 container position-relative z-1">
        <div data-kte="kt-55327" className="kt-55327 text-start">
          <h3>Case Study Details</h3>
          <div data-kte="kt-26724" className="kt-26724 d-flex">
            <Link href="#">
              <p data-kte="kt-81500" className="kt-81500 mb-0 text-900">Home</p>
            </Link>
             <SmallRightArrowIcon />
            <p data-kte="kt-49629" className="kt-49629 text-primary mb-0">Case Study Details</p>
          </div>
        </div>
      </div>
      <img data-kte="kt-96507" className="kt-96507 position-absolute bottom-0 start-0 end-0 top-0 z-0" src="/assets/imgs/page-header/bg-line.png" alt="Lasya AI Tech" />
      <div data-kte="kt-99922" className="kt-99922 bouncing-blobs-container">
        <div data-kte="kt-20305" className="kt-20305 bouncing-blobs-glass" />
        <div data-kte="kt-25018" className="kt-25018 bouncing-blobs">
          <div data-kte="kt-28803" className="kt-28803 position-absolute top-0 start-0 translate-middle-y bouncing-blob--green" />
          <div data-kte="kt-56411" className="kt-56411 position-absolute top-0 end-0 bouncing-blob--primary" />
        </div>
      </div>
    </section>
  )
} 