function fn() {    
  var env = karate.env; // get system property 'karate.env'
  karate.log('karate.env system property was:', env);


  if (!env) {
    env = 'dev';
  }
  var config = {
    env: env
  }
  if (env == 'dev') {,
     config.userEmail = 'kar1@test.com';
     config.userPassword = 'Karate123';
     baseUrlAws: 'https://emfm9dpoeh.execute-api.us-east-1.amazonaws.com';
  } else if (env == 'qa') {
    config.userEmail = 'karate2@test.com'
    config.userPassword = 'Karate456'
  }
  else if (env == 'e2e') {
    // customize
  }


  var accessToken = karate.callSingle('classpath:helpers/CreateToken.feature', config).authToken
  karate.configure('headers', {Authorization: 'Token ' + accessToken})

  return config;
}