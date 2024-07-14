const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://parabank.parasoft.com/',
    env: {
      apiUrl: 'http://parabank.parasoft.com:8080/parabank/services/ParaBank',
    },
    viewportWidth: 1280,
    viewportHeight: 720,
  },
});

// Example setup in your test file
Cypress.config({
  screenshotsFolder: 'cypress/screenshots', // Folder to store screenshots
  trashAssetsBeforeRuns: true, // Clean up screenshots before each run
  video: false // Disable video recording
});
