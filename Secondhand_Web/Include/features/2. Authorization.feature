@Authorization
Feature: Login Feature, Register Feature, and Logout Feature

  Scenario: TC.WEB.16-User registers with the valid value on the register page
    Given user has opened register page
    When user fills up all required fields with valid value on the register page
    And user clicks Daftar button on the register page
    Then user will be redirected to the dashboard page

  Scenario Outline: <case_id>-User does not fill up <field> when register on the register page
    Given user has opened register page
    When user fills up all required fields except <field> on the register page
    And user clicks Daftar button on the register page
    Then <message> will be received by user on the register page

    Examples: 
      | case_id   | field       | message               |
      | TC.WEB.17 | name field  | warning message name  |
      | TC.WEB.18 | email field | warning message email |
 
  Scenario Outline: <case_id>-User <result> successfully login
    Given user on the Login page
    When user input <condition> values in the <fields> field in the Login page
    Then user <result> successfully login

    Examples: 
      | case_id    | condition  | fields   | result  |
      | TC.WEB.6   | valid			| all      | can     |
      | TC.WEB.7   | invalid		| email    | can not |

	Scenario: TC.WEB.10-User Logout to exit current session
	  Given user login to the website
		When user click Profile button
		Then user click Logout button