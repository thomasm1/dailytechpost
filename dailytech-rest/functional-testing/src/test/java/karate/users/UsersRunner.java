package karate.users;

import com.intuit.karate.junit5.Karate;
import org.junit.jupiter.api.Timeout;

class UsersRunner {
    
    @Karate.Test
    @Timeout(20)
    Karate testUsers() {
        return Karate.run("users").relativeTo(getClass());
    }    

}
