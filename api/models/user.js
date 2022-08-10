'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Item ,Comment , FavItem}) {
      // define association here
      // User.hasMany(logistics_orders , {foreignKey:"user_id"});
      Item.belongsTo(User , {foreignKey:"user_id"});
      Comment.belongsTo(User , {foreignKey:"user_id"})
      User.hasMany(FavItem ,{foreignKey:"user_id"})
    }
  }
  User.init({
    firstName: {
      type :DataTypes.STRING,
      allowNull: false,

    },
    lastName: {
      type :DataTypes.STRING,
      
    },
    email: {
      type:DataTypes.STRING,
      // unique:true,
      validate:{
        isEmail:true
      }
    },
    password: DataTypes.STRING,
    isLogin: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};