import { calculateDiscount } from "./src/utils";
import app from "./src/app";
import request from "supertest";
describe("calculateDiscount", () => {
    it("should return correct discount amount", () => {
        const result: number = calculateDiscount(100, 20); // Explicitly typed
        expect(result).toBe(20); // Now safe
    });
    it("should return 200 status code",async () => {
        const result = await request(app)
            .get("/")
            .send();
        expect(result.statusCode).toBe(200);
    })
});