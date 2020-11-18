import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAzG--zuUDn6eWExDIUakIxgZyaDCtKyEk",
  authDomain: "mariannetravelpty.firebaseapp.com",
  databaseURL: "https://mariannetravelpty.firebaseio.com",
  projectId: "mariannetravelpty",
  storageBucket: "mariannetravelpty.appspot.com",
  messagingSenderId: "309130912421",
  appId: "1:309130912421:web:43b650ce6cf6b59f04634c",
  measurementId: "G-5X5NCCJSCB"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
