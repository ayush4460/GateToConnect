// app/careers/page.tsx
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Careers at GateToConnect',
};

export default function CareersPage() {
  return (
    <>
      <Header activePage="careers" />

      <section className="pt-32 pb-24 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900">Work With Us</h1>
          <p className="mt-8 text-xl text-gray-700">Join a team building the future of event staffing in India</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">We’re a small, passionate team</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At GateToConnect, we’re building India’s most trusted platform where event organizers and volunteers collaborate seamlessly. 
              Our mission is to simplify event staffing, empower talent, and create meaningful opportunities.
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Currently, We’re Not Hiring</h3>
            <p className="text-xl text-gray-700">
              But we’re always excited to meet passionate people who want to build great products and solve real problems.
            </p>
            <p className="text-lg mt-6">
              If you’re into tech, design, operations, community, or strategy — reach out!
            </p>
          </div>

          <div>
            <p className="text-2xl font-bold text-purple-700 mb-4">Send your story to:</p>
            <a href="mailto:gatetoconnect@gmail.com" className="text-3xl font-bold text-purple-600 hover:underline">
              gatetoconnect@gmail.com
            </a>
            <p className="text-lg text-gray-600 mt-4">We’ll reach out when the right role opens up</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}