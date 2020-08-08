import React from "react";

import { render } from "@testing-library/react";
import Button from "../../components/Button";

describe("Button component", () => {
  it("should be able to render a button", () => {
    const { getByText } = render(
      <Button styleType="default" text="Botão"></Button>
    );

    expect(getByText("Botão")).toBeTruthy();
  });
});
