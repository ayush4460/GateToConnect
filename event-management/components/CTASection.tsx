'use client';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-r from-purple-600 via-purple-500 to-blue-600 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to Staff Your Next Event?
        </h2>
        
        <p className="text-lg md:text-xl text-blue-50 mb-10 max-w-3xl mx-auto">
          Join thousands of organizers and volunteers connecting on GateToConnect
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <Link href="/post-event">
          <button className="w-full sm:w-auto px-10 py-4 bg-white text-purple-700 text-lg font-bold rounded-full hover:bg-blue-50 hover:shadow-2xl hover:scale-105 transition-all duration-300">
            Get Started
          </button>
          </Link>
          <button className="w-full sm:w-auto px-10 py-4 bg-transparent text-white text-lg font-bold rounded-full border-2 border-white hover:bg-white/10 hover:shadow-2xl hover:scale-105 transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}