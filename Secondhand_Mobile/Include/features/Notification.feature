@Notification
Feature: Notification Feature

  Scenario Outline: <case_id>-User sees <notification> on the notification pop-up
    Given user has opened on the Dashboard page
    When user clicks notification icon on the navigation bar
    Then user will be seen <notification> on the notification page

    Examples: 
      | case_id      | notification                    |
      | TC.MOBILE.21 | negotiated product notification |
      | TC.MOBILE.22 | published product notification  |
