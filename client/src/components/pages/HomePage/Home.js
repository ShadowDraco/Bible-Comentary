import React from "react"

import Welcome from "./Welcome"

import Container from "react-bootstrap/Container"
import LoginForm from "./LoginForm"
import SignupPage from "./SignupForm"

export default function Home() {
  return (
    <Container className="flex flex-column">
      <Welcome />
      <LoginForm />
      <SignupPage />
    </Container>
  )
}
