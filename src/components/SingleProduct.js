import React from "react";
import { Button, Card } from "react-bootstrap";
import Rating from "./Rating";
import { CartState } from "../context/Context";

function SingleProduct({ products }) {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div className="products">
      <Card>
        <Card.Img variant="top" src={products.image} />
        <Card.Body>
          <Card.Title>{products.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span> $ {products.price.split(".")[0]}</span>
            {products.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div> 4 Days Delivery</div>
            )}
            <Rating rating={products.rating} />
          </Card.Subtitle>
          {cart.some((p) => p.id === products.id) ? (
            <Button
              onClick={() => {
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: products,
                });
              }}
              variant="danger"
            >
              Remove From cart
            </Button>
          ) : (
            <Button
              onClick={() => {
                dispatch({
                  type: "ADD_TO_CART",
                  payload: products,
                });
              }}
              disabled={!products.inStock}
            >
              {!products.inStock ? "Out of Stock" : "Add to Cart"}
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}

export default SingleProduct;
