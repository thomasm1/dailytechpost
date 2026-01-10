function fn() {
    let env = karate.env; // get system property 'karate.env'
    karate.log('karate.env system property was:', env);
  
    if (!env) {
      env = 'local';
    }
      karate.log('karate.env is:', env);

      let apiKey = ''
      let pw =  '' // process.env.MYSQL_AWS_DB_PASSWORD;
      karate.log('Database Password:', pw);

    let config = {
        env: env,
        varName: 'dailytech',
        userEmail: 'thomas1@gmail.com',
        userPassword: 'password',
        baseUrl:  'http://localhost:8082',
        jwtToken: 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJhYTMzM3RAZ21haWwuY29tIiwiaWF0IjoxNzY4MDI2MzA4LCJleHAiOjE3Njg2MzExMDh9.xjybYwSAEdc_5WyThNjcUcsn2aSREB1jXQjXK5RHrH60kV3MawmmO8pMQISNpBzm',
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
  
//    var tokenType = karate.callOnce('classpath:helpers/CreateToken.feature', config).tokenType
//    var accessToken = karate.callSingle('classpath:helpers/CreateToken.feature', config).authToken
//    karate.configure('headers', {Authorization: tokenType + ' ' + accessToken})
  
  
    return config;
  }