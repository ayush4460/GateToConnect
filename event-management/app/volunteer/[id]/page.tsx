// app/volunteer/[id]/page.tsx
import volunteersData from '@/data/events.json';
import Image from 'next/image';

export default async function VolunteerProfile({ params }: { params: { id: string } }) {
  // Await the params (required in App Router)
  const { id } = await params;

  const volunteer = volunteersData.volunteers.find(v => v.id === parseInt(id));

  if (!volunteer) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
        <div className="bg-white p-10 rounded-3xl shadow-2xl text-center">
          <h1 className="text-3xl font-bold text-gray-800">Volunteer Not Found</h1>
          <p className="text-gray-600 mt-4">We couldn't find the volunteer you're looking for.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 h-32"></div>
        <div className="px-8 pb-8 -mt-16">
          <div className="flex gap-6 items-end">
            <div className="bg-white p-2 rounded-full shadow-lg">
              <Image
                src={volunteer.image}
                alt={volunteer.name}
                width={128}
                height={128}
                className="w-32 h-32 rounded-full border-4 border-white object-cover"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold">{volunteer.name}</h1>
              <p className="text-2xl text-gray-600">
                ★ {volunteer.rating} ({volunteer.reviews} reviews)
              </p>
            </div>
            <div className="ml-auto text-right">
              <p className="text-2xl font-bold">{volunteer.price}</p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-bold mb-4">About</h2>
              <p className="text-gray-600">{volunteer.about}</p>

              <h3 className="text-lg font-bold mt-6 mb-3">Skills & Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {volunteer.skills?.map((skill: string) => (
                  <span key={skill} className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>

              <h3 className="text-lg font-bold mt-6 mb-3">Past Experience</h3>
              <ul className="space-y-2">
                {volunteer.pastEvents?.map((event: string) => (
                  <li key={event} className="text-green-600">✓ {event}</li>
                ))}
              </ul>

              <h3 className="text-lg font-bold mt-6 mb-3">Recent Reviews</h3>
              {volunteer.reviewsList?.map((r: any, i: number) => (
                <div key={i} className="bg-gray-50 p-4 rounded-lg mb-3">
                  <p className="font-semibold">{r.author}</p>
                  <p className="text-yellow-500">★★★★★</p>
                  <p className="text-sm text-gray-600">"{r.text}"</p>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-xl text-lg font-bold hover:opacity-90 transition">
                Hire for Event
              </button>
              <button className="w-full border-2 border-gray-300 py-4 rounded-xl text-lg font-bold hover:bg-gray-50 transition">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}