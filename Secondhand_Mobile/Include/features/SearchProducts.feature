@SearchProducts
Feature: Mobile get a search products feature

  @Postive
  Scenario Outline: <case_id>-User can filter by <type> the products
    Given user has opened homepage
    When user select and press the <type> button in the category filter
    Then user will successfully get list <type> products

    Examples: 
      | case_id      | type                     |
      | TC.MOBILE.32 | computer and accessories |
      | TC.MOBILE.33 | electronic               |

  @Positive
  Scenario: TC.MOBILE.34-User can gets list of products based on correct keyword in the search
    Given user has opened homepage
    When user input alphabert in search field
    Then user will successfully get list of products based on the correct keywords

  @Negative
  Scenario: TC.MOBILE.35-User cannot gets list of products based on uncorrect keyword in the search
    Given user has opened homepage
    When user input characters in search field
    Then user will unsuccessfull get list of products based on the uncorrect keywords

  @Positive
  Scenario: TC.MOBILE.36-Seller gets list of product sold
    Given seller already in account page
    When seller click my selling list
    Then seller will successfull gets list of products sold

  @Negative
  Scenario: TC.MOBILE.37-Seller cannot gets list of product sold
    Given seller already in account page
    When seller click my selling list
    Then seller will unsuccessfull gets list of products sold
