import * as React from 'react'
import { Navbar, Nav, Container, Image } from 'react-bootstrap'

import IconImage from './img/icon2.png'

export const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/yugioh-search">
            <Image src={IconImage} height="30" className="d-inline-block align-top"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/yugioh-search/#/02">02環境</Nav.Link>
              <Nav.Link href="/yugioh-search/#/05">05環境</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
