import {LinkContainer} from "react-router-bootstrap";
import {Nav, NavDropdown} from "react-bootstrap";

export default function NavigationContent(props) {
    return (
        <>
            <Nav className="me-auto">
                <LinkContainer to="/">
                    <Nav.Link onClick={() => props.setExpanded(false)}>Najpopularniejsze</Nav.Link>
                </LinkContainer>
                <NavDropdown title="Kursy średnie">
                    <LinkContainer to="/tab-a">
                        <NavDropdown.Item onClick={() => props.setExpanded(false)}>Tabela A</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/tab-b">
                        <NavDropdown.Item onClick={() => props.setExpanded(false)}>Tabela B</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/tab-all">
                        <NavDropdown.Item onClick={() => props.setExpanded(false)}>Wszystkie</NavDropdown.Item>
                    </LinkContainer>
                </NavDropdown>

                <LinkContainer to="/tab-c">
                    <Nav.Link onClick={() => props.setExpanded(false)}>Kursy zakupu/sprzedaży</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/gold">
                    <Nav.Link onClick={() => props.setExpanded(false)}>Cena złota</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/about">
                    <Nav.Link onClick={() => props.setExpanded(false)}>O stronie</Nav.Link>
                </LinkContainer>
            </Nav>
        </>
    );
}