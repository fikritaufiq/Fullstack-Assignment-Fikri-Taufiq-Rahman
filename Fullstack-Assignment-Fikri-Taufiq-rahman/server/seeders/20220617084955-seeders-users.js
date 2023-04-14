"use strict";
const data = require("../data/user.json");
const { hashPassword } = require("../helpers/bcrypt");

module.exports = {
    async up(queryInterface, Sequelize) {
        data.forEach((el) => {
            el.createdAt = new Date();
            el.updatedAt = new Date();
            el.password = hashPassword(el.password);
        });
        await queryInterface.bulkInsert("Users", data, {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("Users", null, {});
    },
};
