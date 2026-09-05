package karate;

import com.intuit.karate.Results;
import com.intuit.karate.Runner;
import com.intuit.karate.core.Feature;
import java.nio.file.Files;
import java.nio.file.Path;
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
  void configAndFixtureExpressionsExecuteWithoutAnApi() {
    Results results = Runner.path("classpath:validation/config.feature")
        .systemProperty("baseUrl", "http://localhost:8082///")
        .reportDir("target/config-validation")
        .parallel(1);
    assertEquals(0, results.getFailCount(), results.getErrorMessages());
  }
}
