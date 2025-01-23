export const environment = {
  production: true, 
  firebase: {
    apiKey: '${{ secrets.FIREBASE_API_KEY }}',
    //  apiKey: '',
    // apiKey: "",
    authDomain: "ourdailytechdata2.firebaseapp.com",
    databaseURL: "https://ourdailytechdata2-default-rtdb.firebaseio.com",
    projectId: "ourdailytechdata2",
    storageBucket: "ourdailytechdata2.firebasestorage.app",
    messagingSenderId: "53863879417",
    appId: "1:53863879417:web:d50e122439523c3a024828",
    measurementId: "G-Q1HCMEBC5D"
},
  gemini_api_key: '',
  // gemini_api_key: '${{ secrets.GEMINI_API_KEY }}',
  debug_token: '',

  BASE: "http://3.215.230.246:8080",
  API_URL: "http://3.215.230.246:8080/api",
  // nasaKey: 'mF6DQ******iJw0',  
  google_url: "http://3.215.230.246:8080/login/getGoogleApi",
  nasa_url: "http://3.215.230.246:8080/login/getNasaApi",
  json_url: "http://localhost:3000/nasa",

  //crypto
  rinkebyUrl: 'https://api-rinkeby.etherscan.io/api',
  local_url: 'http://localhost:9000',
  nftsURL: '//3.215.230.246:9000',
  nft_url: '//3.215.230.246:8080/api',
  cle_url: 'http://3.215.230.246:8080/login',

  // AWS Lambda-DynamoDB-APIgateway
  aws_url: "https://cxk6wy94h3.execute-api.us-east-1.amazonaws.com/dev/nasa",

  apiKeyNYT: '06voWGzUHt0AJNvF2CeIqGezsRBQTZd5',
  nyt_url: "http://3.215.230.246:8080/login/getNytApi",
  apiUrlNYT: "https://api.nytimes.com/svc",
  marvelKey: '5fbd9e22b0c348faa25fd3d07bee8248',
  baseUrl: 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=',
};
