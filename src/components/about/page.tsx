'use client';

import { useEffect, useState } from "react"
import { AllServices } from "@/src/services/allServices"
import HeroSection from "./HeroSection"
import MissionVisionValuesSection from "./MissionVisionValuesSection"
import CultureSection from "./CultureSection"
import RiskSection from "./RiskSection"
import AwardsSection from "./AwardsSection"
import TestimonialsSection from "./TestimonialsSection"
import { useLoading } from "@/src/services/LoadingService"
import SkeletonLoading from "@/src/components/common/SkeletonLoading";
export default function AboutSection() {
    const [aboutData, setAboutData] = useState<any | null>(null);
    const { showLoading, hideLoading } = useLoading();

    useEffect(() => {
        const fetchAboutData = async () => {
            showLoading();
            try {
                const response = await AllServices.getAboutPageData();
                if (response?.data) {
                    setAboutData(response.data[0]);
                    hideLoading();
                }
            } catch (error) {
                console.error('Error fetching about data:', error);
            }
        };
        fetchAboutData();
    }, [showLoading, hideLoading]);

    return (
        <>
            <HeroSection data={HeroSection} />
            <MissionVisionValuesSection data={aboutData?.lapl__mission} />
            <CultureSection data={aboutData?.lapl_culture} />
            <RiskSection data={aboutData?.lapl_risk_section} />
            <AwardsSection data={aboutData?.lapl__awards__section} items={aboutData?.lapl__awards__section?.lapl__awards_items || []} />
            <TestimonialsSection data={aboutData?.lapl_testimonial_section} />
        </>
    )
}