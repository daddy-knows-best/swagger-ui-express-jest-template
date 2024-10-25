const request = require("supertest");
const app = require("../../app");

const endpointUrl ="/"

describe("Server is running", () => {
    it("GET"+endpointUrl, async () => {
        const response = await request(app)
            .get(endpointUrl)
            .send();
        expect(response.statusCode).toBe(200);
    });

})