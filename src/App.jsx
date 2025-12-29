import React from "react";
import { Navbar, Container, Nav, Card, Row, Col } from "react-bootstrap";

function App() {
  return (
    <>
      <div className="App">

        {/* NAVBAR */}
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#">Wiki</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#">Accueil</Nav.Link>
              <Nav.Link href="#">À propos</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        
        <Container className="text-center mt-4">
          <h1>Best footballeur U-20</h1>
        </Container>

        {/* Carte */}
        <Container className="mt-4">
          <Row>
            <Col md={4}>
              <Card>
                <Card.Img
                  variant="top"
                  src="/card1.jpg"
                  alt="Image carte 1"
                />
                <Card.Body>
                  <Card.Title>Carte 1</Card.Title>
                  <Card.Text>
                    <ul>
                      <li>Nom: sae</li>
                      <li>Prénom: itoshi</li>
                      <li>Age: 20</li>
                      <li>origine: japon</li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card>
                <Card.Img
                  variant="top"
                  src="/card2.jpg"
                  alt="Image carte 2"
                />
                <Card.Body>
                  <Card.Title>Carte 2</Card.Title>
                  <Card.Text> <ul>
                    <li>Nom: Hugo</li>
                    <li>Prénom: marc</li>
                    <li>Age: 19</li>
                    <li>origine: france</li>
                  </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card>
                <Card.Img
                  variant="top"
                  src="/card3.jpg"
                  alt="Image carte 3"
                />
                <Card.Body>
                  <Card.Title>Carte 3</Card.Title>
                  <Card.Text> <ul>
                    <li>Nom: Kaiser</li>
                    <li>Prénom: Michael</li>
                    <li>Age: 20</li>
                    <li>origine: allmend</li>
                  </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

      </div>
    </>
  );
}

export default App;
