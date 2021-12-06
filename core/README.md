# @ng-apimock/core demo
This is a demo setup for the @ng-apimock/core

## Getting Started
```shell
yarn install
```

#### Serve
The [serve.js](https://raw.githubusercontent.com/ng-apimock/demo/master/core/serve.js) script:
 - processes the mocks from the @ng-apimock/test-application
 - registers the @ng-apimock/core middleware function to intercept http calls
 - serves the @ng-apimock/test-application
 
You can start the script by running: 
```shell
yarn serve
```

The test application is now available at
```
http://localhost:10001
```
