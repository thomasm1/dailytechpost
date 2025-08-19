import React from "react";
import NewsAdd from "./NewsAdd";

const NewsList = ({ newsProp }) => {
  if (!newsProp || !Array.isArray(newsProp)) {
    return <div>No news available.</div>;
  }
  const newsProbe = newsProp.map((category) => (
    <div key={category.id} className="post-item-container">
      <div className="post-header">
        <h6 className="post-title">{category.name}</h6>
      </div>

      <div className="post-body">
        <ul>
        <li className="news-item-li"> {category.description}</li>
          {Array.isArray(category.news) &&
            category.news.map((item) => (
              <li key={item.id} className="news-item-li">
                {/* <span><small>{item.id}</small></span> */}
                <br />
                <span> {item.title}</span><br />
                <span> </span>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="post-content"
                >
                   {item.url}
                </a>
              </li>
            ))}
        </ul>
      </div>
      <div className="post-footer">
        Add a new research URL
        <NewsAdd categorySelected={category} />
      </div>
    </div>
  ))
  return (
    <>
      <div className="news-list-container">
        {newsProbe}
      </div>
    </>
  );
};

export default NewsList;
