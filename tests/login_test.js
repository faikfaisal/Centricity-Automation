/// <reference path="../steps.d.ts" />

Feature('In-Valid Login works as expected');

BeforeSuite((I) => {
  I.startAut();
  I.switchToWeb();
});

AfterSuite((I, testInitializer) => {
  testInitializer.closeAutAsPartOfSuiteTeardown();
});

Scenario("Perform invalid login @login", (I, loginPage) => {
  loginPage.loginToCentricity("schalk", "123");
  loginPage.ensureInvalidLoginMessageIsDisplayed();
});

Scenario("Login using valid credentials @login", (I, loginPage, homePage) => {
  let config = require('../properties');
  loginPage.loginToCentricity(config.credentials.username, config.credentials.password);
  homePage.ensureHomePageIsOpen();
});




