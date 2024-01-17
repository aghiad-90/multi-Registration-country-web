import React from "react";
import { it } from "@jest/globals";
import Button from "../";
import {fireEvent, render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

const onPressMock = jest.fn();



describe("testing Button Component", () => {
  it("props should passed as expected", () => {
    const mockedThem = {
      colors  :{
        primary : '',
        secondary : ''
      }
    };
    const tree = render(
      <ThemeProvider theme = {mockedThem}>
        <Button  label = "testLabel" onClick = {onPressMock} />
      </ThemeProvider>
    );

    expect(tree.getByRole('button').lastChild.textContent).toEqual("testLabel")
    fireEvent.click(tree.getByRole('button'))
    expect(onPressMock).toHaveBeenCalledTimes(1)
  });
});
