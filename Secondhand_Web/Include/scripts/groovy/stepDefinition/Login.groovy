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
import groovy.sql.ResultSetMetaDataWrapper

public class Login {
	@Given("user on the Login page")
	public void user_on_the_login_page() {
		WebUI.openBrowser('https://secondhand.binaracademy.org/users/sign_in')
		WebUI.maximizeWindow()
		WebUI.verifyElementPresent(findTestObject('Object Repository/Login Page/TextArea_email'), 0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/Login Page/TextArea_password'), 0)
	}

	@When("user input (.*) values in the (.*) field in the Login page")
	public void user_input_value_in_the_field_in_the_Login_page(String condition, fields) {
		if(condition=="valid" && fields=="all") {
			WebUI.setText(findTestObject('Object Repository/Login Page/TextArea_email'),'ceklala@gmail.com')
			WebUI.setText(findTestObject('Object Repository/Login Page/TextArea_password'),'02082010')
			WebUI.click(findTestObject('Object Repository/Login Page/btn_loginCommit'))
		}else if (condition=="invalid" && fields=="email") {
			WebUI.setText(findTestObject('Object Repository/Login Page/TextArea_email'),'cekla@gmail.com')
			WebUI.setText(findTestObject('Object Repository/Login Page/TextArea_password'),'02082010')
			WebUI.click(findTestObject('Object Repository/Login Page/btn_loginCommit'))
		}
	}

	@Then("user (.*) successfully login")
	public void user_successfully_login(String result) {
		if(result=="can") {
			WebUI.waitForElementPresent(findTestObject('Object Repository/Homepage/btn_jual'),0)
			WebUI.waitForElementPresent(findTestObject('Object Repository/Homepage/btn_profile'),0)
			WebUI.verifyElementPresent(findTestObject('Object Repository/Homepage/btn_jual'),0)
			WebUI.verifyElementPresent(findTestObject('Object Repository/Homepage/btn_profile'),0)
		}else if(result=="can not") {
			WebUI.verifyElementPresent(findTestObject('Object Repository/Login Page/alert_invalid'), 0)
		}
	}
}