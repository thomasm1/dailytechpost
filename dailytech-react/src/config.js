// STRINGS
export const API_BASE_URL =   "http://3.217.82.219:8082/api"; // "http://52.3.58.191:8082/api"; // "http://localhost:8082/api";       // 
export const CATEGORY_BASE_URL =  "http://3.217.82.219:8082/api"; // "http://localhost:8082/api"; //  "http://comments-clusterip-srv:4001"; //
export const POSTS_BASE_URL =     "http://3.217.82.219:8082/api"; // "http://localhost:8082/api";       // "http://posts-clusterip-srv:4000"; //
export const AUTH_BASE_URL =     "http://3.217.82.219:8082/api"; // "http://localhost:8082/api";       // "http://auth-clusterip-srv:4002"; //
export const JWT_TOKEN_FALLBACK =  "eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJiYmJAZ21haWwuY29tIiwiaWF0IjoxNzQyOTMxNjI0LCJleHAiOjE3NDM1MzY0MjR9.rCjYbXnoclln2EznsMSMx4burPSwMWzsx9LuzF4e19786pGAJ16WKU7rxYOf2cJq";
export const JWT_TOKEN = process.env.REACT_APP_JWT_TOKEN || JWT_TOKEN_FALLBACK;
export const awsUrlDevAll =    "https://z3noflrq9b.execute-api.us-east-1.amazonaws.com";
export const awsUrlDevId =    "https://emfm9dpoeh.execute-api.us-east-1.amazonaws.com";

// OBJECTS
 export const styles = {
    small: {
      color: "#48a0ff",
      fontSize: "0.8em",
    },
    li: {   
      color: "blue",
      display:"inline-block"
    },
    h1: {
        color: "darkblue",
        fontFamily: "Monoton Sans-serif",
        fontSize: "1.2em"
    },
    h6: {
        color: "darkblue",
        fontFamily: "Monoton Sans-serif",
        fontSize: "1.2em"
    },
    ul: {
      listStyleType: "none",
      padding: 0, 
      margin: 0,
    },
    blogCard: {
      transition: "all 0.3s ease" 
    },
    blogCardHover: {
      transform: "translateY(-5px)",
      boxShadow: "0 15px 40px rgba(0,0,0,0.3)",
      background: "rgba(255, 255, 255, 0.2)"
    }
    
  };
  
export const CITATION_OPTIONS = [
    "Musing Blockchain",
    "Sociology Now!",
    "A.I.Now", 
    "Quantum Data", 
    "Web Dev Affairs",
  ];

  
 