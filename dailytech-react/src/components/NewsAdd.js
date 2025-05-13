import React from "react"; 
import Form from "./Form";
import {   JWT_TOKEN } from "../config";
import FormGroup from "./FormGroup";
import  newsService  from "../services/newsService";

const NewsAdd = ({ categorySelected }) => {
  const categoryId = categorySelected.id; // Get categoryId directly
  const bearerToken = localStorage.getItem("accessToken") || JWT_TOKEN;

  return (
    <div className="post-create-container">
      <Form
        initialValues={{
          title: "",
          url: "",
        }}
        onSubmit={async (values) => {
          try {
            // Get the category object
            const response = newsService.getCategory(categoryId);
            const category = response.data;
            // Ensure category.news exists
            if (!category.news) {
              category.news = [];
            }

            // Assign an unique id to the new news.
            const id =
              Math.max(...category.news.map((news) => news.id), 0) + 1;
            // Add the news object to the category
            category.news.push({ ...values, id });

             newsService.addNews(categoryId, values);


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
              label="Title"
              id="title"
              values={values}
              handleChange={handleChange}
              required
            />
            <FormGroup
              label="URL"
              id="url"
              values={values}
              handleChange={handleChange}
              required
            />
          </>
        )}
      </Form>
    </div>
  );
};

export default NewsAdd;
