package stepDefinition

import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject

import java.security.PublicKey

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

public class Logout {
	@Given("user login to the website")
	public void user_login_to_the_website() {
		WebUI.openBrowser('https://secondhand.binaracademy.org/users/sign_in')
		WebUI.maximizeWindow()
		WebUI.setText(findTestObject('Object Repository/Login Page/TextArea_email'),'test@testing.com')
		WebUI.setText(findTestObject('Object Repository/Login Page/TextArea_password'),'testing')
		WebUI.click(findTestObject('Object Repository/Login Page/btn_loginCommit'))

		WebUI.waitForElementPresent(findTestObject('Object Repository/Homepage/btn_jual'),0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/Homepage/btn_jual'),0)
	}

	@When("user click Profile button")
	public void user_click_Profile_button() {
		WebUI.waitForElementPresent(findTestObject('Object Repository/Homepage/btn_account'), 0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/Homepage/btn_account'), 0)
		WebUI.click(findTestObject('Object Repository/Homepage/btn_account'))
	}

	@Then("user click Logout button")
	public void user_click_Logout_button() {
		WebUI.waitForElementPresent(findTestObject('Object Repository/Homepage/btn_keluar'),0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/Homepage/btn_keluar'), 0)
		WebUI.click(findTestObject('Object Repository/Homepage/btn_keluar'))
	}
}
