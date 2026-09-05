@springRest
Feature: Spring Data REST discovery without fixed record IDs
  Scenario:
    Given url apiBaseUrl
    And path 'rest'
    When method GET
    Then status 200
    And match response._links == '#object'
