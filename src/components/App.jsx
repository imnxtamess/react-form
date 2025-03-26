import { useState } from "react";
export default function App() {
  const articles = ["Article1", "Article2", "Article3", "Article4", "Article5"];
  return (
    <>
      <div className="container">
        <ul className="list-group mt-3">
          <h1>Articles List</h1>
          {articles.map((article, index) => (
            <li
              key={`article-${index}`}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {article}
              <span className="badge bg-danger badge-pill">X</span>
            </li>
          ))}
        </ul>
        <form className="mt-5 row">
          <div className="col-10">
            <input
              type="text"
              className="form-control"
              name="newArticle"
              id="newArticle"
              aria-describedby="article_helper"
              placeholder="Add a new Article"
            />
            <small id="article_helper" className="form-text text-muted">
              Type the article title above
            </small>
          </div>
          <button
            type="submit"
            className="btn btn-primary col-2 align-self-start"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
