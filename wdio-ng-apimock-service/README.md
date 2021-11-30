# wdio-ng-apimock-service demo
This is a demo setup for the wdio-ng-apimock-service

## Getting Started
```shell
yarn install
```

#### Serve
The [serve.js](https://raw.githubusercontent.com/ng-apimock/demo/master/wdio-ng-apimock-service/serve.js) script:
 - processes the mocks from the @ng-apimock/test-application
 - registers the @ng-apimock/core middleware function to intercept http calls
 - serves the @ng-apimock/test-application
 
You can start the script by running: 
```shell
yarn serve
```

#### Webdriverio 
The [wdio.conf.js](https://raw.githubusercontent.com/ng-apimock/demo/master/wdio-ng-apimock-service/wdio.conf.js) script:
 - uses the [wdio-ng-apimock-service](https://github.com/ng-apimock/webdriverio-plugin)
 
You can start webdriverio tests by running: 
```shell
yarn wdio
```
