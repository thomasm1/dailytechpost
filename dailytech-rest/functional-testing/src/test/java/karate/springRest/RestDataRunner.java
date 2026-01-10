package karate.springRest;

import com.intuit.karate.junit5.Karate;
import org.junit.jupiter.api.Timeout;

/**
 *
 */
public class RestDataRunner {

    @Karate.Test
    @Timeout(20)
    Karate testREST() {
        return Karate.run("restData").relativeTo(getClass());
    }
}