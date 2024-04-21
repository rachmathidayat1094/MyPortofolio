@Transaction
Feature: transaction feature

  #####################BUYER TRANSACTION#################################
  Scenario Outline: <case_id>- buyers <result> to send trade offer
    Given buyers succefully register to the website
    Given buyers <condition> completed their profiles
    When buyers input <condition_two> values and send the trade offer
    Then buyers will <result> in sending the trade offer

    Examples: 
      | case_id  | condition | result                | condition_two |
      | TC.WEB.1 | have not  | failed                | correct       |
      | TC.WEB.2 | have      | success               | correct       |
      | TC.WEB.3 | have      | fail inputting string | string        |

  #########################################################################
  ###################SELLER TRANSACTION###################################
  Scenario Outline: <case_id>-sellers <condition> trade offers from buyers
    Given seller succesfully post product to the website
    Given buyers succesfully send the trade offer
    When seller open trade offer notification
    When seller <condition> the offer
    Then seller will be succesfull in <result> the transaction

    Examples: 
      | case_id  | condition | result    |
      | TC.WEB.4 | accepts   | accepting |
      | TC.WEB.5 | rejects   | rejecting |
