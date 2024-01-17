import React from "react";
import ReactLanguageSelect from "react-languages-select";

//import css module
import "react-languages-select/css/react-languages-select.css";
const LanguageSelect = ({ onSelect }) => {
  return (
    <ReactLanguageSelect
      defaultLanguage="en"
      onSelect={onSelect}
      testID = "language"
    />
  );
};

export default LanguageSelect;