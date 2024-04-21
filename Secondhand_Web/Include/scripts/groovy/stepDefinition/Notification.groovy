package stepDefinition

import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject

import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.checkpoint.Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testcase.TestCase
import com.kms.katalon.core.testdata.TestData
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows

import internal.GlobalVariable
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When

public class Notification {
	@Given("user has opened dashboard page")
	public void user_has_opened_dashboard_page() {
		WebUI.openBrowser('https://secondhand.binaracademy.org/users/sign_in')
		WebUI.maximizeWindow()
		WebUI.verifyElementPresent(findTestObject('Object Repository/Login Page/TextArea_email'), 0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/Login Page/TextArea_password'), 0)
		WebUI.setText(findTestObject('Object Repository/Login Page/TextArea_email'), 'ceklala@gmail.com')
		WebUI.setText(findTestObject('Object Repository/Login Page/TextArea_password'), '02082010')
		WebUI.click(findTestObject('Object Repository/Login Page/btn_loginCommit'))
		WebUI.waitForElementPresent(findTestObject('Object Repository/Homepage/btn_jual'), 0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/Homepage/btn_jual'), 0)
		WebUI.waitForElementPresent(findTestObject('Object Repository/Notification page/btn_notification'), 0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/Notification page/btn_notification'), 0)
	}

	@When("user clicks notification icon on the navigation bar")
	public void user_clicks_notification_icon_on_the_navigation_bar() {
		WebUI.click(findTestObject('Object Repository/Notification page/btn_notification'))
	}

	@Then("user will be seen (.*) on the notification pop up")
	public void user_will_be_seen_on_the_notification_pop_up(String notification) {
		if(notification==" negotiated product notification") {
			WebUI.waitForElementPresent(findTestObject('Object Repository/Notification page/notification_penawaranproduk'), 0)
			WebUI.verifyElementPresent(findTestObject('Object Repository/Notification page/notification_penawaranproduk'), 0)
		}else if(notification==" published product notification") {
			WebUI.waitForElementPresent(findTestObject('Object Repository/Notification page/notification_berhasilditerbitkan'), 0)
			WebUI.verifyElementPresent(findTestObject('Object Repository/Notification page/notification_berhasilditerbitkan'), 0)
		}
		WebUI.closeBrowser()
	}
}