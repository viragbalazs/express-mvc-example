'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Pokemons', [
      {
        name: 'Pikácsú',
        type: 'Villám',
        combatpoint: '10',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Csarmander',
        type: 'Tűz',
        combatpoint: '10',
        createdAt: new Date(),
        updatedAt: new Date()
      }]);
  },
  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
