const supertest = require("supertest");
const { expect } = require("chai");

// Import file tes
const getUsersTest = require("./getUsersTest");
const createUserTest = require("./createUserTest");
const deleteUserTest = require("./deleteUserTest");

describe("Automated Test Suite", function () {
    // Jalankan tes untuk mendapatkan daftar pengguna
    getUsersTest();

    // Jalankan tes untuk membuat pengguna baru
    createUserTest();

    // Jalankan tes untuk menghapus pengguna
    deleteUserTest();
});