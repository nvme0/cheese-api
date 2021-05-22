import { Cheese } from "../types";

export const organicFeta: Cheese = {
  id: "9ac773e1-c953-4ba8-90d3-02e0eeddef44",
  name: "Organic Feta",
  imageUrl: "https://cheese.com/media/img/cheese/Feta_.jpg",
  color: "white",
  pricePerKilo: 549,
};

export const somersetBrie: Cheese = {
  id: "3ac413d1-36e5-43fd-a050-785a522cd940",
  name: "Somerset Brie",
  imageUrl: "https://cheese.com/media/img/cheese/brie.jpg",
  color: "white",
  pricePerKilo: 325,
};

export const mascarpone: Cheese = {
  id: "c56777da-0d78-4bad-ad35-57c546ce6387",
  name: "Mascarpone (Australian)",
  imageUrl: "https://cheese.com/media/img/cheese/1186-mascarpone_australian.jpg",
  color: "ivory",
  pricePerKilo: 199,
};

export const cottageCheese: Cheese = {
  id: "a2553e96-05e7-48bd-ab8b-8c70350be2f0",
  name: "Cottage Cheese (Australian)",
  imageUrl: "https://cheese.com/media/img/cheese/Cottagecheese.jpg",
  color: "white",
  pricePerKilo: 399,
};

export const dryJack: Cheese = {
  id: "f411ab0a-306e-47e0-a7ef-31c4b4ede802",
  name: "Dry Jack",
  imageUrl: "https://cheese.com/media/img/cheese/427px-Sonoma_Dry_Jack.jpg",
  color: "pale yellow",
  pricePerKilo: 249,
};

export default [organicFeta, somersetBrie, mascarpone, cottageCheese, dryJack];
