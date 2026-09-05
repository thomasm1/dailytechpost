@posts @comments @destructive @authenticated
Feature: Create a category, post and comment, exercise filters and clean up
  Scenario:
    * if (!allowWrites) karate.fail('Write tests require -DallowWrites=true')
    * def fixtures = []
    * configure afterScenario = read('classpath:helpers/cleanup.js')
    * def admin = callonce read('classpath:helpers/auth.feature') { role: 'admin' }
    * def user = callonce read('classpath:helpers/auth.feature') { role: 'user' }
    * def unique = '' + java.util.UUID.randomUUID()
    Given url apiBaseUrl
    And path 'categories'
    And header Authorization = user.authorization
    And request { name: '#("Karate post category " + unique)', description: 'Fixture' }
    When method POST
    Then status 201
    * def categoryId = response.id
    * eval fixtures.push('categories/' + categoryId)
    * def post = { did: '#("karate-" + unique)', date: '2026-09-04', author: 'Karate', title: '#("Karate post " + unique)', post: 'Isolated test content', blogcite: 'https://example.com', email: '#(user.profile.email)', categoryId: '#(categoryId)', wordCount: 3, durationGoal: 1 }
    Given path 'posts', 'create'
    And header Authorization = user.authorization
    And request post
    When method POST
    Then status 201
    * def postId = response.id
    * eval fixtures.push('posts/' + postId)
    Given path 'posts', 'date', post.did
    When method GET
    Then status 200
    And match response.id == postId
    Given path 'posts', 'email', user.profile.email
    And params { pageSize: 100, sortBy: 'id', sortDir: 'desc' }
    When method GET
    Then status 200
    And match response.content contains deep { id: '#(postId)' }
    Given path 'posts', 'username', user.profile.email
    And params { pageSize: 100, sortBy: 'id', sortDir: 'desc' }
    When method GET
    Then status 200
    And match response.content contains deep { id: '#(postId)' }
    Given path 'posts', 'category', categoryId
    When method GET
    Then status 200
    And match response contains deep { id: '#(postId)' }
    * set post.id = postId
    * set post.title = 'Updated fixture'
    Given path 'posts', 'update'
    And header Authorization = user.authorization
    And request post
    When method PUT
    Then status 200
    And match response.title == 'Updated fixture'
    Given path 'posts', postId, 'comments', 'create'
    And header Authorization = user.authorization
    And request { name: 'Karate', email: '#(user.profile.email)', body: 'Comment fixture content' }
    When method POST
    Then status 201
    * def commentId = response.id
    * eval fixtures.push('posts/' + postId + '/comments/' + commentId)
    Given path 'posts', postId, 'comments', commentId
    And header Authorization = user.authorization
    And request { name: 'Karate', email: '#(user.profile.email)', body: 'Updated comment content' }
    When method PUT
    Then status 200
    And match response.body == 'Updated comment content'
    Given path 'posts', postId, 'comments', commentId
    When method GET
    Then status 200
    And match response.body == 'Updated comment content'
    Given path 'posts', postId, 'comments', commentId
    And header Authorization = admin.authorization
    When method DELETE
    Then status 200
    And match response == 'Comment deleted successfully'
    * eval fixtures.pop()
    Given path 'weblinks', 'posts', postId
    And header Authorization = user.authorization
    And request { title: 'Attached reference', url: '#("https://example.com/" + unique)', ownerEmail: '#(user.profile.email)' }
    When method POST
    Then status 201
    * def weblinkId = response.id
    * eval fixtures.push('weblinks/' + weblinkId)
    Given path 'weblinks', weblinkId
    And header Authorization = admin.authorization
    When method DELETE
    Then status 200
    * eval fixtures.pop()
    Given path 'posts', 'delete', postId
    And header Authorization = admin.authorization
    When method DELETE
    Then status 200
    And match response == true
    * eval fixtures.pop()
    Given path 'posts', 'category', categoryId
    When method GET
    Then status 200
    And match response == []
