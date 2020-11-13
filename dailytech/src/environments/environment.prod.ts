export const environment = {
  production: true,
  API_URL: "https://54.174.82.153:8089",
  //  API_URL: "https://54.174.82.153:8089/api",

  // nasaKey: 'mF6DQ******iJw0',
  google_url: "http://54.174.82.153:8080/login/getGoogleApi",
  nasa_url: "http://54.174.82.153:8080/login/getNasaApi",

  json_url: "http://localhost:3000/nasa",

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
