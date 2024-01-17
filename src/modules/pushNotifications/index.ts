import { getMessaging, getToken } from "firebase/messaging";
import { firebaseConfig } from "../../core/network/firebase.ts";
import firebase from "firebase/compat/app";

firebase.initializeApp(firebaseConfig);

export default firebase;

export const getFirebaseMessagingToken = () => {
  const messaging = getMessaging();
  getToken(messaging, {
    vapidKey:
      "BFSFXt8b3r2VxVylwtDOujgKlDHDAvSa809SjGjzxsAYVW7cjYc6YXS_RxaGbHxPUGswjpL5qpU1DcjjSiz6BbU",
  })
    .then((currentToken) => {
      if (currentToken) {
        // Send the token to your server and update the UI if necessary
        console.log("currentToken", currentToken);
      } else {
        // Show permission request UI
        console.log(
          "No registration token available. Request permission to generate one."
        );
        // ...
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
      // ...
    });
};

export const requestPermission = () => {
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("Notification permission granted.");
    }
  });
};