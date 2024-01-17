import React, { useEffect, useMemo, useState } from "react";
import CoreButton from "../core/components/button/index.tsx";
import LanguageSelect from "../core/components/languagePicker/index.tsx";
import BasicGrid from "../core/components/grid/index.tsx";
import Select from "react-select";
import countryList from "react-select-country-list";
import Stack from "@mui/material/Stack";
import { CountryCode, LanguageCode } from "../core/types/index.tsx";
import { useDispatch, useSelector } from "react-redux";
import useTranslation from "../core/hooks/useTranslation.ts";
import * as Actions from "../features/prepare/actions.ts";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import Toast from "../core/components/toast/index.tsx";


const Welcome = () => {
  const { t, changeLanguage } = useTranslation();
  const [countryCode, setCountryCode] = useState<CountryCode | "">(
    CountryCode.UAE
  );
  const [language, setLanguage] = useState(LanguageCode.English);
  const navigate = useNavigate();
  const { country } = useSelector((state) => state.userPref);
  const dispatch = useDispatch();
  const countries = useMemo(() => countryList().getData(), []);


  useEffect(() => {
    changeLanguage(language);

  }, [language]);

  const updateCountry = (country: CountryCode) => {
    const { value } = country;
    setCountryCode(country);
    const countryValue = value.toLowerCase();
    dispatch(
      Actions.setUserPreferences({ country: countryValue, lang: language })
    );
  };

  return (
    <BasicGrid>
      <text className="sceen-Title ">{t("prelogin.welcome")}</text>
      <Stack spacing={5} direction="column">
        <div className="country">
          <Select
            defaultValue={"AE"}
            options={countries}
            value={countryCode}
            onChange={(val: CountryCode) => updateCountry(val)}
          />
        </div>
        <LanguageSelect onSelect={setLanguage} />
      </Stack>

      <div className="next" />
      <CoreButton
        onClick={() => navigate("./registration")}
        label={t("global.next")}
        disabled={!country}
      />
    </BasicGrid>
  );
};

export default Welcome;
