const apimock = require('@ng-apimock/core');
const devInterface = require('@ng-apimock/dev-interface');
const express = require('express');
const path = require('path');
const app = express();

app.set('port', 3000);

const testMocksDirectory = path.join(require.resolve('@ng-apimock/test-application'), '..', 'mocks'); // the mocks directory of the test application

// Process the test application mocks
apimock.processor.process({src: testMocksDirectory});

// Use the ng-apimock middelware
app.use(apimock.middleware);

// Serve the test application under http://localhost:3000
app.use('/dev-interface', express.static(devInterface));

app.listen(app.get('port'), function () {
    console.log('@ng-apimock/core running on port', app.get('port'));
    console.log('@ng-apimock/dev-interface is available under /dev-interface');
});
