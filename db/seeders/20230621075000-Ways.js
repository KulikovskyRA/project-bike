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
    //!
    await queryInterface.bulkInsert(
      'Ways',
      [
        {
          approved: true,
          user_id: 1,
          title: 'Пробное 1',
          city: 'Москва',
          way_length: 200,
          way_data: 'data1',
          picture_data: 'picture1',
          createdAt: Sequelize.DataTypes.NOW().toString(),
          updatedAt: Sequelize.DataTypes.NOW().toString(),
        },
        {
          approved: true,
          user_id: 1,
          title: 'Пробное 2',
          city: 'Москва',
          way_length: 200,
          way_data: 'data2',
          picture_data: 'picture2',
          createdAt: Sequelize.DataTypes.NOW().toString(),
          updatedAt: Sequelize.DataTypes.NOW().toString(),
        },
        {
          approved: false,
          user_id: 1,
          title: 'Пробное 3',
          city: 'Москва',
          way_length: 200,
          way_data: 'data2',
          picture_data: 'picture2',
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
    await queryInterface.bulkDelete('Ways', null, {});
  },
};
