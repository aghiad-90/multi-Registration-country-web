import React, { useEffect } from "react";
import BasicGrid from "../core/components/grid/index.tsx";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import useTranslation from "../core/hooks/useTranslation.ts";
import { Link } from "react-router-dom";
import Auth from "../features/uiview/Auth.tsx";
import "./style.css";
import { registerUser } from "../core/network/firebase.ts";
import { useTheme } from "styled-components";
import Modal from "../core/components/modal/index.tsx";
import Loader from '../core/components/loader/index.tsx'
import * as Actions from '../features/prelogin/store/actions.ts'

const Registration = () => {
  const { t } = useTranslation();
  const { response, error , loading} = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const theme = useTheme();
  const primary = theme.colors.primary;
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalContent, setModalContent] = React.useState("");

  const onPress = (e) => {
    dispatch(Actions.signupRequest())
    // we should always keep in mind to secure the data while communicating
    // with the Api to secure the data
    // since I am using Firebase sdk it does this for us
    // we have many ways to secure the data
    // like the following
    // const hashedPassword = Crypto.SHA256(password).toString();
    // and similary for the user name or any sensitive data
    registerUser(e, dispatch, t);
  };

  useEffect(() => {
    if (error) {
      setModalOpen(true);
      setModalContent(error?.error);
    }
  }, [error]);

  useEffect(() => {
    if (response) {
      setModalOpen(true);
      setModalContent(response?.data);
    }
  }, [response]);

  return (
    <BasicGrid>
     { loading && <Loader />}
      <p className="sceen-Title">{t("prelogin.regisgterTitle")}</p>
      <Stack spacing={5} direction="column">
        <Auth onSubmit={(e) => onPress(e)} label={t("global.register")} />
        <p className="sceen-Title">{t("prelogin.haveAlreadyAccount")}</p>
        <Link className="label" to="/login" style={{ color: primary }}>
          <p>{t("prelogin.login")}</p>
        </Link>
      </Stack>
      <Modal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        primaryLabel={t("global.ok")}
        description={modalContent}
        primaryAction={() => setModalOpen(false)}
      />
    </BasicGrid>
  );
};

export default Registration;
