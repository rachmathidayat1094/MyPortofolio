package stepDefinition

import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject

import java.awt.print.Pageable

import org.eclipse.persistence.jpa.jpql.parser.WhereClause

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
import com.kms.katalon.core.webui.keyword.internal.WebUIAbstractKeyword
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows

import ch.qos.logback.core.joran.conditional.ElseAction
import internal.GlobalVariable
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When
import groovy.json.StringEscapeUtils
import groovy.swing.factory.ButtonGroupFactory

public class Dashboard {
	@Given("user successfully open website")
	public void user_successfully_open_website() {
		WebUI.openBrowser('https://secondhand.binaracademy.org')
	}

	@When("user in (.*) page user click (.*) button on the bottom of page")
	public void user_in_page_user_click_button_on_the_bottom_of_page(String where,button) {
		if(where=="on the first" && button=="next") {
			WebUI.waitForElementPresent(findTestObject('Object Repository/Homepage/btn_jual'), 0)
			WebUI.verifyElementPresent(findTestObject('Object Repository/Homepage/btn_jual'), 0)
			WebUI.waitForElementPresent(findTestObject('Object Repository/Homepage/TextArea_search'),0)
			WebUI.verifyElementPresent(findTestObject('Object Repository/Homepage/TextArea_search'),0)
			WebUI.scrollToElement(findTestObject('Object Repository/Homepage/bottom_element'), 0)
			WebUI.delay(1)
			WebUI.click(findTestObject('Object Repository/Homepage/text_nextPage'))
		}else if(where=="not in the first" && button=="previous") {
			WebUI.scrollToElement(findTestObject('Object Repository/Homepage/bottom_element'), 0)
			WebUI.delay(1)
			WebUI.click(findTestObject('Object Repository/Homepage/text_nextPage'))
			WebUI.waitForElementPresent(findTestObject('Object Repository/Homepage/btn_jual'), 0)
			WebUI.verifyElementPresent(findTestObject('Object Repository/Homepage/btn_jual'), 0)
			WebUI.waitForElementPresent(findTestObject('Object Repository/Homepage/TextArea_search'),0)
			WebUI.verifyElementPresent(findTestObject('Object Repository/Homepage/TextArea_search'),0)
			WebUI.scrollToElement(findTestObject('Object Repository/Homepage/bottom_element'), 0)
			WebUI.delay(1)
			WebUI.click(findTestObject('Object Repository/Homepage/text_previousPage'))
		}
	}

	@Then("user will be redirect to (.*) page of product listing")
	public void user_will_be_redirect_to_page_of_product_listing(String page) {
		if(page=="next") {
			WebUI.waitForElementPresent(findTestObject('Object Repository/Homepage/btn_masuk'), 0)
			WebUI.verifyElementPresent(findTestObject('Object Repository/Homepage/btn_masuk'), 0)
		}else if(Pageable=="previous") {
			WebUI.waitForElementPresent(findTestObject('Object Repository/Homepage/card_desc'), 0)
			WebUI.verifyElementPresent(findTestObject('Object Repository/Homepage/card_desc'), 0)
		}
	}
}