'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Authors', [
      {
        name: 'J.K. Rowling',
        bio: 'Author of the Harry Potter series.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'J.R.R. Tolkien',
        bio: 'Author of The Lord of the Rings.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'George R.R. Martin',
        bio: 'Author of A Song of Ice and Fire.',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Authors', null, {});
  }
};
