import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Bookmark from "./pages/bookmark";
import Home from "./pages/home";
import Profile from "./pages/profil";

function App() {
  return (
    <>
      <Router>
        <Routes >
          <Route exact path="/" element={<Home />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/bookmark" element={<Bookmark />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
