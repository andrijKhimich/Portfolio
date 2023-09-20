import {
  initializeApp
} from 'firebase/app';
import {
  getFirestore
} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDgF-xTIi8WlEvjX7WT4pFkHAPuE-9AjWI",
  authDomain: "khimich-71f2b.firebaseapp.com",
  projectId: "khimich-71f2b",
  storageBucket: "khimich-71f2b.appspot.com",
  messagingSenderId: "285827095145",
  appId: "1:285827095145:web:22727b9e3acc3340a860f8"
};

initializeApp(firebaseConfig);

const db = getFirestore();

export {
  db
}