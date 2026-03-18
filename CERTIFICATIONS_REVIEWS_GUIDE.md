# Certifications & Reviews Section Guide

This guide explains how to manage the Certifications and Reviews sections of your portfolio website.

## Quick Start

### Navigate to New Pages
- **Certifications**: Visit `/certifications` to view all certificates
- **Reviews**: Visit `/reviews` to view client reviews and submit a review form

### Navigation
Both sections are now added to your main navigation menu in the header.

---

## Managing Certifications

### Adding Certificates

1. **Open** `/lib/data/certifications.ts`

2. **Add your certificate** to the `certifications` array using this format:

```typescript
{
  id: 'cert-001',                                    // Unique identifier
  title: 'Certificate Title',                        // Name of the certificate
  issuer: 'Organization Name',                       // Who issued it
  issueDate: '2024-01-15',                          // YYYY-MM-DD format
  expiryDate: '2026-01-15',                         // Optional expiry date
  credentialId: 'ABC123XYZ',                        // Optional credential ID for verification
  credentialUrl: 'https://verify.org/ABC123XYZ',   // Optional link to verify certificate
  certificateImage: '/certificates/image.jpg',      // Path to certificate image file
  description: 'What you learned or achieved',       // Optional description
  featured: true,                                    // Show in featured section
}
```

3. **Add certificate images** to `/public/certificates/` folder

4. **Fields Explained**:
   - `id`: Must be unique (e.g., `cert-001`, `cert-002`)
   - `certificateImage`: Path where your image is stored
   - `featured`: Set to `true` to show on home page preview, `false` for list only
   - `expiryDate`, `credentialId`, `credentialUrl`: Optional fields - omit if not needed

### Example Certificate Entry

```typescript
{
  id: 'cert-ml-001',
  title: 'Advanced Machine Learning',
  issuer: 'Coursera',
  issueDate: '2024-01-15',
  expiryDate: '2026-01-15',
  credentialId: 'ABC123XYZ',
  credentialUrl: 'https://coursera.org/verify/ABC123XYZ',
  certificateImage: '/certificates/ml-coursera.jpg',
  description: 'Completed advanced coursework in machine learning algorithms and deep learning.',
  featured: true,
}
```

### Organizing Certificates

- Multiple certificates are automatically sorted by issue date (newest first)
- Featured certificates appear in a separate grid with full details
- All certificates appear in the full list below

---

## Managing Reviews

### How Reviews Work

1. **Clients submit reviews** via the review form on `/reviews` page
2. **Reviews are automatically saved** to `/public/data/pending-reviews.json`
3. **You approve reviews** by moving them to the `clientReviews` array in `/lib/data/reviews.ts`
4. **Approved reviews show** on:
   - `/reviews` page (full reviews page)
   - Home page preview (featured reviews section)

### Viewing Pending Reviews

1. Open `/public/data/pending-reviews.json`
2. You'll see all reviews submitted by clients that are awaiting approval
3. Reviews are stored in JSON format

### Example Pending Review

```json
{
  "id": "review-1710768123456",
  "name": "Sarah Johnson",
  "email": "sarah@company.com",
  "company": "DataTech Solutions",
  "role": "Data Manager",
  "content": "Outstanding work! The machine learning model improved our accuracy by 40%. Highly recommend!",
  "rating": 5,
  "approved": false,
  "submittedDate": "2024-03-18"
}
```

### Approving Client Reviews

1. **Open** `/public/data/pending-reviews.json`
2. **Find the review** you want to approve
3. **Copy the entire review object** (from `{` to `}`)
4. **Open** `/lib/data/reviews.ts`
5. **Paste it into the `clientReviews` array** at the top
6. **Make these changes**:
   - Change `"approved": false` to `approved: true` (remove quotes)
   - Add a new field: `approvedDate: '2024-03-18'` (use today's date)
   - Change double quotes to single quotes for all field names
7. **Delete the review** from `/public/data/pending-reviews.json`
8. **Save both files**

### Step-by-Step Example

**1. In pending-reviews.json, you see:**
```json
[
  {
    "id": "review-1710768123456",
    "name": "Sarah Johnson",
    "email": "sarah@company.com",
    "company": "DataTech Solutions",
    "role": "Data Manager",
    "content": "Outstanding work! The ML model improved our accuracy by 40%!",
    "rating": 5,
    "approved": false,
    "submittedDate": "2024-03-18"
  }
]
```

**2. In reviews.ts, add it like this:**
```typescript
export const clientReviews: ClientReview[] = [
  {
    id: 'review-001',
    name: 'John Doe',
    // ... existing review ...
  },
  // NEW APPROVED REVIEW:
  {
    id: 'review-1710768123456',
    name: 'Sarah Johnson',
    email: 'sarah@company.com',
    company: 'DataTech Solutions',
    role: 'Data Manager',
    content: 'Outstanding work! The ML model improved our accuracy by 40%!',
    rating: 5,
    approved: true,
    submittedDate: '2024-03-18',
    approvedDate: '2024-03-18',  // ADD THIS
  },
];
```

**3. In pending-reviews.json, remove it:**
```json
[]
```

**4. The review now appears on:**
- `/reviews` page
- Home page in "What Clients Say" section

### Handling Spam/Inappropriate Reviews

Simply leave them in `/public/data/pending-reviews.json` and don't add them to `clientReviews`. They won't appear publicly.

You can delete them from the JSON file if you want to clean up.

---

## Form Submission

### Client Review Form

Clients can submit reviews through:
- **Form URL**: `/reviews` page (Share Your Review button)
- **Form Fields**:
  - Name (required)
  - Email (required)
  - Company (optional)
  - Role (optional)
  - Review text (required, min 10 characters)
  - Star rating 1-5 (required)

### Form Validation

The form validates:
- Name is not empty
- Email is valid format
- Review is at least 10 characters
- Rating is 1-5

### API Endpoint

- **Route**: `/api/reviews` (POST)
- Handles form submissions
- Validates data before storing
- Returns success message to client

---

## Displaying on Home Page

### Featured Reviews Section

- Shows on the home page between Services and CTA sections
- Displays the first 3 approved reviews
- Shows star ratings, review text, and client info
- Includes "View All Reviews" button

### How to Control What Shows

All reviews in the `clientReviews` array (with `approved: true`) will display on the home page preview. The three most recent will show as featured.

---

## File Structure

```
/lib
  /data
    - certifications.ts       (Certificate data and helpers)
    - reviews.ts              (Review data and helpers)
  /types.ts                   (Updated with new types)

/app
  /certifications
    - page.tsx               (Certifications page)
  /reviews
    - page.tsx               (Reviews page)
  /api
    /reviews
      - route.ts             (API endpoint for submissions)

/components
  /reviews
    - ReviewForm.tsx         (Review submission form)
  /home
    - Reviews.tsx            (Featured reviews for home page)

/public
  /certificates              (Store certificate images here)
```

---

## Tips & Best Practices

### For Certifications
- Keep certificate image sizes reasonable (not too large)
- Use descriptive titles matching the actual certificate
- Include credential URLs when available for verification
- Mark newly earned certificates as featured
- Keep images in `/public/certificates/` organized by year

### For Reviews
- Moderate reviews to maintain professionalism
- Respond to negative reviews constructively
- Feature more recent positive reviews
- Include diverse client types (different companies/roles)
- Use actual client names and companies for credibility

---

## Troubleshooting

### Certificates Not Showing
- Check certificate image path in `certificateImage` field
- Ensure images are in `/public/certificates/` folder
- Verify the file extension is correct (.jpg, .png, etc.)

### Reviews Not Appearing
- Check that `approved: true` in the review object
- Review must be in `clientReviews` array, not `pendingReviews`
- Verify there are no syntax errors in the data file

### Form Not Submitting
- Check browser console for errors
- Verify API endpoint is reachable at `/api/reviews`
- Check email validation regex

---

## Future Enhancements

Potential improvements you could add:
- Database backend for easier review management
- Admin dashboard to approve reviews
- Email notifications when new reviews are submitted
- Review search and filtering
- Certificate verification widget
- Integration with certificate issuer APIs

---

## Need Help?

All data is in TypeScript files that follow the same pattern as your existing projects, services, and skills data. Follow the same structure and conventions used elsewhere in your portfolio.
