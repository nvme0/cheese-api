import axios from "axios";

import { API_URL } from "../constants";
import { Cheese } from "@app/types";

export const getCheeses = async () => {
  const response = await axios.get(`${API_URL}/cheeses`, {
    responseType: "json",
  });
  return response.data as Cheese[];
};
