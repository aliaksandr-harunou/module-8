exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',

    framework: 'mocha',

    specs: [
        '../specs/*.js'
    ],

    multiCapabilities: [
    {
        'browserName': 'firefox'
    },
    {
        'browserName': 'chrome'
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