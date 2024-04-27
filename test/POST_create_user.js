const supertest = require("supertest");
const { expect } = require("chai");

function createUserTest() {
    describe("POST Create User", function () {
        it("Success POST Create User", async function () {
            const response = await supertest("https://reqres.in")
                .post("/api/users")
                .set("Content-Type", "application/json")
                .send({
                    "name": "morpheus",
                    "job": "leader"
                });
            console.log(response.body);
            expect(response.status).equal(201, "Expected status code to be 201");   
        });
    });
}

module.exports = createUserTest;
