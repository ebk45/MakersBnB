'use strict'

// const Listing = require('../../server/controllers/listings')
const axios = require('axios')

async function getListing () {
  try {
    const response = await axios.get('http://localhost:8000/api/listings/1')
    return response
  } catch (error) {
    console.error(error)
  }
}

describe('API', () => {
  test('returns name, description and price of listing', async () => {
    const result = await getListing()
    console.log(result)
    expect(result.data['name']).toEqual('Cottage')
    expect(result.data['description']).toEqual("It's so pwetty")
    expect(result.data['price']).toEqual(10)
  })
})
