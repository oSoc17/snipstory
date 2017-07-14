import firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyAmVHUHVmO5OS1-pKcLP_YkPwffWFhdIu0',
  authDomain: 'ishare-c35bb.firebaseapp.com',
  databaseURL: 'https://ishare-c35bb.firebaseio.com',
  projectId: 'ishare-c35bb',
  storageBucket: 'ishare-c35bb.appspot.com',
  messagingSenderId: '530521724254'
};

firebase.initializeApp(config);

export const firebaseDatabase = firebase.database();
export const firebaseStorage = firebase.storage;
export const firebaseAuth = firebase.auth();

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
