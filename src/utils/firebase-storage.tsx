import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB20YjjtG86glJOR7AicRtGS4HlFEnx4Fg",
  authDomain: "ecommerce-shop-web-app.firebaseapp.com",
  projectId: "ecommerce-shop-web-app",
  storageBucket: "ecommerce-shop-web-app.appspot.com",
  messagingSenderId: "439637370133",
  appId: "1:439637370133:web:c29bd1a990bfa73337351c"
};

export const app = initializeApp(firebaseConfig);