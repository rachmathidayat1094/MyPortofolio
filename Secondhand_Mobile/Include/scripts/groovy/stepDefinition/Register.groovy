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
import com.kms.katalon.core.mobile.keyword.internal.MobileDriverFactory
import io.appium.java_client.AppiumDriver

import internal.GlobalVariable
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When


public class Register {

	@Given("user has opened login page")
	public void user_has_opened_login_page() {
		Mobile.startApplication("Apk/app-debug.apk", true)
		Mobile.waitForElementPresent(findTestObject('Object Repository/Dashboard/btn_akun'), 0)
		Mobile.verifyElementVisible(findTestObject('Object Repository/Dashboard/btn_akun'), 0)
		Mobile.waitForElementPresent(findTestObject('Object Repository/Dashboard/btn_jual'), 0)
		Mobile.verifyElementVisible(findTestObject('Object Repository/Dashboard/btn_jual'), 0)
		Mobile.tap(findTestObject('Object Repository/Dashboard/btn_akun'),0)

		Mobile.waitForElementPresent(findTestObject('Object Repository/Login page/btn_loginmsk'), 0)
		Mobile.verifyElementVisible(findTestObject('Object Repository/Login page/btn_loginmsk'), 0)
		Mobile.tap(findTestObject('Object Repository/Login page/btn_loginmsk'), 0)

		Mobile.waitForElementPresent(findTestObject('Object Repository/Login page/TextArea_email'), 0)
		Mobile.verifyElementVisible(findTestObject('Object Repository/Login page/TextArea_email'), 0)
		Mobile.waitForElementPresent(findTestObject('Object Repository/Login page/TextArea_password'), 0)
		Mobile.verifyElementVisible(findTestObject('Object Repository/Login page/TextArea_password'), 0)
	}

	@When("user clicks Daftar button on the login page")
	public void user_clicks_Daftar_button_on_the_login_page() {
		Mobile.tap(findTestObject('Object Repository/Login page/text_daftar'), 0)
	}

	@Then("user will be redirected to the register page")
	public void user_will_be_redirected_to_the_register_page() {
		Mobile.waitForElementPresent(findTestObject('Object Repository/Register/TextBox _nama'), 0)
		Mobile.verifyElementVisible(findTestObject('Object Repository/Register/TextBox _nama'), 0)

		Mobile.waitForElementPresent(findTestObject('Object Repository/Register/TextBox_ email'), 0)
		Mobile.verifyElementVisible(findTestObject('Object Repository/Register/TextBox_ email'), 0)
	}

	@Given("user has opened register page")
	public void user_has_opened_register_page() {
		user_has_opened_login_page()
		user_clicks_Daftar_button_on_the_login_page()

		Mobile.waitForElementPresent(findTestObject('Object Repository/Register/TextBox _nama'), 0)
		Mobile.verifyElementVisible(findTestObject('Object Repository/Register/TextBox _nama'), 0)

		Mobile.waitForElementPresent(findTestObject('Object Repository/Register/TextBox_ email'), 0)
		Mobile.verifyElementVisible(findTestObject('Object Repository/Register/TextBox_ email'), 0)
	}

	@When("user fills up all required fields with valid value on the register page")
	public void user_fills_up_all_required_fields_with_valid_value_on_the_register_page() {
		Mobile.setText(findTestObject('Object Repository/Register/TextBox _nama'), 'testing', 0)
		Mobile.hideKeyboard()

		int RandomNumber;
		RandomNumber = (int)(Math.random()*1000)
		Mobile.setText(findTestObject('Object Repository/Register/TextBox_ email'), 'testing'+RandomNumber+'@gmail.com', 0)
		Mobile.hideKeyboard()

		Mobile.setText(findTestObject('Object Repository/Register/TextBox_password'), 'test123456789', 0)
		Mobile.hideKeyboard()

		Mobile.setText(findTestObject('Object Repository/Register/TextBox_nomorHP'), '081234567890', 0)
		Mobile.hideKeyboard()

		Mobile.setText(findTestObject('Object Repository/Register/TextBox_kota'), 'Samarinda', 0)
		Mobile.hideKeyboard()

		Mobile.setText(findTestObject('Object Repository/Register/TexBox_alamat'), 'Jl. Bung Tomo', 0)
		Mobile.hideKeyboard()

		Mobile.scrollToText('Sudah punya akun?')
	}

	@When("user clicks Daftar button on the register page")
	public void user_clicks_Daftar_button_on_the_register_page() {
		Mobile.tap(findTestObject('Object Repository/Register/btn_daftar'), 0)
	}

	@Then("user will be redirected to the home page")
	public void user_will_be_redirected_to_the_home_page() {
		Mobile.waitForElementPresent(findTestObject('Object Repository/Dashboard/btn_jual'), 0)
		Mobile.verifyElementVisible(findTestObject('Object Repository/Dashboard/btn_jual'), 0)
		Mobile.waitForElementPresent(findTestObject('Object Repository/Dashboard/btn_akun'), 0)
		Mobile.verifyElementVisible(findTestObject('Object Repository/Dashboard/btn_akun'), 0)
	}

	@When("user fills up all the required fields with valid value except email field with registered email on the register page")
	public void user_fills_up_all_the_required_fields_with_valid_value_except_email_field_with_registered_email_on_the_register_page() {
		Mobile.setText(findTestObject('Object Repository/Register/TextBox _nama'), 'testing ', 0)
		Mobile.hideKeyboard()

		Mobile.setText(findTestObject('Object Repository/Register/TextBox_ email'), 'rachmathidayat1094@gmail.com', 0)
		Mobile.hideKeyboard()

		Mobile.setText(findTestObject('Object Repository/Register/TextBox_password'), 'test123456789', 0)
		Mobile.hideKeyboard()

		Mobile.setText(findTestObject('Object Repository/Register/TextBox_nomorHP'), '081234567890', 0)
		Mobile.hideKeyboard()

		Mobile.setText(findTestObject('Object Repository/Register/TextBox_kota'), 'Samarinda', 0)
		Mobile.hideKeyboard()

		Mobile.setText(findTestObject('Object Repository/Register/TexBox_alamat'), 'Jl. Bung Tomo', 0)
		Mobile.hideKeyboard()

		Mobile.scrollToText('Sudah punya akun?')
	}

	@Then("user will be received error message on the register page")
	public void user_will_be_received_error_message_on_the_register_page() {

		AppiumDriver<?> driver = MobileDriverFactory.getDriver()
		driver.findElementByXPath("//android.widget.Toast[@text='Email sudah digunakan']")
	}
}
