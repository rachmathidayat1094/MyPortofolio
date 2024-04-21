@SearchProducts
Feature: Web get a search products feature

  Scenario Outline: <case_id>-User can filter by <type> the products
    Given user has opened homepage
    When user select and press the <type> button in the category filter
    Then user will successfully get list <type> products

    Examples: 
      | case_id   | type    |
      | TC.WEB.27 | hobby   |
      | TC.WEB.28 | vehicle |

  @Positive
  Scenario: TC.WEB.29-User can gets list of products based on correct keyword in the search
    Given user has opened homepage
    When user input alphabert in search field
    When user enter button in keyboard
    Then user will successfully get list of products based on the correct keywords

  @Negative
  Scenario: TC.WEB.30-User cannot gets list of products based on uncorrect keyword in the search
    Given user has opened homepage
    When user input characters in search field
    When user enter button in keyboard
    Then user will unsuccessfull get list of products based on the uncorrect keywords

  @Positive
  Scenario: TC.WEB.31-Seller gets list of product sold
    Given seller already in list product page
    When seller click sold in list category
    Then seller will successfull gets list of products sold

  @Negative
  Scenario: TC.WEB.32-Seller cannot gets list of product sold
    Given seller already in list product page
    When seller click sold in list category
    Then seller will unsuccessfull gets list of products sold
