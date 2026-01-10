 package karate.posts;

 import com.intuit.karate.junit5.Karate;
 import org.junit.jupiter.api.Timeout;

 class PostsRunner {
    
     @Karate.Test
     @Timeout(20)
     Karate testUsers() {
         return Karate.run("posts").relativeTo(getClass());
     }

 }
