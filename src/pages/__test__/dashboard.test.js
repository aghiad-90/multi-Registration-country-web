import React from "react";
import { it } from "@jest/globals";
import Dashboard from "../Dashboard.tsx";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { store } from "../../state";
import { useSelector } from "react-redux";
import { BrowserRouter} from "react-router-dom";


const mockState = {
  authReducer: {
    loading: false,
    error: null,
    userData: {
      response: {
        user: {
          email: "testUsername",
        },
      },
    },
  },
  userPref: {
    country: "",
  },
};

const mockedThem = {
  colors: {
    primary: "",
    secondary: "",
  },
};

jest.mock("react-hook-form", () => ({
  useForm: jest.fn(() => ({
    control: jest.fn,
  })),
}));

describe("testing Dashboard Screen", () => {
  beforeEach(() => {
    useSelector.mockImplementation((callback) => {
      return callback(mockState);
    });
  });

  it("should render the user name correctly", () => {
    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider theme={mockedThem}>
            <Dashboard />
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    );
    expect(tree.getByText("testUsername").textContent).toEqual("testUsername");
  });
});