var path = require('path');
var properties = require('../properties');

let portNumber = process.env.PORT_NUMBER || 4723;
let udid = process.env.UDID || "";
var currentPath = process.cwd();
var defaultPathToAndroidApp = currentPath + path.sep + properties.app.defaultAppName;
var pathToApkFile = process.env.APK_FILE_PATH || defaultPathToAndroidApp;
var deviceName = process.env.DEVICE_NAME || properties.app.defaultDeviceName;
var platformVersion = process.env.PLATFORM_VERSION || properties.app.platformVersion;

var exports = module.exports = {};

exports.androidConfig = {
  "Appium": {
    "platform": properties.launchMode.android,
    "port": portNumber,
    "restart": false,
    "manualStart": true,
    "desiredCapabilities": {
      "appPackage": properties.app.package,
      "appActivity": properties.app.activity,
      "app": pathToApkFile,
      "deviceReadyTimeout": 20,
      "autoWebviewTimeout": 8000,
      "platformName": properties.launchMode.android,
      "platformVersion": platformVersion,
      "deviceName": deviceName,
      "autoWebview": true,
      "newCommandTimeout": 600,
      "udid": udid,
      "clearSystemFiles": true
    }
  },
};
