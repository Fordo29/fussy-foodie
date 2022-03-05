describe('Landing Page user flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.get('.favorite-button').contains('Add to Favorites').click()
     cy.get('.favorite-button').eq(1).contains('Add to Favorites').click()
    cy.get('.favorite-button').eq(2).contains('Add to Favorites').click()
    cy.get('.nav-bar').find('.favorites-link').click()
      .url().should('eq', 'http://localhost:3000/favorites')
  });

  it('Should display 3 favorited recipe cards', () => {
    cy.get('.recipe-card')
      .should('have.length', 3)
  });

  it('Should remove a recipe card and have 2 favorited recipe cards', () => {
    cy.get('.recipe-card')
      .should('have.length', 3)
    cy.get('.unfavorite-button').contains('Remove from Favorites').click()
    cy.get('.recipe-card')
      .should('have.length', 2)
  });

  it('Should display a message when no favorites are displayed on the page', () => {
    cy.get('.unfavorite-button').contains('Remove from Favorites').click()
    cy.get('.unfavorite-button').contains('Remove from Favorites').click()
    cy.get('.unfavorite-button').contains('Remove from Favorites').click()
    cy.get('.empty-favorites-msg').contains('You haven\'t added any favorites yet! Go find some favorites!')
  });

  it('Should return to the home page by clicking the logo at top of page', () => {
    cy.get('.nav-bar').find('.header-link').click()
      .url().should('eq', 'http://localhost:3000/')
  });

  it('Should return to the home page by clicking the go home link at top of page', () => {
    cy.get('.nav-bar').find('.landing-page-link').click()
      .url().should('eq', 'http://localhost:3000/')
  });

});