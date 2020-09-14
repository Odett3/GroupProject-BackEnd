"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "userTopics",
      [
        {
          userId: 1,
          topicId: 1,
          isDone: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          topicId: 2,
          isDone: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          topicId: 3,
          isDone: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("userTopics", null, {});
  },
};
