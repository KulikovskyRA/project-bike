'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      'Reviews',
      [
        {
          user_id: 2,
          way_id: 1,
          score: 5,
          text_body: 'классный роад',
          createdAt: Sequelize.DataTypes.NOW().toString(),
          updatedAt: Sequelize.DataTypes.NOW().toString(),
        },
        {
          user_id: 2,
          way_id: 2,
          score: 2,
          text_body: 'не понравилось',
          createdAt: Sequelize.DataTypes.NOW().toString(),
          updatedAt: Sequelize.DataTypes.NOW().toString(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Reviews', null, {});
  },
};
