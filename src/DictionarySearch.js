import axios from "axios";
import React, { useState } from "react";
import "./DictionarySearch.css";
import Results from "./Results";

export default function DictionarySearch() {
  const [keyword, setKeyword] = useState(null);
  const [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="DictionarySearch">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="ex. apple, book, codding..."
          onChange={handleChange}
        />
      </form>
      <Results results={results} />
    </div>
  );
}
