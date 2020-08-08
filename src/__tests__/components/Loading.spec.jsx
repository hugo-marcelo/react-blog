import React from "react";

import { render } from "@testing-library/react";
import Loading from "../../components/Loading";

const mockedSelector = jest.fn();

jest.mock("react-redux", () => {
  return {
    useSelector: () => mockedSelector,
  };
});

describe("Loading component", () => {
  it("should be able to render a loading", () => {
    const { container } = render(<Loading />);

    expect(container.querySelector("div[id='loading']")).toBeTruthy();
  });
});
