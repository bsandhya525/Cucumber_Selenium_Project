@EmailSubscriptionTest
Feature:Email Subscription

    In order to ensure email subscription is successful
    I want to run the cucumber test to verify the displayed message after subscription
    
Scenario Outline:Email Subscription

	Given user navigates to "testSiteURL" on "browserType"
	
	When user enters valid "<Email>" and click the submit button
	
	Then appropriate email subscription successful message should be displayed
	
Examples:
|Email                     |
|bsandhya525@rediffmail.com|
|bsandhya525@gmail.com     |