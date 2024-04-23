@AccountInfo
Feature: Account Info Feature

  Background: User already login
    Given user on the Login page
    When user input the valid credential of username and password
    And user click Masuk button
    Then user will be redirect to Account page

  @positive
  Scenario Outline: <case_id>-User can edit their <fields> in Account Info
    Given user go to Lengkapi Info Akun page
    When user can fill the required data in <fields> fields and submit the data in the Account Info page
    Then user will see a pop up notification that <fields> is successfully changed

    Examples: 
      | case_id      | fields        |
      | TC.MOBILE.23 | photo profile |
      | TC.MOBILE.24 | name          |
      | TC.MOBILE.25 | phone number  |
      | TC.MOBILE.26 | city          |
      | TC.MOBILE.27 | address       |

  @negative
  Scenario: TC.MOBILE.28-User tries to input phone number value with value more than 14 numbers
    Given user go to Lengkapi Info Akun page
    When user fill the phone number fields with value more than 14 numbers
    Then the fields will be restricted to 14 digits maximum and user will be remain at phone number fields

  @negative
  Scenario: TC.MOBILE.29-User tries to input the required files with empty value
    Given user go to Lengkapi Info Akun page
    When user set the one of the fields to empty and submit the data in Lengkapi Info Akun page
    Then user will see the error message that user has to fill the required fields first and user will be remain at one at the fields that has been selected before
