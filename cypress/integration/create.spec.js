context('Home Page', function () {
  beforeEach(function () {
    cy.visit('/feed/create')
  })

  it('successfully loads page that contains a title', function () {
    // https://on.cypress.io/hash
    // cy.hash().should('be.empty')
    cy.contains('Create Listing')
  })

  it('checks page has correct form fields titles and text', function () {
    cy.contains('Name')
    cy.contains('Give your place a name')
    cy.contains('Description')
    cy.contains('Add a little description of your place')
    cy.contains('Price')
    cy.contains('Add price in pounds')
    cy.contains('Available From')
    cy.contains('Available Until')
  })

  it('fills fields in form and submits', function () {
    cy.get('#name').type('King James')
    cy.get('#description').type('small house big house medium sized house')
    cy.get('#price').type('123')
    cy.get('#availableFrom').type('2019-05-05')
    cy.get('#availableUntil').type('2019-06-05')
    cy.contains('Add Listing').click()
    cy.url().should('eq', 'http://localhost:8000/feed?')
    cy.go('back')
    cy.url().should('eq', 'http://localhost:8000/feed/create')
  })
})
