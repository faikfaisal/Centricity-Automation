/// <reference path="../steps.d.ts" />

Feature('Homepage should contain matrix');

BeforeSuite((I, testInitializer) => {
  testInitializer.autNavigateToHomePage();
});

AfterSuite((I, testInitializer) => {
  testInitializer.closeAutAsPartOfSuiteTeardown();
});

Scenario("Check if the dashboard label are present @homepage", (I, homePage) => {
  homePage.ensureJobsDashboardIsPresent();  
});

Scenario("Click chart expand in and out @homepage", (I, homePage) => {
  homePage.clickExpandableTarget();  
  homePage.ensureExpandableTargetIsGone();
  homePage.clickExpandableTarget(); 
  homePage.ensureExpandableTargetIsPresent();
});
