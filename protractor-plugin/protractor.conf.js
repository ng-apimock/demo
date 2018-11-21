const path = require('path');
const testDirectory = path.join(require.resolve('@ng-apimock/webdriverio-plugin'), '..', '..', 'test');

exports.config = {
    allScriptsTimeout: 5000,
    baseUrl: 'http://localhost:9900/',
    params: {
        default_directory: '/tmp'
    },
    specs: [
        path.join(testDirectory, 'features', '*.feature')
    ],
    plugins: [{
        package: '@ng-apimock/protractor-plugin',
        options: {
            globalName: 'client'
        }
    }],
    SELENIUM_PROMISE_MANAGER: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    cucumberOpts: {
        require: [
            path.join('test', 'step_definitions', '*.steps.js'),
            path.join('test', 'cucumber.helper.js')
        ],
        format: ['summary']
    },
    seleniumAddress: 'http://localhost:4444/wd/hub',
    multiCapabilities: [{
        browserName: 'chrome',
        maxInstances: 5,
        shardTestFiles: true,
        chromeOptions: {
            args: ['--no-sandbox', '--test-type=browser'],
            prefs: {
                'download': {
                    'prompt_for_download': false,
                    'directory_upgrade': true,
                    'default_directory': '/tmp'
                }
            }
        }
    }]
};
