

import { createApp } from 'vue'
import App from './App.vue'
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

createApp(App).mount('#app')

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyDjGTbcmAtcRFVhJ4sbe88ht9bln0O2Ork",
  authDomain: "echipa6-11d55.firebaseapp.com",
  projectId: "echipa6-11d55",
  storageBucket: "echipa6-11d55.appspot.com",
  messagingSenderId: "538418421472",
  appId: "1:538418421472:web:af167b13a246526cb9ba85",
  measurementId: "G-KFNGG6257S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);