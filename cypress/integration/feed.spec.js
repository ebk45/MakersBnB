context('Home Page', function() {
  beforeEach(function() {
    cy.visit('/feed')
  })

  it('successfully loads page that contains a title', function() {
    // https://on.cypress.io/hash
    // cy.hash().should('be.empty')
    cy.contains('Available Spaces')
  })

})
