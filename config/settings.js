(function(){
    'use strict';

    let settings = {};
    
    if (process.env.IPFOB_USERNAME){
        settings.username = process.env.IPFOB_USERNAME; 
    }
    if (process.env.IPFOB_PASSWORD){
        settings.password = process.env.IPFOB_PASSWORD; 
    }
    if (process.env.SELENIUM_BROWSER){
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