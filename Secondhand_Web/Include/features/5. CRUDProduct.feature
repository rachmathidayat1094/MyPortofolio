@CRUDProduct
Feature: CRUD feature

  Background: user already login
    Given user on the Login page
    When user input valid values in the all field in the Login page
    Then user can successfully login

  @positive
  Scenario Outline: <case_id>-User can <result> product
    Given user has opened selling page
    When user input valid credential in all required fields user and select <button> in selling page
    Then user will successfully <result> product

    Examples: 
      | case_id   | button    | result  |
      | TC.WEB.11 | terbitkan | post    |
      | TC.WEB.12 | preview   | preview |

  @negative
  Scenario: TC.WEB.13-User doesn't choose one of category in kategori fields
    Given user has opened selling page
    When user input valid credential in all required except in kategori fields and click terbitkan button in selling page
    Then user will fail post new product

  @positive
  Scenario: TC.WEB.14-User can edit product
    Given user has opened edit product page
    When user edit valid credential in all required fields and select Terbitkan button in edit product page
    Then user will successfully edit product

  @negative
  Scenario: TC.WEB.15-User edit nama produk field with empty value
    Given user has opened edit product page
    When user edit nama produk field with empty value and select Terbitkan button in edit product page
    Then user will fail save edit product

  @positive
  Scenario: TC.WEB.25-User delete their own product
    Given user go to Daftar Jual Saya page and has at least 1 published product
    When user click one of the product in Daftar Jual Saya page and click Delete button
    Then product will be deleted and user will be redirected back to Daftar Jual Saya page

  @negative
  Scenario: TC.WEB.26-User tries to delete another users product
    When user click one of the desired product in Homepage
    Then user will be redirected to their desired product details page while the Delete button will not be displayed
