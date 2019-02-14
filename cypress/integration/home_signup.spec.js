context('Home Page', function () {
  beforeEach(function () {
    cy.visit('/')
  })

  it('successfully loads page that contains a title', function () {
    // https://on.cypress.io/hash
    // cy.hash().should('be.empty')
    cy.contains('Sign Up')
  })

  it('checks page has correct form fields titles and text', function () {
    cy.contains('Name')
    cy.contains('Email Address')
    cy.contains('We\'ll never share your email with anyone else.')
    cy.contains('Password')
    cy.contains('What will use MakersBnB for?')
  })

  it('fills fields in form and submits', function () {
    cy.get('#inputName').type('King James')
    cy.get('#inputEmail').type('james@gmail.com')
    cy.get('#inputPassword').type('password123')
    cy.get('#exampleSelect1').select('Bit of Both!').should('have.value', 'Bit of Both!')
    cy.contains('Submit').click()
    cy.url().should('eq', 'http://localhost:8000/feed?')
    cy.go('back')
    cy.url().should('eq', 'http://localhost:8000/')
  })
})
