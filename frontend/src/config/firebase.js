import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB8QwIBqMtonUqrIgDqdyy5p7P0f3MxUeE",
    authDomain: "blog-app-mu2.firebaseapp.com",
    projectId: "blog-app-mu2",
    storageBucket: "blog-app-mu2.firebasestorage.app",
    messagingSenderId: "550483893151",
    appId: "1:550483893151:web:fad7bee0e6c63ff5037baa",
    measurementId: "G-64R18C5HDS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;