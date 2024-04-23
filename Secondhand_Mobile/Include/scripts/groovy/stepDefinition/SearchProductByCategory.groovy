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
import org.openqa.selenium.Keys

import com.kms.katalon.core.mobile.keyword.internal.MobileAbstractKeyword
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

public class SearchProductByCategory {
	private static TestObject btnElectronic = findTestObject('Object Repository/Category Product Page/btn_electronic')
	private static TestObject btnComputerAndAccesories = findTestObject('Object Repository/Category Product Page/btn_computer_and_accessories')
	private static TestObject imageProduct = findTestObject('Object Repository/Category Product Page/image_product')
	private static TestObject viewProduct = findTestObject('Object Repository/Category Product Page/view_product')
	private static TestObject scrollListProduct = findTestObject('Object Repository/Category Product Page/scroll_list_products')
	private static TestObject scrollCategoriesProducts = findTestObject('Object Repository/Category Product Page/scroll_categories_products')

	@When("user select and press the (.*) button in the category filter")
	public void user_select_and_press_button_in_the_category_filter(String type) {
		if (type == "computer and accessories") {
			Mobile.waitForElementPresent(btnComputerAndAccesories, 0)
			Mobile.verifyElementVisible(btnComputerAndAccesories, 0)
			Mobile.tapAndHold(btnComputerAndAccesories, 0, 0)
		} else if (type == "electronic") {
			Mobile.waitForElementPresent(btnElectronic, 0)
			Mobile.verifyElementVisible(btnElectronic, 0)
			Mobile.tapAndHold(btnElectronic, 0, 0)
		}
	}

	@Then("user will successfully get list (.*) products")
	public void user_will_successfully_get_list_products(String type) {
		Mobile.waitForElementPresent(imageProduct, 0)
		Mobile.waitForElementPresent(viewProduct, 0)
		Mobile.verifyElementVisible(imageProduct, 0)
		Mobile.verifyElementVisible(viewProduct, 0)
		Mobile.closeApplication()
	}
}