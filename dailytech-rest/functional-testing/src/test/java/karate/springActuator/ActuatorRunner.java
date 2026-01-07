package karate.springActuator;

import com.intuit.karate.junit5.Karate;

/**
 *
 */
public class ActuatorRunner {

    @Karate.Test
    Karate testActuator() {
        return Karate.run("actuator").relativeTo(getClass());
    }
}
