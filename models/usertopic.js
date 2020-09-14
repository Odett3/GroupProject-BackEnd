"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class userTopic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      userTopic.belongsTo(models.user), userTopic.belongsTo(models.topic);
    }
  }
  userTopic.init(
    {
      userId: DataTypes.INTEGER,
      topicId: DataTypes.INTEGER,
      isDone: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "userTopic",
    }
  );
  return userTopic;
};
