import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
   apiKey: "apiKey",
   authDomain: "authDomain",
   projectId: "projectId",
   storageBucket: "storageBucket",
   messagingSenderId: "messagingSenderId",
   appId: "appId"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp)
export { db }