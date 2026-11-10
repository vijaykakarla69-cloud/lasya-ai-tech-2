'use client';

import Image from "next/image"

export default function HeroSection({ blogData }: { blogData: any }) {
    return (
        <>
            <section data-kte="kt-36527" className="kt-36527 hero-section">
                <img 
                    className="w-100" 
                    src="/assets/imgs/blog-details/img-1.png" 
                    alt="Blog hero image" 
                />
            </section>
        </>
    )
}