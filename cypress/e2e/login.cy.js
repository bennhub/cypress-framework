describe('Login Test', () => {
    it('should log in successfully', () => {
      cy.visit('/'); // Replace with the actual URL of your login page
  
      // Use the custom login command with made-up credentials
      cy.login('testuser', 'testpassword');
  
      // Add assertions here to verify successful login
      // For example, checking the URL to include a path like '/dashboard' after login
      cy.url().should('include', '/parabank/overview.htm'); // Replace with the expected URL after login
    });
    it('Makes an API call', () => {
      cy.request(Cypress.env('apiUrl')).then((response) => {
        expect(response.status).to.eq(200)
      })
    })
  });
  