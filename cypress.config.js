const { defineConfig } = require("Cypress");
const cucumber = require("cypress-cucumber-preprocessor").default

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 10000,
    baseUrl: "https://phptravels.com/demo/",
    baseUrlAdmin: "https://phptravels.net/admin",
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber())
    },
  },
});
