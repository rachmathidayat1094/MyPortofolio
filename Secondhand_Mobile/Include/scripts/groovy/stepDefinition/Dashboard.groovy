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
 
class Dashboard { 
	@Given('user is on (.*) page') 
	public void user_is_on_page(String page) {
	Mobile.startApplication('Apk/app-debug.apk', true) 
	 if (page == "notification") {
		 Mobile.verifyElementVisible(findTestObject('Object Repository/Dashboard/product_1'), 0)
		 Mobile.tap(findTestObject('Object Repository/Notification/btn_notification'), 0)
		 Mobile.waitForElementPresent(findTestObject('Object Repository/Notification/text_notifikasi'), 0)
		 Mobile.verifyElementVisible(findTestObject('Object Repository/Notification/text_notifikasi'), 0)
	 } else if (page == "transaction") {
		 Mobile.verifyElementVisible(findTestObject('Object Repository/Dashboard/product_1'), 0)
		 Mobile.tap(findTestObject('Object Repository/Buyer Transaction Page/btn_transaksi'), 0)
		 Mobile.waitForElementPresent(findTestObject('Object Repository/Buyer Transaction Page/text_transaksi'), 0)
		 Mobile.verifyElementVisible(findTestObject('Object Repository/Buyer Transaction Page/text_transaksi'), 0)
	 } else if (page == "account") {
		 Mobile.verifyElementVisible(findTestObject('Object Repository/Dashboard/product_1'), 0)
		 Mobile.tap(findTestObject('Object Repository/Dashboard/btn_akun'), 0)
		 Mobile.waitForElementPresent(findTestObject('Object Repository/AkunMenu/text_AkunSaya'), 0)
		 Mobile.verifyElementVisible(findTestObject('Object Repository/AkunMenu/text_AkunSaya'), 0)
	 } 
	}
  
	@When('user click Beranda button in bottom bar') 
	public void user_click_Beranda_button_in_bottom_bar() {
	 Mobile.verifyElementVisible(findTestObject('Object Repository/Dashboard/btn_beranda'), 0)
	 Mobile.tap(findTestObject('Object Repository/Dashboard/btn_beranda'), 0) 
	} 
 
	@Then('user successfully return to Dashboard')
	public void user_successfully_return_to_Dashboard() {
	 Mobile.verifyElementVisible(findTestObject('Object Repository/Dashboard/product_1'), 0)
	} 
}