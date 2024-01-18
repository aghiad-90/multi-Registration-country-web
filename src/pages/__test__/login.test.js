import React from "react";
import { it } from "@jest/globals";
import Login from "../Login.tsx";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { store } from "../../state";
import { useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { useForm } from "react-hook-form";

jest.mock("react-hook-form");

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

const mockStateWithErrorResponse = {
  authReducer: {
    loading: false,
    error: null,
    userData: {
      response: null,
      error: { error: "error message" },
    },
  },
  userPref: {
    country: "",
  },
};

const mockStateWithSuccessResponse = {
  authReducer: {
    loading: false,
    error: null,
    userData: {
      response: {},
      error: null,
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

const mockedNavigate = jest.fn();

jest.mock("react-router-dom", () => {
  const originalModule = jest.requireActual("react-router-dom");
  return {
    ...originalModule,
    useParams: jest.fn(),
    useHistory: jest.fn(),
    useNavigate: () => mockedNavigate,
  };
});

describe("testing Login Screen", () => {
  beforeEach(() => {
    useSelector.mockImplementation((callback) => {
      return callback(mockState);
    });
  });

  beforeEach(() => {
    useForm.mockImplementation(() => ({
      handleSubmit: jest.fn(),
      formState: {
        errors: {},
        isDirty: true,
        isSubmitting: true,
        isValid: true,
      },
      register: jest.fn(),
      watch: jest.fn(),
    }));
  });

  it("button should be disabled while form is submitting", () => {
    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider theme={mockedThem}>
            <Login />
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    );
    expect(tree.getByRole("button").disabled).toBeTruthy();
    expect(tree.queryByText("primary")).toBeFalsy();
  });
});

describe("testing Login Screen", () => {
  beforeEach(() => {
    useForm.mockImplementation(() => ({
      handleSubmit: jest.fn(),
      formState: {
        errors: {},
        isDirty: true,
        isSubmitting: true,
        isValid: true,
      },
      register: jest.fn(),
      watch: jest.fn(),
    }));
  });

  beforeEach(() => {
    useSelector.mockImplementation((callback) => {
      return callback(mockStateWithSuccessResponse);
    });
  });

  it("it should navigate to the Dashboard after successfully get the response", () => {
    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider theme={mockedThem}>
            <Login />
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    );
    expect(mockedNavigate).toHaveBeenCalledWith("/dashboard");
  });
});

describe("testing Login Screen", () => {
  beforeEach(() => {
    useForm.mockImplementation(() => ({
      handleSubmit: jest.fn(),
      formState: {
        errors: {},
        isDirty: true,
        isSubmitting: true,
        isValid: true,
      },
      register: jest.fn(),
      watch: jest.fn(),
    }));
  });

  beforeEach(() => {
    useSelector.mockImplementation((callback) => {
      return callback(mockStateWithErrorResponse);
    });
  });

  it("it should navigate to the Dashboard after successfully get the response", () => {
    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider theme={mockedThem}>
            <Login />
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    );
    expect(mockedNavigate).not.toHaveBeenCalled();
    expect(tree.getByText("error message")).toBeTruthy();
  });
});
