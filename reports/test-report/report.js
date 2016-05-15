$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('com\cucumber\selenium\emailsubscription.feature');
formatter.feature({
  "line": 2,
  "name": "Email Subscription",
  "description": "\r\n  In order to ensure email subscription is successful\r\n  I want to run the cucumber test to verify the displayed message after subscription",
  "id": "email-subscription",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@EmailSubscriptionTest"
    }
  ]
});
formatter.scenario({
  "line": 17,
  "name": "Email Subscription",
  "description": "",
  "id": "email-subscription;email-subscription;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@EmailSubscriptionTest"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user navigates to \"testSiteURL\" on \"browserType\"",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user enters valid \"bsandhya525@rediffmail.com\" and click the submit button",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "appropriate email subscription successful message should be displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "testSiteURL",
      "offset": 19
    },
    {
      "val": "browserType",
      "offset": 36
    }
  ],
  "location": "MonthlyShoeDisplays_StepDefinitions.givenStatement(String,String)"
});
formatter.result({
  "duration": 17270432758,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bsandhya525@rediffmail.com",
      "offset": 19
    }
  ],
  "location": "EmailSubscription_StepDefinitions.user_enters_valid_email_and_click_the_submit_button(String)"
});
formatter.result({
  "duration": 280844594,
  "status": "passed"
});
formatter.match({
  "location": "EmailSubscription_StepDefinitions.verifyEmailSubscription()"
});
formatter.result({
  "duration": 950161856,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Email Subscription",
  "description": "",
  "id": "email-subscription;email-subscription;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@EmailSubscriptionTest"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user navigates to \"testSiteURL\" on \"browserType\"",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user enters valid \"bsandhya525@gmail.com\" and click the submit button",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "appropriate email subscription successful message should be displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "testSiteURL",
      "offset": 19
    },
    {
      "val": "browserType",
      "offset": 36
    }
  ],
  "location": "MonthlyShoeDisplays_StepDefinitions.givenStatement(String,String)"
});
formatter.result({
  "duration": 614190042,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bsandhya525@gmail.com",
      "offset": 19
    }
  ],
  "location": "EmailSubscription_StepDefinitions.user_enters_valid_email_and_click_the_submit_button(String)"
});
formatter.result({
  "duration": 185809089,
  "status": "passed"
});
formatter.match({
  "location": "EmailSubscription_StepDefinitions.verifyEmailSubscription()"
});
formatter.result({
  "duration": 1238148760,
  "status": "passed"
});
formatter.uri('com\cucumber\selenium\monthlyshoedisplays.feature');
formatter.feature({
  "line": 2,
  "name": "Monthly Shoe Displays",
  "description": "\r\nIn order to ensure monthly shoes are displayed properly\r\nI want to run the cucumber test to verify the displayed shoe data",
  "id": "monthly-shoe-displays",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@monthlyshoedisplaysTest"
    }
  ]
});
formatter.scenario({
  "line": 18,
  "name": "Monthly Shoe Displays",
  "description": "",
  "id": "monthly-shoe-displays;monthly-shoe-displays;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@monthlyshoedisplaysTest"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user navigates to \"testSiteURL\" on \"browserType\"",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user clicks on the month name \"January\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "corresponding shoe data should be displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "testSiteURL",
      "offset": 19
    },
    {
      "val": "browserType",
      "offset": 36
    }
  ],
  "location": "MonthlyShoeDisplays_StepDefinitions.givenStatement(String,String)"
});
formatter.result({
  "duration": 647393347,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "January",
      "offset": 31
    }
  ],
  "location": "MonthlyShoeDisplays_StepDefinitions.user_clicks_on_the_month_name(String)"
});
formatter.result({
  "duration": 69422507,
  "status": "passed"
});
formatter.match({
  "location": "MonthlyShoeDisplays_StepDefinitions.verifyShoeData()"
});
formatter.result({
  "duration": 2092812100,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Monthly Shoe Displays",
  "description": "",
  "id": "monthly-shoe-displays;monthly-shoe-displays;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@monthlyshoedisplaysTest"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user navigates to \"testSiteURL\" on \"browserType\"",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user clicks on the month name \"February\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "corresponding shoe data should be displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "testSiteURL",
      "offset": 19
    },
    {
      "val": "browserType",
      "offset": 36
    }
  ],
  "location": "MonthlyShoeDisplays_StepDefinitions.givenStatement(String,String)"
});
formatter.result({
  "duration": 572064676,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "February",
      "offset": 31
    }
  ],
  "location": "MonthlyShoeDisplays_StepDefinitions.user_clicks_on_the_month_name(String)"
});
formatter.result({
  "duration": 65133330,
  "status": "passed"
});
formatter.match({
  "location": "MonthlyShoeDisplays_StepDefinitions.verifyShoeData()"
});
formatter.result({
  "duration": 938363751,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Monthly Shoe Displays",
  "description": "",
  "id": "monthly-shoe-displays;monthly-shoe-displays;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@monthlyshoedisplaysTest"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user navigates to \"testSiteURL\" on \"browserType\"",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user clicks on the month name \"November\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "corresponding shoe data should be displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "testSiteURL",
      "offset": 19
    },
    {
      "val": "browserType",
      "offset": 36
    }
  ],
  "location": "MonthlyShoeDisplays_StepDefinitions.givenStatement(String,String)"
});
formatter.result({
  "duration": 406223556,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "November",
      "offset": 31
    }
  ],
  "location": "MonthlyShoeDisplays_StepDefinitions.user_clicks_on_the_month_name(String)"
});
formatter.result({
  "duration": 84401644,
  "status": "passed"
});
formatter.match({
  "location": "MonthlyShoeDisplays_StepDefinitions.verifyShoeData()"
});
formatter.result({
  "duration": 517378738,
  "error_message": "java.lang.AssertionError: Image src is null.No Image to display.\r\n\tat org.junit.Assert.fail(Assert.java:93)\r\n\tat org.junit.Assert.assertTrue(Assert.java:43)\r\n\tat com.cucumber.selenium.MonthlyShoeDisplays_StepDefinitions.verifyShoeData(MonthlyShoeDisplays_StepDefinitions.java:96)\r\n\tat ✽.Then corresponding shoe data should be displayed(com\\cucumber\\selenium\\monthlyshoedisplays.feature:13)\r\n",
  "status": "failed"
});
});