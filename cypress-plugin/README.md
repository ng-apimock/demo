# @ng-apimock/cypress-plugin demo
This is a demo setup for the @ng-apimock/cypress-plugin

## Getting Started
```shell
yarn install
```

#### Serve
The [serve.js](https://raw.githubusercontent.com/ng-apimock/demo/master/cypress-plugin/serve.js) script:
 - processes the mocks from the @ng-apimock/test-application
 - registers the @ng-apimock/core middleware function to intercept http calls
 - serves the @ng-apimock/test-application
 
You can start the script by running: 
```shell
yarn serve
```

#### Cypress 
The [cypress.json](https://raw.githubusercontent.com/ng-apimock/demo/master/cypress-plugin/cypress.json) file:
 - sets the environment variable `NG_API_MOCK_BASE_URL`
 
The [support.js](https://raw.githubusercontent.com/ng-apimock/demo/master/cypress-plugin/test/support.js) file:
 - loads the @ng-apimock/cypress-plugin
 
You can start webdriverio tests by running: 
```shell
yarn cypress
```
