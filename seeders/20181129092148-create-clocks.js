'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Clocks', [
      {
        manufacturer: 'Casio',
        model: 'Szamologepes',
        type: 'Retro',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        manufacturer: 'Fossil',
        model: 'Puccos',
        type: 'Arany',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
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
