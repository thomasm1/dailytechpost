FROM eclipse-temurin:17.0.14_7-jdk-alpine

LABEL maintainer=thomas1.maestas@gmail.com

COPY target/dailytech-config-*.0.jar dailytech-config.jar

ENTRYPOINT ["java", "-jar", "dailytech-config.jar"]
