# AI Coding Agent Instructions

## Architecture Overview

This codebase consists of two interconnected applications built for crypto analytics and tech blogging:

1. **CryptoMaven** (`bitcoinBuyer1_CryptoMaven.xyz/`): Microservices-based crypto platform
   - **Frontend**: React app with Webpack, integrating blockchain data via Moralis API
   - **Backend**: Java Spring Boot microservices (auth, config, gateway, REST)
   - **Blockchain**: Solidity smart contracts on PulseChain/Ethereum
   - **Data**: MongoDB for flexible schemas, AWS for deployment

2. **DailyTechPost** (`dailytechpost/`): Multi-frontend tech news/blog platform
   - **Frontends**: React and Angular implementations
   - **Backend**: Spring Boot REST API with JWT authentication
   - **Data**: MySQL/H2 databases with JPA entities
   - **Deployment**: AWS Lambda/Serverless functions

**Key Data Flows**: Frontends authenticate via JWT tokens and make API calls to REST services, which query relational databases. Microservices communicate via Spring Cloud Config and Eureka registry.

**Service Boundaries**: Authentication, configuration, API gateway, and business logic are separated into independent services for scalability and independent deployment.

## Critical Developer Workflows

- **Local Development**: 
  - Frontends: `npm start` launches webpack-dev-server with hot reload
  - Java Services: `mvn spring-boot:run` in each `cryptomaven-*` directory
  - Full Stack: Run `./startMaven.sh` to start Node.js server

- **Building for Production**: 
  - `npm run build` creates optimized bundles
  - Java: `mvn clean package` generates JARs

- **Database Setup**: 
  - Execute SQL scripts from `data/` directory for schema and sample data
  - Switch Spring profiles (`mysql`, `h2`) in `application.yml`

- **Testing**: 
  - Unit tests: `npm test` for JS, `mvn test` for Java
  - Integration: Use Spring profiles for database testing

## Methodology

- Review / Write tests in the style of Roy Osherove's 'Art of Unit Testing': readable, maintainable, trustworthy
- Whenever legacy code exists, help refactor this code based on Michael Feathers 'Working Effectively with Legacy Code'

## Project-Specific Conventions

- **API Configuration**: Centralize all endpoint URLs in `src/config.js` files with environment fallbacks [dailytech-react/src/config.js](dailytech-react/src/config.js)
- **Authentication**: JWT tokens stored in `Authorization: Bearer <token>` headers; fallback tokens provided for development
- **Styling**: Define reusable style objects in JavaScript config files rather than CSS classes
- **Data Access**: Use Spring Data JPA repositories with custom queries; avoid raw SQL in application code
- **Error Handling**: Return HTTP status codes (401 for auth, 404 for not found); log errors with context
- **Naming**: Use kebab-case for directories, camelCase for variables, PascalCase for components/classes

## Integration Points & Dependencies

- **Blockchain**: EVM chain support via Web3.js/Moralis; supported chains listed in README-SERVER.md
- **AWS**: API Gateway, Lambda, S3 for serverless deployment
- **External APIs**: Crypto news from Nomics, social feeds from Twitter
- **Cross-Service Communication**: Spring Cloud Bus for config updates, Eureka for service discovery

## Code Examples

**API Call Pattern**:
```javascript
const response = await axios.get(`${API_BASE_URL}/posts`, {
  headers: { Authorization: `Bearer ${JWT_TOKEN}` }
});
```

**Spring Entity**:
```java
@Entity
public class PostEntity {
    @Id @GeneratedValue
    private Long id;
    private String title;
    // getters/setters
}
```

**React Component Structure**:
```javascript
const BlogCard = ({ post }) => (
  <div style={styles.blogCard} onMouseEnter={handleHover}>
    <h1 style={styles.h1}>{post.title}</h1>
  </div>
);
```