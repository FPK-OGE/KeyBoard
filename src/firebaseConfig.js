// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZOlSsxaJu6s4MUs7-42xYYxCupVQ_yNc",
  authDomain: "keyboard-74c77.firebaseapp.com",
  projectId: "keyboard-74c77",
  storageBucket: "keyboard-74c77.firebasestorage.app",
  messagingSenderId: "898425330792",
  appId: "1:898425330792:web:e8577edc35c4b20ec1afdd",
  measurementId: "G-VJYQW6BNBM"
};

// Инициализация
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Экспорты
export const auth = getAuth(app);
export const db = getFirestore(app); // <-- вот этого не хватало

export default app;
