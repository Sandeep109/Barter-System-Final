import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCq1dDspWzXiCx4Z8F1tNV9y3bd3DClq3I",
  authDomain: "barter-b3717.firebaseapp.com",
  databaseURL: "https://barter-b3717-default-rtdb.firebaseio.com",
  projectId: "barter-b3717",
  storageBucket: "barter-b3717.appspot.com",
  messagingSenderId: "1020150410796",
  appId: "1:1020150410796:web:99f8813f4f6d3a7f4c2b89"
};
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
