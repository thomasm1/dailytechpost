@ignore
Feature: Compatibility wrapper for native login
  Scenario:
    * def login = call read('classpath:helpers/login.feature') { email: '#(username)', password: '#(password)' }
    * def authToken = login.accessToken
