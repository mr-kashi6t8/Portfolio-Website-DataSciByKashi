import admin from 'firebase-admin';

let db: admin.firestore.Firestore;

// Only initialize Firebase if running in Node.js environment with required env vars
if (typeof process !== 'undefined' && process.env.FIREBASE_PROJECT_ID) {
  if (!admin.apps.length) {
    try {
      const credential = admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      } as admin.ServiceAccount);

      admin.initializeApp({
        credential,
        projectId: process.env.FIREBASE_PROJECT_ID,
      });
    } catch (error) {
      console.error('Firebase initialization error:', error);
    }
  }
  db = admin.firestore();
} else {
  // Fallback - return a mock database object if not initialized
  db = {} as admin.firestore.Firestore;
}

export { db };
