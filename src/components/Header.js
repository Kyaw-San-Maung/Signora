import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  Badge,
  Container,
  Dropdown,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";
import { Link } from "react-router-dom";

export default function () {
  return (
    <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
      <Container>
        <Navbar.Brand>
          <Link to="/">Signora Austetic</Link>
        </Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl
            style={{ width: 500 }}
            placeholder="search product.."
            className="m-auto"
          />
        </Navbar.Text>
        <Nav>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              <FontAwesomeIcon icon={faCartShopping} size="xl" />
              <Badge bg="green">{10}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minWidth: 370 }}>
              <span style={{ padding: 10 }}>Cart is Empty</span>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}
