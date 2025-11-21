// components/WhyItWorks.tsx
import { Zap, Shield, Calendar, CreditCard } from 'lucide-react';

export default function WhyItWorks() {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-purple-600" />,
      title: "Instant Matching",
      description: "Connect with qualified volunteers in minutes, not days. Our platform makes hiring seamless."
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-600" />,
      title: "Verified Profiles",
      description: "Every volunteer is background-checked and reviewed. Hire with complete confidence."
    },
    {
      icon: <Calendar className="w-8 h-8 text-purple-600" />,
      title: "Flexible Scheduling",
      description: "Post one-time gigs or recurring roles. Volunteers work around your event timeline."
    },
    {
      icon: <CreditCard className="w-8 h-8 text-purple-600" />,
      title: "Secure Payments",
      description: "Built-in payment processing and invoicing. No hassle, no paperwork. Just results."
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Built for event organizers who need reliable staff, fast
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-purple-50 rounded-2xl">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}