'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: DataTypes.STRING,
    authorId: DataTypes.INTEGER,
    genreId: DataTypes.INTEGER,
    publicationDate: DataTypes.DATE
  }, {});
  Book.associate = function(models) {
    Book.belongsTo(models.Author, { foreignKey: 'authorId' });
    Book.belongsTo(models.Genre, { foreignKey: 'genreId' });
  };
  return Book;
};
