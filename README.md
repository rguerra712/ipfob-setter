# ipfob-setter
Set an alarm controlled by ipfob/H&amp;R Alarms

# Initial Setup
1. First download a proper selenium driver for how the application will log in
  1. E.g. you can use ![Firefox](https://github.com/mozilla/geckodriver/releases/)
1. Set the environment settings variables for:
  1. IPFOB_USERNAME
  1. IPFOB_PASSWORD
  1. (Optional) SELENIUM_BROWSER (default is firefox)
 
# Running application
To Run, simply install the npm package
`npm install ipfob-setter`

# Usage
To set your alarm, run the following:
```
var ipfob = require('ipfob-setter');
ipfob.setAway();
```
