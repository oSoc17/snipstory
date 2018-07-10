import firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyCp0nRqtsjwrR3W_49LzHkM4ghOsNglBGU',
  authDomain: 'snipstory-dev.firebaseapp.com',
  databaseURL: 'https://snipstory-dev.firebaseio.com',
  projectId: 'snipstory-dev',
  storageBucket: 'snipstory-dev.appspot.com',
  messagingSenderId: '530521724254'
};

firebase.initializeApp(config);

export const firebaseDatabase = firebase.database();
export const firebaseStorage = firebase.storage;
export const firebaseAuth = firebase.auth();

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
