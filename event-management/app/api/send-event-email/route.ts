// app/api/send-event-email/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create transporter (using Gmail - most reliable)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ayushzala4460@gmail.com',           // Your Gmail
    pass: 'ombq ghse xhcw dyuz',         // See Step 3 below
  },
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { title, type, dates, city, venue, departments, specialInstructions } = body;

    // Beautiful HTML Email Template
    const emailHTML = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 12px; background: #f9f9f9;">
        <h1 style="color: #5b21b6; text-align: center;">New Event Posted!</h1>
        <h2 style="color: #1e40af;">${title}</h2>
        
        <table style="width: 100%; margin: 20px 0; background: white; padding: 15px; border-radius: 8px;">
          <tr><td><strong>Type:</strong></td><td>${type}</td></tr>
          <tr><td><strong>Dates:</strong></td><td>${dates}</td></tr>
          <tr><td><strong>City:</strong></td><td>${city}</td></tr>
          <tr><td><strong>Venue:</strong></td><td>${venue}</td></tr>
        </table>

        <h3 style="color: #7c3aed;">Volunteer Requirements</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <thead>
            <tr style="background: #e0e7ff;">
              <th style="padding: 12px; text-align: left;">Department</th>
              <th style="padding: 12px; text-align: left;">Needed</th>
              <th style="padding: 12px; text-align: left;">Payment</th>
            </tr>
          </thead>
          <tbody>
            ${departments
              .map(
                (d: any) => `
              <tr style="border-bottom: 1px solid #ddd;">
                <td style="padding: 12px;">${d.dept || 'Not specified'}</td>
                <td style="padding: 12px;">${d.count} volunteers</td>
                <td style="padding: 12px;">${d.payment}</td>
              </tr>`
              )
              .join('')}
          </tbody>
        </table>

        ${specialInstructions ? `
          <div style="margin-top: 20px; padding: 15px; background: #fef3c7; border-radius: 8px;">
            <strong>Special Instructions:</strong><br/>
            ${specialInstructions.replace(/\n/g, '<br/>')}
          </div>
        ` : ''}

        <hr style="margin: 30px 0; border: 1px dashed #ccc;">
        <p style="text-align: center; color: #666; font-size: 14px;">
          Posted via <strong>GateToConnect</strong> — Your Event Volunteer Platform
        </p>
      </div>
    `;

    await transporter.sendMail({
      from: '"GateToConnect" <gatetoconnect@gmail.com>',
      to: 'gatetoconnect@gmail.com',  // ← Your email
      subject: `New Event Posted: ${title} in ${city}`,
      html: emailHTML,
    });

    return NextResponse.json({ success: true, message: 'Event posted & email sent!' });
  } catch (error: any) {
    console.error('Email error:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}