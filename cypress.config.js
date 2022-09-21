const { defineConfig } = require("cypress");

module.exports = defineConfig({

  video: true,
  viewportHeight: 1909,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
