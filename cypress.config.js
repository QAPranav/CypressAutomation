/* eslint-disable import/no-extraneous-dependencies */
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: 'imbwry',
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Shelter-Cypress-Automation',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    videoOnFailOnly: true
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: 'cypress/e2e/tests',
  },
});
