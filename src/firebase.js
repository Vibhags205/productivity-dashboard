// firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD-dPhtT21GMRvVK9KORBrcPloqHgqxVHE",
  authDomain: "productivity-dashboard-13c78.firebaseapp.com",
  projectId: "productivity-dashboard-13c78",
  storageBucket: "productivity-dashboard-13c78.appspot.com",
  messagingSenderId: "750427758533",
  appId: "1:750427758533:web:367302e97a76a4645e75ac",
  measurementId: "G-4YCGNXL01X",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
