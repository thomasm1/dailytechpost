function fn() {
    let env = karate.env; // get system property 'karate.env'
    karate.log('karate.env system property was:', env);
    let system = Java.type('java.lang.System');
  
    if (!env) {
      env = 'local';
    }
      karate.log('karate.env is:', env);

      let apiKey = ''
      let pw = system.getenv('MYSQL_AWS_DB_PASSWORD') || '';
      let thomas1Password = system.getenv('THOMAS1_GMAIL') || '';
      karate.log('MYSQL_AWS_DB_PASSWORD present:', !!pw);
      karate.log('THOMAS1_GMAIL present:', !!thomas1Password);

    let config = {
        env: env,
        varName: 'dailytech',
        userEmail: 'thomas1@gmail.com',
        userPassword: thomas1Password,
        baseUrl:  'http://localhost:8082',
        jwtToken: '',
        jwtTokenAdmin: '',
        tokenType: 'Bearer',
        authHeader: '',
        spring_datasource_url: '',
        spring_datasource_username: '',
        spring_datasource_password: pw
    };

    if (env === 'local'  ) {
        config.baseUrl = 'http://localhost:8082';
//        config.spring_datasource_url = "jdbc:mysql://localhost:3306/groot?createDatabaseIfNotExist=true&allowPublicKeyRetrieval=true&useSSL=false";
        config.spring_datasource_url = "jdbc:mysql://cryptomav3n1.cun222sm0fjn.us-east-1.rds.amazonaws.com:3306/dailytech?createDatabaseIfNotExist=true&useSSL=false&serverTimezone=UTC";
        karate.log('Using Local or H2 environment. Base URL:', config.baseUrl);
    }
    if (env === 'dev') {
       config.typicodeUrl = 'https://jsonplaceholder.typicode.com'
       config.awsUrl = 'https://emfm9dpoeh.execute-api.us-east-1.amazonaws.com'   // GET All: dev/posts   Get/post: dev/posts/{id}
       config.userEmail = 'kar1@test.com';
       config.userPassword = 'Karate123';
       // DailyTech
       config.baseUrlAws='http://localhost:4000';

    }
    else if (env === 'mysql') {
        config.baseUrl = 'https://api.blog.cryptomaven.xyz';
        config.spring_datasource_url = "jdbc:mysql://cryptomav3n1.cun222sm0fjn.us-east-1.rds.amazonaws.com:3306/dailytech?createDatabaseIfNotExist=true&useSSL=false&serverTimezone=UTC";
        config.spring_datasource_username = "";
        config.spring_datasource_password = '';
        karate.log('Using Production environment. Base URL:', config.baseUrl);
    }
    else if (env === 'qa') {
      config.userEmail = 'karate2@test.com'
      config.userPassword = 'Karate456';
      config.baseUrlAws='http://localhost:4000';
      
    }
    else if (env === 'e2e') {
      config.baseUrlAws= 'https://emfm9dpoeh.execute-api.us-east-1.amazonaws.com';
  
    }

    // Set API Key if needed
    // karate.configure('apiKey',  apiKey);
    if (!config.userPassword) {
      karate.fail('Missing THOMAS1_GMAIL environment variable for Karate login user ' + config.userEmail);
    }

    var URL = Java.type('java.net.URL');
    var StandardCharsets = Java.type('java.nio.charset.StandardCharsets');
    var BufferedReader = Java.type('java.io.BufferedReader');
    var InputStreamReader = Java.type('java.io.InputStreamReader');
    var StringBuilder = Java.type('java.lang.StringBuilder');
    var JavaString = Java.type('java.lang.String');
    var loginUrl = new URL(config.baseUrl + '/api/users/auth/login');
    var connection = loginUrl.openConnection();
    connection.setRequestMethod('POST');
    connection.setDoOutput(true);
    connection.setRequestProperty('Accept', 'application/json');
    connection.setRequestProperty('Content-Type', 'application/json');

    var body = JSON.stringify({ usernameOrEmail: config.userEmail, password: config.userPassword });
    var bytes = new JavaString(body).getBytes(StandardCharsets.UTF_8);
    var output = connection.getOutputStream();
    output.write(bytes);
    output.close();

    var status = connection.getResponseCode();
    if (status !== 200) {
      karate.fail('Login failed for Karate user ' + config.userEmail + ' with HTTP status ' + status);
    }

    var reader = new BufferedReader(new InputStreamReader(connection.getInputStream(), StandardCharsets.UTF_8));
    var responseBuilder = new StringBuilder();
    var line;
    while ((line = reader.readLine()) !== null) {
      responseBuilder.append(line);
    }
    reader.close();

    var auth = karate.fromString(responseBuilder.toString());
    config.jwtToken = auth.accessToken;
    config.jwtTokenAdmin = auth.accessToken;
    config.tokenType = auth.tokenType || 'Bearer';
    config.authHeader = config.tokenType + ' ' + config.jwtToken;
  
  
    return config;
  }
