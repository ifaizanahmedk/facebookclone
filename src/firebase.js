import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuDZrXb_ze_plRZB9O9UEXCYsrO06ealU",
  authDomain: "facebook-app-clone.firebaseapp.com",
  databaseURL: "https://facebook-app-clone.firebaseio.com",
  projectId: "facebook-app-clone",
  storageBucket: "facebook-app-clone.appspot.com",
  messagingSenderId: "179893487102",
  appId: "1:179893487102:web:5bed1be64c23fd573cecaf",
  measurementId: "G-1K14H1ZTJG"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);

export const userRef = firebaseApp.database().ref('users');

export const postRef = firebaseApp.database().ref('posts');