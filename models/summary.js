"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class summary extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      summary.belongsTo(models.user), summary.hasOne(models.topic);
    }
  }
  summary.init(
    {
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "summary",
    }
  );
  return summary;
};
