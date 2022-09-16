import "./App.css";
import DictionarySearch from "./DictionarySearch";

import book from "./books.png";

function App() {
  return (
    <div className="App">
      <div className="component">
        <header className="App-header">Dictionary</header>
        <DictionarySearch />
      </div>
      <footer>
        The app was coded by{" "}
        <a href="https://appleeve.netlify.app" target="_blank" rel="noreferrer">
          AppleEve{" "}
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/AppleEve/Dictionary_React_App"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced.
        </a>
      </footer>
      <img className="books d-none d-lg-block" src={book} alt="books" />
    </div>
  );
}

export default App;
