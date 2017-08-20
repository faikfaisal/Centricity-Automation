var exports = module.exports = {};
var testObjectConfig = require("./test_object_helper_config");
var deviceConfig = require("./device_helper_config");
var ignoreCase = require('ignore-case');
var properties = require('../properties')

exports.createHelpers = function (launchMode) {
    if (ignoreCase.equals(launchMode, properties.launchMode.testObjectAndroid)) {
        return testObjectConfig.testObjectConfig;
    } else if (ignoreCase.equals(launchMode, properties.launchMode.android)) {
        return deviceConfig.androidConfig;
    }
};
