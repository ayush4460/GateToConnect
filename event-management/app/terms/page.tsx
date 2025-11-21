// app/terms/page.tsx
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Terms of Service | GateToConnect',
  description: 'Official Terms & Conditions for GateToConnect event staffing platform.',
};

export default function TermsPage() {
  return (
    <>
      <Header activePage="terms" />

      {/* Hero */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
            Terms & Conditions
          </h1>
          <p className="mt-8 text-xl md:text-2xl text-gray-700 leading-relaxed">
            Last Updated: November 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 space-y-20">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Welcome to GateToConnect</h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              (“Platform”, “Website”, “We”, “Us”). By accessing or using our services, you agree to the following Terms & Conditions.
              <br />
              <strong>If you do not agree, please do not use the platform.</strong>
            </p>
          </div>

          <div className="space-y-12">
            <div className="bg-gray-50 rounded-3xl p-10">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">1. Introduction</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                GateToConnect is an event-volunteer marketplace operated by GateToStage.Events.
                The platform connects event organizers with volunteers and event workers for paid or unpaid event-related roles.
                <br /><br />
                <strong>GateToConnect does not employ any volunteer or organizer.</strong> We only provide a digital platform for interaction.
              </p>
            </div>

            <div className="bg-gray-50 rounded-3xl p-10">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">2. User Eligibility</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                By using the platform, you confirm that:
              </p>
              <ul className="space-y-4 text-lg text-gray-700 mt-6">
                <li className="flex items-start gap-4">
                  <span className="text-purple-600 font-bold w-2 h-2 rounded-full mt-2">•</span>
                  You are at least 18 years old, OR using the app with parental consent.
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-purple-600 font-bold w-2 h-2 rounded-full mt-2">•</span>
                  You provide accurate, truthful information during profile creation.
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-purple-600 font-bold w-2 h-2 rounded-full mt-2">•</span>
                  You are legally allowed to work or participate in events as per your region's laws.
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-3xl p-10 border border-purple-100">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">4. Nature of Service <span className="text-purple-600">(Important Clause)</span></h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>GateToConnect operates only as a facilitator.</strong>
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="bg-white rounded-2xl p-6 border-l-4 border-red-500">
                  <h4 className="font-bold text-red-700 mb-2">We do NOT:</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>✅ Guarantee volunteer attendance</li>
                    <li>✅ Guarantee event success or performance</li>
                    <li>✅ Interfere in user agreements</li>
                    <li>✅ Take responsibility for misconduct or disputes</li>
                  </ul>
                </div>
                <div className="bg-white rounded-2xl p-6 border-l-4 border-purple-500">
                  <h4 className="font-bold text-purple-700 mb-2">All responsibilities lie between users:</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>✅ Work quality</li>
                    <li>✅ Behavior</li>
                    <li>✅ Payments</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-3xl p-10">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">5. Payments & Platform Fees</h3>
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start gap-4">
                  <span className="text-purple-600 font-bold w-2 h-2 rounded-full mt-2">•</span>
                  Organizers pay volunteers as mentioned in event posting
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-purple-600 font-bold w-2 h-2 rounded-full mt-2">•</span>
                  <strong>GateToConnect charges 10% platform fee</strong> (deducted from volunteer payment)
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-purple-600 font-bold w-2 h-2 rounded-full mt-2">•</span>
                  All payment disputes are between volunteers & organizers only
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-3xl p-10">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">7. User Conduct</h3>
              <p className="text-lg text-gray-700 mb-6">
                Users must NOT:
              </p>
              <ul className="grid md:grid-cols-2 gap-6 text-lg text-gray-700">
                <li className="flex items-start gap-4">
                  <span className="text-red-500 font-bold w-2 h-2 rounded-full mt-2">•</span>
                  Use platform for illegal activities
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-red-500 font-bold w-2 h-2 rounded-full mt-2">•</span>
                  Share abusive or misleading information
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-red-500 font-bold w-2 h-2 rounded-full mt-2">•</span>
                  Violate privacy of other users
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-red-500 font-bold w-2 h-2 rounded-full mt-2">•</span>
                  Attempt to scam or harass others
                </li>
              </ul>
              <p className="mt-6 text-lg font-semibold text-red-700">
                Violation = <strong>permanent account suspension</strong>
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-3xl p-10 border border-purple-100 text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="grid md:grid-cols-2 gap-8 text-center">
                <div>
                  <p className="text-2xl font-bold text-purple-700 mb-2">📩 Email</p>
                  <a href="mailto:gatetoconnect@gmail.com" className="text-lg text-purple-600 hover:underline">
                    gatetoconnect@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-2xl font-bold text-purple-700 mb-2">📞 Phone</p>
                  <a href="tel:+917665616802" className="text-lg text-purple-600 hover:underline">
                    +91 7665616802
                  </a>
                </div>
              </div>
              <p className="mt-6 text-sm text-gray-600">
                📍 Headquarters: Ahmedabad, India
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}