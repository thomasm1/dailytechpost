// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


export const environment = {
    production: false,
    
  firebase: {
    apiKey: process.env['FIREBASE_API_KEY'], 
    authDomain: 'ourdailytechdata2.firebaseapp.com',
    databaseURL: '',
    projectId: 'ourdailytechdata2',
    storageBucket: 'ourdailytechdata2.firebasestorage.app',
    messagingSenderId: '53863879417',
    appId: '1:53863879417:web:d50e122439523c3a024828',
    measurementId: '',
},
gemini_api_key: process.env['GEMINI_API_KEY'], 
  debug_token: '',

//   //crypto
rinkebyUrl: 'https://api-rinkeby.etherscan.io/api',
local_url: 'http://localhost:9000',
nftsURL: '//34.199.129.2:9000',
nft_url: '//localhost:8080/api' ,
test_env: '', 
cle_url: 'http://34.199.129.2:8080/login',

  // other
  BASE: "http://34.199.129.2:8080",
  API_URL: "http://34.199.129.2:8080/api", 
  apiKeyNYT: '06voWGzUHt0AJNvF2CeIqGezsRBQTZd5',
  nyt_url: "http://34.199.129.2:8080/login/getNytApi",
  apiUrlNYT: "https://api.nytimes.com/svc",
  marvelKey: '5fbd9e22b0c348faa25fd3d07bee8248',
  google_url: "http://34.199.129.2:8080/login/getGoogleApi",
  nasa_url: "http://34.199.129.2:8080/login/getNasaApi", 
  json_url: "http://localhost:3000/nasa",  
    aws_url: "https://cxk6wy94h3.execute-api.us-east-1.amazonaws.com/dev/nasa", 
  


};
 