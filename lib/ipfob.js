(function(){
    'use strict';

    const settings = require('../config/settings.js');
    const userSettings = settings.userSettings;
    const browser = settings.seleniumSettings.browser;
    let user = userSettings.username;
    let password = userSettings.password;

    exports.setAway = () => {
        const webdriver = require('selenium-webdriver'),
        by = webdriver.By,
        until = webdriver.until;

        const driver = new webdriver.Builder()
            .forBrowser(browser)
            .build();

        driver.get('https://hralarms.alarmdealer.com/');
        driver.findElement(by.name('user_name')).sendKeys(user);
        driver.findElement(by.name('user_pass')).sendKeys(password);
        driver.findElement(by.className('button')).click(); // Click sign in
        
        driver.wait(until.titleContains('Security'), 7000, 'Login failed');
        driver.wait(until.elementLocated(by.className('dsc-lcdtext-2')),
            10000, 'Transfer to status page failed');
        driver.wait(until.elementTextContains(driver.findElement(by.className('dsc-lcdtext-2')), 'Ready'),
            30000, 'System never set to ready, maybe alarm already set?');
        driver.wait(until.elementLocated(by.className('dsc-button-away')),
            10000, 'Could not find away button');
        driver.findElement(by.className('dsc-button-away')).click();
        driver.wait(until.elementTextContains(driver.findElement(by.className('dsc-lcdtext-1')), 'Exit'),
            17000, 'System failed to set away');
        driver.quit();
        
    };
})();   