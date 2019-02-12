'use strict'
module.exports = (sequelize, DataTypes) => {
  const Listing = sequelize.define('Listing', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {})
  Listing.associate = function (models) {
    // associations can be defined here
  }
  return Listing
}
