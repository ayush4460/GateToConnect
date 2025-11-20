'use client';

import { FileText, Users, CreditCard } from 'lucide-react';
import { HowItWorksItem } from '@/types';

const iconMap = {
  FileText: FileText,
  Users: Users,
  CreditCard: CreditCard,
};

interface HowItWorksProps {
  items: HowItWorksItem[];
}

export default function HowItWorks({ items }: HowItWorksProps) {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 text-gray-900">
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {items.map((item) => {
            const IconComponent = iconMap[item.icon as keyof typeof iconMap];
            
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}