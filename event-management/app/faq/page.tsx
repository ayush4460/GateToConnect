// app/faq/page.tsx
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'FAQ - Frequently Asked Questions | GateToConnect',
};

export default function FAQPage() {
  const faqs = [
    { q: "What is GateToConnect?", a: "An event-volunteer marketplace connecting organizers with verified volunteers across India." },
    { q: "How does it work?", a: "Post event → Volunteers apply → You accept → Payment processed → Event happens → Rate each other." },
    { q: "What is the platform fee?", a: "10% fee — charged only when a volunteer accepts your event. No acceptance = No fee." },
    { q: "How do volunteers get paid?", a: "You pay → We deduct 10% → Volunteer receives the rest securely." },
    { q: "What if I cancel?", a: "Before acceptance: Full refund. After: Partial or case-by-case." },
    { q: "What if a volunteer cancels?", a: "You get full refund. Platform fee not charged." },
    { q: "What if someone doesn’t show up?", a: "No-show volunteer → Full refund. No-show organizer → Volunteer may get compensation." },
    { q: "Is GateToConnect the employer?", a: "No. We’re a neutral marketplace. Volunteers work independently." },
    { q: "Are profiles verified?", a: "Yes — mobile, identity, and experience verification." },
    { q: "Can I pay off-platform?", a: "No. Off-platform payments are not protected and can lead to suspension." },
  ];

  return (
    <>
      <Header activePage="faq" />
      <section className="pt-32 pb-24 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900">Frequently Asked Questions</h1>
          <p className="mt-8 text-xl text-gray-700">Everything you need to know</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.q}</h3>
              <p className="text-gray-700 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}