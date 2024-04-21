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

public class SearchProductByCategory {
	private static TestObject btnVehicle = findTestObject('Object Repository/Category Product Page/btn_venicle_category')
	private static TestObject btnHobby = findTestObject('Object Repository/Category Product Page/btn_hobby_category')
	private static TestObject divProducts = findTestObject('Object Repository/Seach Product Page/div_products')
	private static TestObject divDescriptionProduct = findTestObject('Object Repository/Seach Product Page/div_description_product')

	@Given("user has opened homepage")
	public void user_has_opened_homepage() {
		WebUI.openBrowser('https://secondhand.binaracademy.org/')
		WebUI.maximizeWindow()
	}

	@When("user select and press the (.*) button in the category filter")
	public void user_select_and_press_button_in_the_category_filter(String type) {
		WebUI.scrollToPosition(400, 400)
		if (type == "hobby") {
			WebUI.waitForElementPresent(btnHobby, 0)
			WebUI.verifyElementPresent(btnHobby, 3)
			WebUI.click(btnHobby)
		} else if (type == "vehicle") {
			WebUI.waitForElementPresent(btnVehicle, 0)
			WebUI.verifyElementPresent(btnVehicle, 3)
			WebUI.click(btnVehicle)
		}
	}

	@Then("user will successfully get list (.*) products")
	public void user_will_successfully_get_list_products(String type) {
		WebUI.scrollToElement(divProducts, 0)
		WebUI.waitForElementPresent(divProducts, 0)
		WebUI.waitForElementPresent(divDescriptionProduct, 0)
		WebUI.verifyElementPresent(divProducts, 0)
		WebUI.verifyElementPresent(divDescriptionProduct, 0)
		WebUI.closeBrowser()
	}
}