# @ng-apimock/dev-interface demo
This is a demo setup for the @ng-apimock/dev-interface

## Getting Started
```shell
yarn install
```

#### Serve
The [serve.js](https://raw.githubusercontent.com/ng-apimock/demo/master/dev-interface/serve.js) script:
 - processes the mocks from the @ng-apimock/test-application
 - registers the @ng-apimock/core middleware function to intercept http calls
 - serves the @ng-apimock/test-application
 - serves the @ng-apimock/dev-interface
 
You can start the script by running: 
```shell
yarn serve
```

The dev-interface is now available at 
```
http://localhost:10002/dev-interface
```
