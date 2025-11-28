import React, { useState } from "react";
import Form from "../Form";
import FormGroup from "../FormGroup";
import authService from "../../services/authService";

const Login = () => { 
  const [error, setError] = useState("");
  


    // Basic validation
    // if (values.Form.password !== values.Form.confirmPassword) {
    //   setError("Passwords do not match!");
    //   return;
    // }
  return (
    <div className="login-container">
    <Form
    initialValues={{
        usernameOrEmail:"",
        password:"" 
    }}
    onSubmit={async (values) => {
          try {
            const response = await authService.login({
              ...values, 
              usernameOrEmail: values.usernameOrEmail,
              password: values.password,
            });

            alert(`Login successful!  User can now access protected resources.`);
        } catch (error) {
            console.error("Error creating post:", error);
            alert("Error - Please check the console for details.");
          }}
        }
            > 
    
        {({ values, handleChange }) => ( // Render prop function
          <>
      <FormGroup   
        label="Username or Email" id="usernameOrEmail"  
        values={values}
        handleChange={handleChange}  
        // style={{ 
        //     display: "block", 
        //     marginBottom: "5px" ,
        //     width: "100%",
        //     padding: "10px",
        //     border: "1px solid #ccc",
        //     borderRadius: "5px",
        //   }}
          required
        /> 
    <FormGroup   
        label="Password" id="password"  
        values={values}
        handleChange={handleChange}  
        // style={{ 
        //     display: "block", 
        //     marginBottom: "5px" ,
        //     width: "100%",
        //     padding: "10px",
        //     border: "1px solid #ccc",
        //     borderRadius: "5px",
        //   }}
          required
        />  

      {/* {error && (
        <div style={{ color: "red", marginBottom: "15px" }}>{error}</div>
      )} */}

      </>
        )}
    </Form>
    <div className="mt-4">
        
      <button
        type="button"
              className="btn btn-secondary"
        
      >
        Login
      </button>
    </div>
    </div>
  );
};

export default Login;