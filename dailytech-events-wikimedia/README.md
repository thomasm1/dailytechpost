
# DailyTech Events - Kafka Event Processing System

**Description:** Consumes Wikimedia changes, processes events, and stores in OpenSearch for analysis.

**Technologies:** Java 17, Spring Boot 3.3.11, Kafka, OpenSearch, Gradle

## Quick Start

### 1. Start Infrastructure (2 terminals)

**Terminal 1:**
```bash
cd conduktor-platform
docker-compose up -d zookeeper kafka postgresql
```

**Terminal 2:** 
```bash
cd kafka-consumer-opensearch  
docker-compose up -d opensearch opensearch-dashboards
```

### 2. Start Applications (2 terminals)

**Terminal 3 - Producer:**
```bash
cd kafka-producer-wikimedia
./gradlew bootRun
```

**Terminal 4 - Consumer:**
```bash
cd kafka-consumer-opensearch
./gradlew bootRun  
```

### 3. Access Services

- **OpenSearch:** http://localhost:9200
- **OpenSearch Dashboards:** http://localhost:5601/app/dev_tools#/console
- **Conduktor Console:** http://localhost:8080 (if started)
  - Login: `admin@conduktor.io` / `adminP4ss!`

### 4. Verify Data Flow

Check OpenSearch for Wikimedia events:
```bash
curl "http://localhost:9200/wikimedia/_search?pretty"
```

## Build & Test

```bash
./gradlew build     # Build all modules
./gradlew test      # Run tests
```
