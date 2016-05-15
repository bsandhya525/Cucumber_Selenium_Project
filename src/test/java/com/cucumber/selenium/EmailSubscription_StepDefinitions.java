package com.cucumber.selenium;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;

import cucumber.annotation.en.Given;
import cucumber.annotation.en.Then;
import cucumber.annotation.en.When;

public class EmailSubscription_StepDefinitions extends TestBase{
	
	public String emailAddress = null;
	
	/*@Given("^user navigates to \"([^\"]*)\" on \"([^\"]*)\"$")
	public void givenStatement(String url,String browserType)
	{
		System.out.println("url:"+url+",browser:"+browserType);
		initialize();
		openBrowser(CONFIG.getProperty(browserType));
		driver.get(CONFIG.getProperty(url));
	}*/
	
	@When("^user enters valid \"([^\"]*)\" and click the submit button$")
	public void user_enters_valid_email_and_click_the_submit_button(String email)
	{
		System.out.println("Email:"+email);
		emailAddress = email;
		
		try{
			driver.findElement(By.xpath(OR.getProperty("remind_email_input_xpath"))).sendKeys(email);
			
			driver.findElement(By.xpath(OR.getProperty("remind_email_submit_xpath"))).click();
			
		}catch(Exception ex)
		{
			System.out.println("Error processing email subscription."+ex.getMessage());
			Assert.fail("Email Subscription is not successful for the test email-"+email+"->"+ex.getMessage());
		}
		
	}

	@Then("^appropriate email subscription successful message should be displayed$")
	public void verifyEmailSubscription()
	{
		
		try{
						
			List<org.openqa.selenium.WebElement> successDivElms = driver.findElements(By.xpath(OR.getProperty("subscription_success_div_xpath")));
			
			Assert.assertTrue("Email Subscription is not successful",successDivElms.size()>0);
			
			Assert.assertEquals(successDivElms.get(0).getText(), OR.getProperty("subscription_successs_message")+" "+emailAddress);
			
			
			
		}catch(Exception ex)
		{
			System.out.println("Error validating email subscription."+ex.getMessage());
			Assert.fail("Email Subscription validation is not successful for the test email-"+emailAddress+"->"+ex.getMessage());
		}
		
	}
}
