// app/about/page.tsx
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'About Us | GateToConnect - India\'s Trusted Event Staffing Platform',
  description: 'We connect event organizers with verified, skilled volunteers instantly. No chaos. No middlemen. Just perfect events.',
};

export default function AboutPage() {
  return (
    <>
      <Header activePage="about" />

      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
            We&apos;re Building the Future of Event Staffing
          </h1>
          <p className="mt-8 text-xl md:text-2xl text-gray-700 leading-relaxed">
            GateToConnect bridges the gap between event organizers and skilled volunteers — 
            eliminating chaos, building trust, and powering unforgettable events across India.
          </p>
        </div>
      </section>

      {/* Main Content - Perfectly Centered & Symmetrical */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 space-y-24">

          {/* Our Story */}
          <div className="text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Our Story</h2>
            <div className="max-w-4xl mx-auto text-lg md:text-xl text-gray-700 leading-relaxed space-y-6">
              <p>
                GateToConnect is an event-volunteer marketplace built to solve one of the biggest challenges in the event industry — 
                <span className="font-bold text-purple-700"> finding the right people at the right time</span>.
              </p>
              <p>
                Whether it’s a wedding, concert, corporate event, private gathering, cultural fest, or large-scale production — 
                every event needs reliable hands. At the same time, thousands of skilled volunteers and event workers struggle to find 
                genuine, paid opportunities.
              </p>
              <p className="text-purple-700 font-bold text-2xl">
                GateToConnect bridges this gap with a transparent, simple, and trusted platform.
              </p>
            </div>
          </div>

          {/* Founders + Quote */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left space-y-8">
              <h3 className="text-3xl font-bold text-gray-900">Founded by</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-2xl font-bold text-purple-700">Himank Sharma</p>
                  <p className="text-gray-600">Co-Founder & CEO</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-purple-700">Anshraj Singh Rathore</p>
                  <p className="text-gray-600">Co-Founder & CFO</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-purple-700">Ayush Zala</p>
                  <p className="text-gray-600">CTO</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-purple-700">Pushpendra Sharma</p>
                  <p className="text-gray-600">CMO</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-10 shadow-xl border border-purple-100">
              <p className="text-2xl md:text-3xl font-bold text-gray-800 italic text-center leading-relaxed">
                “Every role matters. Every event deserves the right people.”
              </p>
            </div>
          </div>

          {/* Our Mission */}
          <div className="text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Our Mission</h2>
            <p className="max-w-4xl mx-auto text-lg md:text-xl text-gray-700 leading-relaxed">
              To make the event workforce industry more <strong className="text-purple-700">organized, trustworthy, and accessible</strong>. 
              Using technology and a clean user experience, we eliminate last-minute chaos, unreliable staffing, 
              and payment disputes — ensuring smooth coordination for every event, regardless of scale.
            </p>
          </div>

          {/* Proudly Indian */}
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-3xl p-12 shadow-xl border border-purple-100 text-center">
            <h3 className="text-4xl font-bold text-gray-900 mb-6">Proudly Indian, Building for India</h3>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              GateToConnect operates under the parent brand <strong>GateToStage.Events</strong>, 
              a growing event ecosystem based in <strong>Ahmedabad, India</strong>.
            </p>
            <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
              Our vision is to build a <strong className="text-purple-700">pan-India platform</strong> that supports event professionals, 
              empowers volunteers, and gives organizers a dependable solution they can count on.
            </p>
          </div>

          {/* Final Statement */}
          <div className="text-center py-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
              Great Events Are Built on Great Teams
            </h2>
            <p className="mt-6 text-3xl font-medium text-purple-700">
              At GateToConnect, we make sure they find each other.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}