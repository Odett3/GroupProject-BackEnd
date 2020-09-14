"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class topic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      topic.hasMany(models.summary);
    }
  }
  topic.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      week: { type: DataTypes.INTEGER, allowNull: false },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "topic",
    }
  );
  return topic;
};
