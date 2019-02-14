'use strict'
module.exports = (sequelize, DataTypes) => {
  const Listing = sequelize.define(
    'Listing', {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      price: DataTypes.INTEGER,
      location: DataTypes.STRING,
      image: DataTypes.STRING,
      datefrom: DataTypes.DATE,
      dateuntil: DataTypes.DATE
    }, {})
  Listing.associate = ({ User }) => {
    // Listing.belongsTo(User)
    // can create more associations here
  }
  return Listing
}
