$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/AccountInfo.feature");
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
  "name": "\u003ccase_id\u003e-User can edit their \u003cfields\u003e in Account Info",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@positive"
    }
  ]
});
formatter.step({
  "name": "user go to Lengkapi Info Akun page",
  "keyword": "Given "
});
formatter.step({
  "name": "user can fill the required data in \u003cfields\u003e fields and submit the data in the Account Info page",
  "keyword": "When "
});
formatter.step({
  "name": "user will see a pop up notification that \u003cfields\u003e is successfully changed",
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
        "fields"
      ]
    },
    {
      "cells": [
        "TC.MOBILE.23",
        "photo profile"
      ]
    },
    {
      "cells": [
        "TC.MOBILE.24",
        "name"
      ]
    },
    {
      "cells": [
        "TC.MOBILE.25",
        "phone number"
      ]
    },
    {
      "cells": [
        "TC.MOBILE.26",
        "city"
      ]
    },
    {
      "cells": [
        "TC.MOBILE.27",
        "address"
      ]
    }
  ]
});
formatter.background({
  "name": "User already login",
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
  "name": "user input the valid credential of username and password",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_input_the_valid_credential_of_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click Masuk button",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_click_Masuk_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will be redirect to Account page",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_will_be_redirect_to_Account_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC.MOBILE.23-User can edit their photo profile in Account Info",
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
  "name": "user go to Lengkapi Info Akun page",
  "keyword": "Given "
});
formatter.match({
  "location": "AccountInfo.user_go_to_Lengkapi_Info_Akun_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can fill the required data in photo profile fields and submit the data in the Account Info page",
  "keyword": "When "
});
formatter.match({
  "location": "AccountInfo.user_can_fill_the_required_data_in_fields_and_submit_the_data_in_the_Account_Info_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will see a pop up notification that photo profile is successfully changed",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountInfo.user_will_see_a_pop_up_notification_that_is_successfully_changed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "User already login",
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
  "name": "user input the valid credential of username and password",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_input_the_valid_credential_of_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click Masuk button",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_click_Masuk_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will be redirect to Account page",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_will_be_redirect_to_Account_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC.MOBILE.24-User can edit their name in Account Info",
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
  "name": "user go to Lengkapi Info Akun page",
  "keyword": "Given "
});
formatter.match({
  "location": "AccountInfo.user_go_to_Lengkapi_Info_Akun_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can fill the required data in name fields and submit the data in the Account Info page",
  "keyword": "When "
});
formatter.match({
  "location": "AccountInfo.user_can_fill_the_required_data_in_fields_and_submit_the_data_in_the_Account_Info_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will see a pop up notification that name is successfully changed",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountInfo.user_will_see_a_pop_up_notification_that_is_successfully_changed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "User already login",
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
  "name": "user input the valid credential of username and password",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_input_the_valid_credential_of_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click Masuk button",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_click_Masuk_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will be redirect to Account page",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_will_be_redirect_to_Account_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC.MOBILE.25-User can edit their phone number in Account Info",
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
  "name": "user go to Lengkapi Info Akun page",
  "keyword": "Given "
});
formatter.match({
  "location": "AccountInfo.user_go_to_Lengkapi_Info_Akun_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can fill the required data in phone number fields and submit the data in the Account Info page",
  "keyword": "When "
});
formatter.match({
  "location": "AccountInfo.user_can_fill_the_required_data_in_fields_and_submit_the_data_in_the_Account_Info_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will see a pop up notification that phone number is successfully changed",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountInfo.user_will_see_a_pop_up_notification_that_is_successfully_changed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "User already login",
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
  "name": "user input the valid credential of username and password",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_input_the_valid_credential_of_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click Masuk button",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_click_Masuk_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will be redirect to Account page",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_will_be_redirect_to_Account_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC.MOBILE.26-User can edit their city in Account Info",
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
  "name": "user go to Lengkapi Info Akun page",
  "keyword": "Given "
});
formatter.match({
  "location": "AccountInfo.user_go_to_Lengkapi_Info_Akun_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can fill the required data in city fields and submit the data in the Account Info page",
  "keyword": "When "
});
formatter.match({
  "location": "AccountInfo.user_can_fill_the_required_data_in_fields_and_submit_the_data_in_the_Account_Info_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will see a pop up notification that city is successfully changed",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountInfo.user_will_see_a_pop_up_notification_that_is_successfully_changed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "User already login",
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
  "name": "user input the valid credential of username and password",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_input_the_valid_credential_of_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click Masuk button",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_click_Masuk_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will be redirect to Account page",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_will_be_redirect_to_Account_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC.MOBILE.27-User can edit their address in Account Info",
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
  "name": "user go to Lengkapi Info Akun page",
  "keyword": "Given "
});
formatter.match({
  "location": "AccountInfo.user_go_to_Lengkapi_Info_Akun_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can fill the required data in address fields and submit the data in the Account Info page",
  "keyword": "When "
});
formatter.match({
  "location": "AccountInfo.user_can_fill_the_required_data_in_fields_and_submit_the_data_in_the_Account_Info_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will see a pop up notification that address is successfully changed",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountInfo.user_will_see_a_pop_up_notification_that_is_successfully_changed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "User already login",
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
  "name": "user input the valid credential of username and password",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_input_the_valid_credential_of_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click Masuk button",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_click_Masuk_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will be redirect to Account page",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_will_be_redirect_to_Account_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC.MOBILE.28-User tries to input phone number value with value more than 14 numbers",
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
  "name": "user go to Lengkapi Info Akun page",
  "keyword": "Given "
});
formatter.match({
  "location": "AccountInfo.user_go_to_Lengkapi_Info_Akun_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fill the phone number fields with value more than 14 numbers",
  "keyword": "When "
});
formatter.match({
  "location": "AccountInfo.user_fill_the_phone_number_fields_with_value_more_than_14_numbers()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the fields will be restricted to 14 digits maximum and user will be remain at phone number fields",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountInfo.the_fields_will_be_restricted_to_14_digits_maximum_and_user_will_be_remain_at_phone_number_fields()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "User already login",
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
  "name": "user input the valid credential of username and password",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_input_the_valid_credential_of_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click Masuk button",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_click_Masuk_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will be redirect to Account page",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_will_be_redirect_to_Account_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC.MOBILE.29-User tries to input the required files with empty value",
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
  "name": "user go to Lengkapi Info Akun page",
  "keyword": "Given "
});
formatter.match({
  "location": "AccountInfo.user_go_to_Lengkapi_Info_Akun_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user set the one of the fields to empty and submit the data in Lengkapi Info Akun page",
  "keyword": "When "
});
formatter.match({
  "location": "AccountInfo.user_set_the_one_of_the_fields_to_empty_and_submit_the_data_in_Lengkapi_Info_Akun_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will see the error message that user has to fill the required fields first and user will be remain at one at the fields that has been selected before",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountInfo.user_will_see_the_error_message_that_user_has_to_fill_the_required_fields_first_and_user_will_be_remain_at_one_at_the_fields_that_has_been_selected_before()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/Authorization.feature");
formatter.feature({
  "name": "Authorization Feature",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Authorization"
    }
  ]
});
formatter.scenario({
  "name": "TC.MOBILE.6-User Login with the valid credential (valid email and password)",
  "description": "",
  "keyword": "Scenario",
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
  "name": "user input the valid credential of username and password",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_input_the_valid_credential_of_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click Masuk button",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_click_Masuk_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will be redirect to Account page",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_will_be_redirect_to_Account_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC.MOBILE.7-User want to login using incorrect credential (invalid credentials or credentials didn\u0027t exist)",
  "description": "",
  "keyword": "Scenario",
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
  "name": "user input wrong credential of username and password",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_input_wrong_credential_of_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click Masuk button",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_click_Masuk_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will see a notification username and password are invalid",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_will_see_a_notification_username_and_password_are_invalid()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC.MOBILE.8-User tries to login with empty required fields",
  "description": "",
  "keyword": "Scenario",
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
  "name": "user did not input any value into required fields",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_did_not_input_any_value_into_required_fields()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click Masuk button",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_click_Masuk_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will see a notification user must fill email field first",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_will_see_a_notification_user_must_fill_email_field_first()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC.MOBILE.9-User Logout to exit current session",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Authorization"
    }
  ]
});
formatter.step({
  "name": "user succesfully login to the app",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.user_succesfully_login_to_the_app()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user on Account page",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_on_Account_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click Logout button",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_click_Logout_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC.MOBILE.18-User opens register page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Authorization"
    }
  ]
});
formatter.step({
  "name": "user has opened login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Register.user_has_opened_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks Daftar button on the login page",
  "keyword": "When "
});
formatter.match({
  "location": "Register.user_clicks_Daftar_button_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will be redirected to the register page",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.user_will_be_redirected_to_the_register_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC.MOBILE.19-User registers with valid value requirement on the register page",
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
  "name": "user will be redirected to the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.user_will_be_redirected_to_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC.MOBILE.20-User registers with registered email on the register page",
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
  "name": "user fills up all the required fields with valid value except email field with registered email on the register page",
  "keyword": "When "
});
formatter.match({
  "location": "Register.user_fills_up_all_the_required_fields_with_valid_value_except_email_field_with_registered_email_on_the_register_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks Daftar button on the register page",
  "keyword": "When "
});
formatter.match({
  "location": "Register.user_clicks_Daftar_button_on_the_register_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will be received error message on the register page",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.user_will_be_received_error_message_on_the_register_page()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/CRUDProduct.feature");
formatter.feature({
  "name": "CRUD Product Mobile",
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
  "name": "user has opened jual page",
  "keyword": "Given "
});
formatter.step({
  "name": "user input valid credential in all required fields and user select \u003cbutton\u003e in selling page",
  "keyword": "When "
});
formatter.step({
  "name": "user successfully \u003cresult\u003e product",
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
        "TC.MOBILE.13",
        "Terbitkan",
        "create"
      ]
    },
    {
      "cells": [
        "TC.MOBILE.14",
        "Preview",
        "preview"
      ]
    }
  ]
});
formatter.background({
  "name": "User already login",
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
  "name": "user input the valid credential of username and password",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_input_the_valid_credential_of_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click Masuk button",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_click_Masuk_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will be redirect to Account page",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_will_be_redirect_to_Account_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC.MOBILE.13-User can create product",
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
  "name": "user has opened jual page",
  "keyword": "Given "
});
formatter.match({
  "location": "CRUDProduct.user_has_opened_jual_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input valid credential in all required fields and user select Terbitkan in selling page",
  "keyword": "When "
});
formatter.match({
  "location": "CRUDProduct.user_input_valid_credential_in_all_required_fields_and_user_select_in_selling_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user successfully create product",
  "keyword": "Then "
});
formatter.match({
  "location": "CRUDProduct.user_successfully_product(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "User already login",
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
  "name": "user input the valid credential of username and password",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_input_the_valid_credential_of_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click Masuk button",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_click_Masuk_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will be redirect to Account page",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_will_be_redirect_to_Account_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC.MOBILE.14-User can preview product",
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
  "name": "user has opened jual page",
  "keyword": "Given "
});
formatter.match({
  "location": "CRUDProduct.user_has_opened_jual_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input valid credential in all required fields and user select Preview in selling page",
  "keyword": "When "
});
formatter.match({
  "location": "CRUDProduct.user_input_valid_credential_in_all_required_fields_and_user_select_in_selling_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user successfully preview product",
  "keyword": "Then "
});
formatter.match({
  "location": "CRUDProduct.user_successfully_product(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "User already login",
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
  "name": "user input the valid credential of username and password",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_input_the_valid_credential_of_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click Masuk button",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_click_Masuk_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will be redirect to Account page",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_will_be_redirect_to_Account_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC.MOBILE.15-User as seller can\u0027t leave product picture blank",
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
  "name": "user has opened jual page",
  "keyword": "Given "
});
formatter.match({
  "location": "CRUDProduct.user_has_opened_jual_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input valid credential in all required fields except upload picture and click terbitkan button in selling page",
  "keyword": "When "
});
formatter.match({
  "location": "CRUDProduct.user_input_valid_credential_in_all_required_fields_except_upload_picture_and_click_terbitkan_button_in_selling_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will fail create product",
  "keyword": "Then "
});
formatter.match({
  "location": "CRUDProduct.user_will_fail_create_product()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "User already login",
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
  "name": "user input the valid credential of username and password",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_input_the_valid_credential_of_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click Masuk button",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_click_Masuk_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will be redirect to Account page",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_will_be_redirect_to_Account_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC.MOBILE.16-User can edit product",
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
  "name": "user edit valid credential in all required fields an click Perbarui produk button in edit product page",
  "keyword": "When "
});
formatter.match({
  "location": "CRUDProduct.user_edit_valid_credential_in_all_required_fields_an_click_Perbarui_produk_button_in_edit_product_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will successfully edit product in edit product page",
  "keyword": "Then "
});
formatter.match({
  "location": "CRUDProduct.user_will_successfully_edit_product_in_edit_product_page()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "User already login",
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
  "name": "user input the valid credential of username and password",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_input_the_valid_credential_of_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click Masuk button",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_click_Masuk_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will be redirect to Account page",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_will_be_redirect_to_Account_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC.MOBILE.17-User edit nama produk field with empty value",
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
  "name": "user edit nama produk field with empty value and click Terbitkan button in edit product page",
  "keyword": "When "
});
formatter.match({
  "location": "CRUDProduct.user_edit_nama_produk_field_with_empty_value_and_click_Terbitkan_button_in_edit_product_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will fail save edit product in edit product page",
  "keyword": "Then "
});
formatter.match({
  "location": "CRUDProduct.user_will_fail_save_edit_product_in_edit_product_page()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "User already login",
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
  "name": "user input the valid credential of username and password",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_input_the_valid_credential_of_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click Masuk button",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_click_Masuk_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will be redirect to Account page",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_will_be_redirect_to_Account_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC.MOBILE.30-User delete their own product",
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
  "name": "user click the trash can button in one of the product card and then click Hapus button",
  "keyword": "When "
});
formatter.match({
  "location": "CRUDProduct.user_click_the_trash_can_button_in_one_of_the_product_card_and_then_click_Hapus_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will see a pop up notification that the product is successfully deleted",
  "keyword": "Then "
});
formatter.match({
  "location": "CRUDProduct.user_will_see_a_pop_up_notification_that_the_product_is_successfully_deleted()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "User already login",
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
  "name": "user input the valid credential of username and password",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_input_the_valid_credential_of_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click Masuk button",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_click_Masuk_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will be redirect to Account page",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_will_be_redirect_to_Account_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC.MOBILE.31-User tries to delete another user\u0027s product",
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
formatter.uri("Include/features/Dashboard.feature");
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
  "name": "\u003ccase_id\u003e-User on \u003cpage\u003e can go back to Dashboard",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on \u003cpage\u003e page",
  "keyword": "Given "
});
formatter.step({
  "name": "user click Beranda button in bottom bar",
  "keyword": "When "
});
formatter.step({
  "name": "user successfully return to Dashboard",
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
        "TC.MOBILE.10",
        "notification"
      ]
    },
    {
      "cells": [
        "TC.MOBILE.11",
        "transaction"
      ]
    },
    {
      "cells": [
        "TC.MOBILE.12",
        "account"
      ]
    }
  ]
});
formatter.scenario({
  "name": "TC.MOBILE.10-User on notification can go back to Dashboard",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Dashboard"
    }
  ]
});
formatter.step({
  "name": "user is on notification page",
  "keyword": "Given "
});
formatter.match({
  "location": "Dashboard.user_is_on_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click Beranda button in bottom bar",
  "keyword": "When "
});
formatter.match({
  "location": "Dashboard.user_click_Beranda_button_in_bottom_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user successfully return to Dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "Dashboard.user_successfully_return_to_Dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC.MOBILE.11-User on transaction can go back to Dashboard",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Dashboard"
    }
  ]
});
formatter.step({
  "name": "user is on transaction page",
  "keyword": "Given "
});
formatter.match({
  "location": "Dashboard.user_is_on_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click Beranda button in bottom bar",
  "keyword": "When "
});
formatter.match({
  "location": "Dashboard.user_click_Beranda_button_in_bottom_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user successfully return to Dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "Dashboard.user_successfully_return_to_Dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC.MOBILE.12-User on account can go back to Dashboard",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Dashboard"
    }
  ]
});
formatter.step({
  "name": "user is on account page",
  "keyword": "Given "
});
formatter.match({
  "location": "Dashboard.user_is_on_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click Beranda button in bottom bar",
  "keyword": "When "
});
formatter.match({
  "location": "Dashboard.user_click_Beranda_button_in_bottom_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user successfully return to Dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "Dashboard.user_successfully_return_to_Dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/Notification.feature");
formatter.feature({
  "name": "Notification Feature",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Notification"
    }
  ]
});
formatter.scenarioOutline({
  "name": "\u003ccase_id\u003e-User sees \u003cnotification\u003e on the notification pop-up",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user has opened on the Dashboard page",
  "keyword": "Given "
});
formatter.step({
  "name": "user clicks notification icon on the navigation bar",
  "keyword": "When "
});
formatter.step({
  "name": "user will be seen \u003cnotification\u003e on the notification page",
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
        "TC.MOBILE.21",
        "negotiated product notification"
      ]
    },
    {
      "cells": [
        "TC.MOBILE.22",
        "published product notification"
      ]
    }
  ]
});
formatter.scenario({
  "name": "TC.MOBILE.21-User sees negotiated product notification on the notification pop-up",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Notification"
    }
  ]
});
formatter.step({
  "name": "user has opened on the Dashboard page",
  "keyword": "Given "
});
formatter.match({
  "location": "Notification.user_has_opened_on_the_Dashboard_page()"
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
  "name": "user will be seen negotiated product notification on the notification page",
  "keyword": "Then "
});
formatter.match({
  "location": "Notification.user_will_be_seen_on_the_notification_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC.MOBILE.22-User sees published product notification on the notification pop-up",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Notification"
    }
  ]
});
formatter.step({
  "name": "user has opened on the Dashboard page",
  "keyword": "Given "
});
formatter.match({
  "location": "Notification.user_has_opened_on_the_Dashboard_page()"
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
  "name": "user will be seen published product notification on the notification page",
  "keyword": "Then "
});
formatter.match({
  "location": "Notification.user_will_be_seen_on_the_notification_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/SearchProductByCategory.feature");
formatter.feature({
  "name": "Mobile get a products by category feature",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@SearchProductByCategory"
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
        "TC.MOBILE.32",
        "computer and accessories"
      ]
    },
    {
      "cells": [
        "TC.MOBILE.33",
        "electronic"
      ]
    }
  ]
});
formatter.scenario({
  "name": "TC.MOBILE.32-User can filter by computer and accessories the products",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SearchProductByCategory"
    }
  ]
});
formatter.step({
  "name": "user has opened homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchProduct.user_has_opened_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select and press the computer and accessories button in the category filter",
  "keyword": "When "
});
formatter.match({
  "location": "SearchProductByCategory.user_select_and_press_button_in_the_category_filter(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will successfully get list computer and accessories products",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchProductByCategory.user_will_successfully_get_list_products(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC.MOBILE.33-User can filter by electronic the products",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SearchProductByCategory"
    }
  ]
});
formatter.step({
  "name": "user has opened homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchProduct.user_has_opened_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select and press the electronic button in the category filter",
  "keyword": "When "
});
formatter.match({
  "location": "SearchProductByCategory.user_select_and_press_button_in_the_category_filter(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will successfully get list electronic products",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchProductByCategory.user_will_successfully_get_list_products(String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/SearchProducts.feature");
formatter.feature({
  "name": "Mobile get a search products feature",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@SearchProducts"
    }
  ]
});
formatter.scenario({
  "name": "TC.MOBILE.34-User can gets list of products based on correct keyword in the search",
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
  "location": "SearchProduct.user_has_opened_homepage()"
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
  "name": "TC.MOBILE.35-User cannot gets list of products based on uncorrect keyword in the search",
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
  "location": "SearchProduct.user_has_opened_homepage()"
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
  "name": "user will unsuccessfull get list of products based on the uncorrect keywords",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchProduct.user_will_successfully_get_list_of_products_based_on_the_uncorrect_keywords()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/SoldProducts.feature");
formatter.feature({
  "name": "Mobile sold product feature",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@SoldProducts"
    }
  ]
});
formatter.scenario({
  "name": "TC.MOBILE.36-Seller gets list of product sold",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SoldProducts"
    },
    {
      "name": "@Positive"
    }
  ]
});
formatter.step({
  "name": "seller already in account page",
  "keyword": "Given "
});
formatter.match({
  "location": "SoldProduct.seller_already_in_account_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller click my selling list",
  "keyword": "When "
});
formatter.match({
  "location": "SoldProduct.seller_click_my_selling_list()"
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
  "name": "TC.MOBILE.37-Seller cannot gets list of product sold",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SoldProducts"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "seller already in account page",
  "keyword": "Given "
});
formatter.match({
  "location": "SoldProduct.seller_already_in_account_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller click my selling list",
  "keyword": "When "
});
formatter.match({
  "location": "SoldProduct.seller_click_my_selling_list()"
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
formatter.uri("Include/features/Transaction.feature");
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
formatter.scenario({
  "name": "TC.MOBILE.1-buyers send trade offers",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Transaction"
    },
    {
      "name": "@positive"
    }
  ]
});
formatter.step({
  "name": "buyers succesfully register to the app",
  "keyword": "Given "
});
formatter.match({
  "location": "Transaction.buyers_succesfully_register_to_the_app()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buyers input all correct values for offer information",
  "keyword": "When "
});
formatter.match({
  "location": "Transaction.buyers_input_all_correct_value_for_offer_information()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buyers will successfully send trade offers to sellers",
  "keyword": "Then "
});
formatter.match({
  "location": "Transaction.buyers_will_successfully_send_trade_offers_to_sellers()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC.MOBILE.2-buyers send trade offers without login to the app",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Transaction"
    },
    {
      "name": "@negative"
    }
  ]
});
formatter.step({
  "name": "buyers logged out from the app",
  "keyword": "Given "
});
formatter.match({
  "location": "Transaction.buyers_logged_out_from_the_app()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buyers click negotiation button",
  "keyword": "When "
});
formatter.match({
  "location": "Transaction.buyers_click_negotiation_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buyers will be redirected to login page",
  "keyword": "Then "
});
formatter.match({
  "location": "Transaction.buyers_will_be_redirected_to_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC.MOBILE.3-tries to input offer price with string value",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Transaction"
    },
    {
      "name": "@negative"
    }
  ]
});
formatter.step({
  "name": "buyers succesfully register to the app",
  "keyword": "Given "
});
formatter.match({
  "location": "Transaction.buyers_succesfully_register_to_the_app()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buyers input string values in the offer price box",
  "keyword": "When "
});
formatter.match({
  "location": "Transaction.buyers_input_string_values_in_the_offer_price_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buyers will not be able to input the string values",
  "keyword": "Then "
});
formatter.match({
  "location": "Transaction.buyers_will_not_be_able_to_input_the_string_values()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "\u003ccase_id\u003e-sellers \u003ccondition_one\u003e trade offers from buyers",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@positive"
    }
  ]
});
formatter.step({
  "name": "sellers succesfully login to the app",
  "keyword": "Given "
});
formatter.step({
  "name": "sellers succesfully post a product",
  "keyword": "And "
});
formatter.step({
  "name": "buyers succesfully send the offers",
  "keyword": "When "
});
formatter.step({
  "name": "sellers \u003ccondition_one\u003e the offer",
  "keyword": "And "
});
formatter.step({
  "name": "seller will \u003ccondition_two\u003e the transaction",
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
        "condition_one",
        "condition_two"
      ]
    },
    {
      "cells": [
        "TC.MOBILE.4",
        "accepts",
        "complete"
      ]
    },
    {
      "cells": [
        "TC.MOBILE.5",
        "rejects",
        "rejects"
      ]
    }
  ]
});
formatter.scenario({
  "name": "TC.MOBILE.4-sellers accepts trade offers from buyers",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Transaction"
    },
    {
      "name": "@positive"
    }
  ]
});
formatter.step({
  "name": "sellers succesfully login to the app",
  "keyword": "Given "
});
formatter.match({
  "location": "Transaction.sellers_succesfully_login_to_the_app()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sellers succesfully post a product",
  "keyword": "And "
});
formatter.match({
  "location": "Transaction.sellers_succesfully_post_a_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buyers succesfully send the offers",
  "keyword": "When "
});
formatter.match({
  "location": "Transaction.buyers_succesfully_send_the_offers()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sellers accepts the offer",
  "keyword": "And "
});
formatter.match({
  "location": "Transaction.sellers_the_offer(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller will complete the transaction",
  "keyword": "Then "
});
formatter.match({
  "location": "Transaction.seller_will_the_transaction(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC.MOBILE.5-sellers rejects trade offers from buyers",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Transaction"
    },
    {
      "name": "@positive"
    }
  ]
});
formatter.step({
  "name": "sellers succesfully login to the app",
  "keyword": "Given "
});
formatter.match({
  "location": "Transaction.sellers_succesfully_login_to_the_app()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sellers succesfully post a product",
  "keyword": "And "
});
formatter.match({
  "location": "Transaction.sellers_succesfully_post_a_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buyers succesfully send the offers",
  "keyword": "When "
});
formatter.match({
  "location": "Transaction.buyers_succesfully_send_the_offers()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sellers rejects the offer",
  "keyword": "And "
});
formatter.match({
  "location": "Transaction.sellers_the_offer(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seller will rejects the transaction",
  "keyword": "Then "
});
formatter.match({
  "location": "Transaction.seller_will_the_transaction(String)"
});
formatter.result({
  "status": "passed"
});
});