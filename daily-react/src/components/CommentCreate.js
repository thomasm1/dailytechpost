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
        }}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange }) => ( // <--- Render prop function
            <FormGroup label="New Comment" id="body" values={values} handleChange={handleChange} />
        )}
      </Form>
    </div>
  );
};

export default CommentCreate;
