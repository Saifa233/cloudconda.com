import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

function sanitize(input: unknown, max = 500) {
  if (typeof input !== 'string') return '';
  return input.trim().slice(0, max);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const firstname = sanitize(body.firstname, 100);
    const lastname = sanitize(body.lastname, 100);
    const jobTitle = sanitize(body.jobTitle, 120);
    const company = sanitize(body.company, 150);
    const email = sanitize(body.email, 200);
    const regulatoryNotes = sanitize(body.regulatoryNotes, 4000);
    const pkg = sanitize(body.package, 200);
    const honeypot = sanitize(body.companyWebsite || body.website, 200);

    if (honeypot) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    if (!email || !firstname) {
      return NextResponse.json({ error: 'Missing required fields: firstname and email.' }, { status: 400 });
    }

    if (pkg === 'AI Readiness Sprint' && !regulatoryNotes) {
      return NextResponse.json({ error: 'Please include regulatory notes for the AI Readiness Sprint.' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: 'da1.thewebhostserver.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const to = process.env.CONTACT_TO || 'hello@cloudconda.com';

    const subjectBase = pkg ? `New inquiry — ${pkg}` : 'New inquiry';
    const subject = `${subjectBase} — ${company || 'Unknown company'}`;

    const text = [
      'New inquiry received',
      '',
      `Package: ${pkg || 'General'}`,
      `Name: ${firstname} ${lastname}`.trim(),
      `Job Title: ${jobTitle || '-'}`,
      `Company: ${company || '-'}`,
      `Email: ${email}`,
      '',
      'Data sensitivity / regulatory notes:',
      regulatoryNotes || '-',
    ].join('\n');

    await transporter.sendMail({
      from: `CloudConda <${process.env.EMAIL_USER}>`,
      to,
      subject,
      text,
    });

    return NextResponse.json({ ok: true, message: 'Inquiry sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
