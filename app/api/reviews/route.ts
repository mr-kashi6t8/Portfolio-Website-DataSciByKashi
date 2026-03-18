import { NextRequest, NextResponse } from 'next/server';
import { ClientReview } from '@/lib/types';
import fs from 'fs/promises';
import path from 'path';

// Path to the pending reviews JSON file
const PENDING_REVIEWS_PATH = path.join(process.cwd(), 'public/data/pending-reviews.json');

// Helper function to read pending reviews from file
async function readPendingReviews(): Promise<ClientReview[]> {
  try {
    const data = await fs.readFile(PENDING_REVIEWS_PATH, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    // File doesn't exist yet, return empty array
    return [];
  }
}

// Helper function to write pending reviews to file
async function writePendingReviews(reviews: ClientReview[]): Promise<void> {
  try {
    await fs.writeFile(PENDING_REVIEWS_PATH, JSON.stringify(reviews, null, 2), 'utf-8');
  } catch (error) {
    console.error('Error writing pending reviews:', error);
    throw error;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.content || !body.rating) {
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
    if (body.content.trim().length < 10) {
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

    // Create new review object
    const newReview: ClientReview = {
      id: `review-${Date.now()}`,
      name: body.name.trim(),
      email: body.email.trim(),
      company: body.company?.trim() || undefined,
      role: body.role?.trim() || undefined,
      content: body.content.trim(),
      rating: body.rating,
      approved: false,
      submittedDate: new Date().toISOString().split('T')[0],
    };

    // Read existing pending reviews
    const pendingReviews = await readPendingReviews();

    // Add new review
    pendingReviews.push(newReview);

    // Write back to file
    await writePendingReviews(pendingReviews);

    return NextResponse.json(
      {
        success: true,
        message: 'Review submitted successfully! It will appear after approval.',
        data: { reviewId: newReview.id },
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
    const pendingReviews = await readPendingReviews();
    return NextResponse.json({
      message: 'Pending reviews',
      pendingCount: pendingReviews.length,
      reviews: pendingReviews,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch pending reviews' },
      { status: 500 }
    );
  }
}

