import React from "react";
import { Button, FormCheck } from "react-bootstrap";

export default function Filters() {
  return (
    <div className="filters">
      <span className="title">Filter Products</span>
      <span>
        <FormCheck
          inline
          label="Ascending"
          name="group1"
          type="radio"
          id={`inline-1`}
        />
          </span>
          <span>
        <FormCheck
          inline
          label="Descending"
          name="group1"
          type="radio"
          id={`inline-2`}
        />
          </span>
          <span>
        <FormCheck
          inline
          label="Include Out of Stock"
          name="group1"
          type="radio"
          id={`inline-3`}
        />
          </span>
          <span>
        <FormCheck
          inline
          label="Fast Delivery only"
          name="group1"
          type="checkbox"
          id={`inline-4`}
        />
          </span>
          {/* <span>
              <label style={{ paddingRight: 10 }}>Rating:</label>
              <Rating rating = {byRating} />
          </span>*/}
          <Button variant="light">Clear Filters</Button>
    </div> 
  );
}
