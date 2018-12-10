#### Important: register OAUTH
#### https://developers.facebook.com/docs/apps/register
#### OAUTH Redirect: https://ourdailytechblog.firebaseapp.com/__/auth/handler
AngularFire Course
========================

The course is out of date in two ways: 

1. **The management console** A new version of the management console has been released. The UI is different, but it has all the same functionality. You should be easily able to find the same functionality in the new console that I show in the old console.
2. **Authentication & Firebase Refs** Creating Refs, and using $firebaseAuth has changed in angularfire 2.0 and beyond. I recommend following along with the course with the prescribed versions (firebase 2.4.1 and angularfire 1.1.4, but see below for information on upgrading to the latest versions 

## Management Console Workarounds

There are also a couple of problems/bugs with the new management console:

**The New Management Console**
Currently, there are known bugs with Firebases created in the new console in relation to authentication. For that reason I recommend that you create any 
new firebase using the classic management console here: https://www.firebase.com/account/#/ then if you wish you can upgrade it to the new management console.

**New Management Console Authentication**
The only problem currently is in your facebook authentication setup. The new firebase console documents are incorrect. 

If you click the "learn more" link when configuring facebook authentication in your application, and walk through the steps that firebase outlines, you will come to a step where you are directed to add a "OAuth redirect URI" to your facebook app with the format like this:

https://YOUR-APP-NAME.firebaseapp.com/__/auth/handler 

but in reality, you need to add a url like this:

https://auth.firebase.com/v2/YOUR-APP-NAME/auth/facebook/callback

You can find a walkthrough of the process that I made here: https://www.youtube.com/watch?v=8XnUs2xY5c4&feature=youtu.be

## AngularFire 2.0 and Firebase 3.0 Workarounds

Using the latest version of AngularFire and Firebase is actually fairly straightforward. This guide assumes your firebase is on version 3.0 and uses the new console. This means you either
created your firebase using the new management console, or you upgraded it to version 3.  Once this is done, make the following changes to use AngularFire 2.0 with Firebase 3

You can find a summary of many of the required changes in this migration document: https://github.com/firebase/angularfire/blob/master/docs/migration/1XX-to-2XX.md

Furthermore, these changes have been implemented in some sample code at https://github.com/joeeames/expense-tracker
This sample code isn't identical to what is produced in the course, but it's very close.


### Index.html

Remove the two script files for Angular 2.4.1 and AngularFire 1.1.4 and instead use the following:

```html
  <script src="https://www.gstatic.com/firebasejs/3.2.1/firebase.js"></script>
  <script>
    var config = {
      apiKey: "apiKey",
      authDomain: "projectId.firebaseapp.com",
      databaseURL: "https://databaseName.firebaseio.com"
    };
    firebase.initializeApp(config);
  </script>
  <script src="https://cdn.firebase.com/libs/angularfire/2.0.1/angularfire.min.js"></script>
```

The correct config settings is obtainable in the new console by going to the overview page (click on the name of your firebase in the upper left of the management console) 
and then click on the large red circle that has </> inside it and the text "Add Firebase to your web app" underneath it. Then just copy that code into your index.html.

### fbUrl.js

Change your fbUrl.js file to the following:

```javascript
angular.module('app').factory('rootRef', function() {
  return firebase.database().ref();
});
```

This will correctly create a rootRef service that is a pointer to the root of your firebase database



### auth.js

The $firebaseAuth service has renamed most of its methods. They are detailed here and below.

Change your auth.js file to the following:

```javascript
angular.module('app').factory('auth', function($firebaseAuth, rootRef) {
  return $firebaseAuth();
})
```

This is how you create an auth instance in your apps. instead of using

```javascript
return $firebaseAuth(rootRef);
```

### login.js

In your login.js replace the call to $authAnonymously with $signInAnonymously, and the call to $authWithOAuthPopup to $signInWithPopup

### logout.js

Change your logout.js file to the following:

```javascript
angular.module('app').component('logout', {
  controller: function(auth, $location, $timeout) {
    // auth.$unauth();
    auth.$signOut()

    $timeout(function() {
      $location.path('/login');
    }, 500);
  }
})
```

This does two things: First, the call to $unauth() is replaced with $signOut. Additionally, for now there appears to be an issue where calling $signOut()
doesn't immediately sign out the user. There's a delay while the server is contacted, and this is returned to the client. Hence the call to $timeout, to give
the server time to respond. Hopefully that will be addressed soon and the $timeout call can be removed. I set it to 500 ms which seems to be enough, but you may
need to play with the delay to be sure.

### app.js

In your routes, you will need to replace the two methods used in the resolve methods on routes.

First, replace all calls to $requireAuth() with $requireSignIn(), then replace any call to $waitForAuth() with $waitForSignIn()

**Summary**
These changes will get you working with AngularFire 2.0 and firebase 3.0. An update to the course should be coming sometime in the near future.

