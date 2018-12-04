'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Videogames', [
      {
        distributor: 'Ubisoft',
        name: 'Assassins Creed Odyssey',
        type: 'RPG',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        distributor: 'Sony',
        name: 'Spiderman',
        type: 'RPG',
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
