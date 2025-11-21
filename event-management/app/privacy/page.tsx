// app/privacy/page.tsx
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy | GateToConnect',
  description: 'How GateToConnect protects your data. We never sell your information.',
};

export default function PrivacyPage() {
  return (
    <>
      <Header activePage="privacy" />

      {/* Hero */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
            Privacy Policy
          </h1>
          <p className="mt-8 text-xl md:text-2xl text-gray-700">
            Effective Date: November 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 space-y-20">

          {/* Intro */}
          <div className="text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Your Privacy Matters</h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              At GateToConnect, we are committed to protecting your personal information. 
              We only collect what’s necessary to connect volunteers and organizers — and we <strong>never sell your data</strong>.
            </p>
          </div>

          {/* Company Info */}
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-3xl p-10 text-center border border-purple-100">
            <p className="text-lg font-medium text-gray-700">Operated by <strong>GateToStage.Events</strong></p>
            <p className="text-lg text-gray-600 mt-2">Headquarters: Ahmedabad, India</p>
            <a href="mailto:gatetoconnect@gmail.com" className="text-purple-600 hover:underline font-medium">
              gatetoconnect@gmail.com
            </a>
          </div>

          {/* Sections */}
          {[
            { title: "1. Introduction", content: "We are an event volunteer marketplace connecting event organizers with verified volunteers across India. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website, mobile site, or related services." },
            { title: "2. Information We Collect", list: ["Name, email, phone number, city, and profile details", "Event details such as title, date, venue, and required volunteer roles", "Payment information for secure transactions", "Usage data like browser type, IP, and pages visited"] },
            { title: "3. How We Use Your Information", list: ["Managing user accounts and profiles", "Facilitating event posting and volunteer applications", "Processing secure payments", "Sending notifications and updates", "Improving platform security and experience"] },
            { title: "4. How We Share Information", content: "We do not sell or rent your data. We only share with trusted payment processors, verification partners, or legal authorities when required." },
            { title: "5. Data Retention", content: "We keep your data only as long as needed. You can request deletion anytime at gatetoconnect@gmail.com." },
            { title: "6. Security", content: "We use encryption, secure gateways, and restricted access. However, no system is 100% secure — use wisely." },
            { title: "7. Your Rights", list: ["Access and update your data", "Delete your account", "Withdraw consent", "Request data removal"] },
            { title: "8. Cookies", content: "We use cookies to improve your experience. You can disable them in your browser." },
            { title: "9. Children’s Privacy", content: "Our platform is for users 18+. We do not collect data from minors." },
            { title: "10. Changes to This Policy", content: "We may update this policy. Continued use means acceptance of changes." },
          ].map((section, i) => (
            <div key={i} className="bg-gray-50 rounded-3xl p-10">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">{section.title}</h3>
              {section.content && <p className="text-lg text-gray-700 leading-relaxed">{section.content}</p>}
              {section.list && (
                <ul className="space-y-4 mt-6">
                  {section.list.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-lg text-gray-700">
                      <span className="text-purple-600 font-bold mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* Final CTA */}
          <div className="text-center py-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">You’re in Control</h2>
            <p className="text-2xl text-purple-700 font-medium">
              Want to delete your data? Just email us.
            </p>
            <a href="mailto:gatetoconnect@gmail.com" className="inline-block mt-6 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-full hover:shadow-xl transition">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}