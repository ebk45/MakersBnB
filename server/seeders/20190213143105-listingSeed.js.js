'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Listings', [{
      name: 'Cottage',
      description: "It's so pwetty",
      price: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'House',
      description: "I'm bigger than a cottage",
      price: 20,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Mansion',
      description: 'Fuck yeeeaah',
      price: 30,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('Listings', [{
      name: 'Cottage',
      description: "It's so pwetty",
      price: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'House',
      description: "I'm bigger than a cottage",
      price: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Mansion',
      description: 'Fuck yeeeaah',
      price: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
