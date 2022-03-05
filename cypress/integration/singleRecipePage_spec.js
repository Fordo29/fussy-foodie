describe('Single recipe page user flow', () => {
  beforeEach(() => {
    cy.intercept('https://picky-eaters.herokuapp.com/api/v1/foods/1', { fixture: 'recipe.json' }).wait(55)
    cy.visit('http://localhost:3000/1/selectedRecipe');

  });

  it('Should be able to visit the main page and the user will see in the Nav Bar the application name & a link to favorites', () => {
    cy.contains('Fussy Foodie')
      .get('.favorites-link')
      .contains('Your Favorites »')
  });
  
  it('Should display the recipe name, recipe image, Cook Time, # of Servings, Ingredients, directions and nutrition information', () => {
    cy.get('.recipe-header').contains('Slow-Cooker Mac and Cheese')
      .get('img').should('have.attr', 'src', "https://www.tasteofhome.com/wp-content/uploads/2018/01/exps17270_CW153049D04_01_3b-5.jpg?fit=696,696")
      .get('.cooking-info').contains('Prep: 15 min. Cook: 3-3/4 hours')
      .get('.servings-section').contains('10 servings')
      .get('.recipe-title-cooking-info').contains('1 package (16 ounces) elbow macaroni')
      .get('.lower-page-section').contains('Cook macaroni according to package directions; drain. Place in a 5-qt. slow cooker; add butter. In a large bowl, mix 3 cups cheese, evaporated milk, condensed soup, 2% milk and eggs.')
      .get('.nutrition-section').contains('1 serving: 502 calories, 28g fat (18g saturated fat), 131mg cholesterol, 638mg sodium, 42g carbohydrate (7g sugars, 2g fiber), 21g protein.')
  });

  it('Should return to the home page by clicking the logo at top of page', () => {
    cy.get('.nav-bar').find('.header-link').click()
      .url().should('eq', 'http://localhost:3000/')
  });

  it('Should go to favorites page when clicking the favorites link at the top of the page', () => {
   cy.get('.nav-bar').find('.favorites-link').click()
      .url().should('eq', 'http://localhost:3000/favorites')
  });
});