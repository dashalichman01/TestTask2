Feature: Login without data

  Scenario Outline: Attempt login without providing username and password

    Given User is located on the main page of saucedemo website
    When User click login button
    Then User should see <message>

    Examples:
      | message                            |
      | Epic sadface: Username is required |
