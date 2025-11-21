// app/api/send-contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ayushzala4460@gmail.com',
    pass: 'ombq ghse xhcw dyuz', // Your App Password
  },
});

export async function POST(req: NextRequest) {
  try {
    const { name, phone, email } = await req.json();

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 30px; border: 1px solid #e0e0e0; border-radius: 16px; background: #f8f9ff;">
        <h1 style="color: #5b21b6; text-align: center; font-size: 28px;">New Contact Request</h1>
        <div style="background: white; padding: 25px; border-radius: 12px; margin: 20px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
          <p style="margin: 12px 0; font-size: 16px;">
            <strong>Name:</strong> ${name}
          </p>
          <p style="margin: 12px 0; font-size: 16px;">
            <strong>Phone:</strong> <a href="tel:${phone}" style="color: #3b82f6;">${phone}</a>
          </p>
          <p style="margin: 12px 0; font-size: 16px;">
            <strong>Email:</strong> <a href="mailto:${email}" style="color: #3b82f6;">${email}</a>
          </p>
        </div>
        <hr style="border: 1px dashed #ddd; margin: 30px 0;">
        <p style="text-align: center; color: #666; font-size: 14px;">
          Sent from <strong>GateToConnect</strong> Contact Form
        </p>
      </div>
    `;

    await transporter.sendMail({
      from: '"GateToConnect Contact" <ayushzala4460@gmail.com>',
      to: 'ayushgzala@gmail',
      subject: `New Contact Request from ${name}`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Contact email error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}