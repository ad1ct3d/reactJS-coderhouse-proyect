import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";
// import { addDoc, getFirestore, collection } from '@firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyAUnXfXbsWThzgSjNsQQwuFzfYB-r6Hkvo",

  authDomain: "paulisseriereactapp.firebaseapp.com",

  projectId: "paulisseriereactapp",

  storageBucket: "paulisseriereactapp.appspot.com",

  messagingSenderId: "824934486393",

  appId: "1:824934486393:web:ff67c130e605ff3dccdfa8",

  measurementId: "G-3FDDM5HT35"

};


// Initialize Firebase

initializeApp(firebaseConfig);

// carga de productos en firebase

// const data = [
//   {
//       titulo: 'torta vainilla',
//       sabor: 'vainilla',
//       precio: 50,
//       productID: '0',
//       categoryID: 'tortas-simples',
//       stock: 10,
//       cantidad: 0
//   },
//   {
//       titulo: 'torta chocolate',
//       sabor: 'chocolate',
//       precio: 80,
//       productID: '1',
//       categoryID: 'tortas-simples',
//       stock: 10,
//       cantidad: 0
//   },
//   {
//       titulo: 'torta limon',
//       sabor: 'limon',
//       precio: 100,
//       productID: '2',
//       categoryID: 'tortas-simples',
//       stock: 10,
//       cantidad: 0
//   },
//   {
//       titulo: 'cheese cake',
//       sabor: 'vainilla',
//       precio: 1000,
//       productID: '3',
//       categoryID: 'tortas-elaboradas' ,
//       stock: 10,
//       cantidad: 0
//   }
// ]

// const db = getFirestore()
// const ref = collection(db, 'products')

// data.map((product) => addDoc(ref, product))

// const analytics = getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
