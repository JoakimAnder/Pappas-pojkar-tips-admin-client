import React, { useState } from 'react';
import Main from "./components/Main";
import Login from "./components/Login";


function App() {
  const [page, setpage] = useState("login");
  function parsePage() {
    switch (page) {
      case "main":
        return <Main />
      default:
        return <Login />
    }
  }

  return (
    <div className="App">
      <header className="App-header">
      </header>
      {parsePage()}
    </div>
  );
}

export default App;
