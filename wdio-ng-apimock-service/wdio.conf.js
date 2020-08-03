const path = require('path');

exports.config = {
    default_directory: '/tmp',
    specs: [
        path.join('test', 'features', '*.feature')
    ],
    sync: false,
    baseUrl: 'http://localhost:3000/',
    framework: 'cucumber',
    logLevel: 'error',
    waitforTimeout: 15000,
    cucumberOpts: {
        requireModule: [
            () => {
                require('ts-node').register({ files: true });
            }
        ],
        require: [
            path.join(__dirname, 'test', 'step_definitions', '*.steps.ts'),
            path.join(__dirname, 'test', 'cucumber.helper.ts')
        ]
    },
    params: {
        environment: 'LOCAL',
        default_directory: '/tmp'
    },
    services: [['ng-apimock', {globalName: 'client'}]],
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: [{
        browserName: 'chrome',
        'goog:chromeOptions': {
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
