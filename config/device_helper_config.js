var path = require('path');
var properties = require('../properties');

let portNumber = process.env.PORT_NUMBER || 4723;
let udid = process.env.UDID || "";
var currentPath = process.cwd();
var defaultPathToAndroidApp = currentPath + path.sep + properties.android.defaultAppName;
var pathToApkFile = process.env.APK_FILE_PATH || defaultPathToAndroidApp;
var androidDeviceName = process.env.ANDROID_DEVICE_NAME || properties.android.defaultDeviceName;
var androidPlatformVersion = process.env.ANDROID_PLATFORM_VERSION || properties.android.defaultPlatFormVersion;

var exports = module.exports = {};

exports.androidConfig = {
  "Appium": {
    "platform": properties.launchMode.android,
    "port": portNumber,
    "restart": false,
    "manualStart": true,
    "smartWait": 35000,
    "desiredCapabilities": {
      "appPackage": properties.app.package,
      "appActivity": properties.app.activity,
      "app": pathToApkFile,
      "deviceReadyTimeout": 20,
      "autoWebviewTimeout": 8000,
      "platformName": properties.launchMode.android,
      "platformVersion": androidPlatformVersion,
      "deviceName": androidDeviceName,
      "autoWebview": true,
      "newCommandTimeout": 600,
      "udid": udid,
      "clearSystemFiles": true
    }
  },
};

let iosPlatFormVersion = process.env.IOS_PLATFORM_VERSION || properties.ios.defaultPlatFormVersion;
let iosDeviceName = process.env.IOS_DEVICE_NAME || properties.ios.defaultDeviceName;
let defaultPathToIOSApp = currentPath + path.sep + properties.ios.defaultAppName;
let pathToAppFile = process.env.IOS_APP_FILE_PATH || defaultPathToIOSApp;
let teamId = process.env.TEAM_ID || properties.ios.defaultTeamId;
udid = process.env.UDID || "auto";

exports.iosConfig = {
  "Appium": {
    "platform": properties.launchMode.ios,
    "port": portNumber,
    "restart": false,
    "manualStart": true,
    "smartWait": 35000,
    "desiredCapabilities": {
      "platformName": properties.launchMode.ios,
      "automationName": "XCUITest",
      "simpleIsVisibleCheck": false,
      "nativeWebTab": false,
      "showXcodeLog": true,
      "clearSystemFiles": true,
      "startWDP": true,
      "platformVersion": iosPlatFormVersion,
      "xcodeOrgId": teamId,
      "xcodeSigningId": "iPhone Developer",
      "deviceName": iosDeviceName,
      "udid": "auto",
      "app": pathToAppFile,
      "deviceReadyTimeout": 20,
      "autoWebviewTimeout": 8000,
      "autoWebview": true,
      "newCommandTimeout": 600,
      "clearSystemFiles": true
    }
  },
};
