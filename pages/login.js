/// <reference path="../steps.d.ts" />
'use strict';
let I;
var properties = require("../properties"); 

module.exports = {
  _init() {
    I = actor(); 
  },

  fields: {
    email: { id: "Username" },
    password: { css: "#Password" }
  },

  login: { css: "#Login" },
  invalidMessage: { css: "div.feedback-message-text" },

  ensureLoginPageIsLoaded() {
    I.waitForVisible(this.fields.email, properties.timeout.LongWaitTimeout);
    I.waitForVisible(this.fields.password, properties.timeout.LongWaitTimeout);
    I.waitForVisible(this.login, properties.timeout.LongWaitTimeout);
  },


  loginToCentricity(email, password) {
    this.ensureLoginPageIsLoaded();
    I.fillField(this.fields.email, email);
    I.fillField(this.fields.password, password);
    I.click(this.login);
  },

  ensureInvalidLoginMessageIsDisplayed() {
    I.waitForVisible(this.invalidMessage, properties.timeout.LongWaitTimeout);
  }
}
