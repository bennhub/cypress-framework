// cypress/integration/login.spec.js

describe("Login Test", () => {
  it("should log in successfully", () => {
    // login, assert post login state
    cy.login("userTest1234", "pw1234567");
  });
});
