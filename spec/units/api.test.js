'use strict'
const Listing = require('../../server/controllers/listings')
const axios = require('axios');

async function getListing() {
  try {
    const response = await axios.get('http://localhost:8000/api/listings')
    return response
  } catch (error) {
    console.error(error)
  }
}

describe('API', () => {
  test('returns name, description and price of listing', async () => {
    const result = await getListing()
    console.log(result)
    expect(result.name[1]).toEqual('name')
    expect(result.data[1].description).toEqual('description')
    expect(result.data[1].price).toEqual(1000)
  })
})
