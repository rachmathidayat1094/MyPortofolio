@CRUDProduct
Feature: CRUD Product Mobile

  Background: User already login
    Given user on the Login page
    When user input the valid credential of username and password
    And user click Masuk button
    Then user will be redirect to Account page

  @positive
  Scenario Outline: <case_id>-User can <result> product
    Given user has opened jual page
    When user input valid credential in all required fields and user select <button> in selling page
    Then user successfully <result> product

    Examples: 
      | case_id      | button    | result  |
      | TC.MOBILE.13 | Terbitkan | create  |
      | TC.MOBILE.14 | Preview   | preview |

  @negative
  Scenario: TC.MOBILE.15-User as seller can't leave product picture blank
    Given user has opened jual page
    When user input valid credential in all required fields except upload picture and click terbitkan button in selling page
    Then user will fail create product

  @positive
  Scenario: TC.MOBILE.16-User can edit product
    Given user has opened edit product page
    When user edit valid credential in all required fields an click Perbarui produk button in edit product page
    Then user will successfully edit product in edit product page

  @negative
  Scenario: TC.MOBILE.17-User edit nama produk field with empty value
    Given user has opened edit product page
    When user edit nama produk field with empty value and click Terbitkan button in edit product page
    Then user will fail save edit product in edit product page
    
  @positive
  Scenario: TC.MOBILE.30-User delete their own product
    Given user go to Daftar Jual Saya page and has at least 1 published product
    When user click the trash can button in one of the product card and then click Hapus button
    Then user will see a pop up notification that the product is successfully deleted

  @negative
  Scenario: TC.MOBILE.31-User tries to delete another user's product
    When user click one of the desired product in Homepage
    Then user will be redirected to their desired product details page while the Delete button will not be displayed
