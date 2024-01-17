import React from "react";
import { it } from "@jest/globals";
import LanguagePicker from "..";
import {render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

describe("testing Language Picker Component", () => {
  it("Default language should be English", () => {
    const mockedThem = {
      colors  :{
        primary : '',
        secondary : ''
      }
    };
    const tree = render(
      <ThemeProvider theme = {mockedThem}>
        <LanguagePicker />
      </ThemeProvider>
    );
    expect(tree.getByText('English')).toBeTruthy()
  });
});
