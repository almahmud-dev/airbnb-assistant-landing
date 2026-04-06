import HeroSection from "@/components/sections/HeroSection"
import PartnersSection from "@/components/sections/PartnersSection"
import ServicesSection from "@/components/sections/ServicesSection"
import PricingSection from "@/components/sections/PricingSection"
import ToolsSection from "@/components/sections/ToolsSection"
import HowItWorksSection from "@/components/sections/HowItWorksSection"
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection"
import TestimonialsSection from "@/components/sections/TestimonialsSection"
import FaqSection from "@/components/sections/FaqSection"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PartnersSection />
      <ServicesSection />
      <PricingSection />
      <ToolsSection />
      <HowItWorksSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <FaqSection />
    </main>
  )
}