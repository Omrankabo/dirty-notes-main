import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
    apiKey: "AIzaSyA6Wx85DakAYy6BWrzELd7k09iDn60xxLY",
    authDomain: "dirty-notes.firebaseapp.com",
    projectId: "dirty-notes",
    storageBucket: "dirty-notes.appspot.com",
    messagingSenderId: "200604804622",
    appId: "1:200604804622:web:f29c4d482dcc0af1273e5f",
    measurementId: "G-BHE5BBSJW8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);