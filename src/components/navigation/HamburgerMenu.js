import {Container, Navbar, Offcanvas} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import {Outlet} from "react-router-dom";
import NavigationContent from "./NavigationContent";

export default function HamburgerMenu(props) {
    return (
        <>
            <Navbar fixed="top" bg="primary" variant="dark"  expand={false} id={props.id}>
                <Container fluid>
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
                    <Navbar.Toggle aria-controls="offcanvasNavbar"/>
                    <Navbar.Offcanvas placement="start">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Kursy walut NBP</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <NavigationContent/>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
            <Outlet/>
        </>
    );
}