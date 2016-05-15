package com.cucumber.selenium;

import org.junit.runner.RunWith;

import cucumber.junit.Cucumber;

@RunWith(Cucumber.class)
@Cucumber.Options(format={"pretty","html:reports/test-report"},tags="@monthlyshoedisplaysTest,@EmailSubscriptionTest")
public class CucumberRunner {
	
	
}
