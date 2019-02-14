'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Listings', [{
      name: 'Cottage',
      description: "It's so pwetty",
      price: 10,
      location: 'Melbourne, Australia',
      image: '',
      datefrom: 20190221,
      dateuntil: 20190331,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'House',
      description: "I'm bigger than a cottage",
      price: 20,
      location: 'Miami, USA',
      image: '',
      datefrom: 20190125,
      dateuntil: 20190609,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Mansion',
      description: 'Fuck yeeeaah',
      price: 30,
      location: 'Havana, Cuba',
      image: '',
      datefrom: 20190417,
      dateuntil: 20191202,
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
      location: 'Melbourne, Australia',
      image: '',
      datefrom: 20190221,
      dateuntil: 20190331,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'House',
      description: "I'm bigger than a cottage",
      price: 20,
      location: 'Miami, USA',
      image: '',
      datefrom: 20190125,
      dateuntil: 20190609,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Mansion',
      description: 'Fuck yeeeaah',
      price: 30,
      location: 'Havana, Cuba',
      image: '',
      datefrom: 20190417,
      dateuntil: 20191202,
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
