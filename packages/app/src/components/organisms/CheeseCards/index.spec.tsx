import React from "react";
import { render } from "@testing-library/react";

import CheeseCards from ".";
import cheeses from "../../../__MOCKS__/cheeses";

describe("CheeseCards", () => {
  it("renders correctly", () => {
    const component = render(<CheeseCards cheeses={cheeses} />);
    expect(component).toMatchSnapshot();
  });
});
