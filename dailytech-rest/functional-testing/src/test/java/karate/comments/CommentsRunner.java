package karate.comments;

import com.intuit.karate.junit5.Karate;

class CommentsRunner {
    
    @Karate.Test
    Karate testUsers() {
        return Karate.run("comments").relativeTo(getClass());
    }    

}
