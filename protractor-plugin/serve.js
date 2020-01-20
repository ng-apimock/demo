const apimock = require('@ng-apimock/core');
const connect = require('connect');
const path = require('path');
const app = connect();
const bodyParser = require('body-parser');

const testMocksDirectory = path.join(require.resolve('@ng-apimock/test-application'), '..', 'mocks'); // the mocks directory of the test application

// Process the test application mocks
apimock.processor.process({src: testMocksDirectory});

// Use the ng-apimock middelware
app.use(bodyParser.json());
app.use(function (request, response, next) {
    next();
});

app.use(apimock.middleware);


// Serve the test application under http://localhost:9900
const serveStatic = require('serve-static');
const testApplication = require('@ng-apimock/test-application');

app.use('/', serveStatic(testApplication));

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

app.listen(9900);
console.log('@ng-apimock/protractor-plugin demo is running on port 9900');