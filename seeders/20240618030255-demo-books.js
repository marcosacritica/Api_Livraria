'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Books', [
      {
        title: 'Harry Potter and the Philosopher\'s Stone',
        authorId: 1,
        genreId: 1,
        publicationDate: '1997-06-26',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The Fellowship of the Ring',
        authorId: 2,
        genreId: 1,
        publicationDate: '1954-07-29',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'A Game of Thrones',
        authorId: 3,
        genreId: 1,
        publicationDate: '1996-08-06',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Books', null, {});
  }
};
