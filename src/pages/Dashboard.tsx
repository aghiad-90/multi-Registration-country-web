import React from "react";
import CoreButton from "../core/components/button/index.tsx";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import useTranslation from "../core/hooks/useTranslation.ts";
import * as Actions from "../features/prelogin/store/actions.ts";
import { useNavigate } from "react-router-dom";
import { getValidUserName } from "../core/utils.ts";
import "./style.css";
import Modal from "../core/components/modal/index.tsx";
import { signOutUser } from "../core/network/firebase.ts";


const Dashboard = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userData = {} } = useSelector((state) => state.authReducer);
  const { response = {} } = userData ?? {};
  const { user } = response ?? {};
  const { email = "" } = user ?? {};
  const [modalOpen, setModalOpen] = React.useState(false);

  const handleSignOut = () => {
    dispatch(Actions.clearSignInRequest());
    signOutUser(navigate);
  };

  return (
    <>
      <header>
        <p className="welcome">{t("postlogin.dashboard")}</p>
        <div className="signout">
          <CoreButton
            label={t("postlogin.logout")}
            onClick={() => setModalOpen(true)}
          />
        </div>
      </header>
      <div>
        <Stack spacing={1} className="username">
          <p>{t("postlogin.welcome")}</p>
          <p className="usernameDashboard">{getValidUserName(email)}</p>
        </Stack>
      </div>
      <Modal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        primaryLabel={t("global.ok")}
        primaryAction={handleSignOut}
        secondaryLabel={t("global.no")}
        description={t("postlogin.signout")}
        secondaryAction={() => setModalOpen(false)}
      />
    </>
  );
};

export default Dashboard;
