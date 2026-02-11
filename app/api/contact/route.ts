import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  projectType: z.string().min(1, 'Project type is required'),
  budget: z.string().min(1, 'Budget range is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input
    const validatedData = contactSchema.parse(body);

    // Check if email is configured
    if (!process.env.EMAIL_USER || !process.env.EMAIL_APP_PASSWORD) {
      console.warn('Email not configured. Skipping email send.');
      // Return success anyway for demo purposes
      return NextResponse.json({
        success: true,
        message: 'Form submitted successfully (email not configured)',
      }, { status: 200 });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    // Email to admin (you)
    const adminEmail = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
      subject: `New Contact Form Submission - ${validatedData.projectType}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Project Type:</strong> ${validatedData.projectType}</p>
        <p><strong>Budget:</strong> ${validatedData.budget}</p>
        <p><strong>Message:</strong></p>
        <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><em>This email was sent from your portfolio contact form.</em></p>
      `,
    };

    // Auto-reply to client
    const clientEmail = {
      from: process.env.EMAIL_USER,
      to: validatedData.email,
      subject: 'Thank you for contacting me - M. Kashif Sultan',
      html: `
        <h2>Thank you for reaching out!</h2>
        <p>Hi ${validatedData.name},</p>
        <p>I've received your message and will get back to you within 24 hours.</p>
        <p>Here's a copy of your submission:</p>
        <ul>
          <li><strong>Project Type:</strong> ${validatedData.projectType}</li>
          <li><strong>Budget:</strong> ${validatedData.budget}</li>
        </ul>
        <p><strong>Your Message:</strong></p>
        <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p>Best regards,<br><strong>M. Kashif Sultan</strong><br>Data Scientist & ML Engineer</p>
        <p><em>COMSATS University Islamabad, Sahiwal Campus</em></p>
      `,
    };

    // Send emails
    await transporter.sendMail(adminEmail);
    await transporter.sendMail(clientEmail);

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully!',
    }, { status: 200 });

  } catch (error) {
    console.error('Contact form error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json({
        success: false,
        error: 'Validation error',
        details: error.errors,
      }, { status: 400 });
    }

    return NextResponse.json({
      success: false,
      error: 'Failed to send message. Please try again.',
    }, { status: 500 });
  }
}

// Rate limiting (simple in-memory implementation)
// For production, use a proper rate limiting service
const rateLimit = new Map<string, number[]>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 60 * 1000; // 1 hour
  const maxRequests = 5; // 5 requests per hour

  if (!rateLimit.has(ip)) {
    rateLimit.set(ip, [now]);
    return true;
  }

  const requests = rateLimit.get(ip)!.filter((time) => now - time < windowMs);

  if (requests.length >= maxRequests) {
    return false;
  }

  requests.push(now);
  rateLimit.set(ip, requests);
  return true;
}
