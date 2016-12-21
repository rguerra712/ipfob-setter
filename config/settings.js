(function(){
    'use strict';

    const commandLineArgs = require('command-line-args');
    const optionDefinitions = [
        { name: 'username', alias: 'u', type: String, defaultOption: '' },
        { name: 'password', alias: 'p', type: String, defaultOption: '' },
        { name: 'browser', alias: 'b', type: String, defaultOption: '' },
    ];
    const options = commandLineArgs(optionDefinitions);

    let settings = {};

    settings.username = options.username;
    settings.password = options.password;
    settings.browser = options.browser;
    
    if (!settings.username && process.env.IPFOB_USERNAME){
        settings.username = process.env.IPFOB_USERNAME; 
    }
    if (!settings.password && process.env.IPFOB_PASSWORD){
        settings.password = process.env.IPFOB_PASSWORD; 
    }
    if (!settings.browser && process.env.SELENIUM_BROWSER){
        settings.browser = process.env.SELENIUM_BROWSER; 
    }

    if (!settings.browser){
        settings.browser = 'firefox';
    }
    
    exports.userSettings = {
        username: settings.username,
        password: settings.password
    };

    exports.seleniumSettings = {
        browser: settings.browser
    }

})();