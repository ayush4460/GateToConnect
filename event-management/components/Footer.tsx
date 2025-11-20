'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-purple-700 via-purple-600 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div>
            <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <div className="relative">
              <Image
                src="/logo.png"
                alt="GateToConnect Logo"
                width={40}
                height={40}
                className="w-9 h-9 md:w-11 md:h-11 object-contain"
                priority
              />
            </div>
            <span className="text-xl md:text-2xl font-bold text-white">
              GateToConnect
            </span>
          </Link>
            <p className="text-blue-100 leading-relaxed">
              A platform where event organizers meet verified volunteers
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">
                  Find Gigs
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">
                  Post Event
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:support@gatetoconnect.com" className="text-blue-100 hover:text-white transition-colors">
                  support@gatetoconnect.com
                </a>
              </li>
              <li>
                <a href="tel:1-800-VOLUNTEER" className="text-blue-100 hover:text-white transition-colors">
                  1-800-VOLUNTEER
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <p className="text-blue-100">
            © GateToConnect — All rights reserved. {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}