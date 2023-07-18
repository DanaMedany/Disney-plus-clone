import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DetailPage from "./Components/DetailPage";
import Login from "./Components/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/login" Component={Login} />
          <Route path="/detail/:doc" Component={DetailPage} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
