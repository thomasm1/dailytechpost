import React, { useState } from "react";
import axios from "axios";
import Form from "./Form";
import { POSTS_BASE_URL } from "../config";
import FormGroup from "./FormGroup";
import postsService from "../services/postsService";
import WebLinkForm from "./WebLinkForm";


const PostCreate = () => {
  const [createdPostId, setCreatedPostId] = useState(null);
  const [showWeblinks, setShowWeblinks] = useState(false);

  const citationOptions = [
    "Musing Blockchain",
    "Sociology Now!",
    "A.I.Now.AI",
  ];

  return (
    <div className="post-create-container">
      <Form
        initialValues={{
          title: "",
          post: "",
          cat3: "",
          blogcite: [],
          state: "published",
        }}
        onSubmit={async (values) => {
          try {
            const response = await axios.post(`${POSTS_BASE_URL}/posts`, {
              ...values,
              did: Date.now(),
              date: Date.now(),
              author: "anonymous",
              email: "anonymous@gmail.com",
              categoryId: 12,
              blogcite: values.blogcite.join(', '),
            });
            
            // Assuming the API returns the created post with an ID
            const postId = response.data.id || response.data.pid;
            setCreatedPostId(postId);
            setShowWeblinks(true);
            alert("Post created successfully! Now you can add weblinks.");
          } catch (error) {
            console.error("Error creating post:", error);
            alert("Error creating post. Please check the console for details.");
          }
        }}
      >
        {({ values, handleChange }) => ( // Render prop function
          <>
            <FormGroup
              label="Title" id="title"
              values={values}
              handleChange={handleChange} required />
            <FormGroup
              label="Post"
              id="post" type="textarea"
              values={values}
              handleChange={handleChange} />
            <FormGroup
              label="Category" id="cat3" type="select"
              values={values}
              handleChange={handleChange}
              required>
              <option value="Musing Blockchain">Musing Blockchain</option>
              <option value="Sociology Now!">Sociology Now!</option>
              <option value="A.I.Now.AI">A.I.Now.AI</option>
              <option value="Quantum Data">Quantum Data</option>
              <option value="Cybersecurity">Cybersecurity</option>
              <option value="WebDev Affairs">WebDev Affairs</option>
            </FormGroup>
            <div className="form-group">
              <label>Citation</label>
              {citationOptions.map((option) => (
                <div key={option} className="form-check">
                  <input
                    type="checkbox"
                    id={`blogcite-${option}`}
                    name="blogcite"
                    value={option}
                    className="form-check-input"
                    checked={values.blogcite.includes(option)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        handleChange({
                          target: {
                            name: 'blogcite',
                            value: [...values.blogcite, option],
                          }
                        });
                      } else {
                        handleChange({
                          target: {
                            name: 'blogcite',
                            value: values.blogcite.filter(item => item !== option),
                          }
                        });
                      }
                    }}
                  />
                  <label htmlFor={`blogcite-${option}`} className="form-check-label">
                    {option}
                  </label>
                </div>
              ))}
            </div>
            <FormGroup label="State" id="state" type="select" values={values} handleChange={handleChange}>
              <option value="published">Publish</option>
              <option value="draft">Draft</option>
            </FormGroup>
          </>
        )}
      </Form>

      {showWeblinks && createdPostId && (
        <div className="mt-4">
          <hr />
          <WebLinkForm 
            postId={createdPostId}
            onWeblinkAdd={postsService.addWeblink}
          />
          <div className="mt-3">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => {
                setShowWeblinks(false);
                setCreatedPostId(null);
              }}
            >
              Skip Weblinks & Finish
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostCreate;
