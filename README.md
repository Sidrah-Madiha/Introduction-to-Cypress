# Introduction to Cypress:

Cypress is a test framework that
- is JavaScript only
- Chrome Only
- uses Mocha for test runner
- Is a testing framework NOT an automation framework
- Designed by front-end devs, for front-end devs
- Is fast (test code runs in browser, just as app code runs in browser)instead of running test outside as a separate process

### Installing Cypress:
- Make sure you have node.js installed (version above 8) and npm installed, check using the following commands in termianl
`node -v` or `node --version` and `npm -v`
- Remember npm install all packages inside the project folder and for that you need a package.json file first, to create it, in terminal run `npm init -y`
- Now install Cypress by running command: `npm install cypress`
(at first install can be slow because Cypress install its own version of Chrome to run tests on it)
- Now you need to run Cypress locally once to create all intial setup, for that  run:
`npx cypress open`
- You will now see folders initiated for Cypress.

### Test details written in Cypress:
- Creare test in cypress/integration folder and use `.spec.js` file extension for it.
- `/// <reference types="cypress" />` is used for intellisense for Cypress.
- Cy is a global object that gives access to all methods available in Cypress.
- Cypress waits for 4000ms before failiing assertions or accessing elements.

#### Testing with Cypress in CLI
Sometimes we want to run tests in headless mode, we also want to integrate test in CI for this we can use command  `npx cypress run` to run test non-interactively. When you run this command you will see a `videos` folder that shows all test runs after they are completed.
We can get help on this command using `npx cypress run --help`
To run just a single file use:
`npx cypress run --spec cypress/integration/todomvc-filtering.spec.js`

### Run Cypress test using npm test command:
For this we need to go to `package.json` file and in scripts add the following:

"cypress" : "cypress open"
"test" : "cypress run"

Now if you run `npm run cypress`, this will run test in browser.
and if you run `npm run test`, this will run test in headless mode. OR just using `npm test`, Cool isn't it :)

### Make tests easy to maintain using Page Objects.
You can make objects and put accessing and getting elements in this object class to maintain your test suite.
For this create a folder `page-objects` and create a module for your object, put function related to that object inside of it.See example files `page-objects/todo-page.js` and `integration/todomvc-pageobjects.spec.js` 

If you are not using any instance variables within your page object class you can simply export functions in your test, see example files `page-objects/modular-functions.js` and `integration/todomvc-modularfunctions.spec.js`

### Using Cypress for Visual Testing:
So far we have seen we can check functionality of our application using `should` chai assertions. But we can also check UI using visual testing offered by a plugin `Aplitiools Eyes`, to use this:
- First register at https://eyes.applitools.com/
- Then in terminal, type: `npm install @applitools/eyes-cypress`
- To make sure Cypress recognizes eye-cypress plugin, run `npx eyes-setup`
- When you first run a visual test, the screenshot taken are the ones that will act as baseline screenshots, the next test run will compare the result with these baseline screenshots to make sure the visual test passes.
- To demonstrate how visual test works, see file `todomvc-visual.spec.js`
- To run the test and see the visual results in your account first access your api_key from https://eyes.applitools.com/app/test-results (log in to your account) > profile > copy your api key
Then in your terminal use `set APLITOOLS_API_KEY = <add your api key>` , if this doesn't work follow these steps:
    {- In Search, search for and then select: System (Control Panel)
    - Click the Advanced system settings link
    - Click Environment Variables
    - In the section System Variables, click New
    - Set the variable name to APPLITOOLS_API_KEY
    - Set the variable value to your API key
    - Click OK}

-Now run `npx cypress open`
- To add eyes visual testing first add 
`beforeEach(() => cy.eyesOpen` and `afterEach(() => cy.eyesClose` to the test and then wherever you need to take a screenshot just add this command `cy.eyesCheckWindow` (see complete commands in file)
- You can also check your test on different platforms by adding details of platform in `beforeEach(() => cy.eyesOpen`
