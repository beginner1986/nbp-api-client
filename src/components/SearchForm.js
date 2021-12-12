import {Button, Form} from "react-bootstrap";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

export default function SearchForm(props) {
    let navigate = useNavigate();
    const [value, setValue] = useState("");
    const handleChange = (event) => {
        setValue(event.target.value);
    }
    const handleSubmit = (event) => {
        if(value === "")
            return;

        setValue("");
        navigate(`/search?value=${value}`);
        event.preventDefault();
    }

    return (
        <div>
            <Form className="d-flex" onSubmit={handleSubmit}>
                <Form.Control
                    type="text"
                    placeholder="Szukaj"
                    className="me-2"
                    aria-label="Szukaj"
                    value={value}
                    onChange={handleChange}
                />
                <Button variant="light" type="submit"><FontAwesomeIcon icon={faSearch}/> Szukaj</Button>
            </Form>
        </div>
    )
}
