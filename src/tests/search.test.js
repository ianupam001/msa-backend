const request = require("supertest");
const { app, startServer } = require("../app");

let server;

beforeAll(async () => {
    const runningApp = await startServer();
    server = runningApp.listen(); // Start the server manually
});

afterAll((done) => {
    server.close(done); // Close the server after tests
});

describe("Search API", () => {
    it("should return pizza places", async () => {
        const res = await request(server).get("/search/pizza"); // Use `server` instead of `app`
        expect(res.status).toBe(200);
    });

    it("should return juice places", async () => {
        const res = await request(server).get("/search/juice");
        expect(res.status).toBe(200);
    });

    it("should return combo places", async () => {
        const res = await request(server).get("/search/combo");
        expect(res.status).toBe(200);
    });
});
