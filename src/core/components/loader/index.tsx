import React from "react";
import { RotatingSquare } from "react-loader-spinner";
import "./style.css";
import { useTheme } from "styled-components";

const Loader = () => {

  const theme = useTheme();
  const primary = theme.colors.primary;

  return (
    <div className="loader-container" id = "test">
      <RotatingSquare
        visible={true}
        height="200"
        width="200"
        color={primary}
        ariaLabel="rotating-square-loading"
        wrapperStyle={{}}
        wrapperClass="loader"
      />
    </div>
  );
};

export default Loader;
