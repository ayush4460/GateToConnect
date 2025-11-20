'use client';

import { ArrowLeft } from 'lucide-react';
import volunteersData from '@/data/events.json';
import VolunteerCard from './VolunteerCard';

const volunteers = volunteersData.volunteers;

interface VolunteerListProps {
  eventData: any;
  onBack: () => void;  // Add this to go back to basics step
}

export default function VolunteerList({ eventData, onBack }: VolunteerListProps) {
  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-4xl w-full">
      {/* Clean Back Button with Arrow – Goes to previous step */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium mb-10 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        Back
      </button>

      <h2 className="text-2xl font-bold text-center mb-2">Available Volunteers</h2>
      <p className="text-center text-gray-600 mb-8">
        Browse verified volunteers in your city or skip to post requirements directly
      </p>

      {/* Optional: Filter Buttons (you can make them functional later) */}
      <div className="flex justify-center gap-4 mb-10">
        <button className="px-6 py-3 bg-blue-100 text-blue-700 rounded-full font-medium">
          Location
        </button>
        <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-full font-medium">
          Expertise
        </button>
      </div>

      {/* Volunteer Cards */}
      <div className="space-y-6">
        {volunteers.map((volunteer) => (
          <VolunteerCard key={volunteer.id} volunteer={volunteer} />
        ))}
      </div>

      {/* Optional: Continue without hiring */}
      <div className="mt-10 text-center">
        <button
          onClick={() => window.location.href = '/post-event?step=requirements'}
          className="text-blue-600 font-medium hover:underline"
        >
          Skip and Post Requirements Directly →
        </button>
      </div>
    </div>
  );
}