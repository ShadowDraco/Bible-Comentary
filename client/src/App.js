import React from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import "./App.css"
import About from "./components/pages/About"
import Home from "./components/pages/HomePage/Home"
import BibleNavbar from "./components/pages/BibleNavbar"

import Container from "react-bootstrap/esm/Container"

function App() {
  const client = QueryClient()
  return (
    <Container fluid className="App bg-navajo">
      <QueryClientProvider client={client}>
        <Router>
          <BibleNavbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </Container>
  )
}

export default App
