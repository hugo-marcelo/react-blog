import React from "react";

import { render } from "@testing-library/react";
import Card from "../../components/Card";

describe("Card component", () => {
  it("should be able to render a card", () => {
    var data = {
      title: "Título",
    };

    const { container } = render(<Card data={data}></Card>);

    expect(container.querySelector("h4")).toBeTruthy();
  });
});
