import React, { useState } from "react";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between Login and Register

  const toggleAuthMode = () => {
    setIsLogin((prevState) => !prevState);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(0, 0, 0, 0.05)", // Optional background
        padding: "40px 20px",
      }}
    >
      <div
        className="card border-0 blog-card"
        style={{
          width: "100%",
          maxWidth: "700px",
          background: "rgba(255, 255, 255, 0.15)",
          borderRadius: "15px",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          boxShadow: "0 8px 25px rgba(0, 0, 0, 0.2)",
          padding: "20px",
        }}
      >
        <div className="card-body p-4">
          <h2
            className="card-title mb-3"
            style={{
              color: "#212121",
              textAlign: "center",
              fontSize: "2.2em",
              fontWeight: "400",
              marginBottom: "30px",
              textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
            }}
          >
            {isLogin ? "Login" : "Register"}
          </h2>
          {isLogin ? <Login /> : <Register />}
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <button
              onClick={toggleAuthMode}
              style={{
                background: "transparent",
                border: "none",
                color: "#007bff",
                cursor: "pointer",
                textDecoration: "underline",
              }}
            >
              {isLogin
                ? "Don't have an account? Register here."
                : "Already have an account? Login here."}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;