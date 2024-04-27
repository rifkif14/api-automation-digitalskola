const supertest = require("supertest");
const { expect } = require("chai");

function deleteUserTest() {
    describe("DELETE List of all Users", function () {
        it("Success Delete List of Users", async function () {
            const response = await supertest("https://reqres.in").delete("/api/users/2");
            console.log(response.body);
            expect(response.status).equal(204, "Expected status code to be 204");   
        });
    });
}

module.exports = deleteUserTest;
