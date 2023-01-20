import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import "./App.css"
import About from "./components/pages/About"

import Home from "./components/pages/Home"
import React from "react"

function App() {
  const client = new QueryClient()

  return (
    <QueryClientProvider client={client}>
      <Router>
        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  )
}

export default App
