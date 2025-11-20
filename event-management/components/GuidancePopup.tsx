'use client';

import { X, UserCircle, Briefcase } from 'lucide-react';
import { useState, useEffect } from 'react';

interface GuidancePopupProps {
  userRole: 'volunteer' | 'organizer' | null;
}

export default function GuidancePopup({ userRole }: GuidancePopupProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (userRole) {
      // Show popup after 2 seconds of landing
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [userRole]);

  if (!isVisible || !userRole) return null;

  const popupContent = {
    volunteer: {
      icon: UserCircle,
      title: "Complete Your Profile",
      message: "Profile banane se organizers aapko zyada shortlist karenge.",
      cta: "Create Profile",
    },
    organizer: {
      icon: Briefcase,
      title: "Post Your First Event",
      message: "Post your first event to start hiring verified volunteers.",
      cta: "Post Event",
    },
  };

  const content = popupContent[userRole];
  const IconComponent = content.icon;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-slide-in-right">
      <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-sm border-2 border-purple-200">
        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={20} />
        </button>

        {/* Icon */}
        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center mb-4">
          <IconComponent className="w-6 h-6 text-white" />
        </div>

        {/* Content */}
        <h3 className="text-lg font-bold text-gray-900 mb-2">
          {content.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {content.message}
        </p>

        {/* CTA Button */}
        <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300">
          {content.cta}
        </button>
      </div>
    </div>
  );
}