import React, { useState } from 'react';
import Main from "./components/Main";
import Login from "./components/Login";


function App() {

  const [page, setPage] = useState("");

  function parsePage() {
    switch (page) {
      case "main":
        return <Main setPage={setPage} />;
      default:
        return <Login setPage={setPage} />;
    }
  }

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div id="datafetch">

      </div>
      {parsePage()}
    </div>
  );
}

export default App;
