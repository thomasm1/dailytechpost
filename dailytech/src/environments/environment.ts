// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  BASE: "http://34.199.129.2:8080",
  API_URL: "http://34.199.129.2:8080/api", 
  // nasaKey: 'mF6DQ******iJw0',  
  apiKeyNYT: '06voWGzUHt0AJNvF2CeIqGezsRBQTZd5',
  nyt_url: "http://34.199.129.2:8080/login/getNytApi",
  apiUrlNYT: "https://api.nytimes.com/svc",
  marvelKey: '5fbd9e22b0c348faa25fd3d07bee8248',
  google_url: "http://34.199.129.2:8080/login/getGoogleApi",
  nasa_url: "http://34.199.129.2:8080/login/getNasaApi", 
  json_url: "http://localhost:3000/nasa",  
  
  //crypto
  rinkebyUrl: 'https://api-rinkeby.etherscan.io/api',
  local_url: 'http://localhost:9000',
  nft_url: 'http://34.199.129.2:8887',
  cle_url: 'http://34.199.129.2:8080/login',

  // AWS Lambda-DynamoDB-APIgateway
  aws_url: "https://cxk6wy94h3.execute-api.us-east-1.amazonaws.com/dev/nasa", 
  firebase: {  // Per Firebase - apiKey not security concern
    apiKey: 'AIzaSyCEdt9rr--Zgm9eh5DBGHM5C_LS2wUnI8M',
    authDomain: 'ourdailytechdata.firebaseapp.com',
    databaseURL: 'https://ourdailytechdata.firebaseio.com',
    projectId: 'ourdailytechdata',
    storageBucket: 'ourdailytechdata.appspot.com',
    messagingSenderId: '99505496502',
    baseUrl: 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=',
  }, 
};
 
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
