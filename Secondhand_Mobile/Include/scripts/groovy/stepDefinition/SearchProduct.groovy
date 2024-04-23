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
	private static TestObject titleProduct = findTestObject('Object Repository/Search Product Page/title_product')
	private static TestObject inputFirstSearch = findTestObject('Object Repository/Search Product Page/input_first_search')
	private static TestObject inputSecondSearch = findTestObject('Object Repository/Search Product Page/input_second_search')
	private static TestObject priceProduct = findTestObject('Object Repository/Search Product Page/price_product')

	@Given("user has opened homepage")
	public void user_has_opened_homepage() {
		Mobile.startApplication('Apk/app-debug.apk', true)
	}

	@When("user input alphabert in search field")
	public void user_input_alphabert_in_search_field() {
		Mobile.waitForElementPresent(inputFirstSearch, 0)
		Mobile.verifyElementVisible(inputFirstSearch, 0)
		Mobile.setText(inputFirstSearch, 'mobil', 0)
		Mobile.waitForElementPresent(inputSecondSearch, 0)
		Mobile.verifyElementVisible(inputSecondSearch, 0)
		Mobile.setText(inputSecondSearch, 'mobil', 0)
	}

	@When("user input characters in search field")
	public void user_input_characters_in_search_field() {
		Mobile.waitForElementPresent(inputFirstSearch, 0)
		Mobile.verifyElementVisible(inputFirstSearch, 0)
		Mobile.setText(inputFirstSearch, '##', 0)
		Mobile.waitForElementPresent(inputSecondSearch, 0)
		Mobile.verifyElementVisible(inputSecondSearch, 0)
		Mobile.setText(inputSecondSearch, '##', 0)
	}

	@Then("user will successfully get list of products based on the correct keywords")
	public void user_will_successfully_get_list_of_products_based_on_the_correct_keywords() {
		Mobile.waitForElementPresent(titleProduct, 0)
		Mobile.waitForElementPresent(priceProduct, 0)
		Mobile.swipe(0, 0, 100, 100)
		Mobile.closeApplication()
	}

	@Then("user will unsuccessfull get list of products based on the uncorrect keywords")
	public void user_will_successfully_get_list_of_products_based_on_the_uncorrect_keywords() {
		Mobile.swipe(0, 0, 100, 100)
		Mobile.closeApplication()
	}
}