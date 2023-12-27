import React from "react";
import { Button, Card } from "react-bootstrap";
import Rating from "./Rating";

function SingleProduct({ products }) {
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
          <Button variant="danger">Remove From cart</Button>
          <Button disabled={!products.inStock}>
                      {!products.inStock ? "Out of Stock" : "Add to Cart"}
                      {console.log(!products.inStock)}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SingleProduct;
