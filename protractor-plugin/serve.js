const apimock = require('@ng-apimock/core');
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const testApplication = require('@ng-apimock/test-application');
const app = express();

app.set('port', 3000);

const testMocksDirectory = path.join(require.resolve('@ng-apimock/test-application'), '..', 'mocks'); // the mocks directory of the test application

// Process the test application mocks
apimock.processor.process({src: testMocksDirectory});

// Use the ng-apimock middelware
app.use(bodyParser.json());
app.use(apimock.middleware);

// Serve the test application under http://localhost:3000
app.use('/', express.static(testApplication));

// PassThrough middleware
app.use('/items', function (request, response, next) {
    response.writeHead(200, {'Content-Type': 'application/json'});
    if (request.method === 'GET') {
        response.end('["passThrough"]');
    } else if (request.method === 'POST') {
        response.end('["passThrough"]');
    } else {
        next();
    }
});

app.listen(app.get('port'), function () {
    console.log('@ng-apimock/core running on port', app.get('port'));
});
