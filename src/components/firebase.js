// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8nPMhS98MW_amOgHaFnO-jxFcTSvK2r4",
  authDomain: "out-of-sight-5aa9c.firebaseapp.com",
  projectId: "out-of-sight-5aa9c",
  storageBucket: "out-of-sight-5aa9c.appspot.com",
  messagingSenderId: "663489986994",
  appId: "1:663489986994:web:80a974a398b452e041e4ab",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;
