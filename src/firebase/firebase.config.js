// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAQGPL1dk_kpW6uX26oTsszG8_fV_1yDms',
  authDomain: 'blood-donation-1f530.firebaseapp.com',
  projectId: 'blood-donation-1f530',
  storageBucket: 'blood-donation-1f530.appspot.com',
  messagingSenderId: '581802888749',
  appId: '1:581802888749:web:124a38611abe767cbab2a4',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
