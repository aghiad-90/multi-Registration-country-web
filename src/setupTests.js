// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';


const mockedDispatch = jest.fn();

jest.mock("firebase/auth", () => ({
    getAuth: jest.fn(),
    signInWithEmailAndPassword: jest.fn(),
    createUserWithEmailAndPassword: jest.fn(),
    signOut: jest.fn(),
  }));
  
  jest.mock("firebase/app", () => ({
    initializeApp: jest.fn(),
  }));
  
  jest.mock("firebase/messaging", () => ({
    getMessaging: jest.fn(),
  }));
  
  jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useDispatch: jest.fn(() => mockedDispatch),
    useSelector: jest.fn(),
  }));
