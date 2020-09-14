"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "summaries",
      [
        {
          description: "Test123",
          userId: 1,
          topicId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: "Test456",
          userId: 2,
          topicId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: "Test789",
          userId: 3,
          topicId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("summaries", null, {});
  },
};
