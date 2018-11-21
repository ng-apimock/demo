const path = require('path');
const testDirectory = path.join(require.resolve('@ng-apimock/webdriverio-plugin'), '..', '..', 'test');

exports.config = {
    default_directory: '/tmp',
    specs: [
        path.join(testDirectory, 'features', '*.feature')
    ],
    baseUrl: 'http://localhost:9900/',
    framework: 'cucumber',
    cucumberOpts: {
        require: [
            path.join('test', 'step_definitions', '*.steps.js'),
            path.join('test', 'cucumber.helper.js')
        ]
    },
    plugins: {
        '@ng-apimock/webdriverio-plugin': {
            globalName: 'client'
        }
    },
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: [{
        browserName: 'chrome',
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
