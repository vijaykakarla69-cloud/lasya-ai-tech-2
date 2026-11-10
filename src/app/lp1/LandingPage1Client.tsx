"use client"
import Layout from "@/src/components/layout/Layout"
import Blog1 from "@/src/components/landing-page-1/Blog1"
import Features1 from "@/src/components/landing-page-1/Features1"
import Features2 from "@/src/components/landing-page-1/Features2"
import Features3 from "@/src/components/landing-page-1/Features3"
import Hero1 from "@/src/components/landing-page-1/Hero1"
import LogoCloud1 from "@/src/components/landing-page-1/LogoCloud1"
import Services1 from "@/src/components/landing-page-1/Services1"

export default function LandingPage1Client() {
  return (
    <Layout headerStyle={1} footerStyle={1}>
      <Hero1 />
      <LogoCloud1 />
      <Features1 />
      <Features2 />
      <Features3 />
      <Services1 />
      <Blog1 />
    </Layout>
  )
} 