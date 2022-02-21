 Feature: Posts API karate test script

   Background:
     * url 'https://emfm9dpoeh.execute-api.us-east-1.amazonaws.com'

   Scenario: get all posts and then get the first post by id
     Given path '/dev/post'
     When method get
     Then status 200
     * def first = response[0]
     Given path 'api/posts', first.id
     When method get
     Then status 200
    #  And first.id == "28d5a9d1-ac46-4daf-9fae-9eedd276a53f"

   Scenario: create a post and then get it by id
     * def post =
       """
  {
    "id": "00001",
    "did": "99-02-18",
    "date": "February 18, 2022",
    "author": "by Thomas Maestas, MA",
    "cat3": "A.I.Now.",
    "title": " title here",
    "post": " TEST POST",
    "blogcite": "blogcite here"
     }`
       """

     Given url 
     And path '/dev/post'
     And request post
     When method post
     Then status 201

     * def id = response.id
     * print 'created id is: ', id

     # Given path id
     # When method get
     # Then status 200
     # And match response contains post
  