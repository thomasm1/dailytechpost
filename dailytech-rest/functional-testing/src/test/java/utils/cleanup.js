function() {
  var fixtures = karate.get('fixtures') || [];
  var authorization = karate.get('adminAuthHeader');
  var errors = [];
  for (var i = fixtures.length - 1; i >= 0; i--) {
    try {
      karate.call('classpath:utils/cleanup.feature', {
        resourcePath: fixtures[i], authorization: authorization
      });
    } catch (e) { errors.push(fixtures[i] + ': ' + e); }
  }
  if (errors.length) karate.fail('Fixture cleanup failed: ' + errors.join('; '));
}
