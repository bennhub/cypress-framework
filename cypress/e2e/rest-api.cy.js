// cypress/integration/rest-api.spec.js

describe("RESTful API Testing with Cypress", () => {
  it("GET account details", () => {
    const accountId = 12345;

    // custom command Get Method: Account Details 
    cy.getAccountDetails(accountId);
  });
});
