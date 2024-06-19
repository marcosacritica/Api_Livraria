'use strict';
module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define('Author', {
    name: DataTypes.STRING,
    bio: DataTypes.TEXT
  }, {});
  Author.associate = function(models) {
    Author.hasMany(models.Book, { foreignKey: 'authorId' });
  };
  return Author;
};
