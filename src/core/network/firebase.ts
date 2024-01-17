import { TFunction } from "i18next";
import * as Actions from "../../features/prelogin/store/actions.ts";

import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getMessaging } from "firebase/messaging";


export const firebaseConfig = {
  apiKey: "AIzaSyDemPznqZxf-FBaCO-CxDO_yeKZGwCjs_I",
  authDomain: "multicountryreg.firebaseapp.com",
  projectId: "multicountryreg",
  storageBucket: "multicountryreg.appspot.com",
  messagingSenderId: "1090027658890",
  appId: "1:1090027658890:web:dd2fcc8d22a47223dc9773",
  measurementId: "G-JL36SXYSKJ",
};


export const registerUser = (userData: any, dispatch: any, t: TFunction) => {
  const { username, password } = userData;
  console.log("registerUser", userData);
  const email = username + "@gmail.com";
  // since we are using Firebase as a backend service
  // we will get username and append it to email format

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      dispatch(
        Actions.signupRequestSuccess({
          data: t("prelogin.signupSuccess"),
        })
      );
    })
    .catch((error) => {
      console.log("err", error);
      if (error.code === "auth/email-already-in-use") {
        dispatch(
          Actions.signupRequestError({
            error: t("prelogin.userNameused"),
          })
        );
      } else if (error.code === "auth/invalid-email") {
        dispatch(
          Actions.signupRequestError({
            error: "That email address is invalid!",
          })
        );
      } else {
        dispatch(
          Actions.signupRequestError({
            error: t("prelogin.checkusername"),
          })
        );
      }
    });
};

export const loginUser = (userData: any, dispatch: any, t: TFunction) => {
  const { username, password } = userData;
  const email = username + "@gmail.com";
  // since we are using Firebase as a backend service
  // we will get username and append it to email format

  signInWithEmailAndPassword(auth, email, password)
    .then((response) => {
      dispatch(Actions.signInRequestSuccess(response));
    })
    .catch(() => {
      dispatch(
        Actions.signInRequestError({
          error: t("prelogin.wrongcredentials"),
        })
      );
    });
};

export const signOutUser = (navigate) => {
  signOut(auth)
    .then(() => {
      navigate("/");
    })
    .catch((error) => {
      console.log(error, "signout error");
    });
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const messaging = getMessaging(app);
