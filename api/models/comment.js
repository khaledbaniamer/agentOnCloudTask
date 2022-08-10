'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User,Item}) {
      // define association here
      // Item.belongsTo(User , {foreignKey:"user_id"});
      User.hasMany(Comment,{foreignKey:"user_id"});
      Item.hasMany(Comment,{foreignKey:"item_id"});
    }
  }
  Comment.init({
    comment_body: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};