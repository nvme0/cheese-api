import React from "react";
import { render, screen } from "@testing-library/react";

import CheeseCard from ".";
import { organicFeta } from "../../../__MOCKS__/cheeses";
import { Cheese } from "@app/types";
import centsToDollars from "@utils/centsToDollars";

const renderCheeseCard = (cheese: Cheese) => {
  const { name, color, imageUrl, pricePerKilo } = cheese;
  return render(<CheeseCard title={name} color={color} imageUrl={imageUrl} pricePerKilo={pricePerKilo} />);
};

describe("CheeseCard", () => {
  it("renders correctly", () => {
    const component = renderCheeseCard(organicFeta);
    expect(component).toMatchSnapshot();
  });

  it("contains a title", () => {
    const { name } = organicFeta;
    renderCheeseCard(organicFeta);
    const title = screen.getByText(name);
    expect(title).toBeInTheDocument();
  });

  it("contains the color", () => {
    const { color } = organicFeta;
    renderCheeseCard(organicFeta);
    const title = screen.getByText(`Color: ${color}`);
    expect(title).toBeInTheDocument();
  });

  it("contains the price per kilo", () => {
    const { pricePerKilo } = organicFeta;
    renderCheeseCard(organicFeta);
    const title = screen.getByText(`Price Per Kilo: $${centsToDollars(pricePerKilo)}`);
    expect(title).toBeInTheDocument();
  });
});
