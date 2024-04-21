@AccountInfo
Feature: Account Info Feature

  @positive
  Scenario Outline: <case_id>-User can set their Account Info from <page>
  	Given user can successfully login to the website
    And user already in the Account Info page from <page>
    When user can fill all the required data and submit the data in the Account Info page
    Then users Account Info will be updated and user will be redirected back to Homepage

    Examples: 
      | case_id   | page                  |
      | TC.WEB.21 | Homepage              |
      | TC.WEB.22 | Daftar Jual Saya page |

  @positive
  Scenario: TC.WEB.23-User can set their Account Info first then user tries to sell a product
    Given user just registered a new account
    And user redirected to Account Info from clicking Jual button
    When user can fill all the required data and submit the data in the Account Info page
    Then users Account Info will be updated and user will be redirected to Add Product page

  @negative
  Scenario: TC.WEB.24-User tries to input the required files with empty value
    Given user can successfully login to the website
    And user already in the Account Info page from Homepage
    When user fill all the required data with empty values and submit the data in the Account Info page
    Then users Account Info will not be updated and user will be remain at Account Info page
