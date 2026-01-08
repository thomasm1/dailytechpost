FROM eclipse-temurin:17.0.14_7-jdk-alpine

LABEL maintainer=thomas1.maestas@gmail.com

COPY target/dailytech-gateway-*.0.jar dailytech-gateway.jar

ENTRYPOINT ["java", "-jar", "dailytech-gateway.jar"]

