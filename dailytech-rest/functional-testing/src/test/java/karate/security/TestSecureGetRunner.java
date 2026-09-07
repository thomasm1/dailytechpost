package karate.security;

import com.intuit.karate.junit5.Karate;
import com.intuit.karate.junit5.Karate.Test;
import org.junit.jupiter.api.Disabled;

public class TestSecureGetRunner {

	@Disabled
	@Test
	public Karate runTest() {
		return Karate.run("getBasicRequest","getWithJwtRequest").relativeTo(getClass());
	}
	
}
