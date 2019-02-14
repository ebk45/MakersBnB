'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      firstName: 'Captain',
      lastName: 'America',
      email: 'world@police.com',
      password: 'password1!',
      phone: '01234567890',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      firstName: 'Vladimir',
      lastName: 'Putin',
      email: 'puting@fake.com',
      password: 'password2!',
      phone: '09876543210',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      firstName: 'Theresa',
      lastName: 'May',
      email: 'may.be@gone.soon',
      password: 'password3!',
      phone: '09876543211',
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
      email: 'world@police.com',
      password: 'password1!',
      phone: '01234567890',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      firstName: 'Vladimir',
      lastName: 'Putin',
      email: 'puting@fake.com',
      password: 'password2!',
      phone: '09876543210',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      firstName: 'Theresa',
      lastName: 'May',
      email: 'may.be@gone.soon',
      password: 'password3!',
      phone: '09876543211',
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
