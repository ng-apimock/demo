const path = require('path');

let server;

const config = {
    default_directory: '/tmp',
    specs: [
        path.join(__dirname, 'test', 'features', '**', '*.feature'),
    ],
    sync: false,
    baseUrl: 'http://127.0.0.1:10004/',
    framework: 'cucumber',
    logLevel: 'error',
    waitforTimeout: 15000,
    cucumberOpts: {
        timeout: 20000,
        require: [
            path.join(__dirname, 'test', 'step_definitions', '*.steps.ts'),
            path.join(__dirname, 'test', 'cucumber.helper.ts')
        ]
    },
    onPrepare: () => {
        const childProcess = require('child_process');
        server = childProcess.spawn('node',
                [path.join(__dirname, 'serve.js')],
                {
                    cwd: __dirname,
                    stdio: 'inherit'
                });
        process.on('exit', () => server.kill());
    },
    onComplete: () => {
        server.kill();
    },
    params: {
        environment: 'LOCAL',
        default_directory: '/tmp'
    },
    runner: 'local',
    services: [['ng-apimock', {globalName: 'client'}]],
    hostname: 'localhost',
    port: 4444,
    path: '/wd/hub',

    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            transpileOnly: true,
            project: 'tsconfig.json'
        },
        tsConfigPathsOpts: {
            baseUrl: './'
        }
    },
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

exports.config = config;
