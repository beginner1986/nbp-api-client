import {Button, Form, FormControl} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

export default function Search(props) {
    return (
        <div>
            <Form className="d-flex" onSubmit={searchFormSubmit}>
                <FormControl
                    type="search"
                    placeholder="Szukaj"
                    className="me-2"
                    aria-label="Szukaj"
                />
                <LinkContainer to="/search">
                    <Button variant="light">Szukaj</Button>
                </LinkContainer>
            </Form>
        </div>
    )
}

function searchFormSubmit() {

}