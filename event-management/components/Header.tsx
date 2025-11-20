'use client';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo - Now using your real logo.png */}
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
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              GateToConnect
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#browse" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Browse Jobs
            </a>
            <a href="#post" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Post a Job
            </a>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="px-6 py-2.5 text-purple-600 font-semibold border-2 border-purple-600 rounded-full hover:bg-purple-50 transition-all">
              Login
            </button>
            <button className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-gray-200">
            <nav className="flex flex-col gap-5 mb-6">
              <a href="#browse" className="text-gray-700 hover:text-purple-600 transition-colors font-medium text-lg">
                Browse Jobs
              </a>
              <a href="#post" className="text-gray-700 hover:text-purple-600 transition-colors font-medium text-lg">
                Post a Job
              </a>
            </nav>
            <div className="flex flex-col gap-4">
              <button className="px-6 py-3 text-purple-600 font-semibold border-2 border-purple-600 rounded-full hover:bg-purple-50 transition-all">
                Login
              </button>
              <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:shadow-lg transition-all">
                Sign Up
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}