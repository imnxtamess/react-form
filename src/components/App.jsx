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
  const [editingArticleIndex, setEditingArticleIndex] = useState(null);

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

  function handleClickDelete(index) {
    console.log(`I'm button n°${index}`);
    const filteredList = articles.filter((article, i) => i !== index);
    setArticles(filteredList);
    console.log(filteredList);
  }

  function handleClickEdit(index) {
    console.log(`I'm edit button n°${index}`);
    setEditingArticleIndex(index);
    console.log(editingArticleIndex);
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
              <div className="d-flex gap-2">
                <span
                  onClick={() => {
                    handleClickEdit(index);
                  }}
                  className="badge bg-primary badge-pill"
                >
                  ✏️
                </span>
                <span
                  onClick={() => {
                    handleClickDelete(index);
                  }}
                  className="badge bg-dark badge-pill"
                >
                  ❌
                </span>
              </div>
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
