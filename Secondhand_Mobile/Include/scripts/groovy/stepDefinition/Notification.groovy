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

	@Given("user has opened on the Dashboard page")
	public void user_has_opened_on_the_Dashboard_page() {
		Mobile.startApplication("Apk/app-debug.apk", true)
		Mobile.waitForElementPresent(findTestObject('Object Repository/Dashboard/btn_jual'), 0)
		Mobile.verifyElementVisible(findTestObject('Object Repository/Dashboard/btn_jual'), 0)
		Mobile.waitForElementPresent(findTestObject('Object Repository/Dashboard/btn_akun'), 0)
		Mobile.verifyElementVisible(findTestObject('Object Repository/Dashboard/btn_akun'), 0)
		
		Mobile.tap(findTestObject('Object Repository/Dashboard/btn_akun'), 0)

		Mobile.tap(findTestObject('Object Repository/Login page/btn_loginmsk'), 0)

		Mobile.setText(findTestObject('Object Repository/Login page/TextArea_email'), 'testkirkal08@gmail.com', 0)
		Mobile.hideKeyboard()

		Mobile.setText(findTestObject('Object Repository/Login page/TextArea_password'), 'test123456', 0)
		Mobile.hideKeyboard()

		Mobile.tap(findTestObject('Object Repository/Login page/btn_loginmsk2'), 0)
		
		Mobile.waitForElementPresent(findTestObject('Object Repository/AkunMenu/btn_daftarJualSaya'), 0)
		Mobile.verifyElementVisible(findTestObject('Object Repository/AkunMenu/btn_daftarJualSaya'), 0)
		Mobile.waitForElementPresent(findTestObject('Object Repository/AkunMenu/btn_edit'), 0)
		Mobile.verifyElementVisible(findTestObject('Object Repository/AkunMenu/btn_edit'), 0)
	}
	
	@When("user clicks notification icon on the navigation bar")
	public void user_clicks_notification_icon_on_the_navigation_bar() {
		Mobile.tap(findTestObject('Object Repository/Notification/btn_notification'), 0)
	}
	
	@Then("user will be seen (.*) on the notification page")
	public void user_will_be_seen_on_the_notification_page(String notification) {
		if(notification=="negotiated product notification") {
			Mobile.waitForElementPresent(findTestObject('Object Repository/Notification/notification_penawaranproduct'), 0)
			Mobile.verifyElementVisible(findTestObject('Object Repository/Notification/notification_penawaranproduct'), 0)
		}else if(notification=="published product notification"){
			Mobile.waitForElementPresent(findTestObject('Object Repository/Notification/notification_berhasilditerbitkan'), 0)
			Mobile.verifyElementVisible(findTestObject('Object Repository/Notification/notification_berhasilditerbitkan'), 0)	
		}
	}
}
