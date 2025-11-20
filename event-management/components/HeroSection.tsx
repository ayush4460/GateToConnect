'use client';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Background Image + Overlays */}
      <div className="absolute inset-0 z-0">
        {/* Main Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/hero-bg.png")',
            backgroundPosition: 'center 30%', // Slightly higher on mobile for better focus
          }}
        />

        {/* Dark + Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-purple-900/60 to-indigo-900/70" />

        {/* Subtle Animated Light Beams */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0">
            {[0, 0.3, 0.6, 1.0].map((delay, i) => (
              <div
                key={i}
                className="absolute top-0 w-px h-full bg-gradient-to-b from-transparent via-white/40 to-transparent animate-pulse"
                style={{
                  left: `${25 * (i + 1)}%`,
                  animationDelay: `${delay}s`,
                  animationDuration: '4s',
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24 lg:py-32">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 leading-tight tracking-tight">
          Connecting People,
          <br className="sm:block hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400">
            Building Events.
          </span>
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl text-blue-100 mb-12 max-w-5xl mx-auto leading-relaxed font-light">
          Your one-stop platform where event organizers meet verified volunteers
          <br className="hidden sm:block" />
          and crew — fast, transparent, and simple.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-10">
          <Link href="/post-event">
          <button className="group relative px-10 py-5 bg-white text-purple-700 text-lg md:text-xl font-bold rounded-full overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-2xl">
            <span className="relative z-10">Hire Volunteers</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
</Link>
          <button className="px-10 py-5 bg-white/10 backdrop-blur-md text-white text-lg md:text-xl font-bold rounded-full border-2 border-white/50 hover:bg-white/20 hover:border-white hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            Find Event Gigs
          </button>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/60 rounded-full flex justify-center">
          <div className="w-1.5 h-4 bg-white/80 rounded-full mt-3" />
        </div>
      </div>
    </section>
  );
}