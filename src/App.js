import './App.css';
import {LinkContainer} from "react-router-bootstrap";
import {Container, Nav, Navbar} from "react-bootstrap";
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
                    <LinkContainer to="/tab-a">
                        <Nav.Link>Tabela A</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/tab-b">
                        <Nav.Link>Tabela B</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/tab-c">
                        <Nav.Link>Tabela C</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/all">
                        <Nav.Link>Wszystkie</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Container>
        </Navbar>
        <Outlet/>
    </div>
  );
}

export default App;
