import React, { useEffect } from "react";
import BasicGrid from "../core/components/grid/index.tsx";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import useTranslation from "../core/hooks/useTranslation.ts";
import { useNavigate } from "react-router-dom";
import Auth from "../features/uiview/Auth.tsx";
import { loginUser } from "../core/network/firebase.ts";
import Modal from "../core/components/modal/index.tsx";
import * as Actions from "../features/prelogin/store/actions.ts";
import Loader from '../core/components/loader/index.tsx'


const Login = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  console.log(useNavigate());
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalContent, setModalContent] = React.useState("");

  const { userData: bacakendResponse = {} } = useSelector(
    (state) => state.authReducer
  );
  const { error, response, loading } = bacakendResponse;
  const onPress = (e) => {
    dispatch(Actions.signInRequest());
    // we should always keep in mind to secure the data while communicating
    // with the Api to secure the data
    // since I am using Firebase sdk it does this for us
    // we have many ways to secure the data
    // like the following
    // const hashedPassword = Crypto.SHA256(password).toString();
    // and similary for the user name or any sensitive data
    loginUser(e, dispatch, t);
  };

  useEffect(() => {
    window.addEventListener('popstate', (e) => {
      window.history.go(1);
    });
  }, []);

  useEffect(() => {
    if (response) {
      navigate("/dashboard");
    }
  }, [response]);

  useEffect(() => {
    if (error) {
      setModalOpen(true);
      setModalContent(error?.error);
    }
  }, [error]);

  return (
    <BasicGrid>
      {loading && <Loader />}
      <p className="sceen-Title">{t("prelogin.login")}</p>
      <Stack spacing={5} direction="column">
        <Auth onSubmit={(e) => onPress(e)} label={t("prelogin.login")} />
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

export default Login;
