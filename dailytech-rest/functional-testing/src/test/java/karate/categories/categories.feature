@categories @smoke
Feature: Category hierarchy reads without fixed IDs
  Scenario: A discovered root can be read with its direct children
    Given url apiBaseUrl
    And path 'categories', 'root'
    When method GET
    Then status 200
    And match response == '#array'
    * if (response.length == 0) karate.abort()
    * def root = response[0]
    Given path 'categories', root.id
    When method GET
    Then status 200
    And match response.id == root.id
    Given path 'categories', root.id, 'children'
    When method GET
    Then status 200
    And match response == '#array'
    And match each response contains { parentId: '#(root.id)' }
