export const environment = {
  production: true,
  BASE: "http://34.199.129.2:8089",
  API_URL: "https://34.199.129.2:8089/api",
  //  API_URL: "https://52.70.39.146:8089/api",

  // nasaKey: 'mF6DQ******iJw0',

  // * Doggywood's
  google_url: "http://34.199.129.2:8090/login/getGoogleApi",
  nasa_url: "http://34.199.129.2:8090/login/getNasaApi",

  json_url: "http://localhost:3000/nasa",

  // AWS Lambda-DynamoDB-APIgateway
  aws_url: "https://cxk6wy94h3.execute-api.us-east-1.amazonaws.com/dev/nasa",

  firebase: {  // Per Firebase - apiKey not security concern
    apiKey: 'AIzaSyCEdt9rr--Zgm9eh5DBGHM5C_LS2wUnI8M',
    authDomain: 'ourdailytechdata.firebaseapp.com',
    databaseURL: 'https://ourdailytechdata.firebaseio.com',
    projectId: 'ourdailytechdata',
    storageBucket: 'ourdailytechdata.appspot.com',
    messagingSenderId: '99505496502'
  },

  // apiKeyNYT: "06**d5",

  // * Doggywood's
  nyt_url: "http://34.199.129.2:8090/login/getNytApi",
  apiUrlNYT: "https://api.nytimes.com/svc"
};
