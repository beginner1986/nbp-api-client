import {CloseButton, Container, Navbar, Offcanvas} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import {Outlet} from "react-router-dom";
import NavigationContent from "./NavigationContent";
import SearchForm from "./SearchForm";
import {useState} from "react";

export default function HamburgerMenu(props) {
    const [expanded, setExpanded] = useState(false);

    return (
        <>
            <Navbar
                fixed="top"
                bg="primary"
                variant="dark"
                collapseOnSelect={true}
                expand={false}
                expanded={expanded}
                id={props.id}
                className="animate__animated animate__bounce"
            >
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
                    <div className="text-center text-white">KURSY WALUT NBP</div>
                    <Navbar.Toggle
                        onClick={() => setExpanded(expanded ? false : "expanded")}
                        className="animate__animated animate__rotateIn"
                        aria-controls="offcanvasNavbar"
                    />
                    <Navbar.Offcanvas placement="start">
                        <Offcanvas.Header>
                            <Offcanvas.Title>Kursy walut NBP</Offcanvas.Title>
                            <CloseButton onClick={() => setExpanded(false)}/>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <NavigationContent setExpanded={setExpanded}/>
                            <SearchForm setExpanded={setExpanded}/>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
            <Outlet/>
        </>
    );
}