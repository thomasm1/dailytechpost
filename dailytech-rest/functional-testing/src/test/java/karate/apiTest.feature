Feature: chains feature api

  Background: background

    #    * url 'http://52.3.58.191:8083/api'
    #    * url 'http://localhost:8083/api/'
    #   * configure  baseUrl = karate.properties['baseUrl']
    * url baseUrl + '/api/'


  Scenario Outline: '<_path>'
    Given path '<_path>' + '<_var1>'
    When method GET
    Then status <_stat>
    * json res = response
    * def payload = res.data
    * print payload

    Examples:
      | _path | _meth | _stat | _var1 | _var2 | _var3 |
      | posts | GET   | 200   |       |       |       |
      | posts | GET   | 200   | /20   |       |       |

      | users | GET   | 200   |       |       |       |
      | users | GET   | 200   | /101   |       |       |

      | weblinks | GET   | 200   |       |       |       |
      | weblinks | GET   | 200   | /1   |       |       |
