//import * as firebase from 'firebase';
import firebase from 'firebase';
import 'firebase/auth';

import 'firebase/storage';
if (firebase.apps.length === 0) {
  const firebaseConfig = {
   apiKey: "AIzaSyAsl3EMGQ5DatU8ZfFGbNv_bXZLkA5-EIM",
  authDomain: "firerecip.firebaseapp.com",
  projectId: "firerecip",
  storageBucket: "firerecip.appspot.com",
  messagingSenderId: "959374659934",
  appId: "1:959374659934:web:2bb2e1997c36cd4043ffcf"
  };
  // Initialize Firebase
  const Firebase = firebase.initializeApp(firebaseConfig);
  let firestore = firebase.firestore();
}
export default firebase;
