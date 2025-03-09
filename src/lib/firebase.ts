import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getFunctions } from "firebase/functions";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCz5jsRVUpLV4sY7Y3YJ36ux-oBPS2mtFE",
  authDomain: "valuthomes-ng.firebaseapp.com",
  projectId: "valuthomes-ng",
  storageBucket: "valuthomes-ng.firebasestorage.app",
  messagingSenderId: "155069594855",
  appId: "1:155069594855:web:ab5a5ff5a5c113d5527642",
  measurementId: "G-MLPJ9WE7KY",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const functions = getFunctions(app);
export const messaging = getMessaging(app);
