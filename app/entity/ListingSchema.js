const EntitySchema = require('typeorm').EntitySchema // import {EntitySchema} from "typeorm";
const Listing = require('../model/Listing').Listing // import {Category} from "../model/Category";

module.exports = new EntitySchema({
  name: 'Listing',
  target: Listing,
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true
    },
    name: {
      type: 'varchar'
    },
    description: {
      type: 'varchar'
    },
    price: {
      type: 'numeric'
    }
  }
})
