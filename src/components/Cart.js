import React, { useEffect, useState } from "react";
import { CartState } from "../context/Context";
import {
  Button,
  Col,
  Form,
  Image,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import Rating from "./Rating";
import { AiFillDelete } from "react-icons/ai";

export default function Cart() {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);

  return (
    <div className="home">
      <div className="productContainer">
        <ListGroup>
          {cart.map((products) => (
            <ListGroupItem key={products.id}>
              <Row>
                <Col md={2}>
                  <Image
                    src={products.image}
                    alt={products.name}
                    fluid
                    rounded
                  />
                </Col>
                <Col md={2}>
                  <span>{products.name}</span>
                </Col>

                <Col md={2}>
                  <span>$ {products.price}</span>
                </Col>

                <Col md={2}>
                  <Rating rating={products.rating} />
                </Col>

                <Col md={2}>
                  <Form.Control
                    as="select"
                    value={products.qty}
                    onChange={(e) =>
                      dispatch({
                        type: "CHANGE_CART_QTY",
                        payload: { id: products.id, qty: e.target.value },
                      })
                    }
                  >
                    {[...Array(products.inStock).keys()].map((x) => (
                      <option key={x + 1}> {x + 1}</option>
                    ))}
                  </Form.Control>
                </Col>

                <Col md={2}>
                  <Button
                    type="button"
                    variant="light"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: products,
                      })
                    }
                  >
                    <AiFillDelete fontSize="20px" />
                  </Button>
                </Col>
              </Row>
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
      <div className="filters summary">
        <span className="title">Subtotal ({cart.length}) items</span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>Total $ {total}</span>
        <Button type="button" disabled={cart.length == 0}>
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
}
