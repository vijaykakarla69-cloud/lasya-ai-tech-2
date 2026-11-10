"use client"
import { useEffect, useState } from "react"
import Layout from "@/src/components/layout/Layout"
import ContactCta from "@/src/components/common/ContactCta"
import GetAFreeQuoteForm from "@/src/components/ai-free-quote/AifreeQuote"
import HeroSection from "@/src/components/ai-free-quote/HeroSection"

import { AllServices } from "@/src/services/allServices"
import { useLoading } from "@/src/services/LoadingService"
import SkeletonLoading from "@/src/components/common/SkeletonLoading"
import CommonService from '@/src/services/CommonService'

interface AiFreeQuoteClientProps {
  formData: any;
  heroSectionData: any;
}

export default function AiFreeQuoteClient({ formData, heroSectionData }: AiFreeQuoteClientProps) {
  useEffect(() => {
    CommonService.makeDebugApiCallByPage("ai_free_quote");
  }, [])

  // Debug: Log the data being passed to components
  console.log('AiFreeQuoteClient formData:', formData);
  console.log('AiFreeQuoteClient heroSectionData:', heroSectionData);

  if (!formData || !heroSectionData) {
    return <SkeletonLoading />
  }

  return (
    <Layout headerStyle={70} footerStyle={70}>
      <HeroSection data={heroSectionData} />
      <GetAFreeQuoteForm formData={formData} />      
      <section className="container pb-80">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <h2 className="mb-3">AI project quote ranges</h2>
            <p className="text-500 mb-4">
              LasyaAitech estimates AI chatbots, virtual assistants, machine learning models,
              prediction systems, computer vision and AI automation projects. Share your brief
              and budget range to get a tailored quote.
            </p>
            <div className="table-responsive">
              <table className="table table-bordered align-middle">
                <thead>
                  <tr>
                    <th>Budget range</th>
                    <th>Best fit</th>
                    <th>Typical scope</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Below $10,000</td>
                    <td>Prototype or discovery</td>
                    <td>AI feasibility, prompt workflow, proof of concept or integration plan</td>
                  </tr>
                  <tr>
                    <td>$10,001 to $20,000</td>
                    <td>MVP</td>
                    <td>Chatbot, AI assistant, automation workflow or analytics MVP</td>
                  </tr>
                  <tr>
                    <td>$20,001 to $50,000</td>
                    <td>Production build</td>
                    <td>Custom AI solution with integrations, dashboards and deployment support</td>
                  </tr>
                  <tr>
                    <td>$50,000+</td>
                    <td>Enterprise AI platform</td>
                    <td>Multi-system AI product, model pipeline, governance and scaling work</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <ContactCta />
    </Layout>
  )
}
