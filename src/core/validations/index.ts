import { CountryCode } from "../types/index.tsx";
import { TFunction } from "i18next";

const regularExpression = {
  ALPHABETS_ONLY: /[a-zA-Z ]+$/i,
  FIRST_CHAR_SHOULD_BE_LETTER: /^[A-Za-z]*[A-Za-z][A-Za-z0-9-. _]*$/i,
};

// these Validation could be fetched from the backend

export const userInputValidation = (t: TFunction) => ({
  [CountryCode.UAE]: {
    username: {
      required: t("prelogin.validation.required"),
      minLength: {
        value: 5,
        message: t("prelogin.validation.userName1"),
      },
    },
    password: {
      required: t("prelogin.validation.required"),
      minLength: {
        value: 6,
        message: t("prelogin.validation.psw"),
      },
    },
  },
  [CountryCode.EGYPT]: {
    username: {
      required: t("prelogin.validation.required"),
      minLength: {
        value: 5,
        message: t("prelogin.validation.userName1"),
      },
      pattern: {
        value: regularExpression.ALPHABETS_ONLY,
        message: t("prelogin.validation.userName3"),
      },
    },
    password: {
      required: t("prelogin.validation.required"),
      minLength: {
        value: 6,
        message: t("prelogin.validation.psw"),
      },
    },
  },
  [CountryCode.INDIA]: {
    username: {
      required: t("prelogin.validation.required"),
      minLength: {
        value: 6,
        message: t("prelogin.validation.userName3"),
      },
      pattern: {
        value: regularExpression.FIRST_CHAR_SHOULD_BE_LETTER,
        message: t("prelogin.validation.firstChaIsLetter"),
      },
    },
    password: {
      required: t("prelogin.validation.required"),
      minLength: {
        value: 6,
        message: t("prelogin.validation.psw"),
      },
    },
  },
  [CountryCode.SPAIN]: {
    username: {
      required: t("prelogin.validation.required"),
      minLength: {
        value: 5,
        message: t("prelogin.validation.userName1"),
      },
    },
    password: {
      required: t("prelogin.validation.required"),
      minLength: {
        value: 6,
        message: t("prelogin.validation.psw"),
      },
    },
  },
});

export const defaultCountryValidation = (t: TFunction) => ({
  username: {
    required: t("prelogin.validation.required"),
    minLength: {
      value: 5,
      message: t("prelogin.validation.userName1"),
    },
  },
  password: {
    required: t("prelogin.validation.required"),
    minLength: {
      value: 6,
      message: t("prelogin.validation.psw"),
    },
  },
});
