const {defineConfig} = require ('cypress')
 
module.exports =  defineConfig({

  viewportHeight: 1080,
  viewportWidth: 1920,
  video: false,
  e2e: {
    baseUrl: 'https://angular.realworld.how/',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
