"use strict";

const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Odette",
          surname: "Pule",
          classNumber: 43,
          email: "odette@test.com",
          password: bcrypt.hashSync("Odette", SALT_ROUNDS),
          image: "test",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Alex",
          surname: "Cheuk",
          classNumber: 43,
          email: "Alex@test.com",
          password: bcrypt.hashSync("Alex", SALT_ROUNDS),
          image: "test",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tom",
          surname: "Vos",
          classNumber: 43,
          email: "tom@test.com",
          password: bcrypt.hashSync("Tom", SALT_ROUNDS),
          image: "test",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
