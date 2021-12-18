import {LinkContainer} from "react-router-bootstrap";
import {Nav, NavDropdown} from "react-bootstrap";
import SearchForm from "./SearchForm";

export default function NavigationContent() {
    return (
        <>
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
        </>
    );
}