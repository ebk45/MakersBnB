'use strict'
const Listing = require('../../server/controllers/listings')
const axios = require('axios');

async function getListing(){
  try {
    const response = await axios.get('http://localhost:8000/listing')
    return response
  } catch (error) {
    console.error(error)
  }
}

describe('API', () => {
  test('returns name, description and price of listing', async () => {
    const result = await getListing()
    expect(result.name).toEqual('name')
    expect(result.description).toEqual('description')
    expect(result.price).toEqual(1000)
  })
})
