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



public class SoldProduct {
	private static TestObject txtEmail = findTestObject('Object Repository/Login Page/TextArea_email')
	private static TestObject txtPassword = findTestObject('Object Repository/Login Page/TextArea_password')
	private static TestObject btnLogin = findTestObject('Object Repository/Login Page/btn_loginCommit')
	private static TestObject btnProfile = findTestObject('Object Repository/Homepage/btn_profile')
	private static TestObject btnMyProduct = findTestObject('Object Repository/Sold Products Page/btn_my_product')
	private static TestObject btnSoldProduct = findTestObject('Object Repository/Sold Products Page/btn_sold_product')
	private static TestObject btnFavorite = findTestObject('Object Repository/Sold Products Page/btn_favorite')
	private static TestObject imgSoldFluid = findTestObject('Object Repository/Sold Products Page/img_sold_fluid')
	private static TestObject imageSoldProduct = findTestObject('Object Repository/Sold Products Page/img_sold_product')
	private static TestObject divSoldDescription = findTestObject('Object Repository/Sold Products Page/div_sold_description')
	private static TestObject txtNotHaveSoldProduct =  findTestObject('Object Repository/Sold Products Page/text_not_have_sold_product')


	@Given("seller already in list product page")
	public void seller_already_in_list_product_page() {
		WebUI.openBrowser('https://secondhand.binaracademy.org/users/sign_in')
		WebUI.maximizeWindow()
		WebUI.setText(txtEmail,'test@testing.com')
		WebUI.setText(txtPassword,'testing')
		WebUI.click(btnLogin)
		WebUI.waitForElementPresent(btnMyProduct,0)
		WebUI.waitForElementPresent(btnProfile,0)
		WebUI.verifyElementPresent(btnMyProduct,0)
		WebUI.verifyElementPresent(btnProfile,0)
		WebUI.click(btnMyProduct)
		WebUI.waitForElementPresent(btnSoldProduct,0)
		WebUI.waitForElementPresent(btnFavorite,0)
		WebUI.verifyElementPresent(btnSoldProduct,0)
		WebUI.verifyElementPresent(btnFavorite,0)
	}

	@When("seller click sold in list category")
	public void seller_click_sold_in_list_category() {
		WebUI.click(btnSoldProduct)
	}

	@Then("seller will successfull gets list of products sold")
	public void seller_will_successfull_gets_list_of_products_sold() {
		WebUI.waitForElementPresent(imageSoldProduct,0)
		WebUI.waitForElementPresent(divSoldDescription,0)
		WebUI.verifyElementPresent(imageSoldProduct,0)
		WebUI.verifyElementPresent(divSoldDescription,0)
		WebUI.closeBrowser()
	}

	@Then("seller will unsuccessfull gets list of products sold")
	public void seller_will_unsuccessfull_gets_list_of_products_sold() {
		WebUI.waitForElementNotPresent(imgSoldFluid, 0)
		WebUI.waitForElementNotPresent(txtNotHaveSoldProduct, 0)
		WebUI.closeBrowser()
	}
}