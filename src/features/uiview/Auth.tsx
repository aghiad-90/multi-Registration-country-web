import React from "react";
import useTranslation from "../../../src/core/hooks/useTranslation.ts";
import { useForm } from "react-hook-form";
import { styled } from "@mui/system";
import "./style.css";
import { useTheme } from "styled-components";
import { useSelector } from "react-redux";
import {
  userInputValidation,
  defaultCountryValidation,
} from "../../../src/core/validations/index.ts";

interface IFormInput {
  username: string;
  password: string;
}

interface UserAuthProps {
  onSubmit: IFormInput;
  label: string;
}

const UserAuth = (props: UserAuthProps) => {
  const { onSubmit, label } = props;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IFormInput>();

  const { t } = useTranslation();
  const theme = useTheme();
  const primary = theme.colors.primary;
  const { country } = useSelector((state) => state.userPref);

  const validation =
    userInputValidation(t)[country.toUpperCase()] ?? defaultCountryValidation;

    return (
    <div className=".form-box">
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputElement
          className="inputText"
          placeholder={t("prelogin.userName")}
          {...register("username", {
            ...validation?.username,
          })}
        />
        {errors?.username && (
          <p className="errorText">{errors?.username?.message}</p>
        )}
        <InputElement
          className="inputText"
          type="password"
          placeholder={t("prelogin.password")}
          {...register("password", {
            ...validation?.password,
          })}
        />
        {errors?.password && (
          <p className="errorTextPsw">{errors?.password?.message}</p>
        )}
        <input
          style={{ backgroundColor: primary }}
          className="submit"
          type="submit"
          value={label}
          disabled={isSubmitting}
        />
      </form>
    </div>
  );
};

export default UserAuth;

const blue = {
  100: "#DAECFF",
  200: "#80BFFF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const InputElement = styled("input")(
  ({ theme }) => `
  width: 320px;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 8px 12px;
  position : relative;
  border-radius: 8px;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  box-shadow: 0px 2px 2px ${
    theme.palette.mode === "dark" ? grey[900] : grey[50]
  };

  &:hover {
    border-color: ${blue[400]};
  }

  &:focus {
    border-color: ${blue[400]};
    box-shadow: 0 0 0 3px ${
      theme.palette.mode === "dark" ? blue[600] : blue[200]
    };
  }
  // firefox
  &:focus-visible {
    outline: 0;
  }
`
);
