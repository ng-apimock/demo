# @ng-apimock/dev-interface demo
This is a demo setup for the @ng-apimock/dev-interface

## Getting Started
```shell
npm install
```

#### Serve
The [serve.js](https://raw.githubusercontent.com/ng-apimock/demo/master/dev-interface/serve.js) script:
 - processes the mocks from the @ng-apimock/test-application
 - registers the @ng-apimock/core middleware function to intercept http calls
 - serves the @ng-apimock/dev-interface
 
You can start the script by running: 
```shell
npm run serve
```
