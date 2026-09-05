function() {
  var fixtures = karate.get('fixtures') || [];
  var admin = karate.get('admin');
  var errors = [];
  for (var i = fixtures.length - 1; i >= 0; i--) {
    try {
      karate.call('classpath:helpers/cleanup.feature', {
        resourcePath: fixtures[i], authorization: admin.authorization
      });
    } catch (e) { errors.push(fixtures[i] + ': ' + e); }
  }
  if (errors.length) karate.fail('Fixture cleanup failed: ' + errors.join('; '));
}
