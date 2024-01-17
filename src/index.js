import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Provider, useSelector } from "react-redux";
import { store, persistor } from "./state/index.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome.tsx";
import Registration from "./pages/Registration.tsx";
import Login from "./pages/Login.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import global_en from "./translations/en/global.json";
import global_ar from "./translations/ar/global.json";
import global_in from "./translations/in/global.json";
import global_es from "./translations/es/global.json";
import RootApp from "./App.js";

i18next.init({
  compatibilityJSON: "v3",
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      global: global_en,
    },
    ar: {
      global: global_ar,
    },
    hi: {
      global: global_in,
    },
    es: {
      global: global_es,
    },
  },
});

export default function App() {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18next}>
        <RootApp />
      </I18nextProvider>
    </Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
