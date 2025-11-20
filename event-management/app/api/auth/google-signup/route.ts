// app/api/auth/google-signup/route.ts
import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dataFile = path.join(process.cwd(), 'public', 'events.json');

export async function POST(req: NextRequest) {
  try {
    const { name, email, image, role = "volunteer" } = await req.json();

    const fileData = fs.readFileSync(dataFile, 'utf-8');
    const jsonData = JSON.parse(fileData);

    // Check if user already exists
    const existingUser = jsonData.users?.find((u: any) => u.email === email);
    if (existingUser) {
      return NextResponse.json({ success: true, user: existingUser });
    }

    const newUser = {
      id: Date.now(),
      name,
      email,
      image: image || "/default-avatar.jpg",
      role,
      createdAt: new Date().toISOString(),
      provider: "google"
    };

    jsonData.users = jsonData.users || [];
    jsonData.users.push(newUser);

    fs.writeFileSync(dataFile, JSON.stringify(jsonData, null, 2));

    return NextResponse.json({ success: true, user: newUser });
  } catch (error) {
    console.error("Google signup error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}