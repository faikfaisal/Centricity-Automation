var exports = module.exports = {};
var properties = require('../properties');

let testObjectHost = process.env.TEST_OBJECT_HOST || "us1.appium.testobject.com";
let platformVersion = process.env.PLATFORM_VERSION || "7.1.2";
let testObjectApiKey = process.env.TEST_OBJECT_API_KEY || "8D91099C09ED48E8BB0A27AE24ADD152";
let deviceName = process.env.DEVICE_NAME || "LG Nexus 5X Free";


exports.testObjectConfig = {
    "Appium": {
      "host" : testObjectHost,
      "port": "80",
      "path": "/wd/hub",
      "platform": properties.launchMode.android,
      "restart": false,
      "manualStart": true,
      "desiredCapabilities": {
        "platformName": properties.launchMode.android,
        "platformVersion": platformVersion,
        "testobject_api_key" : testObjectApiKey,      
        "deviceName": deviceName,
        "phoneOnly": true,
        "privateDevicesOnly": false,
        "testobject_session_creation_timeout": "900000",
      }
    }
};