'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Odette",
          surname: "Pule",
          class: 43,
          email: "odette@test.com",
          password: "Odette",
          image: "test",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Alex",
          surname: "Cheuk",
          class: 43,
          email: "Alex@test.com",
          password: "Alex",
          image: "test",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tom",
          surname: "Vos",
          class: 43,
          email: "tom@test.com",
          password: "Tom",
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
