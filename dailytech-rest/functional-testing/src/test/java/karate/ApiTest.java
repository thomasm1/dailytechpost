package karate;

import com.intuit.karate.Results;
import com.intuit.karate.Runner;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

class ApiTest {
  @Test
  void testParallel() {
    // Runner handles karate.options (including --tags) itself.
    // Write features also require allowWrites=true, including when run from an IDE.
    Results results = Runner.path("classpath:karate")
        .tags("~@ignore", "~@legacy",
            Boolean.getBoolean("allowWrites") ? "~@ignore" : "~@destructive",
            Boolean.getBoolean("runFirebase") ? "~@ignore" : "~@firebase")
        .dryRun(Boolean.getBoolean("dryRun"))
        .outputCucumberJson(true)
        .parallel(1);
    assertEquals(0, results.getFailCount(), results.getErrorMessages());
  }
}
