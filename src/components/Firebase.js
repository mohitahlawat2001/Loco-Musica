
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.PUBLIC_API_KEY,
  authDomain: process.env.PUBLIC_AUTH_DOMAIN,
  projectId: process.env.PUBLIC_PROJECT_ID,
  storageBucket: process.env.PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.PUBLIC_APP_ID,
  measurementId: process.env.PUBLIC_APP_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
