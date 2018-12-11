angular.module('app').component('nav', {
  templateUrl: 'app/nav/nav.html',
  bindings: {
  },
  controller: function($firebaseObject, fbRef, $scope) {
    this.loaded = false;

    this.userPreferences = $firebaseObject(fbRef.getPreferencesRef());
    this.userPreferences.$loaded().then((function(data) {
      this.loaded = true;
    }).bind(this));

  }
});