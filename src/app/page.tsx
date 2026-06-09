import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ProcessSection from "@/components/sections/ProcessSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FaqSection from "@/components/sections/FaqSection";
import BudgetSection from "@/components/sections/BudgetSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-background min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Services Grid Section */}
      <ServicesSection />
      
      {/* Work Portfolio Section */}
      <PortfolioSection />
      
      {/* Step by Step Process Section */}
      <ProcessSection />
      
      {/* Testimonials Grid Section */}
      <TestimonialsSection />
      
      {/* Frequently Asked Questions Section */}
      <FaqSection />
      
      {/* Interactive Budget Form Section */}
      <BudgetSection />
    </div>
  );
}
