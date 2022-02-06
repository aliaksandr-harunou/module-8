exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',

    framework: 'mocha',

    multiCapabilities: [
    {
        browserName: 'firefox',
        specs: ['../specs/specFirefox.js'],
    },
    {
        browserName: 'chrome',
        specs: ['../specs/specChrome.js'],
    }
    ],
    mochaOpts: {
        reporter: 'mochawesome',
        reporterOptions: {
            overwrite: true,
            reportTitle: 'TEST EPAM HEROES PAGE',
            reportPageTitle: 'TEST EPAM HEROES PAGE',
            reportDir: 'test/report',
            autoOpen: false
        },
        timeout: 70000
    }
};