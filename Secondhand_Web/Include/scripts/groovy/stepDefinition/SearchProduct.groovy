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
import org.openqa.selenium.Keys as Keys

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

public class SearchProduct {
	private static TestObject btnAll = findTestObject('Object Repository/Seach Product Page/btn_all')
	private static TestObject inputSearch = findTestObject('Object Repository/Seach Product Page/input_search')
	private static TestObject divProducts = findTestObject('Object Repository/Seach Product Page/div_products')
	private static TestObject divDescriptionProduct = findTestObject('Object Repository/Seach Product Page/div_description_product')
	private static TestObject titleBrowseCategories = findTestObject('Object Repository/Seach Product Page/title_browse_categories')


	@When("user input alphabert in search field")
	public void user_input_alphabert_in_search_field() {
		WebUI.setText(inputSearch, 'motor')
	}

	@When("user input characters in search field")
	public void user_input_characters_in_search_field() {
		WebUI.setText(inputSearch, '##')
	}

	@When("user enter button in keyboard")
	public void user_enter_button_in_keyboard() {
		WebUI.sendKeys(inputSearch, Keys.chord(Keys.ENTER))
		WebUI.waitForElementPresent(btnAll, 0)
		WebUI.waitForElementPresent(titleBrowseCategories, 0)
		WebUI.verifyElementPresent(btnAll, 0)
		WebUI.verifyElementPresent(titleBrowseCategories, 0)
		WebUI.scrollToElement(titleBrowseCategories, 0)
	}

	@Then("user will successfully get list of products based on the correct keywords")
	public void user_will_successfully_get_list_of_products_based_on_the_correct_keywords() {
		WebUI.waitForElementPresent(divProducts, 0)
		WebUI.waitForElementPresent(divDescriptionProduct, 0)
		WebUI.verifyElementPresent(divProducts, 3)
		WebUI.verifyElementPresent(divDescriptionProduct, 3)
		WebUI.closeBrowser()
	}

	@Then("user will unsuccessfull get list of products based on the uncorrect keywords")
	public void user_will_successfully_get_list_of_products_based_on_the_uncorrect_keywords() {
		WebUI.scrollToElement(btnAll, 0)
		WebUI.closeBrowser()
	}
}