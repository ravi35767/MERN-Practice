import React from "react";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import AppRouter from "./config/router";

function App() {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
