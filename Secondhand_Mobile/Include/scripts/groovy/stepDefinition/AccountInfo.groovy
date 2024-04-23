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

public class AccountInfo {
	@Given("user go to Lengkapi Info Akun page")
	public void user_go_to_Lengkapi_Info_Akun_page() {
		Mobile.tap(findTestObject('Object Repository/AkunMenu/btn_edit'), 0)
		Mobile.waitForElementPresent(findTestObject('Object Repository/AccountInfo/txt_LengkapiInfoAkun'), 0)
		Mobile.verifyElementVisible(findTestObject('Object Repository/AccountInfo/txt_LengkapiInfoAkun'), 0)

		Mobile.waitForElementPresent(findTestObject('Object Repository/AccountInfo/btn_nama'), 0)
		Mobile.verifyElementVisible(findTestObject('Object Repository/AccountInfo/btn_nama'), 0)
	}

	@When("user can fill the required data in (.*) fields and submit the data in the Account Info page")
	public void user_can_fill_the_required_data_in_fields_and_submit_the_data_in_the_Account_Info_page(String fields) {
		if (fields=="photo profile") {
			Mobile.tap(findTestObject('Object Repository/AccountInfo/btn_profilePicture'), 0)
			Mobile.tap(findTestObject('Object Repository/AccountInfo/btn_galeri'), 0)
			Mobile.tap(findTestObject('Object Repository/Post Product Page/img_fotoProdukAndroid11'), 0)
		}else if (fields=="name") {
			Mobile.tap(findTestObject('Object Repository/AccountInfo/btn_nama'), 0)
			Mobile.setText(findTestObject('Object Repository/AccountInfo/TextArea_popUpFields'), 'edit', 0)
			Mobile.hideKeyboard()
			Mobile.tap(findTestObject('Object Repository/AccountInfo/btn_simpan'), 0)
		}else if (fields=="phone number") {
			Mobile.tap(findTestObject('Object Repository/AccountInfo/btn_noHP'), 0)
			Mobile.setText(findTestObject('Object Repository/AccountInfo/TextArea_popUpFields'), '0812367890', 0)
			Mobile.pressBack()
			Mobile.tap(findTestObject('Object Repository/AccountInfo/btn_simpan'), 0)
		}else if (fields=="city") {
			Mobile.tap(findTestObject('Object Repository/AccountInfo/btn_kota'), 0)
			Mobile.setText(findTestObject('Object Repository/AccountInfo/TextArea_popUpFields'), 'edit kota auto', 0)
			Mobile.hideKeyboard()
			Mobile.tap(findTestObject('Object Repository/AccountInfo/btn_simpan'), 0)
		}else if (fields=="address") {
			Mobile.tap(findTestObject('Object Repository/AccountInfo/btn_alamat'), 0)
			Mobile.setText(findTestObject('Object Repository/AccountInfo/TextArea_popUpFields'), 'edit alamat auto', 0)
			Mobile.hideKeyboard()
			Mobile.tap(findTestObject('Object Repository/AccountInfo/btn_simpan'), 0)
		}
	}

	@When("user fill the phone number fields with value more than 14 numbers")
	public void user_fill_the_phone_number_fields_with_value_more_than_14_numbers() {
		Mobile.tap(findTestObject('Object Repository/AccountInfo/btn_noHP'), 0)
		Mobile.setText(findTestObject('Object Repository/AccountInfo/TextArea_popUpFields'), '081234567890123', 0)
		Mobile.pressBack()
	}

	@When("user set the one of the fields to empty and submit the data in Lengkapi Info Akun page")
	public void user_set_the_one_of_the_fields_to_empty_and_submit_the_data_in_Lengkapi_Info_Akun_page() {
		Mobile.tap(findTestObject('Object Repository/AccountInfo/btn_nama'), 0)
		Mobile.tap(findTestObject('Object Repository/AccountInfo/TextArea_popUpFields'), 0)
		Mobile.tap(findTestObject('Object Repository/AccountInfo/btn_clear'), 0)
		Mobile.pressBack()
		Mobile.tap(findTestObject('Object Repository/AccountInfo/btn_simpan'), 0)
	}

	@Then("user will see a pop up notification that (.*) is successfully changed")
	public void user_will_see_a_pop_up_notification_that_is_successfully_changed(String fields) {
		Mobile.waitForElementPresent(findTestObject('Object Repository/AccountInfo/txt_success'), 0)
		Mobile.verifyElementVisible(findTestObject('Object Repository/AccountInfo/txt_success'), 0)
	}

	@Then("the fields will be restricted to 14 digits maximum and user will be remain at phone number fields")
	public void the_fields_will_be_restricted_to_14_digits_maximum_and_user_will_be_remain_at_phone_number_fields() {
		def message = Mobile.getText(findTestObject('Object Repository/AccountInfo/TextArea_popUpFields'), 10)
		Mobile.verifyEqual(message.length(), 14)
		Mobile.waitForElementPresent(findTestObject('Object Repository/AccountInfo/txt_ubahNomorHP'), 0)
		Mobile.verifyElementVisible(findTestObject('Object Repository/AccountInfo/txt_ubahNomorHP'), 0)

		Mobile.waitForElementPresent(findTestObject('Object Repository/AccountInfo/TextArea_popUpFields'), 0)
		Mobile.verifyElementVisible(findTestObject('Object Repository/AccountInfo/TextArea_popUpFields'), 0)
	}

	@Then("user will see the error message that user has to fill the required fields first and user will be remain at one at the fields that has been selected before")
	public void user_will_see_the_error_message_that_user_has_to_fill_the_required_fields_first_and_user_will_be_remain_at_one_at_the_fields_that_has_been_selected_before() {
		Mobile.waitForElementPresent(findTestObject('Object Repository/AccountInfo/icon_warning'), 0)
		Mobile.verifyElementVisible(findTestObject('Object Repository/AccountInfo/icon_warning'), 0)

		Mobile.waitForElementPresent(findTestObject('Object Repository/AccountInfo/txt_wajibDiisi'), 0)
		Mobile.verifyElementVisible(findTestObject('Object Repository/AccountInfo/txt_wajibDiisi'), 0)
	}
}
