function fn() {    
  var env = karate.env; // get system property 'karate.env'
  karate.log('karate.env system property was:', env);


  if (!env) {
    env = 'dev';
  }
  var config = {
    env: env,
    varName: 'dailytech',
    userEmail: 'thomas1@gmail.com',
    userPassword: 'password',
      _url: 'http://localhost:8082/',
      baseUrl:  'http://localhost:8082/',
      spring_datasource_url: '',
      spring_datasource_username: '',
      spring_datasource_password: pw
  }
  if (env === 'dev') {
     config.typicodeUrl = 'https://jsonplaceholder.typicode.com'
     config.awsUrl = 'https://emfm9dpoeh.execute-api.us-east-1.amazonaws.com'   // GET All: dev/posts   Get/post: dev/posts/{id}
     config.userEmail = 'kar1@test.com';
     config.userPassword = 'Karate123';

     // DailyTech
     config.baseUrlAws='http://localhost:4000';


  } else if (env === 'qa') {
    config.userEmail = 'karate2@test.com'
    config.userPassword = 'Karate456';
    config.baseUrlAws='http://localhost:4000';
    
  }
  else if (env === 'e2e') {
    config.baseUrlAws= 'https://emfm9dpoeh.execute-api.us-east-1.amazonaws.com';

  }


  var tokenType = karate.callOnce('classpath:helpers/CreateToken.feature', config).tokenType
  var accessToken = karate.callSingle('classpath:helpers/CreateToken.feature', config).authToken
  karate.configure('headers', {Authorization: tokenType + ' ' + accessToken})


  return config;
}