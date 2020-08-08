import React from "react";
import { render } from "@testing-library/react";
import Home from "../../pages/Home";

const mockedHistoryPush = jest.fn();
const mockedDispatch = jest.fn();

jest.mock("react-router-dom", () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush,
    }),
  };
});

jest.mock("react-redux", () => {
  return {
    useDispatch: () => mockedDispatch,
  };
});

describe("Home Page", () => {
  it("should render correctly", () => {
    expect(() => {
      render(<Home />);
    }).not.toThrow();
  });

  it("should show no register found if none publications exists", () => {
    const { getByTestId } = render(<Home />);

    const noRegister = getByTestId("no-register-found");

    expect(noRegister).toBeDefined();
  });
});
