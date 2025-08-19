import React from "react"; 
import Form from "./Form";
import {   JWT_TOKEN } from "../config";
import FormGroup from "./FormGroup";
import  newsService  from "../services/newsService";

const CategoryCreate = () => { 
  const bearerToken = localStorage.getItem("accessToken") || JWT_TOKEN;

  return (
    <div className="post-create-container">
      <Form
        initialValues={{
          name: "", 
          description: "",
          news: [
            {
                "id": 42,
                "title": "Tech Giant Merges",
                "url": "https://news3.com"
            }
          ]
        }}
        onSubmit={async (values) => {
          try { 
             await newsService.createCategory(values);
            alert("Research URL added successfully!");
          } catch (error) {
            console.error("Error adding URL:", error);
            alert("Error adding URL. Please check the console for details.");
          }
        }}
      >
        {({ values, handleChange }) => (
          <>
            <FormGroup
              label="name"
              id="name"
              values={values}
              handleChange={handleChange}
              required
            />
            
            <FormGroup
              label="description"
              id="description"
              type="textarea" 
              values={values}
              handleChange={handleChange} 
            />
            
            <FormGroup
              label="news"
              id="news"
              values={values}
              handleChange={handleChange} 
            />

            <FormGroup
              label="url"
              id="url"
              values={values}
              handleChange={handleChange} 
            />
            
            <FormGroup
              label="title"
              id="title"
              values={values}
              handleChange={handleChange} 
            />
          </>
        )}
      </Form>
    </div>
  );
};

export default CategoryCreate;
