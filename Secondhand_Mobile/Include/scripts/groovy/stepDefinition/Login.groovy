package stepDefinition
import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.checkpoint.Checkpoint
import com.kms.katalon.core.checkpoint.CheckpointFactory
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testcase.TestCase
import com.kms.katalon.core.testcase.TestCaseFactory
import com.kms.katalon.core.testdata.TestData
import com.kms.katalon.core.testdata.TestDataFactory
import com.kms.katalon.core.testobject.ObjectRepository
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI

import internal.GlobalVariable

import org.openqa.selenium.WebElement
import org.openqa.selenium.WebDriver
import org.openqa.selenium.By

import com.kms.katalon.core.mobile.keyword.internal.MobileDriverFactory
import com.kms.katalon.core.webui.driver.DriverFactory

import com.kms.katalon.core.testobject.RequestObject
import com.kms.katalon.core.testobject.ResponseObject
import com.kms.katalon.core.testobject.ConditionType
import com.kms.katalon.core.testobject.TestObjectProperty

import com.kms.katalon.core.mobile.helper.MobileElementCommonHelper
import com.kms.katalon.core.util.KeywordUtil

import com.kms.katalon.core.webui.exception.WebElementNotFoundException

import cucumber.api.java.en.And
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When
import io.appium.java_client.AppiumDriver


class Login {
	@Given('user on the Login page')
	public void user_on_the_login_page() {
		Mobile.startApplication('Apk/app-debug.apk', true)

		Mobile.waitForElementPresent(findTestObject('Object Repository/Login page/btn_akun'), 0)
		Mobile.verifyElementVisible(findTestObject('Object Repository/Dashboard/btn_akun'), 0)
		Mobile.tap(findTestObject('Object Repository/Dashboard/btn_akun'), 0)

		Mobile.waitForElementPresent(findTestObject('Object Repository/Login page/btn_loginmsk'), 0)
		Mobile.verifyElementVisible(findTestObject('Object Repository/Login page/btn_loginmsk'), 0)
		Mobile.tap(findTestObject('Object Repository/Login page/btn_loginmsk'), 0)

		Mobile.waitForElementPresent(findTestObject('Object Repository/Login page/TextArea_email'), 0)
		Mobile.verifyElementVisible(findTestObject('Object Repository/Login page/TextArea_email'), 0)
		Mobile.waitForElementPresent(findTestObject('Object Repository/Login page/TextArea_password'), 0)
		Mobile.verifyElementVisible(findTestObject('Object Repository/Login page/TextArea_password'), 0)
	}

	@When('user input the valid credential of username and password')
	public void user_input_the_valid_credential_of_username_and_password() {
		Mobile.setText(findTestObject('Object Repository/Login page/TextArea_email'), 'rachmathidayat1094@gmail.com', 0)
		Mobile.hideKeyboard()
		Mobile.setText(findTestObject('Object Repository/Login page/TextArea_password'), '12345678', 0)
		Mobile.hideKeyboard()
	}

	@When('user input wrong credential of username and password')
	public void user_input_wrong_credential_of_username_and_password() {
		Mobile.setText(findTestObject('Object Repository/Login page/TextArea_email'), 'sandjsaxj@gmail.com', 0)
		Mobile.hideKeyboard()
		Mobile.setText(findTestObject('Object Repository/Login page/TextArea_password'), 'asdhxasixhi', 0)
		Mobile.hideKeyboard()
	}
	@When('user did not input any value into required fields')
	public void user_did_not_input_any_value_into_required_fields() {
		Mobile.setText(findTestObject('Object Repository/Login page/TextArea_email'), '', 0)
		Mobile.hideKeyboard()
		Mobile.setText(findTestObject('Object Repository/Login page/TextArea_password'), '', 0)
		Mobile.hideKeyboard()
	}

	@When('user click Masuk button')
	public void user_click_Masuk_button() {
		Mobile.tap(findTestObject('Object Repository/Login page/btn_loginmsk'), 0)
	}

	@Then('user will be redirect to Account page')
	public void user_will_be_redirect_to_Account_page() {
		Mobile.verifyElementVisible(findTestObject('Object Repository/AkunMenu/btn_keluar'), 0)
	}

	@Then('user will see a notification username and password are invalid')
	public void user_will_see_a_notification_username_and_password_are_invalid() {
		AppiumDriver<?> driver = MobileDriverFactory.getDriver()
		driver.findElementByXPath("//android.widget.Toast[@text='Email atau kata sandi salah']")
	}

	@Then('user will see a notification user must fill email field first')
	public void user_will_see_a_notification_user_must_fill_email_field_first() {
		Mobile.verifyElementVisible(findTestObject('Object Repository/Login page/btn_pw_tidak_boleh_kosong'), 0)
	}

	@Given('user succesfully login to the app')
	public void user_succesfully_login_to_the_app() {
		Mobile.startApplication('Apk/app-debug.apk', true)

		Mobile.waitForElementPresent(findTestObject('Object Repository/Login page/btn_akun'), 0)
		Mobile.verifyElementVisible(findTestObject('Object Repository/Dashboard/btn_akun'), 0)
		Mobile.tap(findTestObject('Object Repository/Dashboard/btn_akun'), 0)

		Mobile.waitForElementPresent(findTestObject('Object Repository/Login page/btn_loginmsk'), 0)
		Mobile.verifyElementVisible(findTestObject('Object Repository/Login page/btn_loginmsk'), 0)
		Mobile.tap(findTestObject('Object Repository/Login page/btn_loginmsk'), 0)

		Mobile.waitForElementPresent(findTestObject('Object Repository/Login page/TextArea_email'), 0)
		Mobile.verifyElementVisible(findTestObject('Object Repository/Login page/TextArea_email'), 0)
		Mobile.waitForElementPresent(findTestObject('Object Repository/Login page/TextArea_password'), 0)
		Mobile.verifyElementVisible(findTestObject('Object Repository/Login page/TextArea_password'), 0)

		Mobile.setText(findTestObject('Object Repository/Login page/TextArea_email'), 'rachmathidayat1094@gmail.com', 0)
		Mobile.hideKeyboard()
		Mobile.setText(findTestObject('Object Repository/Login page/TextArea_password'), '12345678', 0)
		Mobile.hideKeyboard()
		Mobile.tap(findTestObject('Object Repository/Login page/btn_loginmsk'), 0)
	}

	@When('user on Account page')
	public void user_on_Account_page() {
		Mobile.verifyElementVisible(findTestObject('Object Repository/AkunMenu/btn_keluar'), 0)
	}

	@Then('user click Logout button')
	public void user_click_Logout_button() {
		Mobile.tap(findTestObject('Object Repository/AkunMenu/btn_keluar'), 0)
		Mobile.verifyElementVisible(findTestObject('Object Repository/Dashboard/product_1'), 0)
	}
}
