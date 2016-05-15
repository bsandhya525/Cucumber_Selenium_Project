@monthlyshoedisplaysTest
Feature:Monthly Shoe Displays

	In order to ensure monthly shoes are displayed properly
	I want to run the cucumber test to verify the displayed shoe data
	
Scenario Outline:Monthly Shoe Displays

    Given user navigates to "testSiteURL" on "browserType"
    
    When user clicks on the month name "<MonthName>"
    
    Then corresponding shoe data should be displayed
    
    
Examples:
|MonthName|
|January  |
|February |
|November |



