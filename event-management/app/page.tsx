// app/page.tsx
"use client";

import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import StatsSection from "@/components/StatsSection";
import OpportunitiesSection from "@/components/OpportunitiesSection";
import CTASection from "@/components/CTASection";
import WhyItWorks from "@/components/WhyItWorks"; // ← ADDED
import Footer from "@/components/Footer";
import GuidancePopup from "@/components/GuidancePopup";

// Import JSON data
import eventsData from "@/data/events.json";

export default function Home() {
  const [userRole, setUserRole] = useState<"volunteer" | "organizer" | null>(
    null
  );

  return (
    <main className="min-h-screen bg-white">
      <Header activePage="home" />
      <div id="opportunities">
        <HeroSection />
      </div>
      <div id="how-it-works">
        <HowItWorks items={eventsData.howItWorks} />
      </div>
      <StatsSection stats={eventsData.stats} />

      <OpportunitiesSection opportunities={eventsData.opportunities} />

      <div id="cta-section">
        <CTASection />
      </div>

      {/* ← THIS IS THE NEW SECTION YOU WANTED */}
      <WhyItWorks />

      <Footer />

      <GuidancePopup userRole={userRole} />
    </main>
  );
}
