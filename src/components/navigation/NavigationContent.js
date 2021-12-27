import {LinkContainer} from "react-router-bootstrap";
import {Nav, NavDropdown} from "react-bootstrap";

export default function NavigationContent(props) {
    return (
        <>
            <Nav className="me-auto">
                <LinkContainer to="/">
                    <Nav.Link onClick={props.collapseMenu}>Najpopularniejsze</Nav.Link>
                </LinkContainer>
                <NavDropdown title="Kursy średnie">
                    <LinkContainer to="/tab-a">
                        <NavDropdown.Item onClick={props.collapseMenu}>Tabela A</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/tab-b">
                        <NavDropdown.Item onClick={props.collapseMenu}>Tabela B</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/tab-all">
                        <NavDropdown.Item onClick={props.collapseMenu}>Wszystkie</NavDropdown.Item>
                    </LinkContainer>
                </NavDropdown>

                <LinkContainer to="/tab-c">
                    <Nav.Link onClick={props.collapseMenu}>Kursy zakupu/sprzedaży</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/gold">
                    <Nav.Link onClick={props.collapseMenu}>Cena złota</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/about">
                    <Nav.Link onClick={props.collapseMenu}>O stronie</Nav.Link>
                </LinkContainer>
            </Nav>
        </>
    );
}