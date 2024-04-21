$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/1. SearchProducts.feature");
formatter.feature({
  "name": "Web get a search products feature",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@SearchProducts"
    }
  ]
});
formatter.scenarioOutline({
  "name": "\u003ccase_id\u003e-User can filter by \u003ctype\u003e the products",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user has opened homepage",
  "keyword": "Given "
});
formatter.step({
  "name": "user select and press the \u003ctype\u003e button in the category filter",
  "keyword": "When "
});
formatter.step({
  "name": "user will successfully get list \u003ctype\u003e products",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "case_id",
        "type"
      ]
    },
    {
      "cells": [
        "TC.WEB.27",
        "hobby"
      ]
    },
    {
      "cells": [
        "TC.WEB.28",
        "vehicle"
      ]
    }
  ]
});
formatter.scenario({
  "name": "TC.WEB.27-User can filter by hobby the products",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SearchProducts"
    }
  ]
});
formatter.step({
  "name": "user has opened homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchProductByCategory.user_has_opened_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select and press the hobby button in the category filter",
  "keyword": "When "
});
formatter.match({
  "location": "SearchProductByCategory.user_select_and_press_button_in_the_category_filter(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will successfully get list hobby products",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchProductByCategory.user_will_successfully_get_list_products(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC.WEB.28-User can filter by vehicle the products",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SearchProducts"
    }
  ]
});
formatter.step({
  "name": "user has opened homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchProductByCategory.user_has_opened_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select and press the vehicle button in the category filter",
  "keyword": "When "
});
formatter.match({
  "location": "SearchProductByCategory.user_select_and_press_button_in_the_category_filter(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will successfully get list vehicle products",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchProductByCategory.user_will_successfully_get_list_products(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC.WEB.29-User can gets list of products based on correct keyword in the search",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SearchProducts"
    },
    {
      "name": "@Positive"
    }
  ]
});
formatter.step({
  "name": "user has opened homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchProductByCategory.user_has_opened_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input alphabert in search field",
  "keyword": "When "
});
formatter.match({
  "location": "SearchProduct.user_input_alphabert_in_search_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter button in keyboard",
  "keyword": "When "
});
formatter.match({
  "location": "SearchProduct.user_enter_button_in_keyboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will successfully get list of products based on the correct keywords",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchProduct.user_will_successfully_get_list_of_products_based_on_the_correct_keywords()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC.WEB.30-User cannot gets list of products based on uncorrect keyword in the search",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SearchProducts"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "user has opened homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchProductByCategory.user_has_opened_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input characters in search field",
  "keyword": "When "
});
formatter.match({
  "location": "SearchProduct.user_input_characters_in_search_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter button in keyboard",
  "keyword": "When "
});
formatter.match({
  "location": "SearchProduct.user_enter_button_in_keyboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will unsuccessfull get list of products based on the uncorrect keywords",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchProduct.user_will_successfully_get_list_of_products_based_on_the_uncorrect_keywords()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC.WEB.31-Seller gets list of product sold",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SearchProducts"
    },
    {
      "name": "@Positive"
    }
  ]
});
formatter.step({
  "name": "seller already in list product page",
  "keyword": "Given "
});
formatter.match({
  "location": "SoldProduct.seller_already_in_list_product_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller click sold in list category",
  "keyword": "When "
});
formatter.match({
  "location": "SoldProduct.seller_click_sold_in_list_category()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller will successfull gets list of products sold",
  "keyword": "Then "
});
formatter.match({
  "location": "SoldProduct.seller_will_successfull_gets_list_of_products_sold()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC.WEB.32-Seller cannot gets list of product sold",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SearchProducts"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "seller already in list product page",
  "keyword": "Given "
});
formatter.match({
  "location": "SoldProduct.seller_already_in_list_product_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller click sold in list category",
  "keyword": "When "
});
formatter.match({
  "location": "SoldProduct.seller_click_sold_in_list_category()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller will unsuccessfull gets list of products sold",
  "keyword": "Then "
});
formatter.match({
  "location": "SoldProduct.seller_will_unsuccessfull_gets_list_of_products_sold()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/2. Authorization.feature");
formatter.feature({
  "name": "Login Feature, Register Feature, and Logout Feature",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Authorization"
    }
  ]
});
formatter.scenario({
  "name": "TC.WEB.16-User registers with the valid value on the register page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Authorization"
    }
  ]
});
formatter.step({
  "name": "user has opened register page",
  "keyword": "Given "
});
formatter.match({
  "location": "Register.user_has_opened_register_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fills up all required fields with valid value on the register page",
  "keyword": "When "
});
formatter.match({
  "location": "Register.user_fills_up_all_required_fields_with_valid_value_on_the_register_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks Daftar button on the register page",
  "keyword": "And "
});
formatter.match({
  "location": "Register.user_clicks_Daftar_button_on_the_register_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will be redirected to the dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.user_will_be_redirected_to_the_dashboard_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "\u003ccase_id\u003e-User does not fill up \u003cfield\u003e when register on the register page",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user has opened register page",
  "keyword": "Given "
});
formatter.step({
  "name": "user fills up all required fields except \u003cfield\u003e on the register page",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks Daftar button on the register page",
  "keyword": "And "
});
formatter.step({
  "name": "\u003cmessage\u003e will be received by user on the register page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "case_id",
        "field",
        "message"
      ]
    },
    {
      "cells": [
        "TC.WEB.17",
        "name field",
        "warning message name"
      ]
    },
    {
      "cells": [
        "TC.WEB.18",
        "email field",
        "warning message email"
      ]
    }
  ]
});
formatter.scenario({
  "name": "TC.WEB.17-User does not fill up name field when register on the register page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Authorization"
    }
  ]
});
formatter.step({
  "name": "user has opened register page",
  "keyword": "Given "
});
formatter.match({
  "location": "Register.user_has_opened_register_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fills up all required fields except name field on the register page",
  "keyword": "When "
});
formatter.match({
  "location": "Register.user_fills_up_all_required_fields_except_on_the_register_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks Daftar button on the register page",
  "keyword": "And "
});
formatter.match({
  "location": "Register.user_clicks_Daftar_button_on_the_register_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "warning message name will be received by user on the register page",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.will_be_received_by_user_on_the_register_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC.WEB.18-User does not fill up email field when register on the register page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Authorization"
    }
  ]
});
formatter.step({
  "name": "user has opened register page",
  "keyword": "Given "
});
formatter.match({
  "location": "Register.user_has_opened_register_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fills up all required fields except email field on the register page",
  "keyword": "When "
});
formatter.match({
  "location": "Register.user_fills_up_all_required_fields_except_on_the_register_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks Daftar button on the register page",
  "keyword": "And "
});
formatter.match({
  "location": "Register.user_clicks_Daftar_button_on_the_register_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "warning message email will be received by user on the register page",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.will_be_received_by_user_on_the_register_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "\u003ccase_id\u003e-User \u003cresult\u003e successfully login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user on the Login page",
  "keyword": "Given "
});
formatter.step({
  "name": "user input \u003ccondition\u003e values in the \u003cfields\u003e field in the Login page",
  "keyword": "When "
});
formatter.step({
  "name": "user \u003cresult\u003e successfully login",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "case_id",
        "condition",
        "fields",
        "result"
      ]
    },
    {
      "cells": [
        "TC.WEB.6",
        "valid",
        "all",
        "can"
      ]
    },
    {
      "cells": [
        "TC.WEB.7",
        "invalid",
        "email",
        "can not"
      ]
    }
  ]
});
formatter.scenario({
  "name": "TC.WEB.6-User can successfully login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Authorization"
    }
  ]
});
formatter.step({
  "name": "user on the Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.user_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input valid values in the all field in the Login page",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_input_value_in_the_field_in_the_Login_page(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can successfully login",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_successfully_login(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC.WEB.7-User can not successfully login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Authorization"
    }
  ]
});
formatter.step({
  "name": "user on the Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.user_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input invalid values in the email field in the Login page",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_input_value_in_the_field_in_the_Login_page(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can not successfully login",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_successfully_login(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC.WEB.10-User Logout to exit current session",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Authorization"
    }
  ]
});
formatter.step({
  "name": "user login to the website",
  "keyword": "Given "
});
formatter.match({
  "location": "Logout.user_login_to_the_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click Profile button",
  "keyword": "When "
});
formatter.match({
  "location": "Logout.user_click_Profile_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click Logout button",
  "keyword": "Then "
});
formatter.match({
  "location": "Logout.user_click_Logout_button()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/3. Dashboard.feature");
formatter.feature({
  "name": "Dashboard Feature",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Dashboard"
    }
  ]
});
formatter.scenarioOutline({
  "name": "\u003ccase_id\u003e-User can go to the \u003cpage\u003e page in Dashboard",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user successfully open website",
  "keyword": "Given "
});
formatter.step({
  "name": "user in \u003cwhere\u003e page user click \u003cbutton\u003e button on the bottom of page",
  "keyword": "When "
});
formatter.step({
  "name": "user will be redirect to \u003cpage\u003e page of product listing",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "case_id",
        "where",
        "button",
        "page"
      ]
    },
    {
      "cells": [
        "TC.WEB.8",
        "on the first",
        "next",
        "next"
      ]
    },
    {
      "cells": [
        "TC.WEB.9",
        "not in the first",
        "previous",
        "previous"
      ]
    }
  ]
});
formatter.scenario({
  "name": "TC.WEB.8-User can go to the next page in Dashboard",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Dashboard"
    }
  ]
});
formatter.step({
  "name": "user successfully open website",
  "keyword": "Given "
});
formatter.match({
  "location": "Dashboard.user_successfully_open_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user in on the first page user click next button on the bottom of page",
  "keyword": "When "
});
formatter.match({
  "location": "Dashboard.user_in_page_user_click_button_on_the_bottom_of_page(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will be redirect to next page of product listing",
  "keyword": "Then "
});
formatter.match({
  "location": "Dashboard.user_will_be_redirect_to_page_of_product_listing(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC.WEB.9-User can go to the previous page in Dashboard",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Dashboard"
    }
  ]
});
formatter.step({
  "name": "user successfully open website",
  "keyword": "Given "
});
formatter.match({
  "location": "Dashboard.user_successfully_open_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user in not in the first page user click previous button on the bottom of page",
  "keyword": "When "
});
formatter.match({
  "location": "Dashboard.user_in_page_user_click_button_on_the_bottom_of_page(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will be redirect to previous page of product listing",
  "keyword": "Then "
});
formatter.match({
  "location": "Dashboard.user_will_be_redirect_to_page_of_product_listing(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "\u003ccase_id\u003e-User sees \u003cnotification\u003e on the notification pop-up",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user has opened dashboard page",
  "keyword": "Given "
});
formatter.step({
  "name": "user clicks notification icon on the navigation bar",
  "keyword": "When "
});
formatter.step({
  "name": "user will be seen \u003cnotification\u003e on the notification pop up",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "case_id",
        "notification"
      ]
    },
    {
      "cells": [
        "TC.WEB.19",
        "negotiated product notification"
      ]
    },
    {
      "cells": [
        "TC.WEB.20",
        "published product notification"
      ]
    }
  ]
});
formatter.scenario({
  "name": "TC.WEB.19-User sees negotiated product notification on the notification pop-up",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Dashboard"
    }
  ]
});
formatter.step({
  "name": "user has opened dashboard page",
  "keyword": "Given "
});
formatter.match({
  "location": "Notification.user_has_opened_dashboard_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks notification icon on the navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "Notification.user_clicks_notification_icon_on_the_navigation_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will be seen negotiated product notification on the notification pop up",
  "keyword": "Then "
});
formatter.match({
  "location": "Notification.user_will_be_seen_on_the_notification_pop_up(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC.WEB.20-User sees published product notification on the notification pop-up",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Dashboard"
    }
  ]
});
formatter.step({
  "name": "user has opened dashboard page",
  "keyword": "Given "
});
formatter.match({
  "location": "Notification.user_has_opened_dashboard_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks notification icon on the navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "Notification.user_clicks_notification_icon_on_the_navigation_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will be seen published product notification on the notification pop up",
  "keyword": "Then "
});
formatter.match({
  "location": "Notification.user_will_be_seen_on_the_notification_pop_up(String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/4. AccountInfo.feature");
formatter.feature({
  "name": "Account Info Feature",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@AccountInfo"
    }
  ]
});
formatter.scenarioOutline({
  "name": "\u003ccase_id\u003e-User can set their Account Info from \u003cpage\u003e",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@positive"
    }
  ]
});
formatter.step({
  "name": "user can successfully login to the website",
  "keyword": "Given "
});
formatter.step({
  "name": "user already in the Account Info page from \u003cpage\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "user can fill all the required data and submit the data in the Account Info page",
  "keyword": "When "
});
formatter.step({
  "name": "users Account Info will be updated and user will be redirected back to Homepage",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "case_id",
        "page"
      ]
    },
    {
      "cells": [
        "TC.WEB.21",
        "Homepage"
      ]
    },
    {
      "cells": [
        "TC.WEB.22",
        "Daftar Jual Saya page"
      ]
    }
  ]
});
formatter.scenario({
  "name": "TC.WEB.21-User can set their Account Info from Homepage",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@AccountInfo"
    },
    {
      "name": "@positive"
    }
  ]
});
formatter.step({
  "name": "user can successfully login to the website",
  "keyword": "Given "
});
formatter.match({
  "location": "AccountInfo.user_can_successfully_login_to_the_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user already in the Account Info page from Homepage",
  "keyword": "And "
});
formatter.match({
  "location": "AccountInfo.user_already_in_the_Account_Info_page_from(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can fill all the required data and submit the data in the Account Info page",
  "keyword": "When "
});
formatter.match({
  "location": "AccountInfo.user_can_fill_all_the_required_data_and_submit_the_data_in_the_Account_Info_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "users Account Info will be updated and user will be redirected back to Homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountInfo.users_Account_Info_will_be_updated_and_user_will_be_redirected_back_to_Homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC.WEB.22-User can set their Account Info from Daftar Jual Saya page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@AccountInfo"
    },
    {
      "name": "@positive"
    }
  ]
});
formatter.step({
  "name": "user can successfully login to the website",
  "keyword": "Given "
});
formatter.match({
  "location": "AccountInfo.user_can_successfully_login_to_the_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user already in the Account Info page from Daftar Jual Saya page",
  "keyword": "And "
});
formatter.match({
  "location": "AccountInfo.user_already_in_the_Account_Info_page_from(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can fill all the required data and submit the data in the Account Info page",
  "keyword": "When "
});
formatter.match({
  "location": "AccountInfo.user_can_fill_all_the_required_data_and_submit_the_data_in_the_Account_Info_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "users Account Info will be updated and user will be redirected back to Homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountInfo.users_Account_Info_will_be_updated_and_user_will_be_redirected_back_to_Homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC.WEB.23-User can set their Account Info first then user tries to sell a product",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@AccountInfo"
    },
    {
      "name": "@positive"
    }
  ]
});
formatter.step({
  "name": "user just registered a new account",
  "keyword": "Given "
});
formatter.match({
  "location": "AccountInfo.user_just_registered_a_new_account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user redirected to Account Info from clicking Jual button",
  "keyword": "And "
});
formatter.match({
  "location": "AccountInfo.user_redirected_to_Account_Info_from_clicking_Jual_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can fill all the required data and submit the data in the Account Info page",
  "keyword": "When "
});
formatter.match({
  "location": "AccountInfo.user_can_fill_all_the_required_data_and_submit_the_data_in_the_Account_Info_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "users Account Info will be updated and user will be redirected to Add Product page",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountInfo.users_Account_Info_will_be_updated_and_user_will_be_redirected_to_Add_Product_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC.WEB.24-User tries to input the required files with empty value",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@AccountInfo"
    },
    {
      "name": "@negative"
    }
  ]
});
formatter.step({
  "name": "user can successfully login to the website",
  "keyword": "Given "
});
formatter.match({
  "location": "AccountInfo.user_can_successfully_login_to_the_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user already in the Account Info page from Homepage",
  "keyword": "And "
});
formatter.match({
  "location": "AccountInfo.user_already_in_the_Account_Info_page_from(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fill all the required data with empty values and submit the data in the Account Info page",
  "keyword": "When "
});
formatter.match({
  "location": "AccountInfo.user_fill_all_the_required_data_with_empty_value_and_submit_the_data_in_the_Account_Info_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "users Account Info will not be updated and user will be remain at Account Info page",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountInfo.users_Account_Info_will_not_be_updated_and_user_will_be_remain_at_Account_Info_page()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/5. CRUDProduct.feature");
formatter.feature({
  "name": "CRUD feature",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@CRUDProduct"
    }
  ]
});
formatter.scenarioOutline({
  "name": "\u003ccase_id\u003e-User can \u003cresult\u003e product",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@positive"
    }
  ]
});
formatter.step({
  "name": "user has opened selling page",
  "keyword": "Given "
});
formatter.step({
  "name": "user input valid credential in all required fields user and select \u003cbutton\u003e in selling page",
  "keyword": "When "
});
formatter.step({
  "name": "user will successfully \u003cresult\u003e product",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "case_id",
        "button",
        "result"
      ]
    },
    {
      "cells": [
        "TC.WEB.11",
        "terbitkan",
        "post"
      ]
    },
    {
      "cells": [
        "TC.WEB.12",
        "preview",
        "preview"
      ]
    }
  ]
});
formatter.background({
  "name": "user already login",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user on the Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.user_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input valid values in the all field in the Login page",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_input_value_in_the_field_in_the_Login_page(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can successfully login",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_successfully_login(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC.WEB.11-User can post product",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CRUDProduct"
    },
    {
      "name": "@positive"
    }
  ]
});
formatter.step({
  "name": "user has opened selling page",
  "keyword": "Given "
});
formatter.match({
  "location": "CRUDProduct.user_has_opened_selling_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input valid credential in all required fields user and select terbitkan in selling page",
  "keyword": "When "
});
formatter.match({
  "location": "CRUDProduct.user_input_valid_credential_in_all_required_fields_user_and_select_in_selling_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will successfully post product",
  "keyword": "Then "
});
formatter.match({
  "location": "CRUDProduct.user_will_successfully_product(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "user already login",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user on the Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.user_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input valid values in the all field in the Login page",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_input_value_in_the_field_in_the_Login_page(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can successfully login",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_successfully_login(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC.WEB.12-User can preview product",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CRUDProduct"
    },
    {
      "name": "@positive"
    }
  ]
});
formatter.step({
  "name": "user has opened selling page",
  "keyword": "Given "
});
formatter.match({
  "location": "CRUDProduct.user_has_opened_selling_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input valid credential in all required fields user and select preview in selling page",
  "keyword": "When "
});
formatter.match({
  "location": "CRUDProduct.user_input_valid_credential_in_all_required_fields_user_and_select_in_selling_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will successfully preview product",
  "keyword": "Then "
});
formatter.match({
  "location": "CRUDProduct.user_will_successfully_product(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "user already login",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user on the Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.user_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input valid values in the all field in the Login page",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_input_value_in_the_field_in_the_Login_page(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can successfully login",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_successfully_login(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC.WEB.13-User doesn\u0027t choose one of category in kategori fields",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@CRUDProduct"
    },
    {
      "name": "@negative"
    }
  ]
});
formatter.step({
  "name": "user has opened selling page",
  "keyword": "Given "
});
formatter.match({
  "location": "CRUDProduct.user_has_opened_selling_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input valid credential in all required except in kategori fields and click terbitkan button in selling page",
  "keyword": "When "
});
formatter.match({
  "location": "CRUDProduct.user_input_valid_credential_in_all_required_except_in_kategori_fields_and_click_terbitkan_button_in_selling_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will fail post new product",
  "keyword": "Then "
});
formatter.match({
  "location": "CRUDProduct.user_will_fail_post_new_product()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "user already login",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user on the Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.user_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input valid values in the all field in the Login page",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_input_value_in_the_field_in_the_Login_page(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can successfully login",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_successfully_login(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC.WEB.14-User can edit product",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@CRUDProduct"
    },
    {
      "name": "@positive"
    }
  ]
});
formatter.step({
  "name": "user has opened edit product page",
  "keyword": "Given "
});
formatter.match({
  "location": "CRUDProduct.user_has_opened_edit_product_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user edit valid credential in all required fields and select Terbitkan button in edit product page",
  "keyword": "When "
});
formatter.match({
  "location": "CRUDProduct.user_edit_valid_credential_in_all_required_fields_and_select_terbitkan_button_in_edit_product_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will successfully edit product",
  "keyword": "Then "
});
formatter.match({
  "location": "CRUDProduct.user_will_successfully_product(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "user already login",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user on the Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.user_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input valid values in the all field in the Login page",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_input_value_in_the_field_in_the_Login_page(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can successfully login",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_successfully_login(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC.WEB.15-User edit nama produk field with empty value",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@CRUDProduct"
    },
    {
      "name": "@negative"
    }
  ]
});
formatter.step({
  "name": "user has opened edit product page",
  "keyword": "Given "
});
formatter.match({
  "location": "CRUDProduct.user_has_opened_edit_product_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user edit nama produk field with empty value and select Terbitkan button in edit product page",
  "keyword": "When "
});
formatter.match({
  "location": "CRUDProduct.user_edit_nama_produk_field_with_empty_value_and_select_terbitkan_button_in_edit_product_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will fail save edit product",
  "keyword": "Then "
});
formatter.match({
  "location": "CRUDProduct.user_will_fail_save_edit_product()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "user already login",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user on the Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.user_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input valid values in the all field in the Login page",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_input_value_in_the_field_in_the_Login_page(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can successfully login",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_successfully_login(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC.WEB.25-User delete their own product",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@CRUDProduct"
    },
    {
      "name": "@positive"
    }
  ]
});
formatter.step({
  "name": "user go to Daftar Jual Saya page and has at least 1 published product",
  "keyword": "Given "
});
formatter.match({
  "location": "CRUDProduct.user_go_to_Daftar_Jual_Saya_page_and_has_at_least_1_published_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click one of the product in Daftar Jual Saya page and click Delete button",
  "keyword": "When "
});
formatter.match({
  "location": "CRUDProduct.user_click_one_of_the_product_in_Daftar_Jual_Saya_page_and_click_Delete_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "product will be deleted and user will be redirected back to Daftar Jual Saya page",
  "keyword": "Then "
});
formatter.match({
  "location": "CRUDProduct.product_will_be_deleted_and_user_will_be_redirected_back_to_Daftar_Jual_Saya_page()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "user already login",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user on the Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.user_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input valid values in the all field in the Login page",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_input_value_in_the_field_in_the_Login_page(String,Object)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can successfully login",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_successfully_login(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC.WEB.26-User tries to delete another users product",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@CRUDProduct"
    },
    {
      "name": "@negative"
    }
  ]
});
formatter.step({
  "name": "user click one of the desired product in Homepage",
  "keyword": "When "
});
formatter.match({
  "location": "CRUDProduct.user_click_one_of_the_desired_product_in_Homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will be redirected to their desired product details page while the Delete button will not be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "CRUDProduct.user_will_be_redirected_to_their_desired_product_details_page_while_the_Delete_button_will_not_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/6. Transaction.feature");
formatter.feature({
  "name": "transaction feature",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Transaction"
    }
  ]
});
formatter.scenarioOutline({
  "name": "\u003ccase_id\u003e- buyers \u003cresult\u003e to send trade offer",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "buyers succefully register to the website",
  "keyword": "Given "
});
formatter.step({
  "name": "buyers \u003ccondition\u003e completed their profiles",
  "keyword": "Given "
});
formatter.step({
  "name": "buyers input \u003ccondition_two\u003e values and send the trade offer",
  "keyword": "When "
});
formatter.step({
  "name": "buyers will \u003cresult\u003e in sending the trade offer",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "case_id",
        "condition",
        "result",
        "condition_two"
      ]
    },
    {
      "cells": [
        "TC.WEB.1",
        "have not",
        "failed",
        "correct"
      ]
    },
    {
      "cells": [
        "TC.WEB.2",
        "have",
        "success",
        "correct"
      ]
    },
    {
      "cells": [
        "TC.WEB.3",
        "have",
        "fail inputting string",
        "string"
      ]
    }
  ]
});
formatter.scenario({
  "name": "TC.WEB.1- buyers failed to send trade offer",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Transaction"
    }
  ]
});
formatter.step({
  "name": "buyers succefully register to the website",
  "keyword": "Given "
});
formatter.match({
  "location": "Transaction.buyers_succefully_register_to_the_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buyers have not completed their profiles",
  "keyword": "Given "
});
formatter.match({
  "location": "Transaction.buyer_completed_their_profiles(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buyers input correct values and send the trade offer",
  "keyword": "When "
});
formatter.match({
  "location": "Transaction.buyers_input_values_and_send_the_trade_offer(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buyers will failed in sending the trade offer",
  "keyword": "Then "
});
formatter.match({
  "location": "Transaction.buyers_will_in_sending_the_trade_offer(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC.WEB.2- buyers success to send trade offer",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Transaction"
    }
  ]
});
formatter.step({
  "name": "buyers succefully register to the website",
  "keyword": "Given "
});
formatter.match({
  "location": "Transaction.buyers_succefully_register_to_the_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buyers have completed their profiles",
  "keyword": "Given "
});
formatter.match({
  "location": "Transaction.buyer_completed_their_profiles(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buyers input correct values and send the trade offer",
  "keyword": "When "
});
formatter.match({
  "location": "Transaction.buyers_input_values_and_send_the_trade_offer(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buyers will success in sending the trade offer",
  "keyword": "Then "
});
formatter.match({
  "location": "Transaction.buyers_will_in_sending_the_trade_offer(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC.WEB.3- buyers fail inputting string to send trade offer",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Transaction"
    }
  ]
});
formatter.step({
  "name": "buyers succefully register to the website",
  "keyword": "Given "
});
formatter.match({
  "location": "Transaction.buyers_succefully_register_to_the_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buyers have completed their profiles",
  "keyword": "Given "
});
formatter.match({
  "location": "Transaction.buyer_completed_their_profiles(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buyers input string values and send the trade offer",
  "keyword": "When "
});
formatter.match({
  "location": "Transaction.buyers_input_values_and_send_the_trade_offer(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buyers will fail inputting string in sending the trade offer",
  "keyword": "Then "
});
formatter.match({
  "location": "Transaction.buyers_will_in_sending_the_trade_offer(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "\u003ccase_id\u003e-sellers \u003ccondition\u003e trade offers from buyers",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "seller succesfully post product to the website",
  "keyword": "Given "
});
formatter.step({
  "name": "buyers succesfully send the trade offer",
  "keyword": "Given "
});
formatter.step({
  "name": "seller open trade offer notification",
  "keyword": "When "
});
formatter.step({
  "name": "seller \u003ccondition\u003e the offer",
  "keyword": "When "
});
formatter.step({
  "name": "seller will be succesfull in \u003cresult\u003e the transaction",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "case_id",
        "condition",
        "result"
      ]
    },
    {
      "cells": [
        "TC.WEB.4",
        "accepts",
        "accepting"
      ]
    },
    {
      "cells": [
        "TC.WEB.5",
        "rejects",
        "rejecting"
      ]
    }
  ]
});
formatter.scenario({
  "name": "TC.WEB.4-sellers accepts trade offers from buyers",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Transaction"
    }
  ]
});
formatter.step({
  "name": "seller succesfully post product to the website",
  "keyword": "Given "
});
formatter.match({
  "location": "Transaction.seller_succesfully_post_product_to_the_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buyers succesfully send the trade offer",
  "keyword": "Given "
});
formatter.match({
  "location": "Transaction.buyers_succesfully_send_the_trade_offer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller open trade offer notification",
  "keyword": "When "
});
formatter.match({
  "location": "Transaction.seller_open_trade_offer_notification()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller accepts the offer",
  "keyword": "When "
});
formatter.match({
  "location": "Transaction.seller_the_offer(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller will be succesfull in accepting the transaction",
  "keyword": "Then "
});
formatter.match({
  "location": "Transaction.seller_will_be_succesfull_in_the_transaction(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC.WEB.5-sellers rejects trade offers from buyers",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Transaction"
    }
  ]
});
formatter.step({
  "name": "seller succesfully post product to the website",
  "keyword": "Given "
});
formatter.match({
  "location": "Transaction.seller_succesfully_post_product_to_the_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buyers succesfully send the trade offer",
  "keyword": "Given "
});
formatter.match({
  "location": "Transaction.buyers_succesfully_send_the_trade_offer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller open trade offer notification",
  "keyword": "When "
});
formatter.match({
  "location": "Transaction.seller_open_trade_offer_notification()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller rejects the offer",
  "keyword": "When "
});
formatter.match({
  "location": "Transaction.seller_the_offer(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller will be succesfull in rejecting the transaction",
  "keyword": "Then "
});
formatter.match({
  "location": "Transaction.seller_will_be_succesfull_in_the_transaction(String)"
});
formatter.result({
  "status": "passed"
});
});