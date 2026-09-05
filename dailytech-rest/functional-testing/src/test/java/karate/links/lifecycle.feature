@links @categories @destructive @authenticated
Feature: Category hierarchy and owned links with isolated fixtures
  Scenario: USER owns its links, public filtering works, ADMIN updates and deletes
    * if (!allowWrites) karate.fail('Write tests require -DallowWrites=true')
    * def fixtures = []
    * configure afterScenario = read('classpath:helpers/cleanup.js')
    * def admin = callonce read('classpath:helpers/auth.feature') { role: 'admin' }
    * def user = callonce read('classpath:helpers/auth.feature') { role: 'user' }
    * def unique = '' + java.util.UUID.randomUUID()
    Given url apiBaseUrl
    And path 'categories'
    And header Authorization = user.authorization
    And request { name: '#("Karate root " + unique)', description: 'Isolated test category' }
    When method POST
    Then status 201
    * def rootId = response.id
    * eval fixtures.push('categories/' + rootId)
    Given path 'categories'
    And header Authorization = user.authorization
    And request { name: '#("Karate child " + unique)', description: 'Child', parentId: '#(rootId)' }
    When method POST
    Then status 201
    * def categoryId = response.id
    * eval fixtures.push('categories/' + categoryId)
    Given path 'categories'
    And param id = categoryId
    And header Authorization = user.authorization
    And request { name: 'Updated child', description: 'Updated', parentId: '#(rootId)' }
    When method PUT
    Then status 200
    And match response.parentId == rootId
    Given path 'categories', rootId, 'children'
    When method GET
    Then status 200
    And match response contains deep { id: '#(categoryId)', name: 'Updated child', parentId: '#(rootId)' }
    Given path 'categories', 'tree'
    When method GET
    Then status 200
    * def roots = karate.filter(response, function(c){ return c.id == rootId; })
    And match roots[0].children contains deep { id: '#(categoryId)' }
    * def link = { title: 'Private fixture', url: '#("https://example.com/" + unique)', categoryId: '#(categoryId)', publicLink: false }
    Given path 'links'
    And header Authorization = user.authorization
    And request link
    When method POST
    Then status 201
    * def linkId = response.id
    * eval fixtures.push('links/' + linkId)
    And match response.publicLink == false
    Given path 'links', 'me', 'category', categoryId
    And header Authorization = user.authorization
    When method GET
    Then status 200
    And match response contains deep { id: '#(linkId)' }
    Given path 'links', 'category', 'public', categoryId
    When method GET
    Then status 200
    And match response == []
    Given path 'links', 'me', 'category', categoryId
    And header Authorization = admin.authorization
    When method GET
    Then status 200
    And match response == []
    * set link.id = linkId
    * set link.publicLink = true
    Given path 'links'
    And header Authorization = user.authorization
    And request link
    When method PUT
    Then status 200
    Given path 'links', 'category', 'public', categoryId
    When method GET
    Then status 200
    And match response contains deep { id: '#(linkId)', publicLink: true }
    * set link.title = 'Admin edited'
    Given path 'links'
    And param id = linkId
    And header Authorization = admin.authorization
    And request link
    When method PUT
    Then status 200
    And match response.title == 'Admin edited'
    Given path 'links', linkId
    And header Authorization = admin.authorization
    When method DELETE
    Then status 200
    * eval fixtures.pop()
    Given path 'links', linkId
    When method GET
    Then status 404
    # A second owner prevents a false-positive ownership test using only one identity.
    * set link.id = null
    * set link.url = 'https://example.com/admin-' + unique
    Given path 'links'
    And header Authorization = admin.authorization
    And request link
    When method POST
    Then status 201
    * def adminLinkId = response.id
    * eval fixtures.push('links/' + adminLinkId)
    * set link.id = adminLinkId
    * set link.title = 'Unauthorized edit'
    Given path 'links'
    And header Authorization = user.authorization
    And request link
    When method PUT
    Then status 403
    Given path 'links', adminLinkId
    When method GET
    Then status 200
    And match response.title == 'Admin edited'
    # CSV import assigns the current owner and deduplicates repeated uploads.
    * def csv = 'url,title,categoryId\nhttps://example.com/csv-' + unique + ',CSV fixture,' + categoryId + '\n'
    Given path 'links', 'bulk', 'csv'
    And header Authorization = user.authorization
    And multipart file file = { value: '#(csv)', filename: 'fixture.csv', contentType: 'text/csv' }
    When method POST
    Then status 201
    And match response == '#[1]'
    * def csvLinkId = response[0].id
    * eval fixtures.push('links/' + csvLinkId)
    And match response[0].categoryId == categoryId
    Given path 'links', 'bulk', 'csv'
    And header Authorization = user.authorization
    And multipart file file = { value: '#(csv)', filename: 'fixture.csv', contentType: 'text/csv' }
    When method POST
    Then status 201
    And match response == []
