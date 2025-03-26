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
      </div>
    </>
  );
}
