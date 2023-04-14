'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsTo(models.User);
    }
  }
  Product.init({
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: { msg: "Code is required" },
        notEmpty: { msg: "Code is required" }
      }
    }, 
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "Name is required" },
        notEmpty: { msg: "Name is required" }
      }
    }, 
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "Description is required" },
        notEmpty: { msg: "Description is required" }
      }
    }, 
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg: "Price is required" },
        notEmpty: { msg: "Price is required" }
      }
    }, 
    UOM: {
      type: DataTypes.ENUM("sheet", "roll", "pcs"),
      allowNull: false,
      validate: {
        notNull: { msg: "UOM is required" },
        notEmpty: { msg: "UOM is required" }
      }
    }, 
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg: "UserId is required" },
        notEmpty: { msg: "UserId is required" }
      }
    } 
    }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};