// app/create-volunteer-profile/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Upload, ChevronLeft } from 'lucide-react';

export default function CreateVolunteerProfile() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '', city: '', phone: '', email: '',
    roles: [], pastExperience: '', weekdays: '', availability: '',
    bio: '', photo: null as File | null
  });

  const roles = ["Hospitality & Guest Handling", "Backstage & Stage Crew", "Registration Desk", "Crowd Management", "Photography", "Emcee Support"];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate saving to events.json (in real app: use API route + fs)
    const newVolunteer = {
      id: Date.now(),
      name: formData.name,
      rating: 0,
      reviews: 0,
      expertise: formData.roles[0] || "Event Volunteer",
      tags: ["New Volunteer"],
      location: formData.city,
      price: "₹800–1,500/day",
      image: formData.photo ? URL.createObjectURL(formData.photo) : "/default-avatar.jpg",
      about: formData.bio,
      skills: formData.roles,
      availability: [formData.weekdays + " · " + formData.availability],
      pastEvents: formData.pastExperience ? [formData.pastExperience] : [],
      reviewsList: []
    };

    // In real app: POST to /api/save-volunteer
    console.log("New volunteer saved:", newVolunteer);

    alert("Volunteer profile created successfully! You will now receive gig notifications.");
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-800 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-2xl w-full">
        <button onClick={() => router.back()} className="flex items-center gap-2 text-purple-600 mb-6">
          <ChevronLeft /> Back
        </button>

        <h1 className="text-3xl font-bold text-center mb-2">Create Volunteer Profile</h1>
        <p className="text-center text-gray-600 mb-8">Join thousands earning from events</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <input required placeholder="Full Name" className="px-4 py-3 rounded-xl border" onChange={e => setFormData({...formData, name: e.target.value})} />
            <input required placeholder="City" className="px-4 py-3 rounded-xl border" onChange={e => setFormData({...formData, city: e.target.value})} />
            <input required type="tel" placeholder="Phone" className="px-4 py-3 rounded-xl border" onChange={e => setFormData({...formData, phone: e.target.value})} />
            <input required type="email" placeholder="Email" className="px-4 py-3 rounded-xl border" onChange={e => setFormData({...formData, email: e.target.value})} />
          </div>

          <div>
            <label className="block font-medium mb-3">Roles & Experience</label>
            <div className="grid grid-cols-2 gap-3">
              {roles.map(role => (
                <label key={role} className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-5 h-5 text-purple-600 rounded" onChange={e => {
                    if (e.target.checked) setFormData({...formData, roles: [...formData.roles, role]});
                    else setFormData({...formData, roles: formData.roles.filter(r => r !== role)});
                  }} />
                  <span className="text-sm">{role}</span>
                </label>
              ))}
            </div>
          </div>

          <textarea placeholder="Past Experience (optional)" rows={3} className="w-full px-4 py-3 rounded-xl border resize-none"
            onChange={e => setFormData({...formData, pastExperience: e.target.value})} />

          <div className="grid grid-cols-2 gap-4">
            <select className="px-4 py-3 rounded-xl border" onChange={e => setFormData({...formData, weekdays: e.target.value})}>
              <option>Weekdays</option>
              <option>Weekends Only</option>
              <option>Flexible</option>
            </select>
            <select className="px-4 py-3 rounded-xl border" onChange={e => setFormData({...formData, availability: e.target.value})}>
              <option>Open to unpaid</option>
              <option>Paid only</option>
            </select>
          </div>

          <div>
            <label className="block font-medium mb-2">Upload Photo</label>
            <label className="flex items-center justify-center gap-3 border-2 border-dashed border-purple-300 rounded-xl p-8 cursor-pointer hover:border-purple-500 transition">
              <Upload className="w-8 h-8 text-purple-600" />
              <span className="text-purple-600">Click to upload</span>
              <input type="file" accept="image/*" className="hidden" onChange={e => e.target.files && setFormData({...formData, photo: e.target.files[0]})} />
            </label>
          </div>

          <textarea required placeholder="Short Bio - Tell us about yourself and your experience..." rows={4} className="w-full px-4 py-3 rounded-xl border resize-none"
            onChange={e => setFormData({...formData, bio: e.target.value})} />

          <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-5 rounded-full font-bold text-xl hover:opacity-90 transition shadow-lg">
            Save Profile
          </button>
          <button type="button" onClick={() => router.push("/")} className="w-full text-purple-600 font-medium hover:underline">
            Skip for now
          </button>
        </form>
      </div>
    </div>
  );
}