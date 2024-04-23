@Dashboard
Feature: Dashboard Feature

Scenario Outline: <case_id>-User on <page> can go back to Dashboard
    Given user is on <page> page
    When user click Beranda button in bottom bar
    Then user successfully return to Dashboard
    
    Examples: 
    | case_id        | page         |
    | TC.MOBILE.10	 | notification |
    | TC.MOBILE.11	 | transaction  |
    | TC.MOBILE.12	 | account      |