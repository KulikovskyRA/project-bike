'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Way extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Favor, Review, Way }) {
      this.belongsTo(User, { foreignKey: 'user_id' });

      this.hasMany(Favor, { foreignKey: 'way_id' });

      this.hasMany(Review, { foreignKey: 'way_id' });
    }
  }
  Way.init(
    {
      approved: DataTypes.BOOLEAN,
      user_id: DataTypes.INTEGER,
      title: DataTypes.STRING,
      city: DataTypes.STRING,
      way_length: DataTypes.INTEGER,
      way_data: DataTypes.STRING,
      picture_data: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Way',
    }
  );
  return Way;
};
