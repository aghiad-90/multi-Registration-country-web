
import i18next from "i18next";
import global_en from "../../translations/en/global.json";
import global_ar from "../../translations/ar/global.json";
import global_in from "../../translations/in/global.json";
import global_es from "../../translations/es/global.json";

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
      in: {
        global: global_in,
      },
      es: {
        global: global_es,
      },
    },
  });

  export default i18next;