context('Home Page', function() {
  beforeEach(function() {
    cy.visit('/')
  })

  it('successfully loads page that contains a title', function() {
    // https://on.cypress.io/hash
    // cy.hash().should('be.empty')
    cy.contains('Sign Up')
  })

  it('fills fields in form and submits', function() {
    // https://on.cypress.io/hash
    // cy.hash().should('be.empty')
    cy.get('#inputName').type('King James')
    cy.get('#inputEmail').type('james@gmail.com')
    cy.get('#inputPassword').type('password123')
    cy.get('#exampleSelect1').select('Bit of Both!').should('have.value', 'Bit of Both!')
    cy.contains('Submit').click()
  })

})
