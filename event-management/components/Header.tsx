// components/Header.tsx
'use client';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Fixed import
import ContactPopup from './ContactPopup';

export default function Header() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showContact, setShowContact] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center gap-8 lg:gap-12">
              <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition">
                <Image src="/logo.png" alt="Logo" width={44} height={44} className="w-10 h-10 md:w-11 md:h-11 object-contain" priority />
                <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  GateToConnect
                </span>
              </Link>
              <button onClick={() => setShowContact(true)} className="hidden md:block text-gray-700 hover:text-purple-600 font-medium">
                Contact
              </button>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-4">
                <button onClick={() => router.push('/auth')} className="px-6 py-2.5 text-purple-600 font-semibold border-2 border-purple-600 rounded-full hover:bg-purple-50 transition">
                  Login
                </button>
                <button onClick={() => router.push('/auth')} className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-full hover:shadow-xl hover:scale-105 transition shadow-lg">
                  Sign Up
                </button>
              </div>

              <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-6 py-8 space-y-6">
              <button onClick={() => { setShowContact(true); setIsMenuOpen(false); }} className="block w-full text-left text-gray-700 hover:text-purple-600 font-medium text-lg py-3 border-b">
                Contact
              </button>
              <button onClick={() => router.push('/auth')} className="w-full px-6 py-3 text-purple-600 font-semibold border-2 border-purple-600 rounded-full hover:bg-purple-50 transition">
                Login
              </button>
              <button onClick={() => router.push('/auth')} className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-full hover:shadow-xl transition shadow-lg">
                Sign Up
              </button>
            </div>
          </div>
        )}
      </header>

      <ContactPopup isOpen={showContact} onClose={() => setShowContact(false)} />
    </>
  );
}