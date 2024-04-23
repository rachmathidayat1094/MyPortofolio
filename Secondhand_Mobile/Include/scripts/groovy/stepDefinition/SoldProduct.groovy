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

class SoldProduct {
	private static TestObject btnAccount = findTestObject('Object Repository/Dashboard/btn_akun')
	private static TestObject btnLogin = findTestObject('Object Repository/Login page/btn_loginmsk')
	private static TestObject txtMyAccount = findTestObject('Object Repository/Login page/txt_AkunSaya')
	private static TestObject fieldEmail = findTestObject('Object Repository/Login page/TextArea_email')
	private static TestObject fieldPassword = findTestObject('Object Repository/Login page/TextArea_password')
	private static TestObject btnLoginAccount = findTestObject('Object Repository/Login page/btn_loginmsk2')
	private static TestObject btnMySoldProduct = findTestObject('Object Repository/AkunMenu/btn_daftarJualSaya')
	private static TestObject btnExit = findTestObject('Object Repository/AkunMenu/btn_keluar')
	private static TestObject btnFavorite = findTestObject('Object Repository/Sold Products Page/btn_favorite')
	private static TestObject btnSold = findTestObject('Object Repository/Sold Products Page/btn_sold')
	private static TestObject listSoldProduct = findTestObject('Object Repository/Sold Products Page/list_sold_products')
	private static TestObject imgSoldProduct = findTestObject('Object Repository/Sold Products Page/image_sold_product')
	private static TestObject txtEmptySoldProduct = findTestObject('Object Repository/Sold Products Page/title_empty_sold_product')
	private static TestObject imgEmptySoldProduct = findTestObject('Object Repository/Sold Products Page/image_empty_sold_product')

	@Given("seller already in account page")
	public void seller_already_in_account_page() {
		Mobile.startApplication('Apk/app-debug.apk', true)

		Mobile.waitForElementPresent(btnAccount, 0)
		Mobile.verifyElementVisible(btnAccount, 0)
		Mobile.tap(btnAccount, 0)

		Mobile.waitForElementPresent(btnLogin, 0)
		Mobile.verifyElementVisible(btnLogin, 0)
		Mobile.waitForElementPresent(txtMyAccount, 0)
		Mobile.verifyElementVisible(txtMyAccount, 0)
		Mobile.tap(btnLogin, 0)

		Mobile.waitForElementPresent(fieldEmail, 0)
		Mobile.verifyElementVisible(fieldEmail, 0)
		Mobile.waitForElementPresent(fieldPassword, 0)
		Mobile.verifyElementVisible(fieldPassword, 0)

		Mobile.setText(fieldEmail, 'ArchiMobile1@mail.com', 0)
		Mobile.hideKeyboard()
		Mobile.setText(fieldPassword, '041099', 0)
		Mobile.hideKeyboard()
		Mobile.tap(btnLoginAccount, 0)

		Mobile.waitForElementPresent(btnMySoldProduct, 0)
		Mobile.verifyElementVisible(btnMySoldProduct, 0)
		Mobile.waitForElementPresent(btnExit, 0)
		Mobile.verifyElementVisible(btnExit, 0)
	}

	@When("seller click my selling list")
	public void seller_click_my_selling_list() {
		Mobile.tap(btnMySoldProduct, 0)
		Mobile.waitForElementPresent(btnFavorite, 0)
		Mobile.verifyElementVisible(btnFavorite, 0)
		Mobile.waitForElementPresent(btnSold, 0)
		Mobile.verifyElementVisible(btnSold, 0)
		Mobile.tap(btnSold, 0)
	}

	@Then("seller will successfull gets list of products sold")
	public void seller_will_successfull_gets_list_of_products_sold() {
		Mobile.waitForElementPresent(listSoldProduct, 0)
		Mobile.verifyElementVisible(listSoldProduct, 0)
		Mobile.waitForElementPresent(imgSoldProduct, 0)
		Mobile.verifyElementVisible(imgSoldProduct, 0)
		Mobile.closeApplication()
	}

	@Then("seller will unsuccessfull gets list of products sold")
	public void seller_will_unsuccessfull_gets_list_of_products_sold() {
		Mobile.waitForElementNotPresent(txtEmptySoldProduct, 0)
		Mobile.waitForElementNotPresent(imgEmptySoldProduct, 0)
		Mobile.closeApplication()
	}
}