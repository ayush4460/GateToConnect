'use client';

import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

interface Department {
  dept: string;
  count: string;
  payment: string;
}

interface VolunteerRequirementsProps {
  eventData: any;
  onBack: () => void;
}

export default function VolunteerRequirements({ eventData, onBack }: VolunteerRequirementsProps) {
  const [departments, setDepartments] = useState<Department[]>([
    { dept: 'Hospitality', count: '5', payment: 'Cash' },
    { dept: 'Backstage', count: '3', payment: 'Cash' },
  ]);
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [agreed, setAgreed] = useState(false);

  const addDepartment = () => {
    setDepartments([...departments, { dept: '', count: '', payment: 'Cash' }]);
  };

  const updateDepartment = (index: number, field: keyof Department, value: string) => {
    const updated = [...departments];
    updated[index][field] = value;
    setDepartments(updated);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const finalData = {
      ...eventData,
      departments,
      specialInstructions,
    };

    try {
      const res = await fetch('/api/send-event-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(finalData),
      });

      if (res.ok) {
        alert('Event posted successfully! Our team will be in touch with you shortly');
        window.location.href = '/';
      }
    } catch (err) {
      alert('Submitted! (Email will be sent in production)');
      window.location.href = '/';
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-2xl w-full">
      {/* Clean Back Button with Arrow */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium mb-10 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        Back
      </button>

      <h2 className="text-2xl font-bold text-center mb-2">Volunteer Requirements (Department-wise)</h2>
      <p className="text-center text-gray-600 mb-8">Let volunteers know exactly what you need</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Your existing form content... */}
        {departments.map((dept, i) => (
          <div key={i} className="grid grid-cols-3 gap-4 items-end">
            <div>
              <label className="block text-sm font-medium mb-1">Department</label>
              <select
                value={dept.dept}
                onChange={(e) => updateDepartment(i, 'dept', e.target.value)}
                className="w-full px-4 py-3 rounded-xl border"
                required
              >
                <option value="">Select</option>
                <option>Hospitality</option>
                <option>Backstage</option>
                <option>Registration</option>
                <option>Security</option>
                <option>Photography</option>
                <option>Food Service</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Number Needed</label>
              <input
                type="number"
                value={dept.count}
                onChange={(e) => updateDepartment(i, 'count', e.target.value)}
                className="w-full px-4 py-3 rounded-xl border"
                min="1"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Payment</label>
              <select
                value={dept.payment}
                onChange={(e) => updateDepartment(i, 'payment', e.target.value)}
                className="w-full px-4 py-3 rounded-xl border"
              >
                <option>Cash</option>
                <option>UPI</option>
                <option>Bank Transfer</option>
              </select>
            </div>
          </div>
        ))}

        <button type="button" onClick={addDepartment} className="text-blue-600 font-medium hover:underline">
          + Add Another Department
        </button>

        <div>
          <label className="block text-sm font-medium mb-2">Special Instructions (optional)</label>
          <textarea
            value={specialInstructions}
            onChange={(e) => setSpecialInstructions(e.target.value)}
            rows={4}
            className="w-full px-4 py-3 rounded-xl border resize-none"
            placeholder="Add any additional details or requirements..."
          />
        </div>

        <div className="space-y-4">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              required
              className="w-5 h-5 text-blue-600 rounded"
            />
            <span className="text-sm">I confirm all details are correct and agree to pay as mentioned.</span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" required className="w-5 h-5 text-blue-600 rounded" />
            <span className="text-sm">
              A 10% platform fee will be automatically deducted from volunteer earnings. I agree to this deduction.
            </span>
          </label>
        </div>

        <button
          type="submit"
          disabled={!agreed}
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          Post Event
        </button>
      </form>
    </div>
  );
}