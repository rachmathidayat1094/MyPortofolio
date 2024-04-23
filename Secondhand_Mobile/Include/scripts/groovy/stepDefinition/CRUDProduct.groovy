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
import io.appium.java_client.AppiumDriver


class CRUDProduct {
	//User can post and preview product
	@Given("user has opened jual page")
	public void user_has_opened_jual_page() {
		Mobile.tap(findTestObject('Object Repository/Dashboard/btn_jual'), 0)
		Mobile.waitForElementPresent(findTestObject('Object Repository/Post Product Page/btn_preview'), 0)
		Mobile.verifyElementVisible(findTestObject('Object Repository/Post Product Page/btn_preview'), 0)
		Mobile.waitForElementPresent(findTestObject('Object Repository/Post Product Page/btn_terbitkan'), 0)
		Mobile.verifyElementVisible(findTestObject('Object Repository/Post Product Page/btn_terbitkan'), 0)
	}

	@When("user input valid credential in all required fields and user select (.*) in selling page")
	public void user_input_valid_credential_in_all_required_fields_and_user_select_in_selling_page(String button) {
		Mobile.setText(findTestObject('Object Repository/Post Product Page/textbox_namaProduk'), 'kucing lucu', 0)
		Mobile.setText(findTestObject('Object Repository/Post Product Page/textbox_hargaProduk'), '1000', 0)
		Mobile.tap(findTestObject('Object Repository/Post Product Page/select_kategori'), 0)
		Mobile.tap(findTestObject('Object Repository/Post Product Page/select_elektronikKategori'), 0)
		Mobile.setText(findTestObject('Object Repository/Post Product Page/textbox_lokasi'), 'Malang', 0)
		Mobile.hideKeyboard()
		Mobile.setText(findTestObject('Object Repository/Post Product Page/textbox_deskripsi'), 'kucing yang lucu', 0)
		Mobile.hideKeyboard()
		Mobile.tap(findTestObject('Object Repository/Post Product Page/btn_img'), 0)
		Mobile.tap(findTestObject('Object Repository/Post Product Page/btn_galeri'), 0)
		Mobile.tap(findTestObject('Object Repository/Post Product Page/img_fotoProdukAndroid11'), 0)
		if(button=="Terbitkan") {
			Mobile.tap(findTestObject('Object Repository/Post Product Page/btn_terbitkan'), 0)
		}else if(button=="Preview") {
			Mobile.tap(findTestObject('Object Repository/Post Product Page/btn_preview'), 0)
		}
		Mobile.hideKeyboard()
	}

	@Then("user successfully (.*) product")
	public void user_successfully_product(String result) {
		if(result=="create") {
			Mobile.waitForElementPresent(findTestObject('Object Repository/Daftar Jual Saya/txt_diminati'), 0)
			Mobile.verifyElementVisible(findTestObject('Object Repository/Daftar Jual Saya/txt_diminati'), 0)
			Mobile.waitForElementPresent(findTestObject('Object Repository/Daftar Jual Saya/txt_terjual'), 0)
			Mobile.verifyElementVisible(findTestObject('Object Repository/Daftar Jual Saya/txt_terjual'), 0)
		}else if(result=="preview") {
			Mobile.waitForElementPresent(findTestObject('Object Repository/Preview Page/btn_kembaliHalamanSebelumnya'), 0)
			Mobile.verifyElementVisible(findTestObject('Object Repository/Preview Page/btn_kembaliHalamanSebelumnya'), 0)
			Mobile.waitForElementPresent(findTestObject('Object Repository/Preview Page/text_detailProduk'), 0)
			Mobile.verifyElementVisible(findTestObject('Object Repository/Preview Page/text_detailProduk'), 0)
		}
	}

	//User can't leave product picture blank
	@When("user input valid credential in all required fields except upload picture and click terbitkan button in selling page")
	public void user_input_valid_credential_in_all_required_fields_except_upload_picture_and_click_terbitkan_button_in_selling_page() {
		Mobile.setText(findTestObject('Object Repository/Post Product Page/textbox_namaProduk'), 'kucing lucu', 0)
		Mobile.setText(findTestObject('Object Repository/Post Product Page/textbox_hargaProduk'), '1000', 0)
		Mobile.tap(findTestObject('Object Repository/Post Product Page/select_kategori'), 0)
		Mobile.tap(findTestObject('Object Repository/Post Product Page/select_elektronikKategori'), 0)
		Mobile.setText(findTestObject('Object Repository/Post Product Page/textbox_lokasi'), 'Malang', 0)
		Mobile.hideKeyboard()
		Mobile.setText(findTestObject('Object Repository/Post Product Page/textbox_deskripsi'), 'kucing yang lucu', 0)
		Mobile.hideKeyboard()
		Mobile.tap(findTestObject('Object Repository/Post Product Page/btn_terbitkan'), 0)
		Mobile.hideKeyboard()
	}

	@Then("user will fail create product")
	public void user_will_fail_create_product() {
		AppiumDriver<?> driver = MobileDriverFactory.getDriver()
		driver.findElementByXPath("//android.widget.Toast[@text='Silahkan masukkan foto produk terlebih dahulu.']")
	}
	//user can successfully edit product
	@Given("user has opened edit product page")
	public void user_has_opened_edit_product_page() {
		Mobile.tap(findTestObject('Object Repository/Dashboard/btn_akun'), 0)
		Mobile.waitForElementPresent(findTestObject('Object Repository/AkunMenu/btn_daftarJualSaya'), 0)
		Mobile.verifyElementVisible(findTestObject('Object Repository/AkunMenu/btn_daftarJualSaya'), 0)
		Mobile.waitForElementPresent(findTestObject('Object Repository/AkunMenu/btn_edit'), 0)
		Mobile.verifyElementVisible(findTestObject('Object Repository/AkunMenu/btn_edit'), 0)
		Mobile.tap(findTestObject('Object Repository/AkunMenu/btn_daftarJualSaya'), 0)
		Mobile.waitForElementPresent(findTestObject('Object Repository/Daftar Jual Saya/txt_diminati'), 0)
		Mobile.verifyElementVisible(findTestObject('Object Repository/Daftar Jual Saya/txt_diminati'), 0)
		Mobile.waitForElementPresent(findTestObject('Object Repository/Daftar Jual Saya/txt_terjual'), 0)
		Mobile.verifyElementVisible(findTestObject('Object Repository/Daftar Jual Saya/txt_terjual'), 0)
		Mobile.tap(findTestObject('Object Repository/Daftar Jual Saya/btn_productCard2'), 0)
		Mobile.waitForElementPresent(findTestObject('Object Repository/Edit Product Page/btn_perbaruiProduk'), 0)
		Mobile.verifyElementVisible(findTestObject('Object Repository/Edit Product Page/btn_perbaruiProduk'), 0)
		Mobile.waitForElementPresent(findTestObject('Object Repository/Edit Product Page/textbox_deskripsi'), 0)
		Mobile.verifyElementVisible(findTestObject('Object Repository/Edit Product Page/textbox_deskripsi'), 0)
	}

	@When("user edit valid credential in all required fields an click Perbarui produk button in edit product page")
	public void user_edit_valid_credential_in_all_required_fields_an_click_Perbarui_produk_button_in_edit_product_page() {
		Mobile.setText(findTestObject('Object Repository/Edit Product Page/textbox_namaProduk'), 'godzilla', 0)
		Mobile.setText(findTestObject('Object Repository/Edit Product Page/textbox_hargaProduk'), '3000', 0)
		Mobile.hideKeyboard()
		Mobile.setText(findTestObject('Object Repository/Edit Product Page/textbox_lokasi'), 'jakarta', 0)
		Mobile.hideKeyboard()
		Mobile.setText(findTestObject('Object Repository/Edit Product Page/textbox_deskripsi'), 'godzilla gemoy', 0)
		Mobile.hideKeyboard()
		Mobile.tap(findTestObject('Object Repository/Post Product Page/btn_img'), 0)
		Mobile.tap(findTestObject('Object Repository/Post Product Page/btn_galeri'), 0)
		Mobile.tap(findTestObject('Object Repository/Post Product Page/img_fotoProdukAndroid11'), 0)
		Mobile.tap(findTestObject('Object Repository/Edit Product Page/btn_perbaruiProduk'), 0)
	}

	@Then("user will successfully edit product in edit product page")
	public void user_will_successfully_edit_product_in_edit_product_page() {
		Mobile.waitForElementPresent(findTestObject('Object Repository/Daftar Jual Saya/txt_messageCRUD'), 0)
		Mobile.verifyElementVisible(findTestObject('Object Repository/Daftar Jual Saya/txt_messageCRUD'), 0)
		Mobile.waitForElementPresent(findTestObject('Object Repository/Daftar Jual Saya/txt_terjual'), 0)
		Mobile.verifyElementVisible(findTestObject('Object Repository/Daftar Jual Saya/txt_terjual'), 0)
	}
	//user edit nama produk field with empty value
	@When("user edit nama produk field with empty value and click Terbitkan button in edit product page")
	public void user_edit_nama_produk_field_with_empty_value_and_click_Terbitkan_button_in_edit_product_page() {
		Mobile.clearText(findTestObject('Object Repository/Edit Product Page/textbox_namaProduk'), 0)
		Mobile.setText(findTestObject('Object Repository/Edit Product Page/textbox_namaProduk'), '', 0)
		Mobile.setText(findTestObject('Object Repository/Edit Product Page/textbox_hargaProduk'), '3000', 0)
		Mobile.hideKeyboard()
		Mobile.setText(findTestObject('Object Repository/Edit Product Page/textbox_lokasi'), 'jakarta', 0)
		Mobile.hideKeyboard()
		Mobile.setText(findTestObject('Object Repository/Edit Product Page/textbox_deskripsi'), 'godzilla gemoy', 0)
		Mobile.hideKeyboard()
		Mobile.tap(findTestObject('Object Repository/Edit Product Page/btn_perbaruiProduk'), 0)
	}

	@Then("user will fail save edit product in edit product page")
	public void user_will_fail_save_edit_product_in_edit_product_page() {
		Mobile.waitForElementPresent(findTestObject('Object Repository/Edit Product Page/text_errorNamaProdukKosong'), 0)
		Mobile.verifyElementVisible(findTestObject('Object Repository/Edit Product Page/text_errorNamaProdukKosong'), 0)
	}

	@Given("user go to Daftar Jual Saya page and has at least 1 published product")
	public void user_go_to_Daftar_Jual_Saya_page_and_has_at_least_1_published_product() {
		Mobile.tap(findTestObject('Object Repository/AkunMenu/btn_daftarJualSaya'), 0)
		Mobile.waitForElementPresent(findTestObject('Object Repository/Daftar Jual Saya/txt_daftarJualSaya'), 0)
		Mobile.verifyElementVisible(findTestObject('Object Repository/Daftar Jual Saya/txt_daftarJualSaya'), 0)

		Mobile.waitForElementPresent(findTestObject('Object Repository/Daftar Jual Saya/card_product'), 0)
		Mobile.verifyElementVisible(findTestObject('Object Repository/Daftar Jual Saya/card_product'), 0)
	}

	@When("user click the trash can button in one of the product card and then click Hapus button")
	public void user_click_the_trash_can_button_in_one_of_the_product_card_and_then_click_Hapus_button() {
		Mobile.tap(findTestObject('Object Repository/Daftar Jual Saya/btn_trashCan'), 0)
		Mobile.tap(findTestObject('Object Repository/Daftar Jual Saya/btn_hapus'), 0)
	}

	@When("user click one of the desired product in Homepage")
	public void user_click_one_of_the_desired_product_in_Homepage() {
		Mobile.tap(findTestObject('Object Repository/Dashboard/btn_dashboard'), 0)
		Mobile.tap(findTestObject('Object Repository/Dashboard/product_1'), 0)
	}

	@Then("user will see a pop up notification that the product is successfully deleted")
	public void user_will_see_a_pop_up_notification_that_the_product_is_successfully_deleted() {
		Mobile.waitForElementPresent(findTestObject('Object Repository/Daftar Jual Saya/txt_success'), 0)
		Mobile.verifyElementVisible(findTestObject('Object Repository/Daftar Jual Saya/txt_success'), 0)
	}

	@Then("user will be redirected to their desired product details page while the Delete button will not be displayed")
	public void user_will_be_redirected_to_their_desired_product_details_page_while_the_Delete_button_will_not_be_displayed() {
		Mobile.waitForElementPresent(findTestObject('Object Repository/Product Details/img_product'), 0)
		Mobile.verifyElementVisible(findTestObject('Object Repository/Product Details/img_product'), 0)

		Mobile.waitForElementPresent(findTestObject('Object Repository/Buyer Transaction Page/btn_nego'), 0)
		Mobile.verifyElementVisible(findTestObject('Object Repository/Buyer Transaction Page/btn_nego'), 0)
	}
}



