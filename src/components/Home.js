import React from "react";
import { CartState } from "../context/Context";
import SingleProduct from "./SingleProduct";
import "./style.css";
import Filters from "./Filters";

export default function Home() {
  const {
    state: { product },
    productState: { byStock, byFasDelivery, sort, byRating, searchQuery },
  } = CartState();

  const transformProducts = () => {
    let sortedProducts = product;

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort == "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }

    if (byFasDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
    }

    if (byRating) {
      sortedProducts = sortedProducts.filter(
        (products) => products.rating >= byRating
      );
    }

    if (searchQuery) {
      sortedProducts = sortedProducts.filter((products) =>
        products.name.toLowerCase().includes(searchQuery)
      );
    }

    return sortedProducts;
  };

  return (
    <div className="home">
      <Filters />
      <div className="productContainer">
        {transformProducts().map((products) => {
          return <SingleProduct products={products} key={products.id} />;
        })}
      </div>
    </div>
  );
}
