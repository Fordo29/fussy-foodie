describe('Landing Page user flow', () => {
  beforeEach(() => {
    cy.intercept('https://picky-eaters.herokuapp.com/api/v1/foods', { fixture: 'recipes.json' })
    cy.visit('http://localhost:3000');
  });

  it('Should be able to visit the main page and the user will see in the Nav Bar the application name & a link to favorites', () => {
    cy.contains('Fussy Foodie')
      .get('.favorites-link')
      .contains('Your Favorites »')
  });
  
  it('Should display the recipe image, recipe name, try it link, and button to add to favorites', () => {
    cy.get('img')
      .should('have.attr', 'src', "https://www.tasteofhome.com/wp-content/uploads/2018/01/Pizza-Noodle-Bake_EXPS_GHBZ18_40275_C08_30_3b-8.jpg?fit=696,696")
      .get('.recipe-title').contains('Pizza Noodle Bake')
      .get('.recipe-detail-link').contains('Try It!')
      .get('.favorite-button').contains('Add to Favorites')
  });

  it('Should display 5 recipe cards', () => {
    cy.get('.recipe-card')
      .should('have.length', 5)
  });

  it('Should go to the single recipe page when you click the Try It! button', () => {
    cy.get('.recipe-detail-link').contains('Try It!').click()
      .url().should('eq', 'http://localhost:3000/1/selectedRecipe')
  });

  it('Should go to the single recipe page when you click the Try It! button', () => {
    cy.get('.favorite-button').contains('Add to Favorites').click()
    cy.get('.nav-bar').find('.favorites-link').click()
      .url().should('eq', 'http://localhost:3000/favorites')
    cy.get('.recipe-card')
      .should('have.length', 1)
  });

});