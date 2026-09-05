Feature: Offline configuration and fixture expression validation
  Scenario: Configuration needs no live API and produces consistent URLs
    * match baseUrl == 'http://localhost:8082'
    * match apiBaseUrl == 'http://localhost:8082/api'
    * def unique = '' + java.util.UUID.randomUUID()
    * match unique == '#string'
    * assert unique.length == 36
    * def email = 'karate-' + unique + '@example.com'
    * def payload = { email: '#(email)', categoryId: 123 }
    * match payload.email == email
    * def csv = 'url,title,categoryId\nhttps://example.com/' + unique + ',Fixture,' + payload.categoryId + '\n'
    * assert csv.indexOf('\n') > 0
    * def cleanup = read('classpath:helpers/cleanup.js')
    * def fixtures = []
    * eval cleanup()
