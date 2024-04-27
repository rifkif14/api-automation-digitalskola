const supertest = require("supertest");
const { expect } = require("chai");

function getUsersTest() {
    describe("GET List of all Users", function () {
        it("Success Get List of Users", async function () {
            const response = await supertest("https://reqres.in").get("/api/users?page=2");
            console.log(response.body);
            expect(response.status).equal(200, "Expected status code to be 200");   
        });
    });
}

module.exports = getUsersTest;
