Feature: Posts API karate test script

  Background:
    Given url baseUrl + '/api/'
    * def token = jwtToken

  @getCycle
  @Order(1)
  Scenario: get all AWS posts and then get the first post by id
    Given path 'posts'
    When method GET
    Then status 200

    * def first = response.content[0]
    * print first

     Given path 'posts', first.id
     When method GET
     Then status 200
#     * print response
    Then match response.id == first.id

  @postCycle
  @Order(2)
     Scenario: create a post and then get it by id
       * def post =
         """
  {
    "did": "2025-05-05",
    "date": "D1005",
    "author": "ThomasM",
    "monthOrder": "July",
    "cat3": "crypto Finance",
    "title": "Stock Market Trends",
    "post": "Analyzing latest crypto market trends...",
    "blogcite": "https://blogsite5.com",
    "email": "thomas.maestas@example.com",
    "state": "Published",
    "wordCount": 2000,
    "durationGoal": 14,
    "categoryId": 11

  }
         """

       Given path 'posts'
       And request post
       And header Authorization = 'Bearer ' + token
       When method POST
       Then status 201
       * def localId = response.id

       #3 PUT
       Given path 'posts'
       * print 'created id  is: ', localId
       * post['id'] = localId
       And header Authorization = 'Bearer ' + token
       And param id = localId
       And request post
       When method PUT
       Then status 200

       Given path 'posts', localId
       And header Authorization = 'Bearer ' + token
       When method delete

       Then status 401
                # Unauthorized for delete without admin role

#       Then status 200
                  # And print 'deleted id is: ', localId
#        * match response ==
#     """
#     {
#      "body": "Post deleted successfully"
#  }
#     """


       # Given path id
       # When method GET
       # Then status 200
       # And match response contains post
