// components/Footer.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import ContactPopup from './ContactPopup';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [isContactOpen, setIsContactOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <footer className="bg-gradient-to-r from-purple-700 via-purple-600 to-blue-700 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

            {/* Brand */}
            <div className="space-y-4">
              <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
                <div className="relative">
                  <Image
                    src="/logo.png"
                    alt="GateToConnect Logo"
                    width={44}
                    height={44}
                    className="w-11 h-11 object-contain"
                    priority
                  />
                </div>
                <span className="text-2xl font-bold">GateToConnect</span>
              </Link>
              <p className="text-blue-100 leading-relaxed max-w-xs">
                A platform where event organizers meet verified volunteers instantly.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-5">Quick Links</h3>
              <ul className="space-y-4">
                <li>
                  <button onClick={() => scrollToSection('how-it-works')} className="text-blue-100 hover:text-white transition font-medium">
                    How It Works
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('opportunities')} className="text-blue-100 hover:text-white transition font-medium">
                    Find Gigs
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('cta-section')} className="text-blue-100 hover:text-white transition font-medium">
                    Post Event
                  </button>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-bold mb-5">Resources</h3>
              <ul className="space-y-4">
                <li><Link href="/refund" className="text-blue-100 hover:text-white transition">Refund Policy</Link></li>
                <li><Link href="/faq" className="text-blue-100 hover:text-white transition">FAQ</Link></li>
                <li><Link href="/terms" className="text-blue-100 hover:text-white transition">Terms of Service</Link></li>
                <li><Link href="/privacy" className="text-blue-100 hover:text-white transition">Privacy Policy</Link></li>
                <li><Link href="/about" className="text-blue-100 hover:text-white transition">About Us</Link></li>
                <li><Link href="/careers" className="text-blue-100 hover:text-white transition">Careers</Link></li>
                <li>
                  <button
                    onClick={() => setIsContactOpen(true)}
                    className="text-blue-100 hover:text-white transition font-medium text-left"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-5">Get in Touch</h3>
              <ul className="space-y-4">
                <li>
                  <a href="mailto:gatetoconnect@gmail.com" className="text-blue-100 hover:text-white transition">
                    gatetoconnect@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+917665616802" className="text-blue-100 hover:text-white transition">
                    +91 7665616802
                  </a>
                </li>
                <li>
                  <a href="tel:+918980101903" className="text-blue-100 hover:text-white transition">
                    +91 89801 01903
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-white/20 text-center">
            <p className="text-blue-100">
              © {currentYear} GateToConnect — All rights reserved. Built with love 💝 by Team GateToConnect.
            </p>
          </div>
        </div>
      </footer>

      {/* Contact Popup */}
      <ContactPopup isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
}