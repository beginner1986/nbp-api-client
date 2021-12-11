import {Button, Form} from "react-bootstrap";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function SearchForm(props) {
    let navigate = useNavigate();
    const [value, setValue] = useState("");
    const handleChange = (event) => {
        setValue(event.target.value);
    }
    const handleSubmit = (event) => {
        console.log("Value: " + value);
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
                <Button variant="light" type="submit">Szukaj</Button>
            </Form>
        </div>
    )
}
