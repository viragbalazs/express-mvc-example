'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pokemon = sequelize.define('Pokemon', {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    combatpoint: DataTypes.INTEGER
  }, {});
  Pokemon.associate = function(models) {
    // associations can be defined here
  };
  return Pokemon;
};