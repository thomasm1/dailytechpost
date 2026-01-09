package net.ourdailytech.rest.util.constants;

public class Constant {

    public static final String UI_ORIGIN = "http://3.217.82.219";

    public static final String ANSI_RESET = "\u001B[0m";
    public static final String ANSI_BLACK = "\u001B[30m";
    public static final String ANSI_RED = "\u001B[31m";
    public static final String ANSI_GREEN = "\u001B[32m";
    public static final String ANSI_BLUE = "\u001B[34m";
    public static final String ANSI_PURPLE = "\u001B[35m";
    public static final String ANSI_CYAN = "\u001B[36m";
    public static final String DATE_FORMAT = "yyyy-MM-dd";

    public static final String DATE_TIME_FORMAT = "yyyy-MM-dd HH:mm:ss";

    public static final String DEFAULT_PAGE_NUMBER = "0";
    public static final String DEFAULT_PAGE_SIZE = "100";
    public static final String DEFAULT_SORT_BY = "id";
    public static final String DEFAULT_SORT_DIRECTION = "asc";

    public static final String USER_PATH = "/api/users";
    public static final String USER_PATH_ID = USER_PATH + "/{userId}";
     public static final String LIST_USER_PATH = "/api/users/list";
    public static final String REGISTER_USER_PATH = "/api/users/auth/register";
    public static final String CREATE_USER_PATH = "/api/users/create";
    public static final String UPDATE_USER_PATH = "/api/users/update";
    public static final String PATCH_USER_PATH = "/api/users/patch";
    public static final String DELETE_USER_PATH = "/api/users/delete";
    public static final String USER_ID =  "/{userId}";

    public static final String API = "/api";
    public static final String BOOKS = "/books";
    public static final String BOOKS_ID = "/books/{id}";
    public static final String BOOKS_BOOK_ID = "/books/{bookId}";

    public static final String API_KEYS = "/api/keys";
    // FILES
    public static final String LOCAL_SCANNER_TXT = "src/data/scannertext.txt" ;
    public static final String FILE_IN_USERS = "src/data/files/fileInUsers.txt" ;
    public static final String FILE_OUT_USERS = "src/data/files/fileOutUsers.txt" ;
    public static final String FILE_OUT_USER = "src/data/files/fileOutUser.txt" ;

    public static final String FILE_IN_GROUPS = "src/data/files/fileInGroups.txt";
    public static final String API_POSTS = "/api/posts";

    public Constant(String datum) {
        this.datum = datum;
    };


    private Constant String (Constant constant) {
      return constant;
    };

    private String datum;

}
