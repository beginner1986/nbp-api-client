import './App.css';
import {LinkContainer} from "react-router-bootstrap";
import {Button, Container, Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Outlet} from "react-router-dom";

function App() {

  return (
    <div className="header">
        <Navbar fixed="top" bg="primary" variant="dark">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>
                        <img
                            src="/favicon.ico"
                            width="50"
                            height="50"
                            alt="React logo"
                        />
                    </Navbar.Brand>
                </LinkContainer>
                <Nav className="me-auto">
                    <LinkContainer to="/">
                        <Nav.Link>Najpopularniejsze</Nav.Link>
                    </LinkContainer>
                    <NavDropdown title="Kursy średnie">
                        <LinkContainer to="/tab-a">
                            <NavDropdown.Item>Tabela A</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/tab-b">
                            <NavDropdown.Item>Tabela B</NavDropdown.Item>
                        </LinkContainer>
                    </NavDropdown>

                    <LinkContainer to="/tab-c">
                        <Nav.Link>Kursy zakupu/sprzedaży</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/gold">
                        <Nav.Link>Cena złota</Nav.Link>
                    </LinkContainer>
                </Nav>
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Szukaj"
                        className="me-2"
                        aria-label="Szukaj"
                    />
                    <Button variant="light">Szukaj</Button>
                </Form>
            </Container>
        </Navbar>
        <Outlet/>
    </div>
  );
}

export default App;
