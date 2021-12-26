import {Container, Navbar} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import {Outlet} from "react-router-dom";
import NavigationContent from "./NavigationContent";
import SearchForm from "./SearchForm";

export default function NavigationBar(props) {
    return (
        <>
            <Navbar
                fixed="top"
                bg="primary"
                variant="dark"
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
                    <NavigationContent/>
                    <SearchForm/>
                </Container>
            </Navbar>
            <Outlet/>
        </>
    );
}