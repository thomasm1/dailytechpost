@smoke @security
Feature: Invalid news inputs are rejected without spending provider quota
  Background:
    * url apiBaseUrl

  Scenario: Only known top-story sections are accepted
    Given path 'news', 'top-stories', 'unsupported-section'
    When method GET
    Then status 400

  Scenario Outline: Invalid search parameters are rejected
    Given path 'news', 'search'
    And params <input>
    When method GET
    Then status 400
    Examples:
      | input                                               |
      | { sort: 'invalid' }                                  |
      | { begin_date: '20260230' }                           |
      | { begin_date: '20260905', end_date: '20260901' }       |
