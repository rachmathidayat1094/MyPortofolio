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

public class Register {
	@Given("user has opened register page")
	public void user_has_opened_register_page() {
		WebUI.openBrowser('https://secondhand.binaracademy.org/users/sign_up')
		WebUI.maximizeWindow()
		WebUI.verifyElementPresent(findTestObject('Object Repository/Register page/TextBox_name'), 0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/Register page/TextBox_email'), 0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/Register page/TextBox_password'), 0)
	}

	@When("user fills up all required fields with valid value on the register page")
	public void user_fills_up_all_required_fields_with_valid_value_on_the_register_page() {
		WebUI.setText(findTestObject('Object Repository/Register page/TextBox_name'), 'rhidayat')
		int RandomNumber;
		RandomNumber = (int)(Math.random()*1000)
		WebUI.setText(findTestObject('Object Repository/Register page/TextBox_email'), 'rhidayat'+RandomNumber+'@gmail.com')
		WebUI.setText(findTestObject('Object Repository/Register page/TextBox_password'), '02082010')
	}

	@When("user clicks Daftar button on the register page")
	public void user_clicks_Daftar_button_on_the_register_page() {
		WebUI.click(findTestObject('Object Repository/Register page/btn_daftar'))
	}

	@Then("user will be redirected to the dashboard page")
	public void user_will_be_redirected_to_the_dashboard_page() {
		WebUI.waitForElementPresent(findTestObject('Object Repository/Homepage/btn_jual'), 0)
		WebUI.waitForElementPresent(findTestObject('Object Repository/Notification page/btn_notification'), 0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/Homepage/btn_jual'), 0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/Notification page/btn_notification'), 0)
	}

	@When("user fills up all required fields except (.*) on the register page")
	public void user_fills_up_all_required_fields_except_on_the_register_page(String field) {
		if(field=="name field") {
			int RandomNumber;
			RandomNumber = (int)(Math.random()*1000)
			WebUI.setText(findTestObject('Object Repository/Register page/TextBox_email'), 'rhidayat'+RandomNumber+'@gmail.com')
			WebUI.setText(findTestObject('Object Repository/Register page/TextBox_password'), '02082010')
		}else if(field=="email field") {
			WebUI.setText(findTestObject('Object Repository/Register page/TextBox_name'), 'Testing1234')
			WebUI.setText(findTestObject('Object Repository/Register page/TextBox_password'), 'Testing123')
		}
	}

	@Then("(.*) will be received by user on the register page")
	public void will_be_received_by_user_on_the_register_page(String message) {
		if(message=="warning message name") {
			WebUI.getAttribute(findTestObject('Object Repository/Register page/TextBox_name'), 'validationMessage')
		}else if(message=="warning message email") {
			WebUI.getAttribute(findTestObject('Object Repository/Register page/TextBox_email'), 'validationMessage')
		}
		WebUI.closeBrowser()
	}
}