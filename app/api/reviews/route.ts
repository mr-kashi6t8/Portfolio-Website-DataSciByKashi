import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.message || !body.rating) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate review content length
    if (body.message.trim().length < 10) {
      return NextResponse.json(
        { error: 'Review must be at least 10 characters long' },
        { status: 400 }
      );
    }

    // Validate rating
    if (!Number.isInteger(body.rating) || body.rating < 1 || body.rating > 5) {
      return NextResponse.json(
        { error: 'Rating must be between 1 and 5' },
        { status: 400 }
      );
    }

    // Create URL-encoded form data for FormSubmit.co
    const params = new URLSearchParams();
    params.append('name', body.name.trim());
    params.append('email', body.email.trim());
    params.append('company', body.company?.trim() || '(Not provided)');
    params.append('role', body.role?.trim() || '(Not provided)');
    params.append('rating', body.rating.toString());
    params.append('message', body.message.trim());
    params.append('_subject', `New Review from ${body.name}`);
    params.append('_captcha', 'false');

    // Submit to FormSubmit.co from server-side
    const formSubmitResponse = await fetch('https://formsubmit.co/el/neteni', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });

    if (!formSubmitResponse.ok) {
      console.error('FormSubmit error:', formSubmitResponse.status, await formSubmitResponse.text());
      return NextResponse.json(
        { error: 'Failed to submit review' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Review submitted successfully!',
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error processing review submission:', error);
    return NextResponse.json(
      { error: 'Failed to submit review. Please try again later.' },
      { status: 500 }
    );
  }
}

