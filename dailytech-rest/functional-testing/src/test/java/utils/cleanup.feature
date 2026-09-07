@ignore
Feature: Delete only the fixture ID passed by the creating scenario
  Scenario:
    * configure headers = jsonHeaders
    Given url apiBaseUrl
    And path resourcePath
    And header Authorization = authorization
    When method DELETE
    * assert responseStatus == 200 || responseStatus == 404
