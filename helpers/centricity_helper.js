/// <reference path="../steps.d.ts" />

'use strict';

var properties = require("../properties");

class CentricityHelper extends codecept_helper {

  _init() {
    this.browser = null;
  }

  startAut() {
      this.browser = this.helpers[properties.drivers.appium]._startBrowser();
      return this.browser;
  }

  closeAut() {
    return this.browser.end();
  }
}

module.exports = CentricityHelper;