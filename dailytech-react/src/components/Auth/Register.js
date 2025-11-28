import React, { useState } from "react";
import Form from "../Form";
import FormGroup from "../FormGroup";
import authService from "../../services/authService";
 
const Register = () => { 
  const [error, setError] = useState("");
  


    // Basic validation
    // if (values.Form.password !== values.Form.confirmPassword) {
    //   setError("Passwords do not match!");
    //   return;
    // }
  return (
    <div className="register-container">
    <Form
    initialValues={{
        email:"",
        password:"",
        confirmPassword:""
    }}
    onSubmit={async (values) => {
          try {
            const response = await authService.register({
              ...values, 
              email: values.email,
              password: values.password,
            });

            
            alert(`Registration successful! User  can now log in.`);
        } catch (error) {
            console.error("Error creating post:", error);
            alert("Error creating  - Please check the console for details.");
          }}
        }
            > 
    
        {({ values, handleChange }) => ( // Render prop function
          <>
      <FormGroup   
        label="Email" id="email"  
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
    <FormGroup   
        label="Confirm Password" id="confirmPassword"  
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
        Register
      </button>
    </div>
    </div>
  );
};

export default Register;