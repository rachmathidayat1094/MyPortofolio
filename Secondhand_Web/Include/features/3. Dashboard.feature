@Dashboard
Feature: Dashboard Feature

  Scenario Outline: <case_id>-User can go to the <page> page in Dashboard
    Given user successfully open website
    When user in <where> page user click <button> button on the bottom of page
    Then user will be redirect to <page> page of product listing

    Examples: 
      | case_id  | where            | button   | page     |
      | TC.WEB.8 | on the first     | next     | next     |
      | TC.WEB.9 | not in the first | previous | previous |

  Scenario Outline: <case_id>-User sees <notification> on the notification pop-up
    Given user has opened dashboard page
    When user clicks notification icon on the navigation bar
    Then user will be seen <notification> on the notification pop up

    Examples: 
      | case_id   | notification                    |
      | TC.WEB.19 | negotiated product notification |
      | TC.WEB.20 | published product notification  |
