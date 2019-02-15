'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Listings', [{
      name: 'Cottage',
      description: "It's so pwetty",
      price: 10,
      location: 'Melbourne, Australia',
      image: '',
      datefrom: "2019-02-21",
      dateuntil: "2019-03-31",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'House',
      description: "I'm bigger than a cottage",
      price: 20,
      location: 'Miami, USA',
      image: '',
      datefrom: "2019-01-25",
      dateuntil: "2019-06-09",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Mansion',
      description: 'Fuck yeeeaah',
      price: 30,
      location: 'Havana, Cuba',
      image: '',
      datefrom: "2019-04-17",
      dateuntil: "2019-12-02",
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
      datefrom: "2019-02-21",
      dateuntil: "2019-03-31",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'House',
      description: "I'm bigger than a cottage",
      price: 20,
      location: 'Miami, USA',
      image: '',
      datefrom: "2019-01-25",
      dateuntil: "2019-06-09",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Mansion',
      description: 'Fuck yeeeaah',
      price: 30,
      location: 'Havana, Cuba',
      image: '',
      datefrom: "2019-04-17",
      dateuntil: "2019-12-02",
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
