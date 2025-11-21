// app/refund/page.tsx
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Refund & Cancellation Policy | GateToConnect',
  description: 'Clear, fair, and transparent refund policy for organizers and volunteers.',
};

export default function RefundPage() {
  return (
    <>
      <Header activePage="refund" />

      {/* Hero */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
            Refund & Cancellation Policy
          </h1>
          <p className="mt-8 text-xl md:text-2xl text-gray-700">
            Effective Date: November 2025
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 space-y-20">

          {/* Intro */}
          <div className="text-center space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">Fair, Transparent, and Simple</h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              We charge fees <strong>only when a volunteer accepts your event</strong>. If no one accepts — you pay nothing.
            </p>
          </div>

          {/* Key Principle */}
          <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-3xl p-12 text-center border border-purple-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Core Principle</h3>
            <p className="text-2xl font-medium text-purple-700">
              No volunteer accepted = No platform fee = Full refund
            </p>
          </div>

          {/* Organizer Cancellations */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Before Acceptance", result: "100% Refund", fee: "No fee", color: "green" },
              { title: "After Acceptance", result: "Partial Refund", fee: "10% fee applies", color: "yellow" },
              { title: "Last Minute (<24h)", result: "Case-by-case", fee: "Fee charged", color: "red" },
            ].map((item, i) => (
              <div key={i} className={`bg-gray-50 rounded-3xl p-8 text-center border-l-8 border-${item.color}-500`}>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h4>
                <p className="text-3xl font-bold text-gray-800">{item.result}</p>
                <p className="text-sm text-gray-600 mt-3">{item.fee}</p>
              </div>
            ))}
          </div>

          {/* Volunteer & No-Show */}
          <div className="space-y-12">
            <div className="bg-green-50 rounded-3xl p-10 border border-green-200">
              <h3 className="text-2xl font-bold text-green-800 mb-4">Volunteer Cancels or No-Show</h3>
              <p className="text-lg">→ Organizer gets <strong>100% refund</strong><br />→ Platform fee not charged</p>
            </div>
            <div className="bg-red-50 rounded-3xl p-10 border border-red-200">
              <h3 className="text-2xl font-bold text-red-800 mb-4">Organizer No-Show</h3>
              <p className="text-lg">→ Volunteer may receive compensation<br />→ Case reviewed with proof</p>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center bg-gradient-to-r from-purple-50 to-blue-50 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Need Help with a Refund?</h3>
            <p className="text-xl">Email us at <a href="mailto:gatetoconnect@gmail.com" className="text-purple-600 font-bold underline">gatetoconnect@gmail.com</a></p>
            <p className="text-lg mt-4">Support available 24/7</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}