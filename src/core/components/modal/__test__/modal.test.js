import React from "react";
import { it } from "@jest/globals";
import Modal from "..";
import { fireEvent, render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

const mockedThem = {
  colors: {
    primary: "",
    secondary: "",
  },
};

const primaryActionMocked = jest.fn();
const secondaryActionMocked = jest.fn();

describe("testing Modal Component", () => {
  it("Modal props should work as expected", () => {
    const tree = render(
      <ThemeProvider theme={mockedThem}>
        <Modal />
      </ThemeProvider>
    );
    expect(tree.queryByRole("button")).toBeFalsy();
    expect(tree.queryByText("primary")).toBeFalsy();
    expect(tree.queryByText("secondary")).toBeFalsy();

    tree.rerender(
      <ThemeProvider theme={mockedThem}>
        <Modal
          primaryLabel="primary"
          secondaryLabel="secondary"
          modalOpen
          primaryAction={primaryActionMocked}
          secondaryAction={secondaryActionMocked}
        />
      </ThemeProvider>
    );
    expect(tree.queryByText("primary")).toBeTruthy();
    fireEvent.click(tree.queryByText("primary"));
    expect(primaryActionMocked).toHaveBeenCalledTimes(1);
    expect(tree.queryByText("secondary")).toBeTruthy();
    fireEvent.click(tree.queryByText("secondary"));
    expect(secondaryActionMocked).toHaveBeenCalledTimes(1);
  });
});
