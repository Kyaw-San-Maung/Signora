import React from 'react'
import { CartState } from '../context/Context'
import SingleProduct from './SingleProduct';
import './style.css'
import Filters from './Filters';

export default function Home() {

  const {state: {cart, product}} = CartState();

  console.log(product);

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
