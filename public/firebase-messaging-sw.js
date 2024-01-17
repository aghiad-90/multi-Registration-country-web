importScripts("https://www.gstatic.com/firebasejs/7.20.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.20.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
  apiKey: "AIzaSyDemPznqZxf-FBaCO-CxDO_yeKZGwCjs_I",
  authDomain: "multicountryreg.firebaseapp.com",
  projectId: "multicountryreg",
  storageBucket: "multicountryreg.appspot.com",
  messagingSenderId: "1090027658890",
  appId: "1:1090027658890:web:dd2fcc8d22a47223dc9773",
  measurementId: "G-JL36SXYSKJ",
});

const initMessaging = firebase.messaging();