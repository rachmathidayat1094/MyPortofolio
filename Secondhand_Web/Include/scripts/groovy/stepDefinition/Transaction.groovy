package stepDefinition

import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject

import java.security.PublicKey

import javax.xml.soap.SAAJResult

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
import com.kms.katalon.core.configuration.RunConfiguration

import internal.GlobalVariable
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When

public class Transaction {
	@Given("buyers succefully register to the website")
	public void buyers_succefully_register_to_the_website() {
		WebUI.openBrowser('https://secondhand.binaracademy.org/users/sign_up')
		WebUI.maximizeWindow()

		WebUI.waitForElementPresent(findTestObject('Object Repository/Register page/btn_daftar'), 0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/Register page/btn_daftar'), 0)
		WebUI.waitForElementPresent(findTestObject('Object Repository/Register page/TextBox_name'), 0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/Register page/TextBox_name'), 0)

		int RandomNumber;
		RandomNumber = (int)(Math.random()*1000)

		WebUI.setText(findTestObject('Object Repository/Register page/TextBox_name'), 'rhidayat')
		WebUI.setText(findTestObject('Object Repository/Register page/TextBox_email'), 'rhidayat'+RandomNumber+'@mail.com')
		WebUI.setText(findTestObject('Object Repository/Register page/TextBox_password'), '02082010')
		WebUI.click(findTestObject('Object Repository/Register page/btn_daftar'))
	}

	@Given("buyers (.*) completed their profiles")
	public void buyer_completed_their_profiles(String condition) {
		if(condition=="have not") {
			WebUI.waitForElementPresent(findTestObject('Object Repository/Homepage/btn_jual'), 0)
			WebUI.verifyElementPresent(findTestObject('Object Repository/Homepage/btn_jual'), 0)
			WebUI.waitForElementPresent(findTestObject('Object Repository/Homepage/btn_profile'), 0)
			WebUI.verifyElementPresent(findTestObject('Object Repository/Homepage/btn_profile'), 0)

			WebUI.click(findTestObject('Object Repository/Homepage/btn_profile'))
			WebUI.click(findTestObject('Object Repository/Homepage/btn_accountInfo'))

			WebUI.waitForElementPresent(findTestObject('Object Repository/Account Info Page/TextArea_nama'), 0)
			WebUI.verifyElementPresent(findTestObject('Object Repository/Account Info Page/TextArea_nama'), 0)
			WebUI.waitForElementPresent(findTestObject('Object Repository/Account Info Page/btn_back'), 0)
			WebUI.verifyElementPresent(findTestObject('Object Repository/Account Info Page/btn_back'), 0)

			WebUI.click(findTestObject('Object Repository/Account Info Page/btn_back'))
		}
		else if(condition=="have") {
			WebUI.waitForElementPresent(findTestObject('Object Repository/Homepage/btn_jual'), 0)
			WebUI.verifyElementPresent(findTestObject('Object Repository/Homepage/btn_jual'), 0)
			WebUI.waitForElementPresent(findTestObject('Object Repository/Homepage/btn_profile'), 0)
			WebUI.verifyElementPresent(findTestObject('Object Repository/Homepage/btn_profile'), 0)

			WebUI.click(findTestObject('Object Repository/Homepage/btn_profile'))
			WebUI.click(findTestObject('Object Repository/Homepage/btn_accountInfo'))

			WebUI.waitForElementPresent(findTestObject('Object Repository/Account Info Page/TextArea_nama'), 0)
			WebUI.verifyElementPresent(findTestObject('Object Repository/Account Info Page/TextArea_nama'), 0)
			WebUI.waitForElementPresent(findTestObject('Object Repository/Account Info Page/btn_submit'), 0)
			WebUI.verifyElementPresent(findTestObject('Object Repository/Account Info Page/btn_submit'), 0)

			WebUI.uploadFile(findTestObject('Object Repository/Account Info Page/btn_profilePicture'), RunConfiguration.getProjectDir() + '/Asset/milkcat.PNG')
			WebUI.setText(findTestObject('Object Repository/Account Info Page/TextArea_nama'), 'rhidayat1')
			WebUI.selectOptionByValue(findTestObject('Object Repository/Account Info Page/dropdown_kota'), '4', false)
			WebUI.setText(findTestObject('Object Repository/Account Info Page/TextArea_alamat'), 'jalan kelengkeng')
			WebUI.setText(findTestObject('Object Repository/Account Info Page/TextArea_noHP'), '0819222')
			WebUI.click(findTestObject('Object Repository/Account Info Page/btn_submit'))
		}
	}

	@When ("buyers input (.*) values and send the trade offer")
	public void buyers_input_values_and_send_the_trade_offer(String condition_two) {

		WebUI.waitForElementPresent(findTestObject('Object Repository/Homepage/btn_jual'), 0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/Homepage/btn_jual'), 0)

		WebUI.waitForElementPresent(findTestObject('Object Repository/Homepage/card_product'), 0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/Homepage/card_product'), 0)

		WebUI.scrollToElement(findTestObject('Object Repository/Homepage/card_product'), 0)
		WebUI.click(findTestObject('Object Repository/Homepage/card_product'))

		WebUI.waitForElementPresent(findTestObject('Object Repository/Buyer Transaction Page/text_sellerInfo'), 0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/Buyer Transaction Page/text_sellerInfo'), 0)
		WebUI.waitForElementPresent(findTestObject('Object Repository/Buyer Transaction Page/btn_tertarik_nego'), 0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/Buyer Transaction Page/btn_tertarik_nego'), 0)

		WebUI.click(findTestObject('Object Repository/Buyer Transaction Page/btn_tertarik_nego'))

		WebUI.waitForElementPresent(findTestObject('Object Repository/Buyer Transaction Page/TextBox_offer'), 0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/Buyer Transaction Page/TextBox_offer'), 0)
		WebUI.waitForElementPresent(findTestObject('Object Repository/Buyer Transaction Page/btn_kirim'), 0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/Buyer Transaction Page/btn_kirim'), 0)

		if(condition_two=="correct") {
			WebUI.setText(findTestObject('Object Repository/Buyer Transaction Page/TextBox_offer'), '1200')
			WebUI.click(findTestObject('Object Repository/Buyer Transaction Page/btn_kirim'))
		}
		else if(condition_two=="string") {
			WebUI.setText(findTestObject('Object Repository/Buyer Transaction Page/TextBox_offer'), 'ABC')
		}
	}

	@Then("buyers will (.*) in sending the trade offer")
	public void buyers_will_in_sending_the_trade_offer(String result) {
		if(result=="failed") {
			WebUI.waitForElementPresent(findTestObject('Object Repository/Account Info Page/TextArea_nama'), 0)
			WebUI.verifyElementPresent(findTestObject('Object Repository/Account Info Page/TextArea_nama'), 0)
			WebUI.waitForElementPresent(findTestObject('Object Repository/Account Info Page/btn_submit'), 0)
			WebUI.verifyElementPresent(findTestObject('Object Repository/Account Info Page/btn_submit'), 0)
		}
		else if(result=="success") {
			WebUI.waitForElementPresent(findTestObject('Object Repository/Buyer Transaction Page/text_sellerInfo'), 0)
			WebUI.verifyElementPresent(findTestObject('Object Repository/Buyer Transaction Page/text_sellerInfo'), 0)
		}
		else if(result=="fail inputting string") {
			WebUI.waitForElementPresent(findTestObject('Object Repository/Buyer Transaction Page/btn_kirim'), 0)
			WebUI.verifyElementPresent(findTestObject('Object Repository/Buyer Transaction Page/btn_kirim'), 0)
		}
		WebUI.closeBrowser()
	}

	@Given("seller succesfully post product to the website")
	public void seller_succesfully_post_product_to_the_website() {

		WebUI.openBrowser('https://secondhand.binaracademy.org/users/sign_in')
		WebUI.maximizeWindow()

		//Seller open and successfully login
		WebUI.waitForElementPresent(findTestObject('Object Repository/Login Page/TextArea_email'), 0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/Login Page/TextArea_email'), 0)
		WebUI.waitForElementPresent(findTestObject('Object Repository/Login Page/TextArea_password'), 0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/Login Page/TextArea_password'), 0)
		WebUI.setText(findTestObject('Object Repository/Login Page/TextArea_email'),'ceklala@gmail.com')
		WebUI.setText(findTestObject('Object Repository/Login Page/TextArea_password'),'02082010')
		WebUI.click(findTestObject('Object Repository/Login Page/btn_loginCommit'))

		//Seller enter home page
		WebUI.waitForElementPresent(findTestObject('Object Repository/Homepage/btn_jual'), 0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/Homepage/btn_jual'), 0)
		WebUI.waitForElementPresent(findTestObject('Object Repository/Homepage/btn_profile'), 0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/Homepage/btn_profile'), 0)

		//Seller open the selling page
		WebUI.click(findTestObject('Object Repository/Homepage/btn_jual'))
		WebUI.waitForElementPresent(findTestObject('Object Repository/Post Product Page/btn_terbitkan'), 0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/Post Product Page/btn_terbitkan'), 0)
		WebUI.waitForElementPresent(findTestObject('Object Repository/Post Product Page/btn_preview'), 0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/Post Product Page/btn_preview'), 0)

		//Seller submit new product for sale
		WebUI.setText(findTestObject('Object Repository/Post Product Page/TextBox_namaProduk'), 'beat')
		WebUI.setText(findTestObject('Object Repository/Post Product Page/TextBox_hargaProduk'), '1000')
		WebUI.selectOptionByValue(findTestObject('Object Repository/Post Product Page/select_pilihKategori'), '2', false)
		WebUI.setText(findTestObject('Object Repository/Post Product Page/TextBox_deskripsiProduk'), 'barang bekas')
		WebUI.uploadFile(findTestObject('Object Repository/Post Product Page/img_formImage'), RunConfiguration.getProjectDir() + '/Asset/milkcat.PNG')
		WebUI.delay(1)
		WebUI.click(findTestObject('Object Repository/Post Product Page/btn_terbitkan'))

		//Seller logout
		WebUI.click(findTestObject('Object Repository/Homepage/btn_profile'))
		WebUI.click(findTestObject('Object Repository/Homepage/btn_keluar'))
		WebUI.waitForElementPresent(findTestObject('Object Repository/Homepage/btn_masuk'), 0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/Homepage/btn_masuk'), 0)
		WebUI.waitForElementPresent(findTestObject('Object Repository/Homepage/btn_jual'), 0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/Homepage/btn_jual'), 0)
	}

	@Given("buyers succesfully send the trade offer")
	public void buyers_succesfully_send_the_trade_offer() {

		//buyers open and successfully login
		WebUI.click(findTestObject('Object Repository/Homepage/btn_masuk'))
		WebUI.waitForElementPresent(findTestObject('Object Repository/Login Page/TextArea_email'), 0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/Login Page/TextArea_email'), 0)
		WebUI.waitForElementPresent(findTestObject('Object Repository/Login Page/TextArea_password'), 0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/Login Page/TextArea_password'), 0)
		WebUI.setText(findTestObject('Object Repository/Login Page/TextArea_email'),'rachmathidayat1094@gmail.com')
		WebUI.setText(findTestObject('Object Repository/Login Page/TextArea_password'),'02082010')
		WebUI.click(findTestObject('Object Repository/Login Page/btn_loginCommit'))

		//Buyers enter home page
		WebUI.waitForElementPresent(findTestObject('Object Repository/Homepage/card_product'), 0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/Homepage/card_product'), 0)
		WebUI.waitForElementPresent(findTestObject('Object Repository/Homepage/btn_profile'), 0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/Homepage/btn_profile'), 0)

		//Buyers choose products
		WebUI.scrollToElement(findTestObject('Object Repository/Homepage/card_product'), 0)
		WebUI.click(findTestObject('Object Repository/Homepage/card_product'))

		//Buyers enter product pages
		WebUI.waitForElementPresent(findTestObject('Object Repository/Buyer Transaction Page/text_sellerInfo'), 0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/Buyer Transaction Page/text_sellerInfo'), 0)
		WebUI.waitForElementPresent(findTestObject('Object Repository/Buyer Transaction Page/btn_tertarik_nego'), 0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/Buyer Transaction Page/btn_tertarik_nego'), 0)
		WebUI.click(findTestObject('Object Repository/Buyer Transaction Page/btn_tertarik_nego'))

		//Buyers send offers
		WebUI.waitForElementPresent(findTestObject('Object Repository/Buyer Transaction Page/TextBox_offer'), 0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/Buyer Transaction Page/TextBox_offer'), 0)
		WebUI.waitForElementPresent(findTestObject('Object Repository/Buyer Transaction Page/btn_kirim'), 0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/Buyer Transaction Page/btn_kirim'), 0)
		WebUI.setText(findTestObject('Object Repository/Buyer Transaction Page/TextBox_offer'), '1200')
		WebUI.click(findTestObject('Object Repository/Buyer Transaction Page/btn_kirim'))

		//Buyers logout
		WebUI.click(findTestObject('Object Repository/Homepage/btn_profile'))
		WebUI.click(findTestObject('Object Repository/Homepage/btn_keluar'))
		WebUI.waitForElementPresent(findTestObject('Object Repository/Homepage/btn_masuk'), 0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/Homepage/btn_masuk'), 0)
		WebUI.waitForElementPresent(findTestObject('Object Repository/Homepage/btn_jual'), 0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/Homepage/btn_jual'), 0)
	}

	@When("seller open trade offer notification")
	public void seller_open_trade_offer_notification() {

		//buyers open and successfully login
		WebUI.click(findTestObject('Object Repository/Homepage/btn_masuk'))
		WebUI.waitForElementPresent(findTestObject('Object Repository/Login Page/TextArea_email'), 0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/Login Page/TextArea_email'), 0)
		WebUI.waitForElementPresent(findTestObject('Object Repository/Login Page/TextArea_password'), 0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/Login Page/TextArea_password'), 0)
		WebUI.setText(findTestObject('Object Repository/Login Page/TextArea_email'),'ceklala@gmail.com')
		WebUI.setText(findTestObject('Object Repository/Login Page/TextArea_password'),'02082010')
		WebUI.click(findTestObject('Object Repository/Login Page/btn_loginCommit'))

		//buyers click notification
		WebUI.waitForElementPresent(findTestObject('Object Repository/Homepage/btn_notif'), 0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/Homepage/btn_notif'), 0)
		WebUI.waitForElementPresent(findTestObject('Object Repository/Homepage/btn_jual'), 0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/Homepage/btn_jual'), 0)
		WebUI.click(findTestObject('Object Repository/Homepage/btn_notif'))
		WebUI.click(findTestObject('Object Repository/Homepage/item_productOffer'))
	}

	@When("seller (.*) the offer")
	public void seller_the_offer(String condition) {

		WebUI.waitForElementPresent(findTestObject('Object Repository/Seller Transaction Page/label_Terima'), 0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/Seller Transaction Page/label_Terima'), 0)
		WebUI.waitForElementPresent(findTestObject('Object Repository/Seller Transaction Page/label_Tolak'), 0)
		WebUI.verifyElementPresent(findTestObject('Object Repository/Seller Transaction Page/label_Tolak'), 0)

		if(condition=="accepts") {
			WebUI.click(findTestObject('Object Repository/Seller Transaction Page/label_Terima'))
			WebUI.click(findTestObject('Object Repository/Seller Transaction Page/button_Status'))
			WebUI.click(findTestObject('Object Repository/Seller Transaction Page/bullet_status_finished'))
			WebUI.click(findTestObject('Object Repository/Seller Transaction Page/btn_kirim_transaksi'))
		}
		else if(condition=="rejects") {
			WebUI.click(findTestObject('Object Repository/Seller Transaction Page/label_Tolak'))
		}
	}

	@Then("seller will be succesfull in (.*) the transaction")
	public void seller_will_be_succesfull_in_the_transaction(String result) {
		if(result=="accepting") {

			WebUI.waitForElementPresent(findTestObject('Object Repository/Seller Transaction Page/text_accepted'), 0)
			WebUI.verifyElementPresent(findTestObject('Object Repository/Seller Transaction Page/text_accepted'), 0)
		}
		else if (result=="rejecting") {
			WebUI.waitForElementPresent(findTestObject('Object Repository/Seller Transaction Page/text_rejected'), 0)
			WebUI.verifyElementPresent(findTestObject('Object Repository/Seller Transaction Page/text_rejected'), 0)
		}
		WebUI.closeBrowser()
	}
}
