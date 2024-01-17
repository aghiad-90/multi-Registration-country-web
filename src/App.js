import React, { useEffect } from "react";
import "./index.css";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome.tsx";
import Registration from "./pages/Registration.tsx";
import Login from "./pages/Login.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import { ThemeProvider } from "styled-components";
import { getSelectedTheme } from "../src/themes/handlers.ts";
import { CountryCode } from "../src/core/types/index.tsx";
import {
  requestPermission,
  getFirebaseMessagingToken,
} from "../src/modules/pushNotifications/index.ts";
import { getMessaging, onMessage } from "firebase/messaging";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Toast from "./core/components/toast/index.tsx";


function RootApp() {
  const { country } = useSelector((state) => state.userPref);
  const activeCountry = !!country ? country : CountryCode.UAE;

  const messaging = getMessaging();
  onMessage(messaging, (payload) => {
    toast(
      <>
        <p>{payload.notification.title}</p>
        <p>{payload.notification.body}</p>
      </>
    );
  });

  useEffect(() => {
    requestPermission();
    getFirebaseMessagingToken();
  }, []);

  return (
    <>
      <Toast />
      <ThemeProvider
        theme={getSelectedTheme({ CountryCode: activeCountry.toUpperCase() })}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="Registration" element={<Registration />} />
            <Route path="Login" element={<Login />} />
            <Route path="Dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default RootApp;
