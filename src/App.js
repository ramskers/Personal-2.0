import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Blog from "./pages/Blog/Blog";
import BlogDesc from "./pages/Blog/BlogDesc";
import Project from "./pages/Projects/Project";
import ProjectDesc from "./pages/Projects/ProjectDesc";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/:slug" element={<ProjectDesc />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/:slug" element={<BlogDesc />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
