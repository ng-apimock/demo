# @ng-apimock/protractor-plugin demo
This is a demo setup for the @ng-apimock/protractor-plugin

## Getting Started
```shell
npm install
```

#### Serve
The [serve.js](https://raw.githubusercontent.com/ng-apimock/demo/master/protractor-plugin/serve.js) script:
 - processes the mocks from the @ng-apimock/test-application
 - registers the @ng-apimock/core middleware function to intercept http calls
 - serves the @ng-apimock/test-application
 
You can start the script by running: 
```shell
npm run serve
```

#### Protractor 
The [protractor.conf.js](https://raw.githubusercontent.com/ng-apimock/demo/master/protractor-plugin/protractor.conf.js) script:
 - uses the @ng-apimock/protractor-plugin
 
You can start protractor tests by running: 
```shell
npm run protractor
```
