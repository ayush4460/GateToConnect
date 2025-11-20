// app/volunteer-dashboard/page.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import eventsData from '@/data/events.json';

export default function VolunteerDashboard() {
  const demoEvents = eventsData.demoEventsForVolunteers || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-800 text-white">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Events for Volunteers</h1>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            No real events have been posted yet — be the first to create your volunteer profile and get notified when gigs match your needs.
          </p>
          <div className="flex justify-center gap-6 mt-10">
            <Link href="/create-volunteer-profile">
              <button className="px-10 py-5 bg-white text-purple-700 font-bold rounded-full hover:scale-105 transition shadow-xl">
                Create Profile
              </button>
            </Link>
            <Link href="/">
              <button className="px-10 py-5 bg-white/20 backdrop-blur border border-white/50 rounded-full hover:bg-white/30 transition">
                Back to Home
              </button>
            </Link>
          </div>
        </div>

        {/* Demo Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {demoEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white text-gray-800 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="h-52 overflow-hidden rounded-t-3xl">
                <Image
                  src={event.image}
                  alt={event.title}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="font-bold text-2xl text-purple-700">{event.title}</h3>
                <p className="text-gray-600 mt-2">{event.location}</p>
                <p className="text-sm text-gray-500 mt-1">{event.venue}</p>
                <p className="text-3xl font-bold text-purple-600 mt-6">{event.pay}</p>

                <Link href="/create-volunteer-profile" className="block mt-8">
                  <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-full font-bold text-lg hover:opacity-90 transition shadow-lg">
                    Apply Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Optional: Empty state if no demo events */}
        {demoEvents.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl opacity-80">No demo events available right now. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  );
}