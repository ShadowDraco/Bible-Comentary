import React, { useContext } from "react"

import Container from "react-bootstrap/Container"
import CheckServerHealthButton from "../utility/CheckServerHealthButton"

export default function Home() {
  return (
    <Container>
      <h1> Welcome to Bible App</h1>
      <CheckServerHealthButton />
    </Container>
  )
}
