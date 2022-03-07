describe('Landing Page user flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/footerStory');
  });

  it('Should be able to visit the main page and the user will see in the Nav Bar the application name & a link to favorites', () => {
    cy.contains('Fussy Foodie')
      .get('.landing-page-link')
      .contains('Return Home »')
  });
    
  it('Should display a fun title and 2 small blurbs', () => {
    cy.get('.header-tagline')
    .contains('Meet the man with very distinguishing tastes')
    .get('.description').contains('His name is Ethan. He is a very intelligent 8 year old with a curious mind but not a curious palate. The way to get this little guy to eat is to challenge him to a take an adventure with food and find new recipes to cook and try on his own.')
    .get('.plead-from-mom').contains('Note from his mom: PLEASE FOR THE LOVE OF ALL THINGS HOLY!!! EAT SOMETHING MAN!')
  });
});