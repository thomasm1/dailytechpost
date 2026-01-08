#!/bin/bash

# DailyTech Events - Sequential Docker Startup Script
# Starts containers one compose file at a time with proper staging

set -e  # Exit on any error

echo "🚀 Starting DailyTech Events Infrastructure..."
echo "================================================"

# Get script directory and change to it
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Enhanced service readiness check
wait_for_service_ready() {
    local service_name=$1
    local port=$2
    local health_check_cmd=${3:-""}
    local max_attempts=60  # Increased from 30
    local attempt=1
    
    echo -e "${YELLOW}⏳ Waiting for $service_name readiness (port $port)...${NC}"
    
    while [ $attempt -le $max_attempts ]; do
        # First check if port is open
        if nc -z localhost $port 2>/dev/null; then
            # If health check provided, use it
            if [ -n "$health_check_cmd" ]; then
                if eval "$health_check_cmd" &>/dev/null; then
                    echo -e "${GREEN}✅ $service_name is fully ready!${NC}"
                    return 0
                fi
            else
                echo -e "${GREEN}✅ $service_name is ready!${NC}"
                return 0
            fi
        fi
        
        if [ $((attempt % 6)) -eq 0 ]; then  # Show progress every 30 seconds
            echo "  📊 Still waiting for $service_name... (${attempt}/${max_attempts})"
        fi
        sleep 5
        ((attempt++))
    done
    
    echo -e "${RED}❌ $service_name failed to become ready after $((max_attempts * 5)) seconds${NC}"
    return 1
}

# Check docker compose command
check_docker_compose() {
    if command -v docker-compose &> /dev/null; then
        echo "docker-compose"
    elif command -v docker &> /dev/null && docker compose version &> /dev/null; then
        echo "docker compose"
    else
        echo -e "${RED}❌ Neither 'docker-compose' nor 'docker compose' is available${NC}"
        exit 1
    fi
}

# Get docker compose command
DOCKER_COMPOSE=$(check_docker_compose)
echo -e "${BLUE}Using: $DOCKER_COMPOSE${NC}"

# Clean up existing containers
echo -e "${YELLOW}🧹 Cleaning up existing containers...${NC}"
cd conduktor-platform && $DOCKER_COMPOSE down -v 2>/dev/null || true
cd ../kafka-consumer-opensearch && $DOCKER_COMPOSE down -v 2>/dev/null || true
cd "$SCRIPT_DIR"

echo ""
echo -e "${GREEN}📋 PHASE 1: OpenSearch Infrastructure${NC}"
echo "======================================="

cd kafka-consumer-opensearch
echo -e "${YELLOW}🔍 Starting OpenSearch (with memory limits)...${NC}"
$DOCKER_COMPOSE up -d opensearch
wait_for_service_ready "OpenSearch" 9200 "curl -s http://localhost:9200/_cluster/health"

echo -e "${YELLOW}📊 Starting OpenSearch Dashboards...${NC}"
$DOCKER_COMPOSE up -d opensearch-dashboards
wait_for_service_ready "OpenSearch Dashboards" 5601

# Allow OpenSearch to stabilize
echo -e "${BLUE}⏸️  Allowing OpenSearch to stabilize (15s)...${NC}"
sleep 15

echo ""
echo -e "${GREEN}📋 PHASE 2: Kafka Infrastructure${NC}"
echo "================================="

cd ../conduktor-platform
echo -e "${YELLOW}🐘 Starting Zookeeper...${NC}"
$DOCKER_COMPOSE up -d zookeeper
wait_for_service_ready "Zookeeper" 2181

echo -e "${YELLOW}🗄️  Starting PostgreSQL...${NC}"
$DOCKER_COMPOSE up -d postgresql  
wait_for_service_ready "PostgreSQL" 5432

# Allow foundational services to stabilize
echo -e "${BLUE}⏸️  Allowing foundational services to stabilize (10s)...${NC}"
sleep 10

echo -e "${YELLOW}📨 Starting Kafka...${NC}"
$DOCKER_COMPOSE up -d kafka
wait_for_service_ready "Kafka" 9092

# Allow Kafka to fully initialize
echo -e "${BLUE}⏸️  Allowing Kafka to initialize (20s)...${NC}"
sleep 20

echo ""
echo -e "${GREEN}📋 PHASE 3: Optional Services${NC}"
echo "============================="

echo -e "${YELLOW}📝 Starting Schema Registry...${NC}"
$DOCKER_COMPOSE up -d schema-registry
# Schema registry often fails, so make it optional
if wait_for_service_ready "Schema Registry" 8081; then
    echo -e "${GREEN}✅ Schema Registry started successfully${NC}"
else
    echo -e "${YELLOW}⚠️  Schema Registry failed - continuing without it${NC}"
fi

echo -e "${YELLOW}🎛️  Starting Conduktor Console...${NC}"
$DOCKER_COMPOSE up -d conduktor-console
# Conduktor also optional
if wait_for_service_ready "Conduktor Console" 8080; then
    echo -e "${GREEN}✅ Conduktor Console started successfully${NC}"
else
    echo -e "${YELLOW}⚠️  Conduktor Console failed - continuing without it${NC}"
fi

# Final status check
cd "$SCRIPT_DIR"
echo ""
echo -e "${GREEN}🎉 DailyTech Events Infrastructure Started!${NC}"
echo "============================================="
echo ""
echo -e "${GREEN}📋 Available Services:${NC}"
echo "  🔍 OpenSearch:           http://localhost:9200"
echo "  📊 OpenSearch Dashboards: http://localhost:5601/app/dev_tools#/console"
echo "  📨 Kafka:                localhost:9092"
echo "  📝 Schema Registry:      http://localhost:8081 (if running)"
echo "  🎛️  Conduktor Console:    http://localhost:8080 (if running)"
echo "     └─ Login: admin@conduktor.io / adminP4ss!"
echo ""
echo -e "${YELLOW}🚀 Ready to Start Applications:${NC}"
echo "  📤 Producer:  cd kafka-producer-wikimedia && ./gradlew bootRun"
echo "  📥 Consumer:  cd kafka-consumer-opensearch && ./gradlew bootRun"
echo ""

# Show final container status
echo -e "${BLUE}📊 Final Container Status:${NC}"
echo -e "${BLUE}OpenSearch Stack:${NC}"
cd kafka-consumer-opensearch && $DOCKER_COMPOSE ps
echo ""
echo -e "${BLUE}Kafka Stack:${NC}"
cd ../conduktor-platform && $DOCKER_COMPOSE ps