// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const firebaseApiKey = import.meta.env.VITE_FIREBASE_API_KEY;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: firebaseApiKey,
  authDomain: "trash-mark.firebaseapp.com",
  projectId: "trash-mark",
  storageBucket: "trash-mark.appspot.com",
  messagingSenderId: "883773779524",
  appId: "1:883773779524:web:45af058d5971e3ed5b1611"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);



// rules_version = '2'; 
// service firebase.storage { 
//   match /b/{bucket}/o { 
//     // Allow uploads for images, Word documents, and PDFs 
//     match /{folder}/{documentId} { 
//       allow read;
//       allow write: if request.resource.size < 5 * 1024 * 1024 && ( request.resource.contentType.matches('image/.*') || request.resource.contentType.matches('application/pdf') || request.resource.contentType.matches('application/msword') || request.resource.contentType.matches('application/vnd.openxmlformats-officedocument.wordprocessingml.document')); 
//     } 
//   } 
// }