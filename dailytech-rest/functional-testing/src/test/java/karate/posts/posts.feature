Feature: Posts API karate test script

  Background:
    Given url baseUrl + '/'
  #/dev/posts?Content-Type=Application/JSON'

  Scenario: get all AWS posts and then get the first post by id
    Given path 'api/posts'
    When method GET
    Then status 200

    * def first = response.body[0]
    * print first
       Given path 'dev/post', first.id
     #'ca2cdb9d-ac1f-4d8c-8ad5-e57215d86190'
       When method GET
       Then status 200
       * print response
     #first.id


     Scenario: create a post and then get it by id
       * def post =
         """
  {
          "date": "September 20, 2024",
          "cat3": "Quantum Data",
          "post": "\n  Finally. ",
          "author": "by Thomas Maestas, MA",
          "title": "Noise Pollution",
          "did": "24-09-20",
          "blogcite": "\n blogcite  "
      }
         """

       Given url
       And path '/dev/post'
       And request post
       When method post
       Then status 201

       * def id = response.id
       * print 'created id is: ', id

       Given path 'dev/post', first.id
       When method delete
       Then status 200
        * match response ==
     """
     {
      "body": "Post deleted successfully"
  }
     """
       # Given path id
       # When method GET
       # Then status 200
       # And match response contains post
