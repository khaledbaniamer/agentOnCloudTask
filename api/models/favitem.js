'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FavItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({FavItem , Item , User}) {
      // define association here
      FavItem.belongsTo(User , {foreignKey:"user_id"})
      FavItem.belongsTo(Item , {foreignKey:"item_id"})
    }
  }
  FavItem.init({

  }, {
    sequelize,
    modelName: 'FavItem',
  });
  return FavItem;
};