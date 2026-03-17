const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    specPattern: "cypress-tests/cypress/e2e/**/*.cy.ts",
    baseUrl: "http://localhost:3000",

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
