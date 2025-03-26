import { useState } from "react";
const articlesList = [
  "Article1",
  "Article2",
  "Article3",
  "Article4",
  "Article5",
];
export default function App() {
  const [newArticle, setNewArticle] = useState("");
  const [articles, setArticles] = useState(articlesList);

  function handleFormSubmit(e) {
    e.preventDefault();
    console.log(newArticle);
    if (newArticle.length <= 2) {
      alert("Your title needs to be atleast 3 characters long");
    } else {
      setArticles([...articles, newArticle]);
      console.log(articles);
      setNewArticle("");
    }
  }

  function handleClick(index) {
    console.log(`I'm button n°${index}`);
    const filteredList = articles.filter((article, i) => i !== index);
    setArticles(filteredList);
    console.log(filteredList);
  }

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
              <span
                onClick={() => {
                  handleClick(index);
                }}
                className="badge bg-danger badge-pill"
              >
                X
              </span>
            </li>
          ))}
        </ul>
        <form className="mt-5 row" onSubmit={handleFormSubmit}>
          <div className="col-10">
            <input
              type="text"
              className="form-control"
              name="newArticle"
              id="newArticle"
              aria-describedby="article_helper"
              placeholder="Add a new Article"
              value={newArticle}
              onChange={(e) => {
                setNewArticle(e.target.value);
              }}
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
