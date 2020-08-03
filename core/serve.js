const apimock = require('@ng-apimock/core');
const express = require('express');
const path = require('path');
const app = express();

app.set('port', 3000);

const testMocksDirectory = path.join(require.resolve('@ng-apimock/test-application'), '..', 'mocks'); // the mocks directory of the test application

// Process the test application mocks
apimock.processor.process({src: testMocksDirectory});

// Use the ng-apimock middelware
app.use(apimock.middleware);

app.listen(app.get('port'), function () {
    console.log('@ng-apimock/core running on port', app.get('port'));
});
