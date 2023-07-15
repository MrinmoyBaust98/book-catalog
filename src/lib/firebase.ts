import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAv3w5SjNCZ9JGsRhV2JYYgsPZrL3D0ziU",
  authDomain: "book-catalog-77867.firebaseapp.com",
  projectId: "book-catalog-77867",
  storageBucket: "book-catalog-77867.appspot.com",
  messagingSenderId: "289551964960",
  appId: "1:289551964960:web:ddc5890108602f726ad545",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
