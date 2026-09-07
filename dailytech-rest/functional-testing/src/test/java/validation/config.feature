Feature: Offline configuration and fixture expression validation
  Scenario: Configuration supplies distinct USER and ADMIN headers
    * match apiBaseUrl == baseUrl + '/api'
    * match authHeaders.Authorization == 'Bearer user-token'
    * match adminAuthHeaders.Authorization == 'Bearer admin-token'
    * configure headers = authHeaders
    * def user = call read('classpath:utils/auth.feature') { role: 'user' }
    * def admin = call read('classpath:utils/auth.feature') { role: 'admin' }
    * match user.profile.email == 'user@example.com'
    * match admin.profile.email == 'admin@example.com'
    * def unique = '' + java.util.UUID.randomUUID()
    * match unique == '#string'
    * assert unique.length == 36
    * def email = 'karate-' + unique + '@example.com'
    * def payload = { email: '#(email)', categoryId: 123 }
    * match payload.email == email
    * def csv = 'url,title,categoryId\nhttps://example.com/' + unique + ',Fixture,' + payload.categoryId + '\n'
    * assert csv.indexOf('\n') > 0
    * def cleanup = read('classpath:utils/cleanup.js')
    * def fixtures = []
    * eval cleanup()
