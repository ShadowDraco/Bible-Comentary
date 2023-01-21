import React from "react"

import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Image from "react-bootstrap/Image"

import bibleLogo from "../assets/bible-logo.gif"

export default function BibleNavbar() {
  return (
    <Navbar bg="secondary" variant="light" expand="sm">
      <Navbar.Brand href="/">
        <Image
          src={bibleLogo}
          alt="bible with flowers, home link"
          width="100"
        />
      </Navbar.Brand>

      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
      </Nav>

      {/*currentUser ? <Navbar.Text className="mx-3"></Navbar.Text> : ""*/}
    </Navbar>
  )
}
