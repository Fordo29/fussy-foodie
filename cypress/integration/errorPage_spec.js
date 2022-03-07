describe('Landing Page user flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/klj;dalk');
  });

  it('Should be able to visit the main page and the user will see in the Nav Bar the application name & a link to favorites', () => {
    cy.contains('Fussy Foodie')
      .get('.landing-page-link')
      .contains('Return Home »')
  });
    
  it('Should display an error modal when there is an error', () => {
    cy.get('.error-message')
    .should('have.text', 'Page not found.Please click the logo to go back home and try your selection again.')
  });

  it('Should return to the home page by clicking the logo at top of page', () => {
    cy.get('.nav-bar').find('.header-link').click()
      .url().should('eq', 'http://localhost:3000/')
  });

  it('Should go to favorites page when clicking the favorites link at the top of the page', () => {
    cy.get('.nav-bar').find('.landing-page-link').click()
      .url().should('eq', 'http://localhost:3000/')
  });
});