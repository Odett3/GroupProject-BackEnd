'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "summaries",
      [
        {
          description: "Test123",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: "Test456",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: "Test789",
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
