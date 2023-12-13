import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASQXVhlQ6A1THCrllWvjg_vcOMpMVYyTM",
  authDomain: "todo-quimica.firebaseapp.com",
  projectId: "todo-quimica",
  storageBucket: "todo-quimica.appspot.com",
  messagingSenderId: "1097402103127",
  appId: "1:1097402103127:web:2b807b2afcbcfc1ac9ba12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </>
);
