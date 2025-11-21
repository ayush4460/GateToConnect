"use client";

import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import StatsSection from "@/components/StatsSection";
import OpportunitiesSection from "@/components/OpportunitiesSection";
import CTASection from "@/components/CTASection";
import WhyItWorks from "@/components/WhyItWorks";
import Footer from "@/components/Footer";
import GuidancePopup from "@/components/GuidancePopup";

// CORRECT IMPORT + TYPE FIX
import eventsData from "@/data/events.json" with { type: "json" };
const data = eventsData as {
  stats: any[];
  howItWorks: { id: number; icon: string; title: string; description: string; category: "ORGANIZER" | "VOLUNTEER" | "BOTH" }[];
  opportunities: any[];
  volunteers: any[];
  demoEventsForVolunteers: any[];
  users: any[];
};

export default function Home() {
  const [userRole, setUserRole] = useState<"volunteer" | "organizer" | null>(null);

  return (
    <main className="min-h-screen bg-white">
      <Header activePage="home" />
      <div id="opportunities"><HeroSection /></div>
      <div id="how-it-works">
        <HowItWorks items={data.howItWorks} />
      </div>
      <StatsSection stats={data.stats} />
      <OpportunitiesSection opportunities={data.opportunities} />
      <div id="cta-section"><CTASection /></div>
      <WhyItWorks />
      <Footer />
      <GuidancePopup userRole={userRole} />
    </main>
  );
}