package helpers;

import com.github.javafaker.Faker;
import net.minidev.json.JSONObject;

public class DataGenerator {
    
    public static String getRandomEmail(){
        Faker faker = new Faker();
        String email = faker.name().firstName().toLowerCase() + faker.random().nextInt(0, 100) + "@test.com";
        return email;
    }

    public static String getRandomUsername(){
        Faker faker = new Faker();
        String username = faker.name().username();
        return username;
    }

    public static JSONObject getRandomArticleValues(){
        Faker faker = new Faker();
        String author = faker.gameOfThrones().character();
        String title = faker.gameOfThrones().city();
        String body = faker.gameOfThrones().quote();
        JSONObject json = new JSONObject();
        json.put("author", author);
        json.put("title", title);
        json.put("post", body);
        return json;
    }

}