package karate;

import com.intuit.karate.Results;
import com.intuit.karate.Runner;
import com.intuit.karate.core.Feature;
import java.nio.file.Files;
import java.nio.file.Path;
import java.net.InetSocketAddress;
import java.nio.charset.StandardCharsets;
import com.sun.net.httpserver.HttpServer;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class AssetValidationTest {
  @Test
  void allFeatureFilesParseIncludingCalledHelpers() throws Exception {
    try (var files = Files.walk(Path.of("src/test/java"))) {
      for (Path file : files.filter(p -> p.toString().endsWith(".feature")).toList()) {
        Feature.read(file.toFile());
      }
    }
  }

  @Test
  void configAndFixtureExpressionsExecuteWithoutAnApi() throws Exception {
    // Exercise the real config against a local login stub, including distinct role credentials.
    HttpServer server = HttpServer.create(new InetSocketAddress("127.0.0.1", 0), 0);
    server.createContext("/api/users/auth/login", exchange -> {
      var body = new ObjectMapper().readTree(exchange.getRequestBody());
      String email = body.path("usernameOrEmail").asText();
      String password = body.path("password").asText();
      String token = email.equals("user@example.com") && password.equals("user-test-password") ? "user-token"
          : email.equals("admin@example.com") && password.equals("admin-test-password") ? "admin-token" : null;
      byte[] response = (token == null ? "{}" : "{\"accessToken\":\"" + token + "\",\"tokenType\":\"Bearer\"}").getBytes(StandardCharsets.UTF_8);
      exchange.getResponseHeaders().set("Content-Type", "application/json");
      exchange.sendResponseHeaders(token == null ? 401 : 200, response.length);
      exchange.getResponseBody().write(response);
      exchange.close();
    });
    server.createContext("/api/users/me", exchange -> {
      boolean admin = "Bearer admin-token".equals(exchange.getRequestHeaders().getFirst("Authorization"));
      String email = admin ? "admin@example.com" : "user@example.com";
      String role = admin ? "ROLE_ADMIN" : "ROLE_USER";
      byte[] response = ("{\"userId\":" + (admin ? 1 : 7) + ",\"email\":\"" + email
          + "\",\"roles\":[{\"id\":1,\"name\":\"" + role + "\"}]}").getBytes(StandardCharsets.UTF_8);
      exchange.getResponseHeaders().set("Content-Type", "application/json");
      exchange.sendResponseHeaders(200, response.length);
      exchange.getResponseBody().write(response);
      exchange.close();
    });
    server.start();
    try {
      Results results = Runner.path("classpath:validation/config.feature")
        .systemProperty("baseUrl", "http://127.0.0.1:" + server.getAddress().getPort())
        .systemProperty("api.username", "user@example.com")
        .systemProperty("api.password", "user-test-password")
        .systemProperty("api.adminUsername", "admin@example.com")
        .systemProperty("api.adminPassword", "admin-test-password")
        .systemProperty("karate.options", "")
        .reportDir("target/config-validation")
        .parallel(1);
    assertEquals(0, results.getFailCount(), results.getErrorMessages());
    } finally {
      server.stop(0);
    }
  }
}
