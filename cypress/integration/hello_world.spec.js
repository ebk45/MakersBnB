context('Hello World', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('cy.hash() - get the current URL hash', () => {
    // https://on.cypress.io/hash
    // cy.hash().should('be.empty')
    cy.contains('Sign Up')
  })
})
