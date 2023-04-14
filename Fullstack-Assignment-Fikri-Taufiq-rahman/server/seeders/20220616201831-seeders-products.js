'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const data = require("../data/product.json");
    data.forEach(el => {
      el.createdAt = new Date();
      el.updatedAt = new Date();
    })
   await queryInterface.bulkInsert('Products', data, {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {})
  }
};
