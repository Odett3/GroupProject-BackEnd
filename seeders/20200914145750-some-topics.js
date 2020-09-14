"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "topics",
      [
        {
          name: "JavaScript",
          week: 1,
          description:
            "course introduction, defensive coding, setup and js basics",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Components",
          week: 2,
          description: "intro to react, devtools, bootstrap css, react basics",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "State",
          week: 2,
          description: "useState, fetching with useEffect, react state",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Models",
          week: 4,
          description:
            "persistence, sql, sequelize, sequelize-cli, seeding, orm",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Relations",
          week: 4,
          description: "migrations, relations, migration",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Reducers",
          week: 5,
          description:
            "immutability, redux, react-redux, useSelector, useDispatch, jest basics, redux introduction",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "TypeScript",
          week: 7,
          description: "typescript, typescript and react, apply typescript",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "React Native",
          week: 7,
          description: "react native basics, react native, apply react native",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Portfolio Kickoff",
          week: 8,
          description: "portfolio kickoff, portfolio project",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("topics", null, {});
  },
};
