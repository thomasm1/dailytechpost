function fn() {
  var System = Java.type('java.lang.System');
  function setting(property, variable, fallback) {
    return karate.properties[property] || System.getenv(variable) || fallback;
  }
  var config = {
    env: karate.env || 'local',
    baseUrl: setting('baseUrl', 'DAILYTECH_BASE_URL', 'http://localhost:8082').replace(/\/+$/, ''),
    userEmail: setting('api.username', 'DAILYTECH_USER_EMAIL', ''),
    userPassword: setting('api.password', 'DAILYTECH_USER_PASSWORD', ''),
    adminEmail: setting('api.adminUsername', 'DAILYTECH_ADMIN_EMAIL', ''),
    adminPassword: setting('api.adminPassword', 'DAILYTECH_ADMIN_PASSWORD', ''),
    jwtToken: setting('api.token', 'DAILYTECH_USER_TOKEN', ''),
    jwtTokenAdmin: setting('api.adminToken', 'DAILYTECH_ADMIN_TOKEN', ''),
    allowWrites: karate.properties['allowWrites'] === 'true',
    corsOrigin: setting('corsOrigin', 'DAILYTECH_CORS_ORIGIN', 'http://localhost:4200')
  };
  config.apiBaseUrl = config.baseUrl + '/api';
  config.jsonHeaders = { Accept: 'application/json', 'Content-Type': 'application/json' };
  config.authHeader = config.jwtToken ? 'Bearer ' + config.jwtToken : '';
  config.adminAuthHeader = config.jwtTokenAdmin ? 'Bearer ' + config.jwtTokenAdmin : '';
  // No login here: public / security tests must run without credentials.
  // Authenticated features call helpers/auth.feature only when needed.
  karate.configure('connectTimeout', 5000);
  karate.configure('readTimeout', 15000);
  karate.configure('logPrettyRequest', false);
  karate.configure('logPrettyResponse', false);
  karate.configure('report', { showLog: false, showAllSteps: false });
  return config;
}
