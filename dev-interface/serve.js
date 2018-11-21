const apimock = require('@ng-apimock/core');
const connect = require('connect');
const path = require('path');
const app = connect();

const testMocksDirectory = path.join(require.resolve('@ng-apimock/test-application'), '..', 'mocks'); // the mocks directory of the test application

// Process the test application mocks
apimock.processor.process({src: testMocksDirectory});

// Use the ng-apimock middelware
app.use(apimock.middleware);

// Serve the test application under http://localhost:9900
const serveStatic = require('serve-static');
const devInterface = require('@ng-apimock/dev-interface');

app.use('/dev-interface', serveStatic(devInterface));

app.listen(9900);
console.log('@ng-apimock/dev-interface demo is running on port 9900');