'use strict'
$(document).ready(function () {
  // var $newlisting = $('newListing')
  console.log('working')

  getAllListings()
  console.log('still working')
})

let getAllListings = function () {
  let data = $.get('api/listings/')
  console.log(data)
}
