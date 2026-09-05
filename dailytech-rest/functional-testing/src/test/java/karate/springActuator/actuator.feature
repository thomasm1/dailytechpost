@smoke @actuator
Feature: Public health endpoint
  Scenario:
    Given url baseUrl
    And path 'actuator', 'health'
    When method GET
    Then status 200
    And match response.status == 'UP'
