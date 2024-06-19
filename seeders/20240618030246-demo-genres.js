'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Genres', [
      {
        name: 'Fantasy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Science Fiction',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mystery',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Genres', null, {});
  }
};
