import React from "react";
import { it } from "@jest/globals";
import Registration from "../Registration.tsx";
import { fireEvent, render } from "@testing-library/react";
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
    error: { error: "error message" },
    response: null,
  },
  userPref: {
    country: "",
  },
};

const mockStateWithSuccessResponse = {
  authReducer: {
    loading: false,
    error: null,
    response: { data: "account created successfully" },
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

describe("testing Registration page", () => {
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
            <Registration />
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    );
    expect(tree.getByRole("button").disabled).toBeTruthy();
    expect(tree.queryByText("primary")).toBeFalsy();
  });
});

describe("testing Registration page", () => {
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

  it("it should open the success modal afer creating the account", () => {
    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider theme={mockedThem}>
            <Registration />
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    );
    expect(tree.queryByText("account created successfully")).toBeTruthy();
  });
});

describe("testing Registration page", () => {
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

  it("it should open error modal if creating the account is failed", () => {
    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider theme={mockedThem}>
            <Registration />
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    );
    expect(mockedNavigate).not.toHaveBeenCalled();
    expect(tree.getByText("error message")).toBeTruthy();
  });
});
