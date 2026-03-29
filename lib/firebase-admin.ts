import admin from 'firebase-admin';

let db: admin.firestore.Firestore | null = null;

// Only initialize Firebase if running in Node.js environment with required env vars
if (typeof process !== 'undefined' && process.env.FIREBASE_PROJECT_ID) {
  if (!admin.apps.length) {
    try {
      console.log('Firebase: Initializing with project ID:', process.env.FIREBASE_PROJECT_ID);

      const credential = admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      } as admin.ServiceAccount);

      admin.initializeApp({
        credential,
        projectId: process.env.FIREBASE_PROJECT_ID,
      });

      console.log('Firebase: Initialized successfully');
      db = admin.firestore();
    } catch (error) {
      console.error('Firebase initialization error:', error);
    }
  } else {
    // Firebase already initialized
    db = admin.firestore();
  }
} else {
  console.warn('Firebase: Environment variables not set');
}

export { db };
