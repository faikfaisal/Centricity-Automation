// Configuring helpers
let helperFactory = require("./config/helper_factory");
let helperItems = require("./helpers/helper_config");
let properties = require("./properties");
let launchMode = process.env.LAUNCH_MODE || properties.launchMode.ios;

let helper = {
  "helpers": Object.assign({}, helperItems.helpers, helperFactory.createHelpers(launchMode))
}

// Configuring Pages & steps
let pageConfig = require("./pages/pages_config");
let stepsConfig = require("./steps/steps_config");

let inclue = {
  "include": Object.assign({}, pageConfig.pages, stepsConfig.steps)
}

var defaultConfig = {
  "tests": "./tests/**/*_test.js",
  "timeout": 3000,
  "output": "./output",
  "bootstrap": false,
  "mocha": {
    "reporterOptions": {
      reportDir: "result" + process.env.UDID,
      autoOpen: true,
      reportTitle: "Centricity Test"
    }
  },
  "waitforTimeout": 10000,
  "name": "centricity"
};

let finalConfig = Object.assign({}, defaultConfig, inclue, helper);
exports.config = finalConfig;