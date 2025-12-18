import React, { useState } from "react";
import Form from "./Form";
import FormGroup from "./FormGroup";
import postsService from "../services/postsService";
import WebLinkForm from "./WebLinkForm";


const PostCreate = () => {
  const [createdPostId, setCreatedPostId] = useState(null);
  const [showWeblinks, setShowWeblinks] = useState(false);

  const newsOptions = [
    "Musing Blockchain",
    "Sociology Now!",
    "A.I.Now",
    "Quantum Data",
    "Web Dev Affairs"
  ];

  return (
    <div className="post-create-container">
      <Form
        initialValues={{
          title: "",
          post: "",
          cat3: "",
          blogcite: "",
          state: "published",
        }}
        onSubmit={async (values) => {
          try {
            const response = await postsService.createPost({
              ...values,
              did: Date.now(),
              date: Date.now(),
              author: "anonymous",
              email: "anonymous@gmail.com",
              categoryId: 12,
              blogcite: values.blogcite,
            });

            const postId = response.id;
            setCreatedPostId(postId);
            console.log(`Post ${postId} created successfully! Now you can add citations for your post.`);
       
            setShowWeblinks(true);
          } catch (error) {
            console.error("Error creating post:", error);
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
              rows={20}
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
              <option value="A.I.Now">A.I.Now</option>
              <option value="Quantum Data">Quantum Data</option>
              <option value="Web Dev Affairs">Web Dev Affairs</option>
            </FormGroup>
          
            <div className="form-group">
              <label>News Articles</label>
              {newsOptions.map((option) => (
                <div key={option} className="form-check">
                  <input
                    type="checkbox"
                    id={`blogcite-${option}`}
                    name="blogcite"
                    value={option}
                    className="form-check-input"
                    checked={values.blogcite.includes(option)}
                    onChange={(e) => {
                      const currentNews = values.blogcite ? values.blogcite.split(', ').filter(Boolean) : [];

                      if (e.target.checked) {
                        const newNews = [...currentNews, option];
                        handleChange({
                          target: {
                            name: 'blogcite',
                            value: newNews.join(', '),
                          }
                        });
                      } else {
                        const newNews = currentNews.filter(item => item !== option);
                        handleChange({
                          target: {
                            name: 'blogcite',
                            value: newNews.join(', '),
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
            {/* <FormGroup label="State" id="state" type="select" values={values} handleChange={handleChange}>
              <option value="published">Publish</option>
              <option value="draft">Draft</option>
            </FormGroup> */}
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
