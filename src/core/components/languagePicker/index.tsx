import React from "react";
import ReactLanguageSelect from "react-languages-select";
import {languages} from '../../languages/index.ts'

//import css module
import "react-languages-select/css/react-languages-select.css";
const LanguageSelect = ({ onSelect }) => {
  return (
    <ReactLanguageSelect
      defaultLanguage="en"
      onSelect={onSelect}
      testID = "language"
      languages={languages.map((language) => (language.value))}
    />
  );
};

export default LanguageSelect;