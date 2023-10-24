import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAa7IzYAF7tqa2vcjjZWyXTKAiGXGdq7hg",
  authDomain: "fir-training-31710.firebaseapp.com",
  projectId: "fir-training-31710",
  storageBucket: "fir-training-31710.appspot.com",
  messagingSenderId: "558491701077",
  appId: "1:558491701077:web:aac88649855c6b829269dc",
};

initializeApp(firebaseConfig);

const db = getFirestore();

export const colRef = collection(db, "themes");
