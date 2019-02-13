'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      firstName: 'Captain',
      lastName: 'America',
      address: '123 World Street',
      email: 'world@police.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      firstName: 'Vladimir',
      lastName: 'Putin',
      address: '1 The Kremlin',
      email: 'puting@fake.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      firstName: 'Theresa',
      lastName: 'May',
      address: 'Downing street',
      email: 'may.be@gone.soon',
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
    return queryInterface.bulkDelete('Users', [{
      firstName: 'Captain',
      lastName: 'America',
      address: '123 World Street',
      email: 'world@police.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      firstName: 'Vladimir',
      lastName: 'Putin',
      address: '1 The Kremlin',
      email: 'puting@fake.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      firstName: 'Theresa',
      lastName: 'May',
      address: 'Downing street',
      email: 'may.be@gone.soon',
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
}
