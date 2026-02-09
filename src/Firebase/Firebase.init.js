// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-ZwL1GumRqMGpY0N_MkC2Wu3eo4sXVIY",
  authDomain: "fir-auth-concept-e7fdc.firebaseapp.com",
  projectId: "fir-auth-concept-e7fdc",
  storageBucket: "fir-auth-concept-e7fdc.firebasestorage.app",
  messagingSenderId: "857523063130",
  appId: "1:857523063130:web:076433adcdea49d13c8b63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
