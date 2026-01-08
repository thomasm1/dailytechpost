
#### Spring Cloud Netflix Eureka
#### Spring Cloud Zuul
#### Spring Cloud Config
#### Spring Security OAuth2
#### Spring Cloud Gateway

ZIPKIN:
docker run -d --name zipkin -p 9411:9411 openzipkin/zipkin

```SH
curl http://localhost:8761/eureka/apps
 ```

Port(s): 8761 (http) with context path ''
REGISTRY (Eureka)
http://localhost:8761/

GATEWAY (Zuul)
http://10.0.0.139:9191/actuator/info
{"app": {
"name": "Gateway Server",
"description": "Cryptomaven Server Application",
"version": "1.0.0" }}

CONFIG SERVER (Spring Cloud Config)
http://10.0.0.139:8888/actuator
"self": {
"href": "http://10.0.0.139:8888/actuator",
"templated": false
},
"health": {
"href": "http://10.0.0.139:8888/actuator/health",
"templated": false
},
"health-path": {
"href": "http://10.0.0.139:8888/actuator/health/{*path}",
"templated": true
}


Application	AMIs	Availability Zones	Status
DAILYTECH-AUTH	n/a (1)	(1)	UP (1) - LYSIUS-II.mshome.net:DAILYTECH-AUTH:8081
DAILYTECH-CONFIG	n/a (1)	(1)	UP (1) - LYSIUS-II.mshome.net:DAILYTECH-CONFIG:8888
DAILYTECH-GATEWAY	n/a (1)	(1)	UP (1) - LYSIUS-II.mshome.net:DAILYTECH-GATEWAY:9191
DAILYTECH-REST	n/a (1)	(1)	UP (1) - LYSIUS-II.mshome.net:DAILYTECH-REST:8083
DAILYTECH-REST	n/a (1)	(1)	UP (1) - LYSIUS-II.mshome.net:DAILYTECH-REST:8082
