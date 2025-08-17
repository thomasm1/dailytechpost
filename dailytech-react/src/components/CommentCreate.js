import React from "react"; 
import Form from "./Form";
import FormGroup from "./FormGroup";
import commentsService from "../services/commentsService";

const CommentCreate = ({ postId }) => {

  const handleSubmit = async (values) => {
    try {
             await commentsService.addComment(values, postId); 
      alert("Comment created successfully!");

      } catch (error) {
        console.error("Error creating comment:", error);
        alert("Error creating comment. Please check the console for details.");
      }
  };

  return (
    <div>
      <Form
        initialValues={{
          body: "",
          name: "",
          email: "",
        }}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange }) => ( // <--- Render prop function
          <>
            <FormGroup label="Name" id="name" values={values} handleChange={handleChange} required />
            <FormGroup label="Email" id="email" type="email" values={values} handleChange={handleChange} required />
            <FormGroup label="Comment" id="body" type="textarea" values={values} handleChange={handleChange} required />
          </>
        )}
      </Form>
    </div>
  );
};

export default CommentCreate;
