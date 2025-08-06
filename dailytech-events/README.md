
## Project: OurDailyTech Blog app: Event Management System
## Descxription: Consumes subject matter from Wikimedia, filtering by users' interests, and stores it in OpenSearch.
## Technologies: Java, Spring Boot, Kafka, OpenSearch
## How to run
## 1. Clone the repository
## 2. Build the project using Maven: `gradlew build`
## 3. Run the application: `gradlew bootRun`
## 4. Ensure Kafka and OpenSearch are running locally or configured in `application.properties`
## 5. The application will start consuming events from the Wikimedia topic and indexing them into OpenSearch.
## # 6. Access the OpenSearch information at `http://localhost:9200` to view indexed documents.
## # 6. Access the OpenSearch Dashboard at `http://localhost:5601/app/dashboards` to view indexed documents.
## # 6c. Setup Conducktor-- admin: # Define the local admin for the initial setup (mandatory)
```
email: admin@conduktor.io
password: adminP4ss!

auth: # Define a local user (optional)
local-users:
- email: user@conduktor.io
password: userP4ss!
```

Access the application at `http://localhost:8080`
