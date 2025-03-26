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
  const [saveArticle, setSaveArticle] = useState("");

  const input = (
    <input
      type="text"
      className="edit_input"
      name="EditArticle"
      id="EditArticle"
      aria-describedby="article_helper"
      value={saveArticle}
      onChange={(e) => setSaveArticle(e.target.value)}
    />
  );

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
    setSaveArticle(articles[index]);
  }

  function handleSaveEdit() {
    const updatedArticles = [...articles];
    updatedArticles[editingArticleIndex] = saveArticle;
    setArticles(updatedArticles);
    setEditingArticleIndex(null);
    setSaveArticle("");
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
              {editingArticleIndex === index ? input : article}
              <div className="d-flex gap-2">
                {editingArticleIndex === index ? (
                  <span
                    className="badge bg-light badge-pill"
                    onClick={handleSaveEdit}
                  >
                    ✔️
                  </span>
                ) : (
                  <span
                    className="badge bg-light badge-pill"
                    onClick={() => handleClickEdit(index)}
                  >
                    ✏️
                  </span>
                )}
                <span
                  onClick={() => {
                    handleClickDelete(index);
                  }}
                  className="badge bg-light badge-pill"
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
