'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Favor, Review, Way }) {
      this.belongsTo(User, { foreignKey: 'user_id' });

      this.belongsTo(Way, { foreignKey: 'way_id' });
    }
  }
  Favor.init(
    {
      user_id: DataTypes.INTEGER,
      way_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Favor',
    }
  );
  return Favor;
};
