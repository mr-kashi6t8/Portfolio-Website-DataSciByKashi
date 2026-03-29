import { NextRequest, NextResponse } from 'next/server';

let db: any;

// Only import Firebase if we're in a server environment
if (typeof process !== 'undefined' && process.env.FIREBASE_PROJECT_ID) {
  try {
    const firebaseAdminModule = require('@/lib/firebase-admin');
    db = firebaseAdminModule.db;
  } catch (error) {
    console.error('Failed to load Firebase admin:', error);
  }
}

export async function POST(request: NextRequest) {
  try {
    // Check if Firebase is initialized
    if (!db || !db.collection) {
      return NextResponse.json(
        { error: 'Database not configured. Please contact administrator.' },
        { status: 503 }
      );
    }

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

    // Save to Firestore
    const reviewData = {
      name: body.name.trim(),
      email: body.email.trim(),
      company: body.company?.trim() || '',
      role: body.role?.trim() || '',
      message: body.message.trim(),
      rating: body.rating,
      approved: false,
      submittedDate: new Date().toISOString(),
    };

    const docRef = await db.collection('reviews').add(reviewData);

    return NextResponse.json(
      {
        success: true,
        message: 'Review submitted successfully! It will appear after approval.',
        data: { reviewId: docRef.id },
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

export async function GET() {
  try {
    // Check if Firebase is initialized
    if (!db || !db.collection) {
      return NextResponse.json({
        success: true,
        count: 0,
        reviews: [],
      });
    }

    // Fetch only approved reviews
    const snapshot = await db
      .collection('reviews')
      .where('approved', '==', true)
      .orderBy('submittedDate', 'desc')
      .get();

    const reviews = snapshot.docs.map((doc: any) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return NextResponse.json({
      success: true,
      count: reviews.length,
      reviews,
    });
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return NextResponse.json({
      success: true,
      count: 0,
      reviews: [],
    });
  }
}

