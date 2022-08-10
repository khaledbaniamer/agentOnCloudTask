'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User , FavItem}) {
      // define association here
      User.hasMany(Item,{foreignKey:"user_id"});
      Item.hasMany(FavItem , {foreignKey:"item_id"})
      // Comment.belongsTo(Item , {foreignKey:"item_id"})
    }
  }
  Item.init({
    Item_name: DataTypes.STRING,
    Item_description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};