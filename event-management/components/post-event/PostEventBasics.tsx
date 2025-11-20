'use client';

import { ArrowLeft } from 'lucide-react';

export default function PostEventBasics({ onSkip, onContinue }: any) {
  const handleContinue = (e: any) => {
    e.preventDefault();
    const formData = {
      title: (e.target.title as any).value,
      type: (e.target.type as any).value,
      dates: (e.target.dates as any).value,
      city: (e.target.city as any).value,
      venue: (e.target.venue as any).value,
    };
    onContinue(formData);
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-2xl w-full">
      {/* Back & Skip in ONE clean line */}
      <div className="flex justify-between items-center mb-10">
        <button
          onClick={() => window.location.href = '/'}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </button>

        <button
          onClick={onSkip}
          className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
        >
          Skip
        </button>
      </div>

      <h1 className="text-3xl font-bold text-center mb-8">Post Event</h1>

      <form onSubmit={handleContinue}>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Event Title</label>
            <input required name="title" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500" placeholder="Enter event name" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Event Type</label>
              <select name="type" className="w-full px-4 py-3 rounded-xl border">
                <option>Wedding</option>
                <option>Corporate</option>
                <option>Concert</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Start Time</label>
              <input name="dates" type="text" className="w-full px-4 py-3 rounded-xl border bg-gray-50" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">City</label>
              <select name="city" className="w-full px-4 py-3 rounded-xl border">
                <option>Jaipur</option>
                <option>Delhi</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Venue Name / Approx. Guests</label>
              <input name="venue" className="w-full px-4 py-3 rounded-xl border" placeholder="e.g. Hotel XYZ, 500 guests" />
            </div>
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}