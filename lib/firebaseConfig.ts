// lib/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "API_KEYİNİZİ_BURAYA_YERLEŞTİRİN",
  authDomain: "canlidestek.firebaseapp.com",
  projectId: "canlidestek",
  storageBucket: "canlidestek.appspot.com",
  messagingSenderId: "000000000000",
  appId: "1:000000000000:web:xxxxxxxxxxxxxxxx"
};

// Firebase uygulamasını başlat
const app = initializeApp(firebaseConfig);

// Kimlik doğrulama servislerini dışa aktar
export const auth = getAuth(app);