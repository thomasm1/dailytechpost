export const environment = {
  production: true,
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
  nft_url: '//34.199.129.2:8080/api' ,
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
  },  
    apiKeyNYT: '06voWGzUHt0AJNvF2CeIqGezsRBQTZd5',
  nyt_url: "http://34.199.129.2:8080/login/getNytApi",
  apiUrlNYT: "https://api.nytimes.com/svc",
  marvelKey: '5fbd9e22b0c348faa25fd3d07bee8248',
  baseUrl: 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=',
};
 