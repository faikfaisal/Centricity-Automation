/// <reference path="../steps.d.ts" />
'use strict'

let I, homePage, loginPage;
let properties = require('../properties');

module.exports = {

  _init() {
    I = require('../steps_file.js')();
    loginPage = require("../pages/login");
    loginPage._init();
    homePage = require("../pages/homepage");
    homePage._init();
  },

  autNavigateToHomePage() {
    I.startAut();
    I.switchToWeb(properties.app.webview);

    loginPage.loginToCentricity(
      properties.credentials.username,
      properties.credentials.password
    );
  },

  closeAutAsPartOfSuiteTeardown() {
    I.say("Waiting for AUT to close");
    I.closeAut();    
    I.wait(1);
  }
}


