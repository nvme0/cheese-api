import React from "react";
import axios from "axios";
import { QueryClient, QueryClientProvider } from "react-query";
import { render, screen } from "@testing-library/react";

import HomePage from ".";
import { API_URL } from "@app/constants";

const createWrapper = (component: JSX.Element) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
  return <QueryClientProvider client={queryClient}>{component}</QueryClientProvider>;
};

jest.mock("axios", () => {
  return {
    get: jest.fn(() => Promise.resolve({ data: [] })),
  };
});
const mockAxiosGet = axios.get as jest.Mock;

describe("HomePage", () => {
  it("makes a call to fetch the cheeses", () => {
    render(createWrapper(<HomePage />));
    expect(mockAxiosGet).toHaveBeenCalledTimes(1);
    expect(mockAxiosGet).toHaveBeenCalledWith(`${API_URL}/cheeses`, { responseType: "json" });
  });

  it("renders a loading screen while fetching the cheeses", () => {
    render(createWrapper(<HomePage />));
    const loadingText = screen.getByText("loading...");
    expect(loadingText).toBeInTheDocument();
  });
});
