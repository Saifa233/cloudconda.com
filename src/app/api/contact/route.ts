// src/app/api/contact/route.ts

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstname, lastname, jobTitle, company, email } = body;

    if (!email || !firstname) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thanks for contacting us!',
      text: `Hello ${firstname},\n\nThank you for reaching out about our development services.\n\nWe'll get back to you soon!\n\n- Cloudconda Team`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }
}
