@smoke @actuator
Feature: Spring REST feature api health,info,env,metrics,loggers,auditevents,httptrace

  # Infra diagnostics are useful manually, but they are not user-experience/business-rule coverage.
  # Keep ignored so default Karate runs focus on authenticated API contracts.

  Background: background
    #    * url 'https://52.3.58.191:8082/api/'
    #    * url 'http://localhost:8082/api/'


    * url baseUrl



  Scenario Outline: Spring REST Framework
    Given path 'actuator/' + '<_PATH>'
    When method get
    Then status 200
    * json res = response
    * def payload = res['<VAR_1>']
    * match payload == <VAR_2>
    #    * print payload

    Examples:
      | _PATH          | VAR_1          | VAR_2     |
      | health         | status         | "UP"      |
      | info           | app            | "#object" |
      | env            | activeProfiles | "#array"  |
      | metrics        | names          | "#array"  |
      | mappings       | contexts       | "#object" |
      | beans          | contexts       | "#object" |
      | loggers        | levels         | "#array"  |
      | configprops    | contexts       | "#object" |
      | threaddump     | threads        | "#array"  |
      | conditions     | contexts       | "#object" |
#      | auditevents    | events         | "#array"  |
#      | httptrace      | traces         | "#array"  |
#      | heapdump       | cron           | "#array"  |
      | scheduledtasks | fixedDelay     | "#array"  |
      | scheduledtasks | cron           | "#array"  |
      | scheduledtasks | fixedRate      | "#array"  |




