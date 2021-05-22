import axios from "axios";

import { getCheeses } from ".";
import cheeses from "../__MOCKS__/cheeses";
import { API_URL } from "@app/constants";

jest.mock("axios", () => {
  return {
    get: jest.fn(() => Promise.resolve({ data: [] })),
  };
});
const mockAxiosGet = axios.get as jest.Mock;

describe("getCheeses", () => {
  it("it returns the cheeses", async () => {
    mockAxiosGet.mockImplementationOnce(() => Promise.resolve({ data: cheeses }));
    const result = await getCheeses();
    expect(result).toEqual(cheeses);
    expect(mockAxiosGet).toHaveBeenCalledTimes(1);
    expect(mockAxiosGet).toHaveBeenCalledWith(`${API_URL}/cheeses`, { responseType: "json" });
  });
});
