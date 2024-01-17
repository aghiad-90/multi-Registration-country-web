import React from "react";
import { it } from "@jest/globals";
import TextInput from "..";
import { fireEvent, render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

const mockedThem = {
  colors: {
    primary: "",
    secondary: "",
  },
};

describe("testing Text Input  Component", () => {
  it("Modal props should work as expected", () => {
    const tree = render(
      <ThemeProvider theme={mockedThem}>
        <TextInput label="username" required  = {true}/>
      </ThemeProvider>
    );

    expect(
      tree.getByPlaceholderText("username").getAttribute("placeholder")
    ).toEqual("username");

    expect(
        tree.getByPlaceholderText("username").getAttribute("value")
      ).toEqual("");
  });
});
