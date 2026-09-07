function fn() {
      var env = karate.env ; // get system property 'karate.env'
    karate.log('karate.env system property was:', env);
    if (!env) {
        env = 'local'; // default to 'local' if not specified!!
    }
    karate.log('karate.env is now:', env);

  var System = Java.type('java.lang.System');
  function setting(property, variable, fallback) {
    return karate.properties[property] || System.getenv(variable) || fallback;
  }
  
  var config = { 
    env: env,
    baseUrl: setting('baseUrl', 'DAILYTECH_BASE_URL', 'http://localhost:8082').replace(/\/+$/, ''),
 
    userEmail: setting('api.username', 'THOMAS7_GMAIL', 'thomas7@gmail.com'),
    userPassword: setting('api.password', 'THOMAS7_GMAIL_PW', 'password'),
    adminEmail: setting('api.adminUsername', 'THOMAS1_GMAIL', 'thomas1@gmail.com'),
    adminPassword: setting('api.adminPassword', 'THOMAS1_GMAIL_PW', ''),
    
    allowWrites: karate.properties['allowWrites'] === 'true',
    corsOrigin: setting('corsOrigin', 'DAILYTECH_CORS_ORIGIN', 'http://localhost:4200')
  };

  if (env === 'local' || env === 'h2') {
      config.baseUrl = karate.properties['baseUrl'] || System.getenv('DAILYTECH_BASE_URL') || 'http://localhost:8082';
      config.spring_datasource_url = "jdbc:mysql://cryptomav3n.ce1qqymm6i27.us-east-1.rds.amazonaws.com:3306/dailytech?createDatabaseIfNotExist=true&allowPublicKeyRetrieval=true&useSSL=false";
      config.spring_datasource_username = karate.properties['spring.datasource.username'] || System.getenv('MYSQL_AWS_DB_USERNAME') || "admin";
      config.spring_datasource_password = karate.properties['spring.datasource.password'] || System.getenv('MYSQL_AWS_DB_PASSWORD') || '';
      karate.log('Using local API. Base URL:', config.baseUrl); 
  }
 else if (env === 'mysql') {
        config.baseUrl = karate.properties['baseUrl'] || System.getenv('DAILYTECH_BASE_URL_PROD') || 'https://api.blog.cryptomaven.xyz' || 'http://52.3.58.191:8082' ;
        config.spring_datasource_url = "jdbc:mysql://cryptomav3n.ce1qqymm6i27.us-east-1.rds.amazonaws.com:3306/dailytech?createDatabaseIfNotExist=true&allowPublicKeyRetrieval=true&useSSL=false";
        config.spring_datasource_username = karate.properties['spring.datasource.username'] || System.getenv('MYSQL_AWS_DB_USERNAME') || "admin";
        config.spring_datasource_password = karate.properties['spring.datasource.password'] || System.getenv('MYSQL_AWS_DB_PASSWORD') || '';
        karate.log('Using Production environment. Base URL:', config.baseUrl);
    }

  config.apiBaseUrl = config.baseUrl + '/api';
  var karateOptions = karate.properties['karate.options'] || '';
  var dbOnly = karateOptions.indexOf('@db') > -1
    && karateOptions.indexOf('@users') === -1
    && karateOptions.indexOf('@posts') === -1
    && karateOptions.indexOf('@comments') === -1;

  config.jsonHeaders = { 
    Accept: 'application/json', 
    'Content-Type': 'application/json' 
  };

 
      if (!dbOnly) {
      var auth = karate.callSingle('classpath:utils/login.feature', config);

      var token = auth.accessToken
        || auth.access_token
        || auth.token
        || auth.jwt
        || auth.id_token
        || (auth.data && (auth.data.accessToken || auth.data.access_token || auth.data.token));

      var tokenType = auth.tokenType || auth.token_type || auth.type || 'Bearer';

      config.authToken = token || '';
      config.tokenType = tokenType;
      config.authHeader = auth.authorization || auth.authHeader || (token ? (tokenType + ' ' + token) : '');

      config.authHeaders = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: config.authHeader
      };

      var adminAuth = karate.call('classpath:utils/login.feature', {
        apiBaseUrl: config.apiBaseUrl,
        jsonHeaders: config.jsonHeaders,
        adminEmail: config.adminEmail,
        adminPassword: config.adminPassword
      });

      var adminToken = adminAuth.accessToken
        || adminAuth.access_token
        || adminAuth.token
        || adminAuth.jwt
        || adminAuth.id_token
        || (adminAuth.data && (adminAuth.data.accessToken || adminAuth.data.access_token || adminAuth.data.token));

      var adminTokenType = adminAuth.tokenType || adminAuth.token_type || adminAuth.type || 'Bearer';
      config.adminAuthToken = adminToken || '';
      config.adminAuthHeader = adminAuth.authorization || adminAuth.authHeader || (adminToken ? (adminTokenType + ' ' + adminToken) : '');
      config.adminAuthHeaders = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: config.adminAuthHeader
      };
      } else {
        config.authToken = '';
        config.tokenType = 'Bearer';
        config.authHeader = '';
        config.authHeaders = config.jsonHeaders;
        config.adminAuthToken = '';
        config.adminAuthHeader = '';
        config.adminAuthHeaders = config.jsonHeaders;
      }

      karate.configure('connectTimeout', 10000);
      karate.configure('readTimeout', 30000); 
  karate.configure('logPrettyRequest', false);
  karate.configure('logPrettyResponse', false);
  karate.configure('report', { showLog: false, showAllSteps: false });
  
  return config;
}
