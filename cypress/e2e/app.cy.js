describe('Navigation', () => {
    it('should navigate to the about page', () => {
      // Start from the index page
      cy.visit('http://localhost:3000/');
   
      // Find a link with an href attribute containing "home" and click it
      cy.get('a[href*="home"]').click();
   
      // The new url should include "/"
      cy.url().should('include', '/');
   
      // The new page should contain an h1 with "Home"
      cy.get('h1').contains('Home');
    });
  });