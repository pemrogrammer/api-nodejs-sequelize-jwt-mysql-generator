'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class token extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  token.init({
    user_id: DataTypes.INTEGER,
    token: DataTypes.STRING,
    expires: DataTypes.DATE,
    hit_create: DataTypes.INTEGER,
  }, {
    sequelize,
    paranoid: true,
    modelName: 'token',
  });
  return token;
};