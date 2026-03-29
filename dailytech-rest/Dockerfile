FROM eclipse-temurin:21-jdk-alpine

LABEL maintainer=thomas1.maestas@gmail.com

WORKDIR /app
COPY target/dailytech-rest-*.0.jar /app/dailytech.jar

EXPOSE 8082
ENTRYPOINT ["java", "-jar", "dailytech.jar"]
