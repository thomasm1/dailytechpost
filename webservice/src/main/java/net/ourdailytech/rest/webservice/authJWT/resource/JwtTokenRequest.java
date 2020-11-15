package net.ourdailytech.rest.webservice.authJWT.resource;

import java.io.Serializable;

public class  JwtTokenRequest implements Serializable {
  
  private static final long serialVersionUID = -5616176897013108345L;

  private String username;
    private String password;

//    {
//        "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJpbjI4bWludXRlcyIsImV4cCI6MTYwNjAxODQ3MCwiaWF0IjoxNjA1NDEzNjcwfQ.izmKzoprHuOcZyy96BcWVlIna69AcKIiCXSXwOz8hU5J_v_KIGBq2fQT_Td3tVh6Sw7ON34zaP7MNEIrAqaeZA"
//    }
    
    public JwtTokenRequest() {
        super();
    }

    public JwtTokenRequest(String username, String password) {
        this.setUsername(username);
        this.setPassword(password);
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}

