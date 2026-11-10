import Faq from "@/src/components/services-dashdev/Faq";
import CasestudySection from "@/src/components/services-dashdev/CasestudySection";
import BenefitsSection from "@/src/components/services-dashdev/BenefitsSection";
import OutsourceSection from "@/src/components/services-dashdev/OutsourceSection";
import ServicesSection from "@/src/components/services-dashdev/ServicesSection";
import StrategicSection from "@/src/components/services-dashdev/StrategicSection";
import FeaturedSection from "@/src/components/services-dashdev/FeaturedSection";
import TechnologiesSection from "@/src/components/services-dashdev/TechnologiesSection";
import Bookcallsection from "@/src/components/services-dashdev/Bookcallsection";
import type { Metadata } from "next";
import SeoService from "@/src/services/SeoService";
// Import other components as needed

// A demo build of the services page. It duplicates /services content, so it is
// kept out of the index rather than competing with the real page.
export const metadata: Metadata = SeoService.generateSeoMetadata({
  title: "Services Demo",
  description: "Internal demo layout for the services page.",
  url: "/services-dashdev-demo",
  noindex: true,
});

export default function ServicesDashdevDemo() {
  return (
    <div>
      <h1>Services Dashdev Components Demo</h1>
      <Faq />
      <CasestudySection />
      <BenefitsSection />
      <Bookcallsection />
      <OutsourceSection />
      <ServicesSection />
      <StrategicSection />
      <FeaturedSection />
      <TechnologiesSection />
      {/* Add more components here as needed */}
    </div>
  );
}