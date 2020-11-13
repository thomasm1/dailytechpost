// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_URL: "http://localhost:8080/api",
  //  API_URL: "http://localhost:8089/api",
  // nasaKey: 'mF6DQE******w0',
  google_url: "http://54.174.82.153:8080/login/getGoogleApi",
  nasa_url: "http://54.174.82.153:8080/login/getNasaApi",

  json_url: "http://localhost:3000/nasa/",


  // AWS Lambda-DynamoDB-APIgateway
  aws_url: "https://cxk6wy94h3.execute-api.us-east-1.amazonaws.com/dev/nasa",
  // aws_url: "https://ccgcdpvo25.execute-api.us-east-1.amazonaws.com/Dailytech_Production/dailytech-nasa",

  firebase: {
    apiKey: 'AIzaSyCEdt9rr--Zgm9eh5DBGHM5C_LS2wUnI8M',
    authDomain: 'ourdailytechdata.firebaseapp.com',
    databaseURL: 'https://ourdailytechdata.firebaseio.com',
    projectId: 'ourdailytechdata',
    storageBucket: 'ourdailytechdata.appspot.com',
    messagingSenderId: '99505496502'
  }

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
