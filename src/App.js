import "./App.css";
import DictionarySearch from "./DictionarySearch";
import book from "./book.jpg";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${book})`,
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        maxWidth: "100%",
      }}
    >
      <div className="component">
        <header className="App-header">Dictionary</header>
        <DictionarySearch />

        <footer>
          The app was coded by{" "}
          <a
            href="https://appleeve.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
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
      </div>
    </div>
  );
}

export default App;
