Feature: Spring REST feature api health,info,env,metrics,loggers,auditevents,httptrace

  Background: background

    * url baseUrl + '/'


  Scenario Outline: Spring REST Framework
    Given path 'actuator/' + '<_PATH>'
    When method GET
    Then status 200
    * json res = response
    * def payload = res['<VAR_1>']
    * match payload == <VAR_2>
    #    * print payload

    Examples:
      | _PATH       | VAR_1          | VAR_2     |
      | health      | status         | "UP"      |
      | info        | app            | "#object" |
      | env         | activeProfiles | "#array"  |
      | metrics     | names          | "#array"  |
      | mappings    | contexts       | "#object" |
      | beans       | contexts       | "#object" |
      | loggers     | levels         | "#array"  |
      | configprops | contexts       | "#object" |
      | threaddump  | threads        | "#array"  |
      | conditions  | contexts       | "#object" |




