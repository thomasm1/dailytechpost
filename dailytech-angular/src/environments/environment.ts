// Public browser configuration only. Provider secrets belong in the REST runtime.
export const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyBwLgCcy_6CDrtu972vGFvEkt59ns_GwRA",
        authDomain: "ourdailytechdata2.firebaseapp.com",
        databaseURL: "https://ourdailytechdata2-default-rtdb.firebaseio.com",
        projectId: "ourdailytechdata2",
        storageBucket: "ourdailytechdata2.firebasestorage.app",
        messagingSenderId: "53863879417",
        appId: "1:53863879417:web:d50e122439523c3a024828",
        measurementId: "G-Q1HCMEBC5D"
    },
    nft_url: 'http://localhost:8082/api',
    API_URL: "http://localhost:8082/api",
    awsUrlDevAll: "https://z3noflrq9b.execute-api.us-east-1.amazonaws.com",
    awsUrlDevId: "https://emfm9dpoeh.execute-api.us-east-1.amazonaws.com"
};
