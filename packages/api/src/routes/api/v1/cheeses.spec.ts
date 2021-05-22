import request from "supertest";
import app from "../../../app";
import cheeses, { cottageCheese } from "../../../__MOCKS__/cheeses";

describe("GET /cheeses", () => {
  describe("get many", () => {
    it("should respond with a 200 status code", async () => {
      const response = await request(app).get("/api/v1/cheeses");
      expect(response.statusCode).toBe(200);
    });
    it("should respond with an array containing the cheese data", async () => {
      const response = await request(app).get("/api/v1/cheeses");
      expect(response.body).toEqual(cheeses);
    });
    it("should specify json in the content type header", async () => {
      const response = await request(app).get("/api/v1/cheeses");
      expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));
    });
  });

  describe("get one", () => {
    describe("the cheese exists", () => {
      it("should respond with a 200 status code", async () => {
        const response = await request(app).get(`/api/v1/cheeses/${cottageCheese.id}`);
        expect(response.statusCode).toBe(200);
      });
      it("should respond with a json object containing the cheese data", async () => {
        const response = await request(app).get(`/api/v1/cheeses/${cottageCheese.id}`);
        expect(response.body).toEqual(cottageCheese);
      });
      it("should specify json in the content type header", async () => {
        const response = await request(app).get(`/api/v1/cheeses/${cottageCheese.id}`);
        expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));
      });
    });

    describe("the cheese does not exist", () => {
      it("should respond with a 404 status code", async () => {
        const response = await request(app).get("/api/v1/cheeses/not-existing-cheese-id");
        expect(response.statusCode).toBe(404);
      });
    });
  });
});
