package stepDefinition

import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject

import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.checkpoint.Checkpoint
import com.kms.katalon.core.configuration.RunConfiguration
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
	@Given("user just registered a new account")
	public void user_just_registered_a_new_account() {
		int RandomNumber;
		RandomNumber = (int)(Math.random()*1000)

		WebUI.openBrowser('https://secondhand.binaracademy.org/users/sign_up')
		WebUI.maximizeWindow()
		WebUI.setText(findTestObject('Object Repository/Register page/TextBox_name'), 'Rachmat Hidayat'+RandomNumber)
		WebUI.setText(findTestObject('Object Repository/Register page/TextBox_email'), 'rhidayat'+RandomNumber+'@gmail.com')
		WebUI.setText(findTestObject('Object Repository/Register page/TextBox_password'), 'testing')
		WebUI.click(findTestObject('Object Repository/Register page/btn_daftar'))
	}

	@Given("user can successfully login to the website")
	public void user_can_successfully_login_to_the_website() {
		WebUI.openBrowser('https://secondhand.binaracademy.org/users/sign_in')
		WebUI.maximizeWindow()
		WebUI.setText(findTestObject('Object Repository/Login Page/TextArea_email'),'ceklala@gmail.com')
		WebUI.setText(findTestObject('Object Repository/Login Page/TextArea_password'),'02082010')
		WebUI.click(findTestObject('Object Repository/Login Page/btn_loginCommit'))

		WebUI.waitForElementPresent(findTestObject('Object Repository/Homepage/btn_jual'),0)
		WebUI.waitForElementPresent(findTestObject('Object Repository/Homepage/btn_profile'),0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/Homepage/btn_jual'),0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/Homepage/btn_profile'),0)
	}

	@Given("user already in the Account Info page from (.*)")
	public void user_already_in_the_Account_Info_page_from(String page) {
		if(page=="Homepage") {
			WebUI.click(findTestObject('Object Repository/Homepage/btn_profile'))
			WebUI.click(findTestObject('Object Repository/Homepage/btn_accountInfo'))
		}else if(page=="Daftar Jual Saya page") {
			WebUI.click(findTestObject('Object Repository/Homepage/btn_daftarJual'))
			WebUI.click(findTestObject('Object Repository/Daftar Jual Page/btn_edit'))
		}
		WebUI.waitForElementPresent(findTestObject('Object Repository/Account Info Page/text_accountInfo'),0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/Account Info Page/text_accountInfo'),0)

		WebUI.waitForElementPresent(findTestObject('Object Repository/Account Info Page/TextArea_nama'),0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/Account Info Page/TextArea_nama'),0)
	}

	@Given("user redirected to Account Info from clicking Jual button")
	public void user_redirected_to_Account_Info_from_clicking_Jual_button() {
		WebUI.click(findTestObject('Object Repository/Homepage/btn_jual'))

		WebUI.waitForElementPresent(findTestObject('Object Repository/Account Info Page/text_accountInfo'),0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/Account Info Page/text_accountInfo'),0)

		WebUI.waitForElementPresent(findTestObject('Object Repository/Account Info Page/TextArea_nama'),0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/Account Info Page/TextArea_nama'),0)
	}

	@When("user can fill all the required data and submit the data in the Account Info page")
	public void user_can_fill_all_the_required_data_and_submit_the_data_in_the_Account_Info_page() {
		WebUI.uploadFile(findTestObject('Object Repository/Account Info Page/btn_profilePicture'), RunConfiguration.getProjectDir() + '/Asset/milkcat.PNG')
		WebUI.setText(findTestObject('Object Repository/Account Info Page/TextArea_nama'),'cek')
		WebUI.selectOptionByIndex(findTestObject('Object Repository/Account Info Page/dropdown_kota'), 2)
		WebUI.setText(findTestObject('Object Repository/Account Info Page/TextArea_alamat'),'edit automate alamat')
		WebUI.setText(findTestObject('Object Repository/Account Info Page/TextArea_noHP'),'081234567890')
		WebUI.click(findTestObject('Object Repository/Account Info Page/btn_submit'))
	}

	@When("user fill all the required data with empty values and submit the data in the Account Info page")
	public void user_fill_all_the_required_data_with_empty_value_and_submit_the_data_in_the_Account_Info_page() {
		WebUI.setText(findTestObject('Object Repository/Account Info Page/TextArea_nama'),'')
		WebUI.selectOptionByIndex(findTestObject('Object Repository/Account Info Page/dropdown_kota'), 2)
		WebUI.setText(findTestObject('Object Repository/Account Info Page/TextArea_alamat'),'')
		WebUI.setText(findTestObject('Object Repository/Account Info Page/TextArea_noHP'),'')
		WebUI.click(findTestObject('Object Repository/Account Info Page/btn_submit'))
	}

	@Then("users Account Info will be updated and user will be redirected back to Homepage")
	public void users_Account_Info_will_be_updated_and_user_will_be_redirected_back_to_Homepage() {
		WebUI.waitForElementPresent(findTestObject('Object Repository/Homepage/btn_jual'),0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/Homepage/btn_jual'),0)

		WebUI.waitForElementPresent(findTestObject('Object Repository/Homepage/TextArea_search'),0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/Homepage/TextArea_search'),0)

		WebUI.closeBrowser()
	}

	@Then("users Account Info will be updated and user will be redirected to Add Product page")
	public void users_Account_Info_will_be_updated_and_user_will_be_redirected_to_Add_Product_page() {
		WebUI.waitForElementPresent(findTestObject('Object Repository/Post product page/img_formImage'),0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/Post product page/img_formImage'),0)

		WebUI.waitForElementPresent(findTestObject('Object Repository/Post product page/TextBox_namaProduk'),0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/Post product page/TextBox_namaProduk'),0)

		WebUI.closeBrowser()
	}

	@Then("users Account Info will not be updated and user will be remain at Account Info page")
	public void users_Account_Info_will_not_be_updated_and_user_will_be_remain_at_Account_Info_page() {
		WebUI.waitForElementPresent(findTestObject('Object Repository/Account Info Page/text_accountInfo'),0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/Account Info Page/text_accountInfo'),0)

		WebUI.waitForElementPresent(findTestObject('Object Repository/Account Info Page/TextArea_nama'),0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/Account Info Page/TextArea_nama'),0)

		WebUI.closeBrowser()
	}
}