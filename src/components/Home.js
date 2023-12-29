import React from 'react'
import { CartState } from '../context/Context'
import SingleProduct from './SingleProduct';
import './style.css'
import Filters from './Filters';

export default function Home() {

  const {state: { product}, productState: {sort, byStock, byFastDelivery, byRating, searchQuery}} = CartState();

  const transformaProducts = () => {
    let sortedProducts = product;

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) => (
        sort === `lowToHigh` ? a.price - b.price : b.price - a.price
      ));
    }

    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }

    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery)
    }

    if (byRating) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.ratings >= byRating
      )
    }

    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) => (
        prod.name.toLowerCase().includes(searchQuery)
      ));
    }

    return sortedProducts;
  }

  return (
    <div className='home'>
      <Filters />
      <div className='productContainer'>
        {product.map((products) => {
          return <SingleProduct products={ products} key={products.id} />
        })}
      </div>
    </div>
  )
}
