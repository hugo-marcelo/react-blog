import React from "react";
import { render } from "@testing-library/react";
import Publication from "../../pages/Publication";

const mockedHistoryPush = jest.fn();
const mockedSelector = jest.fn();

jest.mock("react-router-dom", () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush,
    }),
  };
});

jest.mock("react-redux", () => {
  return {
    useSelector: () => mockedSelector,
  };
});

describe("Publication Page", () => {
  it("should render correctly", () => {
    expect(() => {
      render(<Publication />);
    }).not.toThrow();
  });
});
