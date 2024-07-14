// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Login Command
Cypress.Commands.add("login", (username, password) => {
  cy.visit('/');
  cy.get('input[name="username"]').type(username);
  cy.get('input[name="password"]').type(password);
  cy.get('input[type="submit"]').click();
  cy.url().should("include", "/parabank/overview.htm");
});

// Get Method: Account Details Api Command
Cypress.Commands.add("getAccountDetails", (accountId) => {
  const baseUrl = "http://parabank.parasoft.com:8080/parabank/services/bank";

  cy.request({
    method: "GET",
    url: `${baseUrl}/accounts/${accountId}`,
    headers: {
      Accept: "application/json",
    },
  }).then((response) => {
    // Assertions
    expect(response.status).to.eq(200);
    expect(response.body).to.have.property("id", accountId);
    expect(response.body).to.have.property("type");
    expect(response.body).to.have.property("balance");
  });
});


