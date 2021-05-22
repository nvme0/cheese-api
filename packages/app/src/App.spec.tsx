import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

it("renders 'Hello, World!' text", () => {
  render(<App />);
  const helloWorldText = screen.getByText(/Hello, World!$/i);
  expect(helloWorldText).toBeInTheDocument();
});
