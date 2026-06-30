Feature: chains feature api

  Background: background

    #    * url 'http://52.3.58.191:8083/api'
    #    * url 'http://localhost:8083/api/'
    #   * configure  baseUrl = karate.properties['baseUrl']
    * url baseUrl + '/api/'

  @getCycle
  @Order(1)
  Scenario Outline: '<_path>'
    Given path '<_path>' + '<_var1>'
    When method GET
    Then status <_stat>
    * json res = response
    * def payload = res
    Then match payload != null
    * print payload

    Examples:
      | _path      | _meth | _stat | _var1 | _var2 | _var3 |
      | users      | GET   | 200   |       |       |       |
      | users      | GET   | 200   | /10  |       |       |

      | posts      | GET   | 200   |       |       |       |
      | posts      | GET   | 200   | /20   |       |       |

      | categories | GET   | 200   |       |       |       |
      | categories | GET   | 200   | /10   |       |       |
      | categories | GET   | 200   | /root |       |       |
      | categories | GET   | 200   | /tree |       |       |
      | categories | GET   | 200   | /10/children |  |    |

      | links       | GET   | 200   |       |       |       |
      | links       | GET   | 200   | /40   |       |       |
      | links       | GET   | 200   | /category/10 |       |       |
      | links       | GET   | 200   | /category/public/10 |       |       |

      | weblinks   | GET   | 200   |       |       |       |
      | weblinks   | GET   | 200   | /1    |       |       |

  @getCycle
  @Order(2)
  Scenario Outline: '<_path>'
    Given path '<_path>' + '<_var1>' + '<_var2>' + '<_var3>'
    When method GET
    Then status <_stat>
    * json res = response
    * def payload = res
    Then match payload != null
    * print payload

    Examples:
      | _path | _meth | _stat | _var1 | _var2     | _var3 |
      | posts | GET   | 200   | /20   | /comments |       |
      | posts | GET   | 200   | /20   | /comments | /30   |

  @getCycle
  @Order(3)
  Scenario: get posts by category, email, and date from the first returned post
    Given path 'posts'
    When method GET
    Then status 200
    And match response.content[0] != null

    * def first = response.content[0]
    And match first.email != null
    And match first.did != null

    * def postId = first.id
    * def categoryId = first.categoryId ? first.categoryId : 10
    * def email = first.email
    * def did = first.did

    Given path 'posts', postId
    When method GET
    Then status 200
    And match response.id == postId

    Given path 'posts', 'category', categoryId
    When method GET
    Then status 200
    And match response != null

    Given path 'posts', 'email', email
    When method GET
    Then status 200
    And match response.content != null

    Given path 'posts', 'date', did
    When method GET
    Then status 200
    And match response.did == did
