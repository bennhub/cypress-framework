const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://parabank.parasoft.com/',
    env: {
      apiUrl: 'http://parabank.parasoft.com/api',
    },
    viewportWidth: 1280,
    viewportHeight: 720,
  },

});
