package karate;

import com.intuit.karate.Results;
import com.intuit.karate.Runner;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.Timeout;

import static org.junit.jupiter.api.Assertions.assertEquals;

class ApiTest {

  @Test
  @Timeout(30)
  void testParallel() {
    String options = System.getProperty("karate.options");
    Results results = Runner.path("classpath:karate")
        .tags(options != null ? options : "~@ignore")
        //.outputCucumberJson(true)
        .parallel(1)  ;  // Timeout in milliseconds;
    assertEquals(0, results.getFailCount(), results.getErrorMessages());
  }

}
