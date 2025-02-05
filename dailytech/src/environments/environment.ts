export const environment = {
    production: false,
    
  firebase: {
    // apiKey: process.env['FIREBASE_API_KEY'],  
    apiKey: '${{ secrets.FIREBASE_API_KEY }}',
    // apiKey: "",
    authDomain: "ourdailytechdata2.firebaseapp.com",
    databaseURL: "https://ourdailytechdata2-default-rtdb.firebaseio.com",
    projectId: "ourdailytechdata2",
    storageBucket: "ourdailytechdata2.firebasestorage.app",
    messagingSenderId: "53863879417",
    appId: "1:53863879417:web:d50e122439523c3a024828",
    measurementId: "G-Q1HCMEBC5D"
},
// gemini_api_key: process.env['GEMINI_API_KEY'],  
// gemini_api_key: '${{ secrets.GEMINI_API_KEY }}',
 gemini_api_key: '',
  debug_token: '',

//   //crypto
rinkebyUrl: 'https://api-rinkeby.etherscan.io/api',
local_url: 'http://localhost:9000', 
nftsURL: '//3.215.230.246:9000', 
nft_url: '//localhost:8080/api' ,
test_env: '', 
cle_url: 'http://3.215.230.246:8888/api/keys',

  // other
  BASE: "http://3.215.230.246:8888",
  API_URL: "http://3.215.230.246:8888/api", 
  apiKeyNYT: '06voWGzUHt0AJNvF2CeIqGezsRBQTZd5',
  nyt_url: "http://3.215.230.246:8888/api/keys/getNytApi",
  apiUrlNYT: "https://api.nytimes.com/svc",
  marvelKey: '5fbd9e22b0c348faa25fd3d07bee8248',
  google_url: "http://3.215.230.246:8888/api/keys/getGoogleApi",
  nasa_url: "http://3.215.230.246:8888/api/keys/getNasaApi", 
  json_url: "http://localhost:3000/nasa",  
    aws_url: "https://cxk6wy94h3.execute-api.us-east-1.amazonaws.com/dev/nasa", 
    
};
 