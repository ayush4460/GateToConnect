'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function VolunteerCard({ volunteer }: any) {
  return (
    <div className="bg-white border rounded-2xl p-6 flex items-center gap-6 hover:shadow-lg transition">
      <Image src={volunteer.image} alt="" width={80} height={80} className="rounded-full" />
      <div className="flex-1">
        <h3 className="font-bold text-lg">{volunteer.name}</h3>
        <div className="flex items-center gap-2 text-yellow-500 text-sm">
          ★ {volunteer.rating} ({volunteer.reviews} reviews)
        </div>
        <p className="text-gray-600">{volunteer.expertise}</p>
        <div className="text-sm text-gray-500">
          {volunteer.tags.join(" • ")}
        </div>
      </div>
      <div className="text-right">
        <p className="text-gray-500">{volunteer.location}</p>
        <p className="font-bold text-lg">{volunteer.price}</p>
        <Link href={`/volunteer/${volunteer.id}`}>
          <button className="text-blue-600 font-medium">View Profile →</button>
        </Link>
      </div>
    </div>
  );
}