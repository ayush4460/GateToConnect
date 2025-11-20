// app/api/save-volunteer/route.ts
import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'data', 'events.json');
const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'volunteers');

// Ensure upload directory exists
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    const name = formData.get('name') as string;
    const city = formData.get('city') as string;
    const phone = formData.get('phone') as string;
    const email = formData.get('email') as string;
    const roles = JSON.parse(formData.get('roles') as string);
    const bio = formData.get('bio') as string;
    const pastExperience = formData.get('pastExperience') as string || '';
    const weekdays = formData.get('weekdays') as string;
    const availability = formData.get('availability') as string;
    const photo = formData.get('photo') as File | null;

    let photoPath = '/default-avatar.jpg';
    if (photo) {
      const buffer = Buffer.from(await photo.arrayBuffer());
      const filename = `${Date.now()}-${photo.name.replace(/\s+/g, '-')}`;
      const filepath = path.join(uploadDir, filename);
      fs.writeFileSync(filepath, buffer);
      photoPath = `/uploads/volunteers/${filename}`;
    }

    // Read current JSON
    const fileData = fs.readFileSync(dataFilePath, 'utf-8');
    const jsonData = JSON.parse(fileData);

    // Create new volunteer
    const newVolunteer = {
      id: Date.now(),
      name,
      rating: 4.9,
      reviews: 0,
      expertise: roles[0] || "Event Volunteer",
      tags: ["New Volunteer", "Active"],
      location: city,
      price: "₹800–1,800/day",
      image: photoPath,
      about: bio,
      skills: roles,
      availability: [`${weekdays}`, availability === "Paid only" ? "Paid Gigs Only" : "Open to All"],
      pastEvents: pastExperience ? [pastExperience] : [],
      reviewsList: []
    };

    // Add to volunteers array
    jsonData.volunteers.push(newVolunteer);

    // Save back to JSON
    fs.writeFileSync(dataFilePath, JSON.stringify(jsonData, null, 2));

    return NextResponse.json({ success: true, volunteer: newVolunteer });
  } catch (error) {
    console.error("Save error:", error);
    return NextResponse.json({ success: false, error: "Failed to save profile" }, { status: 500 });
  }
}