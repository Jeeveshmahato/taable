import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase/app'; // Import only the core Firebase module
import 'firebase/firestore'; // Import other Firebase services if needed
import firebaseConfig from './firebaseConfig'; // Import your Firebase configuration

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
