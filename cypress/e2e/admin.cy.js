describe('Admin Page', () => {
    it('should add new product', () => {
      // Start from the index page
      cy.intercept("GET", "/api/products", []);

      cy.visit('/admin');

      cy.contains("button", "Add new product").click();

      cy.get("input[name='name']").clear().type("My product");
      
      cy.get("textarea[name='description']").clear().type("New description");

      cy.get("textarea[name='price']").clear().type("123.00");

      cy.get("input[name='imageUrl']")
        .clear()
        .type("https://i.ibb.co/XShsJtp/silkeveningdress.png");
      
      cy.contains("button", "Add product").click();

      //Expect
      cy.contains("My product");

      cy.contains("New description");

      cy.get("img")
      .filter("[src='https://i.ibb.co/XShsJtp/silkeveningdress.png']")
      .first()
      .should("exist");
    
    });
  });