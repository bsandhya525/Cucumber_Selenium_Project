package com.cucumber.selenium;

import java.io.FileInputStream;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

import io.github.bonigarcia.wdm.ChromeDriverManager;
import io.github.bonigarcia.wdm.InternetExplorerDriverManager;

public class TestBase {

	public static Properties CONFIG = null;
	public static Properties OR = null;
	
	public static WebDriver driver = null;
	public static boolean isBrowserOpen = false;
	
	
	public void initialize() 
	{
		try{
		CONFIG = new Properties();
		
		FileInputStream fistr = new FileInputStream(System.getProperty("user.dir")+"/src/test/java/com/cucumber/selenium/config/config.properties");
		
		CONFIG.load(fistr);
		
		OR = new Properties();
		
		fistr = new FileInputStream(System.getProperty("user.dir")+"/src/test/java/com/cucumber/selenium/config/OR.properties");
		
		OR.load(fistr);
		
		}
		catch(Exception ex)
		{
			System.out.println("Exception while initializing properties files."+ex.getMessage());
		}
	}
	
	public void openBrowser(String browserName)
	{
		if(!isBrowserOpen)
		{
			if(browserName.equalsIgnoreCase("Mozilla"))
			{
				driver = new FirefoxDriver();
			}
			else if(browserName.equalsIgnoreCase("Chrome"))
			{
				//System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")+"/drivers/chromedriver.exe");
				
				ChromeDriverManager.setup(); 
				driver = new ChromeDriver();
			}
			else if(browserName.equalsIgnoreCase("IE"))
			{
				//System.setProperty("webdriver.ie.driver", System.getProperty("user.dir")+"/drivers/IEDriverServer.exe");
				
				InternetExplorerDriverManager.setup(); 
				driver = new InternetExplorerDriver();
			}
			
			driver.manage().window().maximize();
			
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			
			isBrowserOpen = true;
		}
	}
}
