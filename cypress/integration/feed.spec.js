context('Feed Page', function () {
  beforeEach(function () {
    cy.visit('/feed')
  })

  it('successfully loads page that contains a title', function () {
    cy.contains('Available Spaces')
  })

  it('can click on nav bar MakersBnB button', function () {
    cy.contains('MakersBnB').click()
    cy.url().should('eq', 'http://localhost:8000/')
    cy.contains('Sign Up')
    cy.go('back')
    cy.url().should('eq', 'http://localhost:8000/feed')
    cy.contains('Available Spaces')
  })

  it('can click on nav bar Listings button', function () {
    cy.contains('Listings').click()
    cy.url().should('eq', 'http://localhost:8000/feed')
  })

  it('can click on nav bar List a space button', function () {
    cy.contains('List a space').click()
    cy.url().should('eq', 'http://localhost:8000/feed/create')
    cy.contains('Create Listing')
    cy.go('back')
    cy.url().should('eq', 'http://localhost:8000/feed')
    cy.contains('Available Spaces')
  })

  it('can click on nav bar Signup button', function () {
    cy.contains('Signup').click()
    cy.url().should('eq', 'http://localhost:8000/')
    cy.contains('Sign Up')
    cy.go('back')
    cy.url().should('eq', 'http://localhost:8000/feed')
    cy.contains('Available Spaces')
  })

  it('can click on large List a Space button', function () {
    cy.contains('List a Space').click()
    cy.url().should('eq', 'http://localhost:8000/feed/create')
    cy.go('back')
    cy.url().should('eq', 'http://localhost:8000/feed')
  })

  it('successfully loads select dates form', function () {
    cy.contains('Select Dates')
    cy.contains('Start Date')
    cy.get('#startDate').type('2019-05-05')
    cy.contains('End Date')
    cy.get('#endDate').type('2019-06-05')
    cy.contains('Submit').click()
  })
})
