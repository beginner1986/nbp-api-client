import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import SearchForm from "./SearchForm";
import {Outlet} from "react-router-dom";

export default function NavigationBar() {
    return (
        <>
            <Navbar fixed="top" bg="primary" variant="dark" id="navbar">
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
                    <SearchForm/>
                </Container>
            </Navbar>
            <Outlet/>
        </>
    );
}