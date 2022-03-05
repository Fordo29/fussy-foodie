describe('Feedback Loop login flows', () => {
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

  // it('Should display the movies sorted by release date (newest to oldest)', () => {
  //   cy.get('.poster-release-date')
  //     .first()
  //     .contains('09-29-2020')
  //   cy.get('.poster-release-date')
  //     .eq(2)
  //     .contains('08-20-2020')
  //   cy.get('.poster-release-date')
  //     .eq(1)
  //     .contains('09-04-2020')
  // });
});