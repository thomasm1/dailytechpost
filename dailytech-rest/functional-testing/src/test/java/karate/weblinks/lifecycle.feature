@weblinks @destructive @authenticated
Feature: Weblink CRUD matches the controller's current status codes
  Scenario:
    * if (!allowWrites) karate.fail('Write tests require -DallowWrites=true')
    * def fixtures = []
    * configure afterScenario = read('classpath:helpers/cleanup.js')
    * def admin = callonce read('classpath:helpers/auth.feature') { role: 'admin' }
    * def user = callonce read('classpath:helpers/auth.feature') { role: 'user' }
    * def link = { title: 'Karate reference', url: '#("https://example.com/" + java.util.UUID.randomUUID())', ownerEmail: '#(user.profile.email)' }
    Given url apiBaseUrl
    And path 'weblinks'
    And header Authorization = user.authorization
    And request link
    When method POST
    Then status 201
    * def id = response.id
    * eval fixtures.push('weblinks/' + id)
    Given path 'weblinks', id
    When method GET
    Then status 200
    And match response.url == link.url
    * set link.title = 'Updated reference'
    Given path 'weblinks'
    And param id = id
    And header Authorization = user.authorization
    And request link
    When method PUT
    Then status 201
    And match response.title == 'Updated reference'
    Given path 'weblinks', id
    And header Authorization = admin.authorization
    When method DELETE
    Then status 200
    And match response == true
    * eval fixtures.pop()
    Given path 'weblinks'
    When method GET
    Then status 200
    * def remaining = karate.filter(response, function(w){ return w.id == id; })
    And match remaining == []
