'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import HowItWorks from '@/components/HowItWorks';
import StatsSection from '@/components/StatsSection';
import OpportunitiesSection from '@/components/OpportunitiesSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import GuidancePopup from '@/components/GuidancePopup';

// Import JSON data
import eventsData from '@/data/events.json';

export default function Home() {
  const [userRole, setUserRole] = useState<'volunteer' | 'organizer' | null>(null);

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <HowItWorks items={eventsData.howItWorks} />
      <StatsSection stats={eventsData.stats} />
      <OpportunitiesSection opportunities={eventsData.opportunities} />
      <CTASection />
      <Footer />
      
      {/* Guidance Popup - shows based on user interaction */}
      <GuidancePopup userRole={userRole} />
    </main>
  );
}