import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, serverTimestamp } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFDVubvglyBxiyd9Vh9ti2ftYEpfkmAUk",
  authDomain: "imoney-3aed6.firebaseapp.com",
  projectId: "imoney-3aed6",
  storageBucket: "imoney-3aed6.appspot.com",
  messagingSenderId: "989052768448",
  appId: "1:989052768448:web:2cbd4fcce1bbeb13d0dd25",
  measurementId: "G-93XB7JMBQN",
};

const app = initializeApp(firebaseConfig);

const projectAuth = getAuth(app);
const projectFirestore = getFirestore(app);
const timestamp = serverTimestamp();

export { projectAuth, projectFirestore, timestamp };
