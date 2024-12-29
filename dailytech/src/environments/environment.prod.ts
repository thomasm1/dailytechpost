export const environment = {
  production: true, 
  firebase: {
    // apiKey: '${{ secrets.FIREBASE_API_KEY }}',
    //  apiKey: 'AIzaSyASxeRaQ346hnCcJ2AfcJ70KxFgHPahM9w',
    apiKey: "AIzaSyASxeRaQ346hnCcJ2AfcJ70KxFgHPahM9w",
    authDomain: "ourdailytechdata2.firebaseapp.com",
    databaseURL: "https://ourdailytechdata2-default-rtdb.firebaseio.com",
    projectId: "ourdailytechdata2",
    storageBucket: "ourdailytechdata2.firebasestorage.app",
    messagingSenderId: "53863879417",
    appId: "1:53863879417:web:d50e122439523c3a024828",
    measurementId: "G-Q1HCMEBC5D"
},
// Firebase-related APIs use API keys only to identify the Firebase project or app, not for authorization to call the API (like some other APIs allow). Authorization for Firebase-related APIs is handled separately from the API key, either through Google Cloud IAM permissions, Firebase Security Rules, or Firebase App Check. This is why it's OK to include Firebase API keys in your code when you use them only with Firebase-related APIs.
gemini_api_key: process.env['GEMINI_API_KEY'],  
  // gemini_api_key: '${{ secrets.GEMINI_API_KEY }}',
  debug_token: '',

  BASE: "http://34.199.129.2:8080",
  API_URL: "http://34.199.129.2:8080/api",
  // nasaKey: 'mF6DQ******iJw0',  
  google_url: "http://34.199.129.2:8080/login/getGoogleApi",
  nasa_url: "http://34.199.129.2:8080/login/getNasaApi",
  json_url: "http://localhost:3000/nasa",

  //crypto
  rinkebyUrl: 'https://api-rinkeby.etherscan.io/api',
  local_url: 'http://localhost:9000',
  nftsURL: '//34.199.129.2:9000',
  nft_url: '//34.199.129.2:8080/api',
  cle_url: 'http://34.199.129.2:8080/login',

  // AWS Lambda-DynamoDB-APIgateway
  aws_url: "https://cxk6wy94h3.execute-api.us-east-1.amazonaws.com/dev/nasa",

  apiKeyNYT: '06voWGzUHt0AJNvF2CeIqGezsRBQTZd5',
  nyt_url: "http://34.199.129.2:8080/login/getNytApi",
  apiUrlNYT: "https://api.nytimes.com/svc",
  marvelKey: '5fbd9e22b0c348faa25fd3d07bee8248',
  baseUrl: 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=',
};
