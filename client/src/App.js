import React from "react"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import "./App.css"
import About from "./components/pages/About"
import Home from "./components/pages/HomePage/Home"
import BibleNavbar from "./components/pages/BibleNavbar"

import Container from "react-bootstrap/esm/Container"

function App() {
  return (
    <Container fluid className="App bg-navajo">
      <Router>
        <BibleNavbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </Container>
  )
}

export default App
