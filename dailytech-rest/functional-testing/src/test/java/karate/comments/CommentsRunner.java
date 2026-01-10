package karate.comments;

import com.intuit.karate.junit5.Karate;
import org.junit.jupiter.api.Timeout;

class CommentsRunner {
    
    @Karate.Test
    @Timeout(20)
    Karate testUsers() {
        return Karate.run("comments").relativeTo(getClass());
    }    

}
